"use client";

import Link from "next/link";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

/**
 * Component that represents the quick links section.
 * @returns The quick links section.
 */
export const QuickLinks = () => {
    const { t } = useLanguage();

    const links = [
        {
            href: "mailto:zukogmunoz@gmail.com",
            label: t.contact.sendEmail,
            icon: Mail,
            isPrimary: true,
        },
        {
            href: "https://linkedin.com/in/zukog",
            label: "LinkedIn",
            icon: Linkedin,
            isPrimary: false,
        },
    ];

    return (
        <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">
                {t.contact.directConnect}
            </p>
            <div className="flex gap-4">
                {links.map((link) => {
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-opacity ${link.isPrimary
                                ? "bg-primary text-primary-foreground hover:opacity-90"
                                : "border border-border text-foreground hover:bg-secondary"
                                }`}
                        >
                            {link.label}
                            {link.isPrimary ? <ArrowRight size={16} /> : <Icon size={16} />}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};