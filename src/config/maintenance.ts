/**
 * Developer-controlled Maintenance Mode Configuration.
 * 
 * Controlled directly through Antigravity:
 * - When `enabled: true`, the premium "Website Under Maintenance" screen is shown to all visitors.
 * - When `enabled: false`, the website is fully active and accessible.
 */
export const MAINTENANCE_CONFIG = {
  enabled: true, // Set to false to restore normal website access
  title: "Website Under Maintenance",
  message: "We're currently updating our website to improve your experience. Please check back soon!"
};
