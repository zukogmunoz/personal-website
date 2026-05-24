"use client";

import { MapPin, CheckCircle2 } from "lucide-react";
import { HeroButtons } from "../buttons";
import { HeroSocialLinks } from "../socialLinks";
import { HeroContentProps } from "./types";

/**
 * @description
 * @component HeroContent
 * @param {HeroContentProps} props - Content props
 * @returns {JSX.Element}
 */
export function HeroContent({ translations, socialLinks }: HeroContentProps) {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    {translations.available}
                </div>

                <div className="space-y-2">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance">
                        {translations.name}
                    </h1>
                    <p className="text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight">
                        {translations.role}
                    </p>
                </div>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-balance">
                    {translations.description}
                </p>

                <p className="text-sm sm:text-base font-mono text-primary/70 font-medium tracking-tight">
                    {translations.stackLine}
                </p>

                <div className="flex flex-wrap gap-y-3 gap-x-6 pt-2">
                    {translations.highlights?.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-foreground/90 text-sm sm:text-base font-semibold">
                            <CheckCircle2 size={18} className="text-primary shrink-0" />
                            <span>{highlight}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span>{translations.location}</span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
                <HeroButtons
                    ctaText={translations.cta}
                    ctaSecondaryText={translations.ctaSecondary}
                />
                <div className="hidden sm:block w-px h-8 bg-border" />
                <HeroSocialLinks links={socialLinks} />
            </div>
        </div>
    );
}