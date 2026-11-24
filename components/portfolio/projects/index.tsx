"use client"

import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { useProjects } from "./hooks"
import { ProjectCard } from "./components"
import { cn } from "@/lib/utils"

/**
 * Component that represents the projects section.
 * @returns The projects section.
 */
export function Projects() {
  const {
    projects,
    sectionLabel,
    title,
    subtitle,
    ctaQuestion,
    ctaLink,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage
  } = useProjects()

  return (
    <section id="projects" className="py-12 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-2 mb-16">
          <p className="text-primary font-mono text-sm">{sectionLabel}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-4 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Projects Grid Container with Arrows */}
        <div className="relative group">
          {/* Desktop/Tablet Arrows - Centered on Sides */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-primary/20 bg-card/80 text-primary backdrop-blur-sm shadow-xl disabled:opacity-0 disabled:pointer-events-none hover:bg-primary/10 transition-all duration-300 hidden md:block"
                aria-label="Previous page"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className="absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-primary/20 bg-card/80 text-primary backdrop-blur-sm shadow-xl disabled:opacity-0 disabled:pointer-events-none hover:bg-primary/10 transition-all duration-300 hidden md:block"
                aria-label="Next page"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Projects Grid with Transition Trigger */}
          <div 
            key={currentPage} 
            className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Pagination Dots & Mobile Arrows */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col items-center gap-6">
            {/* Mobile Arrows - Simplified */}
            <div className="flex items-center gap-8 md:hidden">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="p-2 rounded-full border border-primary/20 bg-primary/5 text-primary disabled:opacity-30 transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className="p-2 rounded-full border border-primary/20 bg-primary/5 text-primary disabled:opacity-30 transition-colors"
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    currentPage === i 
                      ? "w-8 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" 
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            {ctaQuestion}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4"
          >
            {ctaLink}
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}