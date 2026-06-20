"use client"

import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

/**
 * Component that represents the footer section.
 * @returns The footer section.
 */
export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link
              href="/"
              className="text-xl font-semibold text-foreground"
            >
              zukog<span className="text-primary">.</span>dev
            </Link>
            <p className="text-sm text-muted-foreground">
              {t.footer.role}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://linkedin.com/in/naludev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:nalum.dev@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zukog Muñoz. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
