"use client";

import {
  HeroStats,
} from "./components";
import { HeroContent } from "./components/content";
import { useHero } from "./hooks";
/**
 * @description
 * @component Hero
 * @returns {JSX.Element}
 */
export function Hero() {
  const { translations, socialLinks } = useHero();

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative">
        <div className="flex flex-col items-center">
          <HeroContent
            translations={translations}
            socialLinks={socialLinks}
          />
        </div>
      </div>
    </section>
  );
}