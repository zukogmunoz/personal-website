"use client"

import { Code2, Smartphone, Globe, Zap } from "lucide-react"
import { useAbout } from "./hooks/use-about.hook"
import { AboutPhoto } from "./components/photo"
import { FeatureCard } from "./components/feature-card"

/**
 * @description
 * @component About
 * @returns {JSX.Element}
 */
export function About() {
  const { t, paragraphs, companies, techStack } = useAbout()

  return (
    <section id="about" className="py-2 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm">{t.about.sectionLabel}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                {t.about.title}
              </h2>
            </div>

            <AboutPhoto
              imageSrc="/images/nalu-profile.jpg"
              alt="Senior React Native & Frontend Engineer"
              name={t.about.photoName}
              role={t.about.photoRole}
              location={t.about.photoLocation}
            />

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {paragraphs.first}{" "}
                <span className="text-foreground">{paragraphs.second}</span>
                {paragraphs.third}
              </p>
              <p>
                {t.about.paragraph2.text}{" "}
                <span className="text-foreground">{companies[0]}</span>,{" "}
                <span className="text-foreground">{companies[1]}</span> y{" "}
                <span className="text-foreground">{companies[2]}</span>
                {t.about.paragraph2.suffix}
              </p>
              <p>{t.about.paragraph3}</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-mono bg-secondary text-secondary-foreground rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard
              icon={<Smartphone className="w-6 h-6" />}
              title={t.about.features.mobileFirst.title}
              description={t.about.features.mobileFirst.description}
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6" />}
              title={t.about.features.fullstack.title}
              description={t.about.features.fullstack.description}
            />
            <FeatureCard
              icon={<Code2 className="w-6 h-6" />}
              title={t.about.features.cleanCode.title}
              description={t.about.features.cleanCode.description}
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title={t.about.features.performance.title}
              description={t.about.features.performance.description}
            />
          </div>
        </div>
      </div>
    </section>
  )
}