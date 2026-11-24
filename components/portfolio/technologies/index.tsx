"use client";

import { SkillsHeader } from "./components/skill-header";
import { SkillCard } from "./components/skill-card";
import { AdditionalSkills } from "./components/additional-skill";
import { useSkillsTranslations } from "./hooks/use-skills-translations.hook";
/**
 * Component that represents the skills section.
 * @returns The skills section.
 */
export function Skills() {
  const t = useSkillsTranslations();

  return (
    <section id="skills" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <SkillsHeader
          sectionLabel={t.sectionLabel}
          title={t.title}
          subtitle={t.subtitle}
        />

        {/* Main Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.items.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Additional Skills */}
        <AdditionalSkills
          title={t.alsoWorkWith}
          skills={t.additionalSkills}
        />
      </div>
    </section>
  );
}