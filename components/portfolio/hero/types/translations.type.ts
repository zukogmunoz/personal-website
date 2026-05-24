import { StatsProps } from "./stats.type";
/**
 * @description
 * @interface TranslationsProps
 * @property {string} available - Available status
 * @property {string} name - Developer name
 * @property {string} role - Developer role
 * @property {string} description - Developer description
 * @property {string} location - Developer location
 * @property {string} cta - Call to action
 * @property {string} ctaSecondary - Secondary call to action
 * @property {string} codeComment - Code comment
 * @property {StatsProps} stats - Stats
 */
export interface TranslationsProps {
    available: string;
    name: string;
    role: string;
    description: string;
    location: string;
    cta: string;
    ctaSecondary: string;
    stackLine: string;
    codeComment: string;
    stats: StatsProps;
    highlights: string[];
}