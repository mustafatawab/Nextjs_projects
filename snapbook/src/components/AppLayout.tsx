'use client'
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  Users,
  MessageSquare,
  Settings,
  User,
  Menu,
  X,
} from "lucide-react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
interface AppLayoutProps {
  children: React.ReactNode;
}



export default function AppLayout({ children }: AppLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-black/10">
      {/* Mobile toggle button */}
      <button
        className="absolute top-4 left-4 z-50 p-2 rounded bg-white shadow-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Content */}
            <div className="flex-1 flex flex-col lg:ml-64">
        {/* ✅ Top Navbar */}
        <TopNavbar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-2 md:p-5 ">{children}</main>
      </div>

    </div>
  );
}
