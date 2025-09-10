"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, Dictionary } from "@/types/types";
import { cn } from "@/lib/utils";
import {
  LayoutDashboardIcon,
  UsersIcon,
  ListChecksIcon,
  CrownIcon,
  BugPlayIcon,
  Menu,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

interface AdminNavbarProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function AdminNavbar({ dictionary, locale }: AdminNavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const adminNavItems = [
    {
      name: dictionary.admin.dashboard,
      href: `/${locale}/admin`,
      icon: <LayoutDashboardIcon className="mr-2 h-4 w-4" />,
    },
    {
      name: dictionary.admin.wordBank,
      href: `/${locale}/admin/word-bank`,
      icon: <ListChecksIcon className="mr-2 h-4 w-4" />,
    },
    {
      name: dictionary.admin.users,
      href: `/${locale}/admin/users`,
      icon: <UsersIcon className="mr-2 h-4 w-4" />,
    },
    {
      name: dictionary.admin.premiumKeys,
      href: `/${locale}/admin/keys`,
      icon: <CrownIcon className="mr-2 h-4 w-4" />,
    },
    {
      name: dictionary.admin.errorLogs,
      href: `/${locale}/admin/errors`,
      icon: <BugPlayIcon className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <>
      <aside className="hidden lg:flex w-full md:w-64 bg-card text-card-foreground border-b md:border-r border-border p-4 md:p-6 fixed md:relative bottom-0 md:bottom-auto z-40 md:z-auto">
        <nav className="flex md:flex-col justify-around md:justify-start gap-2 md:gap-1">
          {adminNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-center md:justify-start gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary",
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.icon}
              <span className="hidden md:inline">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
{/* ✅ Mobile Navbar with Drawer */}
      <div className="flex lg:hidden items-center justify-between p-4 border-b border-border bg-card sticky top-[4.5rem] z-50">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 sm:w-80">
            <SheetHeader>
              <SheetTitle className="text-xl font-bold">Admin Panel</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-3">
              {adminNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
