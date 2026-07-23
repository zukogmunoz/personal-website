/**
 * @description
 * @constant {Object} SOCIAL_LINKS - Social links for the hero section
 * @property {Object} linkedin - LinkedIn link
 * @property {string} linkedin.url - LinkedIn URL
 * @property {string} linkedin.label - LinkedIn label
 * @property {string} linkedin.ariaLabel - LinkedIn aria label
 * @property {Object} email - Email link
 * @property {string} email.url - Email URL
 * @property {string} email.label - Email label
 * @property {string} email.ariaLabel - Email aria label
 */
export const SOCIAL_LINKS = {
  linkedin: {
    url: "https://linkedin.com/in/zukog",
    label: "LinkedIn",
    ariaLabel: "LinkedIn"
  },
  email: {
    url: "mailto:zukogmunoz@gmail.com",
    label: "Email",
    ariaLabel: "Email"
  }
} as const;