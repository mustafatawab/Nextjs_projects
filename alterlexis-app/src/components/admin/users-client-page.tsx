"use client";

import { useState } from "react";
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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getUsers } from "@/actions/adminActions";
import { useToast } from "@/hooks/use-toast";

interface AdminUsersClientPageProps {
  dictionary: Dictionary;
  users: User[];
  lastVisibleId?: string;
}

const PAGE_SIZE = 10;

export default function AdminUsersClientPage({
  users: initialUsers,
  lastVisibleId: initialLastVisible,
}: AdminUsersClientPageProps) {
  const { toast } = useToast();

  const [pages, setPages] = useState<User[][]>([initialUsers]); // store users by page
  const [cursors, setCursors] = useState<(string | undefined)[]>([
    undefined,
    initialLastVisible,
  ]); // store cursors
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const currentUsers = pages[page - 1] || [];

  const filteredUsers = currentUsers.filter(
    (user) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.displayName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadNextPage = async () => {
    if (loading) return;
    setLoading(true);

    const cursor = cursors[page];
    const { users: newUsers, lastVisibleId } = await getUsers(cursor);

    setPages((prev) => [...prev, newUsers]);
    setCursors((prev) => [...prev, lastVisibleId]);
    setPage((prev) => prev + 1);

    setLoading(false);
  };

  const loadPreviousPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      {/* Search Input */}
      <div className="flex mb-4">
        <Input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Table */}
      <div className="bg-card-blue border border-gold-accent/20 rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">S.No</TableHead>
              <TableHead className="text-left">Name</TableHead>
              <TableHead className="text-left">Email</TableHead>
              <TableHead className="text-left">Created At</TableHead>
              <TableHead className="text-left">Premium Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredUsers.map((user, i) => (
              <TableRow key={user.uid} className="border-b border-gold-accent/10">
                <TableCell>{(page - 1) * PAGE_SIZE + (i + 1)}</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-end items-center mt-6 space-x-4">
        <Button onClick={loadPreviousPage} disabled={page === 1} variant="outline">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <span className="text-sm text-muted-text">Page {page}</span>

        <Button
          onClick={loadNextPage}
          disabled={!cursors[page] || loading}
          variant="outline"
        >
          {loading ? "Loading..." : "Next"}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
