# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2024-11-24

### Added
- ✨ **Interactive Card Animations**: Premium hover effects on all cards throughout the site
  - Mouse-tracking spotlight effect with radial gradient
  - Smooth shadow glow with accent colors
  - Border illumination on hover
  - Icon and text color transitions
  - Lift effect with translate-y animation
  - Applied to: About section (stats & expertise), Quick Info, and Skills & Technologies

- 📧 **Contact Form Integration**: Fully functional email system
  - EmailJS integration for automated email sending
  - Success/error notifications with visual feedback
  - Form validation and loading states
  - Fallback to mailto for non-configured environments
  - Auto-clear form after successful submission
  - Comprehensive setup documentation (EMAILJS_SETUP.md)

### Changed
- 🎨 **Card Styling Improvements**
  - Removed backdrop-blur to prevent text quality issues
  - Changed from semi-transparent to solid backgrounds for crisp text rendering
  - Removed scale effects on cards to maintain text sharpness
  - Kept scale effects only on icons and numbers for visual appeal

### Technical Details
- Added `@emailjs/browser` dependency
- Created environment variables template (.env.example)
- Updated .gitignore with comprehensive Next.js patterns
- Added detailed EmailJS setup guide

### Security
- 🔒 Protected sensitive credentials with .env.local (not tracked in git)
- Added .env.example for documentation purposes
