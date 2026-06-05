---
name: Territory Home Design System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#dac1bb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a28c86'
  outline-variant: '#54433e'
  surface-tint: '#ffb5a1'
  primary: '#ffb5a1'
  on-primary: '#5a1b09'
  primary-container: '#8e422d'
  on-primary-container: '#ffc1b1'
  inverse-primary: '#954832'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#595858'
  on-tertiary-container: '#d1cece'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a1'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#77311d'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-xl-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 160px
---

## Brand & Style

This design system establishes a premium, editorial aesthetic tailored for high-end home staging and interior redesign. It balances the structural rigor of a modern SaaS platform (Stripe-inspired) with the evocative, imagery-focused storytelling found in award-winning digital experiences (Awwwards-inspired). 

The visual narrative is built on **Minimalism** and **Glassmorphism**. By utilizing a "Dark Mode" foundation, we create a cinematic backdrop that allows interior photography to feel vibrant and luminous. The emotional response is one of curated sophistication, professional expertise, and architectural clarity. Every element is designed to feel intentional, prioritizing generous whitespace to evoke the feeling of a spacious, well-staged home.

## Colors

The palette is rooted in a deep, monochromatic foundation to emphasize texture and light.

- **Primary (Terracotta):** A muted, sophisticated clay tone used sparingly for calls to action and key brand moments. It represents warmth and human touch in architecture.
- **Secondary (Crisp White):** Used for primary typography to ensure maximum legibility and a striking contrast against the dark base.
- **Neutral (Charcoal & Onyx):** `#0A0A0A` serves as the primary canvas, while `#1A1A1A` is used for surface layering and container backgrounds.
- **Accent (Sage - Optional):** For secondary status indicators or subtle variety in color-focused expertise sections, a desaturated sage green (`#5E6B5E`) can be used to complement the terracotta.

## Typography

The typographic hierarchy relies on the tension between a classical serif and a functional sans-serif.

- **Headlines:** Libre Caslon Text provides an authoritative, editorial feel. Use "Display" sizes for hero sections with slight negative letter-spacing to enhance the "Awwwards" high-fashion look.
- **Body & UI:** Inter is used for all functional text. Its neutral, systematic nature balances the expressive serif, ensuring the interface remains grounded and professional.
- **Labels:** Small caps and increased tracking are applied to labels to create a sense of architectural labeling and precision.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy within a 1440px container, though background elements and imagery should bleed to the edges of the viewport to create a more immersive experience.

- **Grid:** A 12-column system is used for desktop, 8-column for tablet, and 4-column for mobile.
- **Spaciousness:** Large vertical gaps (160px+) between major sections are essential to mimic the "breathing room" of a staged luxury home.
- **Alignment:** Content should predominantly be left-aligned to maintain a clean, structural "Stripe-like" edge, with centered typography reserved only for high-impact editorial statements.

## Elevation & Depth

In this dark-themed system, depth is communicated through **Tonal Layering** and **Glassmorphism** rather than traditional heavy shadows.

- **Surface Tiers:** The base level is `#0A0A0A`. Floating cards or modals use `#1A1A1A`.
- **Borders:** Instead of shadows, use 1px solid borders (`rgba(255, 255, 255, 0.1)`) to define element boundaries.
- **Glass Effects:** Navigation bars and over-image cards utilize a backdrop blur (20px to 40px) with a semi-transparent dark fill. This adds a sense of luxury and material quality.
- **Imagery Shadows:** High-quality photos should have a very soft, large-spread "Ambient Shadow" (`rgba(0, 0, 0, 0.5)`) to make them feel physically present in the space.

## Shapes

The shape language is disciplined and geometric. 

- **Corners:** A subtle 4px (`0.25rem`) radius is applied to buttons and inputs to prevent the interface from feeling overly aggressive, while maintaining a sharp, professional edge. 
- **Imagery:** Large hero images and gallery items should retain perfectly sharp (0px) corners to emphasize the architectural nature of the content.
- **Pills:** Not used in this system, except for very specific status tags where a 100px radius may be applied to provide a visual break from the otherwise rectangular grid.

## Components

### Buttons
- **Primary:** Solid terracotta (`#8E422D`) with white text. 4px corner radius. No shadow.
- **Secondary:** Outlined white (`rgba(255, 255, 255, 0.3)`) with white text. 4px corner radius.
- **Tertiary/Ghost:** Text-only with a subtle underline effect on hover, using the primary terracotta for the underline.

### Input Fields
- Inputs are styled as "Minimalist Underlines" or subtle boxes with a `#1A1A1A` background.
- Focus state: The bottom border transitions from a muted grey to the primary terracotta.

### Cards
- Standard cards use the `#1A1A1A` background with a 1px border. 
- Imagery within cards should fill the top half or the entire background, with text overlaid using a glassmorphic bottom-plate.

### Lists & Navigation
- Navigation items use `label-md` styling. 
- Hover states for list items involve a subtle background shift to `#1A1A1A` or a slight indentation of the text (2-4px) to indicate interactivity.

### Chips & Tags
- Used for "Service Categories" (e.g., *Staging*, *Consultation*). These should be outlined with 4px radius and use `label-md` typography.