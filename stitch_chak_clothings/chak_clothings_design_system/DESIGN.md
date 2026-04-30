---
name: CHAK Clothings Design System
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2df'
  on-surface: '#1a1c1a'
  on-surface-variant: '#444748'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#4059aa'
  on-secondary: '#ffffff'
  secondary-container: '#8fa7fe'
  on-secondary-container: '#1d3989'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca730'
  on-tertiary-container: '#4f3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b6c4ff'
  on-secondary-fixed: '#00164e'
  on-secondary-fixed-variant: '#264191'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2df'
  charcoal-black: '#1A1A1A'
  deep-slate: '#2D3436'
  gold-luxury: '#D4AF37'
  warm-bronze: '#B8860B'
  ivory-white: '#F8F7F4'
  action-blue: '#1E3A8A'
  slate-hover: '#3B3F47'
  gold-glow: '#FFD700'
  soft-grey: '#E8E8E8'
  medium-grey: '#A0A0A0'
  dark-grey: '#4A4A4A'
  border-light: '#D1D5DB'
  background-warm: '#FEFDFB'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -1.5px
  h1:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -1px
  h2:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.5px
  h3:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0px
  h4:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.25px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.3px
  body-reg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.25px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.2px
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.5px
  label:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.15px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 80px
  gutter: 20px
  container-max: 1280px
---

# Design System Inspired by CHAK Clothings

## 1. Visual Theme & Atmosphere

CHAK Clothings embodies understated luxury for the discerning Indian gentleman. The design system radiates sophistication through a refined palette of deep charcoals, warm golds, and crisp whites, evoking premium tailoring and bespoke craftsmanship. Every element is intentional—clean lines, generous whitespace, and carefully curated typography create an atmosphere of exclusivity without ostentation. The visual language balances minimalist restraint with tactile richness, drawing inspiration from high-end menswear boutiques where quality speaks louder than volume. This is a space where premium fabrics, precision fits, and heritage craftsmanship are celebrated through elegant, modern design.

**Key Characteristics**
- Luxe minimalism with restrained color application
- Emphasis on negative space and breathing room
- Premium typography with geometric precision
- Subtle depth through strategic shadowing, never harsh
- Rich, warm neutrals paired with accent golds and slate greys
- Touch of sophistication in every interaction
- Responsive to gesture with polished micro-interactions

## 2. Color Palette & Roles

### Primary
- **Charcoal Black** (`#1A1A1A`): Primary text, headers, and high-contrast content. The foundation of readable hierarchy and brand dominance.
- **Deep Slate** (`#2D3436`): Secondary text and subtle backgrounds. Slightly softer than black for body copy and supporting information.

### Accent Colors
- **Gold Luxury** (`#D4AF37`): Premium accent, call-to-action highlights, premium badges, and luxury indicators. Signals exclusivity and value.
- **Warm Bronze** (`#B8860B`): Hover states and secondary accents. Adds depth without overwhelming.
- **Ivory White** (`#F8F7F4`): Primary background, card surfaces, and clean canvas for content display.

### Interactive
- **Action Blue** (`#1E3A8A`): Primary CTAs, links, and interactive elements. Trustworthy and clear against light backgrounds.
- **Slate Hover** (`#3B3F47`): Interactive element hover state background.
- **Gold Glow** (`#FFD700`): Active states, focus indicators, and premium highlights.

### Neutral Scale
- **Soft Grey** (`#E8E8E8`): Light borders, dividers, and subtle container backgrounds.
- **Medium Grey** (`#A0A0A0`): Disabled text, secondary labels, and muted information.
- **Dark Grey** (`#4A4A4A`): Secondary headings and tertiary text layers.

### Surface & Borders
- **Border Light** (`#D1D5DB`): Card borders, input outlines, and subtle dividers.
- **Border Medium** (`#9CA3AF`): Stronger divisions and form field borders.
- **Background Warm** (`#FEFDFB`): Subtle warm tint for secondary surfaces and list items.

### Shadow Colors
- **Shadow Primary** (`#00000015`): Gentle elevation for cards and floating elements.
- **Shadow Elevated** (`#00000025`): Stronger definition for modals and overlays.

## 3. Typography Rules

### Font Family
**Primary:** Playfair Display (Google Fonts) — elegant serifs for headings and brand statements, conveying luxury and heritage.
**Secondary:** Inter (Google Fonts) — modern geometric sans-serif for body, UI, and data. Crisp, highly legible, and contemporary.
**Fallback Stack:** `'Playfair Display', Georgia, serif` and `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display/Hero | Playfair Display | 56px | 700 | 1.1 | -1.5px | Campaign headers, hero sections |
| Heading 1 | Playfair Display | 48px | 700 | 1.2 | -1px | Page titles, major sections |
| Heading 2 | Playfair Display | 36px | 600 | 1.25 | -0.5px | Section headers, category names |
| Heading 3 | Playfair Display | 28px | 600 | 1.3 | 0px | Subsection titles, product collections |
| Heading 4 | Inter | 20px | 700 | 1.4 | 0.25px | Card titles, component headers |
| Body Large | Inter | 18px | 400 | 1.6 | 0.3px | Product descriptions, long-form text |
| Body Regular | Inter | 16px | 400 | 1.5 | 0.25px | Default body text, paragraphs |
| Body Small | Inter | 14px | 400 | 1.5 | 0.2px | Secondary text, captions |
| Button | Inter | 16px | 600 | 1.4 | 0.5px | Call-to-action text |
| Link | Inter | 16px | 500 | 1.5 | 0.25px | Navigation and hyperlinks |
| Caption | Inter | 12px | 400 | 1.4 | 0.15px | Metadata, timestamps, helper text |
| Code/Monospace | IBM Plex Mono | 14px | 400 | 1.5 | 0px | Product SKUs, pricing, technical info |

### Principles
- Playfair Display reserves itself for moments of drama—headlines that deserve presence and brand identity.
- Inter carries the functional load with perfect clarity across all screen sizes.
- Ample line height (1.5–1.6) ensures breathing room in body text, reflecting the luxury of space.
- Negative letter spacing in headlines tightens the visual weight; body text remains neutral.
- Weight hierarchy is strict: 700 for commands, 600 for emphasis, 500 for subtle hierarchy, 400 for content.

## 4. Component Stylings

### Buttons

**Primary Button**
```
Background: #1E3A8A
Text Color: #F8F7F4
Padding: 14px 32px
Border Radius: 6px
Border: none
Font: Inter, 16px, 600
Box Shadow: 0 4px 12px rgba(30, 58, 138, 0.2)
Transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1)
Hover: background #1A2F6E, box-shadow 0 6px 16px rgba(30, 58, 138, 0.3)
Active: background #152A5C, transform scale(0.99)
Focus: outline 3px solid #FFD700
Disabled: background #A0A0A0, text-color #E8E8E8, cursor not-allowed
```

**Secondary Button**
```
Background: transparent
Text Color: #1E3A8A
Padding: 14px 32px
Border: 2px solid #1E3A8A
Border Radius: 6px
Font: Inter, 16px, 600
Box Shadow: none
Transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1)
Hover: background rgba(30, 58, 138, 0.08), border-color #152A5C
Active: background rgba(30, 58, 138, 0.15)
Focus: outline 3px solid #FFD700
```

**Ghost Button**
```
Background: transparent
Text Color: #1A1A1A
Padding: 12px 20px
Border: 1px solid #D1D5DB
Border Radius: 4px
Font: Inter, 14px, 500
Box Shadow: none
Transition: all 300ms ease
Hover: background #F8F7F4, border-color #9CA3AF
Active: background #E8E8E8
```

**Gold Accent Button**
```
Background: #D4AF37
Text Color: #1A1A1A
Padding: 14px 32px
Border Radius: 6px
Border: none
Font: Inter, 16px, 600
Box Shadow: 0 4px 12px rgba(212, 175, 55, 0.25)
Transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1)
Hover: background #B8860B, box-shadow 0 6px 16px rgba(184, 134, 11, 0.3)
Active: background #9A6E08
Focus: outline 3px solid #1E3A8A
```

### Cards & Containers

**Product Card**
```
Background: #F8F7F4
Border: 1px solid #D1D5DB
Border Radius: 12px
Padding: 16px
Box Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
Transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1)
Hover: box-shadow 0 8px 24px rgba(0, 0, 0, 0.15), transform translateY(-4px)
Image Height: 280px (3:2 aspect ratio)
Title Font: Playfair Display, 20px, 600, color #1A1A1A
Price Font: Inter, 18px, 700, color #1E3A8A
Description Font: Inter, 14px, 400, color #4A4A4A
```

**Premium Highlight Card**
```
Background: linear-gradient(135deg, #1A1A1A 0%, #2D3436 100%)
Border: 2px solid #D4AF37
Border Radius: 12px
Padding: 32px
Box Shadow: 0 8px 32px rgba(212, 175, 55, 0.2)
Title Font: Playfair Display, 32px, 700, color #D4AF37
Text Color: #F8F7F4
Accent: Gold (#D4AF37) for highlights and accents
```

**Container**
```
Background: #FEFDFB
Border: 1px solid #D1D5DB
Border Radius: 8px
Padding: 24px
Box Shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
```

### Inputs & Forms

**Text Input**
```
Background: #F8F7F4
Border: 2px solid #D1D5DB
Border Radius: 6px
Padding: 12px 16px
Font: Inter, 16px, 400
Text Color: #1A1A1A
Placeholder Color: #A0A0A0
Transition: border-color 200ms ease, box-shadow 200ms ease
Focus: border-color #1E3A8A, box-shadow 0 0 0 3px rgba(30, 58, 138, 0.1)
Error: border-color #DC2626, box-shadow 0 0 0 3px rgba(220, 38, 38, 0.1)
Disabled: background #E8E8E8, border-color #D1D5DB, color #A0A0A0
```

**Label**
```
Font: Inter, 14px, 600
Color: #1A1A1A
Margin Bottom: 8px
Display: block
```

**Checkbox**
```
Width: 20px
Height: 20px
Border: 2px solid #D1D5DB
Border Radius: 4px
Background: #F8F7F4
Checked: background #1E3A8A, border-color #1E3A8A
Checked Icon: checkmark in #D4AF37
Transition: all 200ms ease
Focus: box-shadow 0 0 0 3px rgba(30, 58, 138, 0.2)
```

**Select Dropdown**
```
Background: #F8F7F4
Border: 2px solid #D1D5DB
Border Radius: 6px
Padding: 12px 16px
Font: Inter, 16px, 400
Color: #1A1A1A
Arrow Color: #1A1A1A
Transition: all 200ms ease
Focus: border-color #1E3A8A, box-shadow 0 0 0 3px rgba(30, 58, 138, 0.1)
```

### Navigation

**Header Navigation**
```
Background: #F8F7F4
Border Bottom: 1px solid #D1D5DB
Height: 80px
Padding: 0 40px
Display: flex, align-items center, justify-content space-between
Logo Font: Playfair Display, 28px, 700, color #1A1A1A
Logo Accent: #D4AF37 for a letter or mark
Nav Items Font: Inter, 16px, 500, color #1A1A1A
Nav Items Spacing: 32px
Hover State: text-color #1E3A8A, underline #D4AF37 2px with 4px offset
Active State: text-color #1E3A8A, underline #D4AF37 3px solid
```

**Breadcrumb Navigation**
```
Font: Inter, 14px, 400
Color: #4A4A4A
Separator: " / " in #A0A0A0
Active Item: color #1E3A8A, font-weight 600
Spacing: 0 8px between items
```

**Mobile Navigation Menu**
```
Background: #F8F7F4
Width: 100%
Height: 100vh
Position: fixed
Padding: 24px
Animation: slide-in 300ms cubic-bezier(0.4, 0, 0.2, 1)
Item Font: Inter, 18px, 500
Item Padding: 16px 0
Item Border Bottom: 1px solid #D1D5DB
```

## 5. Layout Principles

### Spacing System
**Base Unit:** 8px
**Scale:** 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 56px, 64px, 80px, 96px
**Margin Contexts:**
- Micro spacing (4px–8px): Icon-to-text, badge margins, inline elements
- Small spacing (12px–16px): Component padding, list item gaps
- Medium spacing (24px–32px): Section gaps, card containers, sidebar spacing
- Large spacing (40px–64px): Section breaks, major layout divisions
- Extra large spacing (80px–96px): Page-level breakpoints, hero sections

### Grid & Container
**Max Width:** 1280px (content area)
**Gutter Width:** 20px between columns
**Column Count:** 12-column grid
**Container Padding:** 20px (mobile), 40px (tablet), 60px (desktop)
**Section Margin:** 64px top and bottom between major sections
**Card Grid:** 1 column (mobile), 2 columns (tablet), 3 columns (desktop) with 24px gap

### Whitespace Philosophy
Luxury demands breathing room. Generous margins and padding create visual hierarchy and allow content to speak. Avoid visual clutter through strategic use of background color variation rather than borders. Whitespace is not empty; it is intentional orchestration of attention.

### Border Radius Scale
- **Extra Sharp:** 0px (rarely used, only for specific components)
- **Sharp:** 4px (inputs, small buttons, ghost components)
- **Standard:** 6px (primary buttons, standard cards)
- **Rounded:** 8px (containers, form fields)
- **Soft:** 12px (product cards, premium containers)
- **Pill:** 24px (badge backgrounds, toggle switches, full-width CTA buttons)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow, border only (`1px solid #D1D5DB`) | Ghost buttons, dividers, disabled states |
| Raised | `0 2px 8px rgba(0, 0, 0, 0.08)` | Card default state, form containers |
| Elevated | `0 8px 24px rgba(0, 0, 0, 0.15)` | Card hover, floating toolbars, notifications |
| Floating | `0 12px 32px rgba(0, 0, 0, 0.2)` | Dropdowns, modals, overlay panels |
| Premium | `0 8px 32px rgba(212, 175, 55, 0.2)` with `2px solid #D4AF37` border | Premium cards, luxury highlights |

**Shadow Philosophy**
Shadows are restrained and realistic—never harsh or oversaturated. Depth is suggested through subtle elevation rather than aggressive drop-shadows. Premium accents (gold) introduce a warm glow shadow (`rgba(212, 175, 55, 0.2)`) that adds luxe without excess. Transitions between shadow states are smooth (200–400ms), signaling interactivity without jarring the eye.

## 7. Do's and Don'ts

### Do
- **Use whitespace generously** to create visual hierarchy and direct focus to premium content.
- **Default to Inter for all UI text**; Playfair Display is reserved for headlines and brand moments.
- **Employ gold accents strategically** as highlights, hover states, or premium indicators—never as primary text.
- **Maintain a consistent 8px baseline grid** for spacing, padding, and margins across all components.
- **Layer subtle shadows** (0 2px 8px) to create depth without overwhelming the clean aesthetic.
- **Use a 1E3A8A blue for interactive CTAs** to ensure trust and clarity against light backgrounds.
- **Pair primary actions with gold accents** to signal luxury and premium value propositions.
- **Test all color combinations** for sufficient contrast (WCAG AA minimum 4.5:1 for body text, 3:1 for UI components).
- **Apply transitions smoothly** (300–400ms cubic-bezier) to hover and focus states for polished micro-interactions.
- **Keep card heights flexible** but maintain consistent aspect ratios for image content (3:2 for product images).

### Don't
- **Don't mix Playfair Display and Inter in the same headline**—commit to one voice per text layer.
- **Don't use black (#1A1A1A) at full opacity on gold (#D4AF37)**; the contrast triggers visual tension.
- **Don't apply multiple shadows** to a single element; choose one elevation level and commit.
- **Don't use borders and shadows together** unless it's a premium highlight card; it creates visual noise.
- **Don't set line-height below 1.4** for body text; luxury demands readability and breathing room.
- **Don't apply gold (#D4AF37) as a background for long-form text**; reserve it for accents and highlights.
- **Don't animate every interaction**; use motion judiciously (focus, hover, success states only).
- **Don't place form inputs on dark backgrounds**; stick to light, high-contrast surfaces.
- **Don't exceed three font sizes** in a single component; hierarchy confusion erodes luxury.
- **Don't use the hover blue (#1A2F6E) as a primary background**; it's reserved for interactive hover states.
- **Don't omit focus states**; gold outlines (#FFD700) ensure accessibility without sacrificing brand.

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 320px–767px | Single column, 20px padding, 12px spacing, 48px button height, collapsible nav |
| Tablet | 768px–1024px | 2 columns, 32px padding, 16px spacing, 44px button height, hybrid nav |
| Desktop | 1025px–1920px | 3+ columns, 60px padding, 24px spacing, 48px button height, full horizontal nav |
| Large Desktop | 1921px+ | Centered 1280px container, 40px side padding, maintains desktop spacing |

### Touch Targets
- **Primary Interactive Elements:** Minimum 48px × 48px (buttons, links, checkboxes).
- **Secondary Interactive Elements:** Minimum 40px × 40px (icon buttons, small CTAs).
- **Form Inputs:** Minimum 44px height, 12px padding.
- **Spacing Between Targets:** Minimum 8px to avoid accidental taps.
- **Icon Size:** 20px (baseline), 24px (prominent), 16px (small/tertiary).

### Collapsing Strategy
- **Navigation:** Horizontal full menu on desktop → hamburger icon with slide-in drawer on mobile.
- **Grid Layout:** 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile).
- **Product Images:** 280px height on desktop → 220px on tablet → 160px on mobile.
- **Typography:** Hero 56px (desktop) → 40px (tablet) → 32px (mobile); headings scale proportionally.
- **Padding:** 40–60px (desktop) → 32px (tablet) → 20px (mobile).
- **Card Spacing:** 24px gap (desktop) → 16px (tablet) → 12px (mobile).
- **Form Fields:** Full width stacking on mobile; 2-column grid on tablet and desktop (where appropriate).

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA Button Background:** Action Blue (`#1E3A8A`)
- **Primary CTA Button Hover:** Slate Hover (`#1A2F6E`)
- **Premium/Luxury Accent:** Gold Luxury (`#D4AF37`)
- **Premium Accent Hover:** Warm Bronze (`#B8860B`)
- **Primary Text/Headlines:** Charcoal Black (`#1A1A1A`)
- **Secondary Text:** Deep Slate (`#2D3436`)
- **Body Text:** Deep Slate (`#2D3436`) at 16px on Ivory White (`#F8F7F4`)
- **Page/Card Background:** Ivory White (`#F8F7F4`)
- **Borders & Dividers:** Border Light (`#D1D5DB`)
- **Disabled/Muted Text:** Medium Grey (`#A0A0A0`)
- **Focus Outline:** Gold Glow (`#FFD700`) at 3px solid
- **Card Shadow (Raised):** `0 2px 8px rgba(0, 0, 0, 0.08)`
- **Card Shadow (Elevated):** `0 8px 24px rgba(0, 0, 0, 0.15)`
- **Premium Card Border:** `2px solid #D4AF37`
- **Premium Card Shadow:** `0 8px 32px rgba(212, 175, 55, 0.2)`

### Iteration Guide
1. **Start with a clean Ivory White (`#F8F7F4`) background** and Deep Slate (`#2D3436`) body text at 16px Inter.
2. **All headlines use Playfair Display** with Charcoal Black (`#1A1A1A`); never mix fonts within a headline.
3. **Primary buttons are Action Blue (`#1E3A8A`)** with Inter 16px 600 weight; hover to `#1A2F6E`; focus is Gold Glow (`#FFD700`) 3px outline.
4. **Gold (`#D4AF37`) is accent only**: hover states, premium indicators, active badges, never primary text on light backgrounds.
5. **Spacing always uses 8px multiples**: 8px, 16px, 24px, 32px, 40px, 64px—no odd values.
6. **All card corners are 12px border-radius**; inputs are 6px; buttons vary (6px standard, 24px for pills).
7. **Card shadows are subtle**: base is `0 2px 8px rgba(0, 0, 0, 0.08)`; hover elevates to `0 8px 24px rgba(0, 0, 0, 0.15)`.
8. **Form inputs sit on Ivory White (`#F8F7F4`)** with 2px Border Light (`#D1D5DB`) outline; focus adds blue shadow `0 0 0 3px rgba(30, 58, 138, 0.1)`.
9. **Line height for body text is 1.5–1.6**; headlines are 1.2–1.3 for tighter, luxe presentation.
10. **Navigation text is Inter 16px 500**; hover adds gold underline 2px solid with 4px offset; mobile collapses to hamburger with slide drawer.
11. **Every interactive element has a smooth transition** (300ms `cubic-bezier(0.4, 0, 0.2, 1)`); no jarring or instant state changes.
12. **Responsive breakpoints: Mobile 320–767px (1 column), Tablet 768–1024px (2 columns), Desktop 1025px+ (3 columns, max 1280px container).**
13. **Product card images maintain 3:2 aspect ratio**: 280px height on desktop, 220px on tablet, 160px on mobile.
14. **Always pair visual depth with semantic clarity**: use shadows for elevation, borders for containment, color for hierarchy—never both on a single element unless it's a premium highlight.