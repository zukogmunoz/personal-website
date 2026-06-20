/**
 * @description
 * @constant {Object} CODE_BLOCK - Code block for the hero section
 * @property {Object} developer - Developer object
 * @property {string} developer.name - Developer name
 * @property {string} developer.role - Developer role
 * @property {number} developer.experience - Developer experience
 * @property {string[]} developer.stack - Developer stack
 * @property {boolean} developer.available - Developer availability
 */
export const CODE_BLOCK = {
    developer: {
        name: "Zukog Muñoz",
        role: "Mobile & Fullstack",
        experience: 4,
        stack: ["React", "React Native", "TypeScript", "Next.js", "Node.js"],
        available: true
    }
} as const;