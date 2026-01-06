# Quick Start Guide - NHCH Design System

## 🚀 Getting Started with the New Design

This guide helps developers quickly implement the new NHCH design patterns.

---

## Core Design Principles

1. **Organic over Geometric** - Use flowing curves, not rigid boxes
2. **Warm over Clinical** - Cream backgrounds, soft shadows, rounded corners
3. **Layered over Flat** - Multiple shadows, gradient overlays, depth
4. **Asymmetric over Centered** - 7/5 splits, staggered grids
5. **Confident over Timid** - Bold typography, full palette usage

---

## Quick Copy-Paste Components

### 1. Hero Section Pattern
```jsx
<section className="relative bg-warm-cream warm-texture overflow-hidden min-h-[85vh] flex items-center">
  {/* Organic shapes */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="accent-shape-1 -top-32 -right-32" />
    <div className="accent-shape-2 -bottom-48 -left-48" />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <div className="lg:col-span-7">
        {/* Content */}
      </div>
      <div className="lg:col-span-5">
        {/* Image */}
      </div>
    </div>
  </div>

  {/* Curved divider */}
  <div className="curved-divider">
    <svg viewBox="0 0 1200 80" fill="none" preserveAspectRatio="none">
      <path d="M0 80 L0 40 Q 300 0, 600 40 T 1200 40 L1200 80 Z" fill="currentColor" className="text-forest"/>
    </svg>
  </div>
</section>
```

### 2. Badge Component
```jsx
<div className="inline-flex items-center gap-3 px-5 py-3
                bg-gradient-to-r from-gold/10 via-gold/5 to-transparent
                border-l-4 border-gold rounded-r-full backdrop-blur-sm">
  <svg className="w-5 h-5 text-gold" fill="currentColor">
    {/* Icon */}
  </svg>
  <p className="text-forest font-semibold text-sm tracking-wider">
    YOUR TEXT HERE
  </p>
</div>
```

### 3. Headline with Organic Underline
```jsx
<h1 className="text-forest mb-6">
  Your Regular Text{" "}
  <span className="relative inline-block">
    <span className="relative z-10">Emphasized Word</span>
    <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
      <path d="M0 8 Q 75 2, 150 8 T 300 8" stroke="currentColor" strokeWidth="3" className="text-gold opacity-40" fill="none"/>
    </svg>
  </span>
</h1>
```

### 4. Flowing Accent Text Block
```jsx
<div className="flowing-accent max-w-2xl mb-10">
  <p className="text-warmgray text-lg lg:text-xl leading-relaxed mb-6">
    Primary paragraph with strong hierarchy
  </p>
  <p className="text-warmgray/90 text-base lg:text-lg leading-relaxed">
    Supporting detail with reduced emphasis
  </p>
</div>
```

### 5. Service Card
```jsx
<div className="group relative bg-white rounded-2xl p-8 border-2 border-forest/10 elevated-card">
  {/* Organic accent */}
  <div className="absolute -top-2 -right-2 w-24 h-24 bg-forest/5 opacity-30 blur-2xl rounded-full
                  transition-all duration-500 group-hover:opacity-50 group-hover:w-32 group-hover:h-32" />

  <div className="relative">
    {/* Icon */}
    <div className="w-16 h-16 rounded-2xl bg-forest/5 flex items-center justify-center text-forest
                    group-hover:bg-forest group-hover:text-white transition-all duration-300
                    transform group-hover:scale-110 group-hover:rotate-3 mb-6">
      {icon}
    </div>

    <h3 className="text-xl font-semibold text-forest mb-3">Title</h3>
    <p className="text-warmgray leading-relaxed mb-5">Description</p>

    {/* Expanding line */}
    <div className="h-0.5 w-0 group-hover:w-16 bg-gradient-to-r from-gold to-transparent transition-all duration-500 mb-4" />

    <div className="inline-flex items-center text-forest font-medium text-sm group-hover:text-gold-dark transition-colors">
      Learn more
      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </div>
</div>
```

### 6. Trust Indicator
```jsx
<div className="flex items-center gap-3">
  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
    <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {/* Icon path */}
    </svg>
  </div>
  <div>
    <p className="text-forest font-semibold text-sm">Title</p>
    <p className="text-warmgray text-xs">Subtitle</p>
  </div>
</div>
```

### 7. Stat Display
```jsx
<div className="text-center group relative">
  {/* Top accent */}
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1
                  bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

  <p className="text-gold font-bold text-5xl lg:text-6xl mb-3 tracking-tight">25+</p>
  <p className="text-white font-medium text-base lg:text-lg mb-1">Main Label</p>
  <p className="text-white/60 text-sm">Subtitle</p>

  {/* Bottom accent */}
  <div className="mt-4 h-0.5 w-12 mx-auto bg-white/20 rounded-full
                  group-hover:bg-gold/40 transition-colors" />
</div>
```

### 8. Organic Image Frame
```jsx
<div className="relative">
  {/* Background frame */}
  <div className="absolute -inset-6 bg-gradient-to-br from-forest/5 to-sky/10
                  rounded-[40% 60% 45% 55% / 55% 45% 60% 40%] transform rotate-3" />

  <div className="relative rounded-[32px] overflow-hidden elevated-card">
    <Image src="..." alt="..." width={600} height={700} className="object-cover w-full h-[600px]" />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-forest/5 to-transparent" />

    {/* Accent blur */}
    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-[45% 55% 60% 40%] blur-2xl" />
  </div>
</div>
```

---

## Utility Class Reference

### Pre-built Utilities (from globals.css)

**Layouts:**
- `warm-texture` - Adds grain overlay
- `elevated-card` - Sophisticated shadow system
- `flowing-accent` - Left gradient border

**Shapes:**
- `accent-shape-1` - Organic gold blur (300px)
- `accent-shape-2` - Organic sky blur (400px)
- `growth-arc` - Animated morphing shape
- `curved-divider` - Section wave transition

**Colors:**
- `bg-warm-cream` - #FAF8F5
- `bg-warm-sand` - #F5F1EB
- `bg-soft-sage` - #E8F0ED

**Animations:**
- `animate-fade-in-up` - Gentle reveal (0.6s)

---

## Color Usage Guide

### When to Use Each Color:

**Forest (#1B7340):**
- Primary headings
- Text emphasis
- Trust/stability icons
- Primary buttons (bg)

**Gold (#F4C430):**
- Call-to-action buttons (bg)
- Accent elements
- Warmth/celebration icons
- Number highlights

**Sky (#4A9BD9):**
- Supporting accents
- Clarity/calm icons
- Secondary highlights
- Gradient variety

**Warm Gray (#6B6B6B):**
- Body copy
- Secondary text
- Subtle labels

---

## Typography Quick Reference

### Sizes:
```css
/* Display */
className="text-[3.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-tight tracking-tighter"

/* H1 */
className="text-[2.75rem] md:text-[4rem] lg:text-[4.5rem] font-bold"

/* H2 */
className="text-[2.25rem] md:text-[3rem] font-semibold"

/* H3 */
className="text-[1.625rem] md:text-[2rem] font-semibold"

/* Body Large */
className="text-lg lg:text-xl"

/* Body Regular */
className="text-base"

/* Small */
className="text-sm"
```

### Letter Spacing:
- Headings: `tracking-tight` or `tracking-tighter`
- Badges/Labels: `tracking-wider`
- Body: Default

### Line Height:
- Headings: `leading-tight` (1.15)
- Body: `leading-relaxed` (1.75)

---

## Shadow System

### Elevation Levels:
```css
/* Level 1 - Subtle */
className="shadow-sm hover:shadow-md"

/* Level 2 - Standard */
className="shadow-md hover:shadow-lg"

/* Level 3 - Elevated (use .elevated-card utility) */
className="elevated-card"

/* Level 4 - Maximum */
className="shadow-xl hover:shadow-2xl"
```

---

## Spacing Patterns

### Section Padding:
```jsx
className="py-14 lg:py-20" // Large sections
className="py-10 lg:py-14" // Medium sections
className="py-8 lg:py-10"  // Small sections
```

### Container Margins:
```jsx
className="mb-8 lg:mb-10"  // Between major elements
className="mb-6"            // Between paragraphs
className="mb-4"            // Between related elements
className="mb-2"            // Tight grouping
```

### Gap Spacing:
```jsx
className="gap-12 lg:gap-16" // Hero grid
className="gap-8 lg:gap-12"  // Card grids
className="gap-6 lg:gap-8"   // Compact grids
className="gap-4"            // Button groups
```

---

## Border Radius Guide

### Standard Elements:
- Buttons: `rounded-xl` (12px)
- Cards: `rounded-2xl` (16px)
- Images: `rounded-[32px]` (32px)
- Badges: `rounded-r-full` (asymmetric)

### Organic Shapes:
```css
border-radius: 45% 55% 60% 40% / 50% 60% 40% 50%;
```

---

## Responsive Breakpoints

```css
/* Mobile First (Base) */
/* 0-767px */

/* Tablet (md:) */
@media (min-width: 768px) { }

/* Desktop (lg:) */
@media (min-width: 1024px) { }

/* Large Desktop (xl:) */
@media (min-width: 1280px) { }
```

### Pattern:
1. Design mobile first
2. Add `md:` for tablet adjustments
3. Add `lg:` for desktop enhancements
4. Only add `xl:` if truly needed

---

## Animation Timing

### Transitions:
```css
transition-all duration-200  /* Fast (color changes) */
transition-all duration-300  /* Medium (transforms) */
transition-all duration-500  /* Slow (complex) */
```

### Easing:
```css
transition-all ease-in-out      /* Smooth start/end */
cubic-bezier(0.4, 0, 0.2, 1)   /* Material Design */
```

### Hover Pattern:
```jsx
className="transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
```

---

## Common Mistakes to Avoid

❌ **Don't:**
- Use sharp corners (use xl or 2xl)
- Use black shadows (use forest/gold tints)
- Center everything (use asymmetric layouts)
- Use stark white (use warm-cream)
- Make all cards identical (vary colors/sizes)
- Forget hover states
- Skip mobile testing
- Use generic gradients

✅ **Do:**
- Use organic shapes liberally
- Add flowing accent lines
- Layer gradients for depth
- Use brand colors in shadows
- Create visual rhythm through variety
- Test hover interactions
- Ensure 44px touch targets
- Add warm textures

---

## Accessibility Checklist

- [ ] Color contrast 4.5:1+ for text
- [ ] Touch targets 44x44px minimum
- [ ] Focus states visible (gold outline)
- [ ] Alt text on images
- [ ] ARIA labels on icon buttons
- [ ] Heading hierarchy (h1 → h2 → h3)
- [ ] Skip to content link
- [ ] Keyboard navigation works
- [ ] Screen reader tested

---

## Performance Tips

✅ **Optimizations:**
- Use transform/opacity for animations (GPU)
- Keep blur effects static (not animated)
- Inline critical SVGs
- Use Next.js Image component
- Limit shadow complexity on mobile
- Use `will-change` sparingly

❌ **Avoid:**
- Animating box-shadow directly
- Too many blur filters
- Large background images
- Unoptimized SVGs
- Excessive nesting

---

## Testing Checklist

### Visual Testing:
- [ ] Desktop (1920x1080)
- [ ] Laptop (1440x900)
- [ ] Tablet landscape (1024x768)
- [ ] Tablet portrait (768x1024)
- [ ] Mobile (375x667)
- [ ] Large mobile (414x896)

### Browser Testing:
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Safari iOS
- [ ] Chrome Android

### Interaction Testing:
- [ ] All hover states work
- [ ] Focus states visible
- [ ] Touch targets adequate
- [ ] Animations smooth (60fps)
- [ ] No layout shift
- [ ] Loading states pleasant

---

## Git Workflow

### Committing Design Changes:
```bash
# Good commit messages:
git commit -m "Add organic shapes to hero section"
git commit -m "Implement flowing accent line utility"
git commit -m "Enhance card hover interactions"

# Bad commit messages:
git commit -m "Update styles"
git commit -m "Fix stuff"
```

---

## Getting Help

### Where to Look:
1. `DESIGN_TRANSFORMATION_SUMMARY.md` - Full design explanation
2. `VISUAL_DESIGN_PATTERNS.md` - Detailed pattern library
3. `globals.css` - All utility classes
4. Existing components - Copy patterns

### Questions to Ask:
- Does this feel warm or clinical?
- Is there visual variety or monotony?
- Are shapes organic or geometric?
- Is the hierarchy clear?
- Would someone vulnerable feel welcome?

---

**Quick Start Tip:**
When building a new section, start with an existing similar section and modify it. The patterns are designed to be composable and reusable.

**Remember:**
We're designing for people in vulnerable moments seeking help. Every detail should communicate warmth, trust, and hope.

---

**Last Updated:** January 6, 2026
**Next.js Version:** 16.1.1
**Tailwind CSS:** v4 (inline @theme)
