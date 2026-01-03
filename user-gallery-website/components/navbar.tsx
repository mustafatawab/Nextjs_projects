"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Camera, Upload, LogOut, User } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Signed out successfully");
      router.push("/");
    }
  };

  const userMetadata = user?.user_metadata;
  const username =
    userMetadata?.username || user?.email?.split("@")[0] || "user";
  const fullName = userMetadata?.full_name || "Gallery Member";
  const avatarUrl = userMetadata?.avatar_url;

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Camera className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Gallery</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link href="/upload">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full hover:bg-gray-100"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={avatarUrl || "/placeholder.svg"}
                          alt={username}
                        />
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {username.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium">{fullName}</p>
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                          @{username}
                        </p>
                      </div>
                    </div>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/profile"
                        className="flex items-center cursor-pointer"
                      >
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={handleSignOut}
                      className="cursor-pointer"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/auth/login">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
