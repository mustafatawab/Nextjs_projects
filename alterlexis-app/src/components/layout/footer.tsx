'use client';

import Link from 'next/link';
import { LogoIcon } from '../logo-icon';
import { Dictionary, Locale } from '@/types/types';

interface FooterProps {
    dictionary: Dictionary;
    locale: Locale;
}

export function Footer({ dictionary, locale }: FooterProps) {
    return (
        <footer className="bg-card-blue/50 border-t border-gold-accent/10 mt-20">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <Link href={`/${locale}`} className="flex items-center space-x-2 text-xl font-bold text-gold-accent">
                            <LogoIcon />
                            <span>AlterLexis</span>
                        </Link>
                        <p className="mt-2 text-sm text-muted-text">Une application conçue avec soin.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                        <Link href={`/${locale}/contact`} className="text-muted-text hover:text-gold-accent transition-colors">
                            {dictionary.common.contact}
                        </Link>
                        <Link href={`/${locale}/terms`} className="text-muted-text hover:text-gold-accent transition-colors">
                            {dictionary.common.terms}
                        </Link>
                        <Link href={`/${locale}/privacy`} className="text-muted-text hover:text-gold-accent transition-colors">
                            {dictionary.common.privacy}
                        </Link>
                    </div>
                </div>
                <div className="mt-8 border-t border-gold-accent/10 pt-4 text-center text-sm text-muted-text">
                    &copy; {new Date().getFullYear()} AlterLexis. {dictionary.common.allRightsReserved}
                </div>
            </div>
        </footer>
    );
}
