"use client";
import Link from "next/link";
import { LogoIcon } from "../logo-icon"; // THIS PATH IS CORRECT, NO CHANGE NEEDED
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { i18n } from "@/lib/constants";
import { Dictionary, Locale } from "@/types/types";
import { AuthButton } from "./auth-button";
import { usePathname } from "next/navigation";

const LANGUAGES = [
  { name: "English", code: "en" },
  { name: "Français", code: "fr" },
  { name: "Español", code: "es" },
  { name: "Deutsch", code: "de" },
  { name: "Italiano", code: "it" },
  { name: "Português", code: "pt" },
  { name: "Русский", code: "ru" },
  { name: "中文 (简体)", code: "zh" },
  { name: "العربية", code: "ar" },
];

interface HeaderProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function Header({ dictionary, locale }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const getLocalizedPath = (newLocale: string) => {
    if (!pathname) return `/${newLocale}`;
    const segments = pathname.split("/");
    segments[1] = newLocale; // replace old locale with new one
    return segments.join("/");
  };

  return (
    <header className="py-4 border-b border-gold-accent/10 sticky top-0 bg-deep-blue/80 backdrop-blur-sm z-50 ">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href={`/${locale}`}
          className="flex items-center space-x-3 text-2xl font-bold text-gold-accent"
        >
          <LogoIcon />
          <span>AlterLexis</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href={`/${locale}/how-it-works`}
            className="text-light-text hover:text-gold-accent transition-colors"
          >
            {dictionary.common.howItWorks}
          </Link>
          <Link
            href={`/${locale}/leaderboard`}
            className="text-light-text hover:text-gold-accent transition-colors"
          >
            {dictionary.common.leaderboard}
          </Link>
          <Link
            href={`/${locale}/premium`}
            className="text-light-text hover:text-gold-accent transition-colors"
          >
            {dictionary.common.premium}
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {LANGUAGES.map((lang) => (
                <DropdownMenuItem key={lang.code} asChild>
                  <Link href={getLocalizedPath(lang.code)}>{lang.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="hidden md:flex ">
            <AuthButton locale={locale} dictionary={dictionary} />
          </div>


          <div className="flex md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 sm:w-80">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold text-gold-accent">
                    AlterLexis
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Nav Links */}
                <nav className="mt-6 flex flex-col space-y-4">
                  <Link
                    href={`/${locale}/how-it-works`}
                    className="text-light-text hover:text-gold-accent transition-colors"
                  >
                    {dictionary.common.howItWorks}
                  </Link>
                  <Link
                    href={`/${locale}/leaderboard`}
                    className="text-light-text hover:text-gold-accent transition-colors"
                  >
                    {dictionary.common.leaderboard}
                  </Link>
                  <Link
                    href={`/${locale}/premium`}
                    className="text-light-text hover:text-gold-accent transition-colors"
                  >
                    {dictionary.common.premium}
                  </Link>
                </nav>

                {/* Auth Button (Mobile) */}
                <div className="mt-6">
                  <AuthButton dictionary={dictionary} locale={locale}/>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
