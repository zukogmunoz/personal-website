"use client"

import { useExperienceData } from "./hooks"
import { ExperienceCard } from "./components"

/**
 * @component ExperienceSection
 * @description Component to display the experience section.
 * @returns {JSX.Element} The experience section component.
 */
export function Experience() {
  const { sectionLabel, title, jobs } = useExperienceData()

  return (
    <section id="experience" className="py-12 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-2 mb-16">
          <p className="text-primary font-mono text-sm">{sectionLabel}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {title}
          </h2>
        </div>

        <div className="space-y-8">
          {jobs.map((job, index) => (
            <ExperienceCard key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}