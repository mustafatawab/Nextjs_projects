'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, Dictionary } from '@/types/types';
import { cn } from '@/lib/utils';
import { LayoutDashboardIcon, UsersIcon, ListChecksIcon, CrownIcon, BugPlayIcon } from 'lucide-react';

interface AdminNavbarProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function AdminNavbar({ dictionary, locale }: AdminNavbarProps) {
  const pathname = usePathname();

  const adminNavItems = [
    { name: dictionary.admin.dashboard, href: `/${locale}/admin`, icon: <LayoutDashboardIcon className="mr-2 h-4 w-4" /> },
    { name: dictionary.admin.wordBank, href: `/${locale}/admin/word-bank`, icon: <ListChecksIcon className="mr-2 h-4 w-4" /> },
    { name: dictionary.admin.users, href: `/${locale}/admin/users`, icon: <UsersIcon className="mr-2 h-4 w-4" /> },
    { name: dictionary.admin.premiumKeys, href: `/${locale}/admin/keys`, icon: <CrownIcon className="mr-2 h-4 w-4" /> },
    { name: dictionary.admin.errorLogs, href: `/${locale}/admin/errors`, icon: <BugPlayIcon className="mr-2 h-4 w-4" /> },
  ];

  return (
    <aside className="w-full md:w-64 bg-card text-card-foreground border-b md:border-r border-border p-4 md:p-6 fixed md:relative bottom-0 md:bottom-auto z-40 md:z-auto">
      <nav className="flex md:flex-col justify-around md:justify-start gap-2 md:gap-1">
        {adminNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center justify-center md:justify-start gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary",
              pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground"
            )}
          >
            {item.icon}
            <span className="hidden md:inline">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
