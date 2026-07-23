"use client";

import Link from "next/link";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import type { InfoItemProps } from "../types";

/**
 * Component that renders a single contact info item.
 * @param item - The info item with icon, label, value and optional link.
 */
const ContactInfoItem = ({ item }: { item: InfoItemProps }) => {
    const Icon = item.icon;

    return (
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Icon size={20} />
            </div>
            <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                {item.isLink && item.link ? (
                    <Link
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground hover:text-primary transition-colors"
                    >
                        {item.value}
                    </Link>
                ) : (
                    <p className="text-foreground">{item.value}</p>
                )}
            </div>
        </div>
    );
};

/**
 * Component that represents the contact info section (heading, subtitle, info items).
 * @returns The contact info section.
 */
export const ContactInfo = () => {
    const { t } = useLanguage();

    const contactItems: InfoItemProps[] = [
        {
            icon: Mail,
            label: t.contact.email,
            value: "zukogmunoz@gmail.com",
            link: "mailto:zukogmunoz@gmail.com",
            isLink: true,
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/zukog",
            link: "https://linkedin.com/in/zukog",
            isLink: true,
        },
        {
            icon: MapPin,
            label: t.contact.location,
            value: t.contact.locationValue,
            isLink: false,
        },
    ];

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <p className="text-primary font-mono text-sm">
                    {t.contact.sectionLabel}
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                    {t.contact.title}
                </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
                {t.contact.subtitle}
            </p>

            <div className="space-y-4">
                {contactItems.map((item) => (
                    <ContactInfoItem key={item.label} item={item} />
                ))}
            </div>
        </div>
    );
};