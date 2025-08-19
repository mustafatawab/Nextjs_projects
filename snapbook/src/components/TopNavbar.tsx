"use client";

import React, { use } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell, User, Settings, LogOut, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
const TopNavbar = () => {
  const router = useRouter();
  return (
    <nav className="w-full h-16 bg-transparent dark:bg-black  shadow-xs flex items-center justify-between px-4  lg:px-8">
      {/* Middle: Search bar */}
      <div className="flex w-full md:ml-0 ml-[45px] justify-center items-center ">
        <Input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md rounded-full p-5   bg-white"
        />
      </div>

      {/* Right: Icons + Avatar */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
 {/* Notifications */}
        <div>
          <ModeToggle />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full relative bg-white dark:bg-black"
            >
              <Bell className="w-5! h-5!" />
              <div className="rounded-full h-1 w-1 bg-red-900 absolute bottom-2 right-2"></div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 bg-white dark:bg-gray-950">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              className=""
            >
              <div className="flex  gap-3  w-full px-1 py-2 m-0">
                <div>
                    <Avatar>
                <AvatarImage
                  src="/profile.jpg"
                  alt="mustafa"
                  className="object-cover"
                />
              </Avatar>
                </div>
               <div>
                <h6 className="text-md font-semibold text-foreground">John Doe</h6>
                <p className="text-muted-foreground text-sm">
                this person Commented on your Post  recently check it!
                </p>
              </div>
              </div>
            </DropdownMenuItem>
              <DropdownMenuSeparator />
                <DropdownMenuItem
              className=""
            >
              <div className="flex justify-between gap-3  w-full px-1 py-2">
                <div>
                    <Avatar>
                <AvatarImage
                  src="/profile.jpg"
                  alt="mustafa"
                  className="object-cover"
                />
              </Avatar>
                </div>
               <div>
                <h6 className="text-md font-semibold text-foreground">John Doe</h6>
                <p className="text-muted-foreground text-sm">
                  Software Developer & UI/UX Enthusiast
                </p>
              </div>
              </div>
            </DropdownMenuItem>

            
            
            <DropdownMenuSeparator />
            <DropdownMenuItem
            
            >
               Clear All
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full shadow-sm"
            >
              <Avatar>
                <AvatarImage
                  src="/profile.jpg"
                  alt="mustafa"
                  className="object-cover"
                />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-white dark:bg-gray-950">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => router.push("/profile")}
              className=""
            >
              <User className="w-4 h-4 mr-2" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/settings")}>
              <Settings className="w-4 h-4 mr-2" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => router.push("/login")}
              className="text-red-600"
            >
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default TopNavbar;
