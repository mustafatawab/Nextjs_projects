"use client";

import { useState, useEffect } from "react";
import { Dictionary, User } from "@/types/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  Shield,
  ShieldOff,
  Star,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  updatePremiumStatus,
  setAdminClaim,
  getUsers,
} from "@/actions/adminActions";
import { useToast } from "@/hooks/use-toast";

interface AdminUsersClientPageProps {
  dictionary: Dictionary;
  users: User[];
}

export default function AdminUsersClientPage({
  users: initialUsers,
}: AdminUsersClientPageProps) {
  const { toast } = useToast();
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [lastVisible, setLastVisible] = useState<string | undefined>(undefined);
  const [page, setPage] = useState(1);
  const [history, setHistory] = useState<(string | undefined)[]>([]);

  console.log(initialUsers);

  // Note: Client-side search for simplicity. For very large user bases, this should be a server-side search.
  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.displayName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadNextPage = async () => {
    if (!lastVisible) return;

    setHistory((prev) => [...prev, lastVisible]);

    const { users: newUsers, lastVisibleId } = await getUsers(lastVisible);
    setUsers(newUsers);
    setLastVisible(lastVisibleId);
    setPage((prev) => prev + 1);
  };

  const loadPreviousPage = async () => {
    if (history.length == 0) return;

    // Get the cursor from history
    const prevCursor = history[history.length - 1];
    const newHistory = [...history];
    newHistory.pop();

    const { users: newUsers, lastVisibleId } = await getUsers(prevCursor);
    setUsers(newUsers);
    setLastVisible(lastVisibleId);
    setHistory(newHistory);
    setPage((prev) => prev - 1);
  };

  // Previous page would require more complex state management (storing previous lastVisible ids)
  // For now, we only implement "Load More" functionality.

  useEffect(() => {
    // Set initial lastVisible on load
    const fetchInitialLastVisible = async () => {
      const { lastVisibleId } = await getUsers();
      setLastVisible(lastVisibleId);
    };
    fetchInitialLastVisible();
  });

  // ... (handleUpdatePremium and handleToggleAdmin)

  return (
    <div className="container mx-auto px-6 py-12">
      {/* ... (Header and search input) */}

      <div className="bg-card-blue border border-gold-accent/20 rounded-lg overflow-hidden">
        <Table>
          {/* ... (Table Header) */}
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">UID</TableHead>
              <TableHead className="text-left">Name</TableHead>
              <TableHead className="text-left">Email</TableHead>
              <TableHead className="text-left">Created At</TableHead>
              <TableHead className="text-left">Premium Status</TableHead>
              <TableHead className="text-left">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow
                key={user.uid}
                className="border-b border-gold-accent/10"
              >
                <TableCell>{user.uid}</TableCell>
                <TableCell>{user.displayName ?? "N/A"}</TableCell>
                <TableCell>{user.email ?? "N/A"}</TableCell>
                <TableCell>
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "N/A"}
                </TableCell>
                <TableCell>
                  {user.premium_expires_at &&
                  user.premium_expires_at > Date.now()
                    ? "Active"
                    : "Inactive"}
                </TableCell>
                <TableCell>
                  <button className="px-2 py-1 text-sm bg-gold-accent text-white rounded-md hover:bg-gold-accent/80">
                    View
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-end items-center mt-6 space-x-4">
        <Button
          onClick={loadPreviousPage}
          disabled={page === 1}
          variant="outline"
        >
          <ChevronLeft className="h-4 w-4" />
          Précédent
        </Button>

        <span className="text-sm text-muted-text">Page {page}</span>
        <Button
          onClick={loadNextPage}
          disabled={!lastVisible}
          variant="outline"
        >
          <ChevronRight className="h-4 w-4" />
          Suivant
        </Button>
      </div>
    </div>
  );
}
