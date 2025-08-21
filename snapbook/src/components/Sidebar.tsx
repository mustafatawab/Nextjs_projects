import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Users,
  MessageSquare,
  Settings,
  User,
  Newspaper
} from "lucide-react";
import Image from "next/image";


const sidebarItems = [
  { label: "Feed", icon: Newspaper, href: "/feed" },
  { label: "Friends", icon: Users, href: "/friends" },
  { label: "Messages", icon: MessageSquare, href: "/messages" },
  { label: "Profile", icon: User, href: "/profile" },
  { label: "Settings", icon: Settings, href: "/settings/" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({isOpen , onClose} : SidebarProps) => {
  return (
    <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-64 lg:bg-transparent bg-green-50 dark:bg-black   transform transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="px-2 py-4 ">
          {/* <h1 className="text-xl font-bold text-blue-600">Snapbook</h1> */}
          <Image src={"/logo.png"} width={500} height={20} alt="Snapbook"/>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-green-900 hover:text-green-50 dark:text-green-50 transition"
              )}
              onClick={onClose} // close menu after click on mobile
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>
        
      </aside>
  )
}

export default Sidebar