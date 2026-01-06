# New Horizons - Visual Design Pattern Library

## 🎨 Signature Visual Elements

This document catalogs the distinctive visual patterns created for NHCH that can be reused throughout the site to maintain brand consistency.

---

## 1. Organic Shapes & Morphing

### Growth Arc Element
**Purpose:** Represents the non-linear healing journey
**Implementation:**
```jsx
<div className="growth-arc top-0 right-0 w-[600px] h-[600px]">
  <div className="absolute inset-0 bg-gradient-to-br from-forest/5 via-sky/5 to-gold/5"
       style={{ clipPath: 'path("M 0 0 Q 300 150 600 0 L 600 600 L 0 600 Z")' }} />
</div>
```

**Visual Effect:**
- Animated morphing organic shape
- 20-second infinite loop
- Subtle opacity (5-8%)
- Represents growth and change

### Organic Background Blurs
```jsx
<div className="accent-shape-1 -top-32 -right-32" />
<div className="accent-shape-2 -bottom-48 -left-48" />
```

**CSS:**
```css
.accent-shape-1 {
  position: absolute;
  width: 300px;
  height: 300px;
  background: var(--gold);
  opacity: 0.06;
  border-radius: 45% 55% 60% 40% / 50% 60% 40% 50%;
  filter: blur(40px);
}
```

**Usage:** Hero sections, full-width backgrounds
**Effect:** Soft, warm, organic atmosphere

---

## 2. Flowing Accent Lines

### Curved Underline Accent
**Purpose:** Emphasize key words organically (not harsh underline)
```jsx
<span className="relative inline-block">
  <span className="relative z-10">Starts Here</span>
  <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
    <path d="M0 8 Q 75 2, 150 8 T 300 8" stroke="currentColor" strokeWidth="3" className="text-gold opacity-40" fill="none"/>
  </svg>
</span>
```

**Visual Effect:**
- Hand-drawn appearance
- Quadratic bezier curve (natural flow)
- 40% opacity for subtlety
- Gold color for warmth

### Flowing Left Border
**Purpose:** Highlight important content sections
```jsx
<div className="flowing-accent max-w-2xl">
  <p>Your important content here</p>
</div>
```

**CSS:**
```css
.flowing-accent {
  position: relative;
  padding-left: 1.5rem;
}

.flowing-accent::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, var(--gold), var(--sky-light), var(--gold));
  border-radius: 2px;
  opacity: 0.4;
}
```

**Usage:** Body copy emphasis, quote blocks, feature highlights

---

## 3. Curved Section Dividers

### Wave Transition
**Purpose:** Create flowing connections between sections (vs harsh horizontal lines)
```jsx
<div className="curved-divider">
  <svg viewBox="0 0 1200 80" fill="none" preserveAspectRatio="none">
    <path d="M0 80 L0 40 Q 300 0, 600 40 T 1200 40 L1200 80 Z" fill="currentColor" className="text-forest"/>
  </svg>
</div>
```

**Visual Effect:**
- Smooth wave between sections
- Uses brand colors
- 80px height (responsive)
- Creates cohesive page flow

**Usage:** End of hero section, between major content areas

---

## 4. Sophisticated Card System

### Elevated Card
**Purpose:** Premium card treatment with brand-colored shadows
```jsx
<div className="elevated-card rounded-2xl p-8">
  {/* Card content */}
</div>
```

**CSS:**
```css
.elevated-card {
  box-shadow:
    0 1px 3px 0 rgba(27, 115, 64, 0.05),      /* Forest tint - subtle */
    0 10px 15px -3px rgba(27, 115, 64, 0.08), /* Forest tint - medium */
    0 4px 6px -2px rgba(244, 196, 48, 0.05);  /* Gold accent */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.elevated-card:hover {
  box-shadow:
    0 4px 6px -1px rgba(27, 115, 64, 0.08),
    0 20px 25px -5px rgba(27, 115, 64, 0.12),
    0 10px 10px -5px rgba(244, 196, 48, 0.08);
  transform: translateY(-4px);
}
```

**Usage:** Service cards, feature blocks, content cards
**Effect:** Premium feel, brand consistency in shadows

### Service Card with Color Coding
```jsx
<div className="group relative bg-white rounded-2xl p-8 border-2 border-forest/10 elevated-card">
  {/* Organic accent shape in corner */}
  <div className="absolute -top-2 -right-2 w-24 h-24 bg-forest/5 opacity-30 blur-2xl rounded-full
                  transition-all duration-500 group-hover:opacity-50 group-hover:w-32 group-hover:h-32" />

  {/* Icon with color-coded background */}
  <div className="w-16 h-16 rounded-2xl bg-forest/5 flex items-center justify-center text-forest
                  group-hover:bg-forest group-hover:text-white transition-all duration-300
                  transform group-hover:scale-110 group-hover:rotate-3">
    {icon}
  </div>

  {/* Expanding accent line */}
  <div className="h-0.5 w-0 group-hover:w-16 bg-gradient-to-r from-gold to-transparent
                  transition-all duration-500" />
</div>
```

**Features:**
- Color-coded backgrounds (forest, gold, sky)
- Organic blur accent in corner
- Icon animation (scale + rotate)
- Expanding accent line on hover
- Long arrow (not chevron) for "learn more"

---

## 5. Badge & Annotation Components

### Anniversary Badge (Refined)
```jsx
<div className="inline-flex items-center gap-3 px-5 py-3
                bg-gradient-to-r from-gold/10 via-gold/5 to-transparent
                border-l-4 border-gold rounded-r-full backdrop-blur-sm">
  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
  <p className="text-forest font-semibold text-sm tracking-wider">
    15 YEARS OF TRUSTED CARE
  </p>
</div>
```

**Features:**
- Left-border accent (signature element)
- Gradient fade right
- Rounded-r-full (asymmetric)
- Icon + text combination
- Uppercase tracking

### Floating Anniversary Card
```jsx
<div className="absolute -bottom-8 -left-8 bg-white rounded-2xl elevated-card p-6 max-w-[200px]">
  <div className="flex items-baseline gap-2 mb-2">
    <p className="text-forest font-bold text-5xl leading-none">15</p>
    <p className="text-gold font-semibold text-xl">Years</p>
  </div>
  <div className="h-1 w-16 bg-gradient-to-r from-gold to-gold/20 rounded-full mb-2" />
  <p className="text-warmgray text-sm font-medium">Serving North Texas</p>
  <p className="text-warmgray/60 text-xs mt-1">2011 - 2026</p>
</div>
```

**Features:**
- Large number + unit split
- Gradient progress bar
- Layered text hierarchy
- Elevated card shadow

---

## 6. Image Treatments

### Organic Image Frame
**Purpose:** Move beyond rectangular images
```jsx
<div className="relative">
  {/* Organic background shape */}
  <div className="absolute -inset-6 bg-gradient-to-br from-forest/5 to-sky/10
                  rounded-[40% 60% 45% 55% / 55% 45% 60% 40%] transform rotate-3" />

  {/* Image with rounded corners */}
  <div className="relative rounded-[32px] overflow-hidden elevated-card">
    <Image src="..." alt="..." width={600} height={700} className="object-cover w-full h-[600px]" />

    {/* Sophisticated gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-forest/5 to-transparent" />

    {/* Organic accent shape */}
    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-[45% 55% 60% 40%] blur-2xl" />
  </div>
</div>
```

**Features:**
- Organic background frame (rotated, asymmetric border-radius)
- Rounded image (32px for premium feel)
- Multi-layer gradient overlay
- Organic blur accent

### Floating Quote Overlay
```jsx
<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 elevated-card">
  <p className="text-forest text-sm italic mb-2">
    "A warm, welcoming environment where healing truly begins."
  </p>
  <p className="text-warmgray text-xs font-medium">— New Horizons Client</p>
</div>
```

**Usage:** Over images to add social proof
**Effect:** Glassmorphism with testimonial

---

## 7. Trust & Reassurance Elements

### Icon + Text Trust Indicators
```jsx
<div className="flex items-center gap-3">
  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
    <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016..." />
    </svg>
  </div>
  <div>
    <p className="text-forest font-semibold text-sm">Confidential Care</p>
    <p className="text-warmgray text-xs">HIPAA compliant</p>
  </div>
</div>
```

**Features:**
- Icon in circular background (brand color at 10% opacity)
- Two-line text (bold + light)
- Compact, scannable
- Flexible grid layout

### Stat Display with Decorative Accents
```jsx
<div className="text-center group relative">
  {/* Top decorative accent */}
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1
                  bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

  <p className="text-gold font-bold text-5xl lg:text-6xl mb-3 tracking-tight">25+</p>
  <p className="text-white font-medium text-base lg:text-lg mb-1">Licensed Clinicians</p>
  <p className="text-white/60 text-sm">Expert team</p>

  {/* Bottom decorative line */}
  <div className="mt-4 h-0.5 w-12 mx-auto bg-white/20 rounded-full
                  group-hover:bg-gold/40 transition-colors" />
</div>
```

**Features:**
- Top gradient accent (horizontal)
- Large number (gold for warmth)
- Three-tier text hierarchy
- Bottom line with hover state

---

## 8. Background Patterns

### Warm Texture Overlay
**Purpose:** Add tactile quality to prevent clinical feel
```jsx
<div className="warm-texture">
  {/* Content */}
</div>
```

**CSS:**
```css
.warm-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.6;
}
```

**Usage:** Hero sections, large background areas
**Effect:** Subtle grain adds warmth and depth

### Organic SVG Patterns
```jsx
<div className="absolute inset-0 overflow-hidden opacity-[0.03]">
  <svg className="absolute top-20 left-0 w-full h-96" viewBox="0 0 1200 400" fill="none" preserveAspectRatio="none">
    <path d="M-100 200 Q 300 50, 600 200 T 1300 200" stroke="currentColor" strokeWidth="3" className="text-forest"/>
    <path d="M-100 250 Q 350 100, 650 250 T 1300 250" stroke="currentColor" strokeWidth="2" className="text-gold"/>
  </svg>
</div>
```

**Features:**
- Flowing curves (quadratic bezier)
- Multiple overlapping paths
- Very low opacity (0.03)
- Full-width responsive

---

## 9. Color Usage Patterns

### Color Coding System
**Services:** forest, gold, sky rotation
**Shadows:** forest + gold tints
**Gradients:** forest → sky → gold
**Accents:** gold primary, sky secondary

### Gradient Formulas

**Background Gradient (Warm):**
```css
background: linear-gradient(to bottom right,
  var(--warm-cream) 0%,
  rgba(244, 196, 48, 0.05) 40%,
  rgba(74, 155, 217, 0.08) 100%
);
```

**Overlay Gradient (Sophisticated):**
```css
background: linear-gradient(to top,
  rgba(27, 115, 64, 0.40) 0%,
  rgba(27, 115, 64, 0.05) 40%,
  transparent 100%
);
```

**Flowing Accent Gradient:**
```css
background: linear-gradient(to bottom,
  var(--gold),
  var(--sky-light),
  var(--gold)
);
```

---

## 10. Typography Patterns

### Display Headlines
```jsx
<h1 className="text-forest mb-6 max-w-xl">
  Your Journey to Healing{" "}
  <span className="relative inline-block">
    <span className="relative z-10">Starts Here</span>
    <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 300 12" fill="none">
      <path d="M0 8 Q 75 2, 150 8 T 300 8" stroke="currentColor" strokeWidth="3" className="text-gold opacity-40" fill="none"/>
    </svg>
  </span>
</h1>
```

**Pattern:**
- Split into emphasized phrase
- Organic underline on key words
- Max-width for readability
- Natural line breaks

### Body Copy with Emphasis
```jsx
<div className="flowing-accent max-w-2xl mb-10">
  <p className="text-warmgray text-lg lg:text-xl leading-relaxed mb-6">
    Primary message with strong hierarchy
  </p>
  <p className="text-warmgray/90 text-base lg:text-lg leading-relaxed">
    Supporting detail with slightly reduced emphasis
  </p>
</div>
```

**Pattern:**
- Flowing left border accent
- Two-tier sizing (lg/xl then base/lg)
- Opacity reduction for hierarchy (90%)
- Generous spacing (mb-6)

---

## 11. Animation & Interaction Patterns

### Hover Lift (Buttons)
```css
transform: scale(1.05) translateY(-2px);
box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 20px 25px rgba(0,0,0,0.15);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Icon Hover (Service Cards)
```css
transform: scale(1.1) rotate(3deg);
transition: all 0.3s ease;
```

### Expanding Accent Line
```css
width: 0;
&:hover { width: 4rem; }
transition: width 0.5s ease;
```

### Staggered Reveal
```jsx
{items.map((item, index) => (
  <div key={item.id} style={{ animationDelay: `${index * 100}ms` }}>
    {/* Content */}
  </div>
))}
```

---

## 12. Layout Patterns

### Asymmetric Hero (7/5 Split)
```jsx
<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
  <div className="lg:col-span-7">
    {/* Content - takes more space */}
  </div>
  <div className="lg:col-span-5">
    {/* Image - smaller, creates visual tension */}
  </div>
</div>
```

**Why:** More interesting than 50/50, emphasizes content priority

### Feature Grid with Breakout
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {/* Some items can span multiple columns for variety */}
  <div className="lg:col-span-2">Featured item</div>
  <div>Regular item</div>
  <div>Regular item</div>
  <div>Regular item</div>
</div>
```

---

## 13. Accessibility Patterns

### Focus Visible States
```css
a:focus-visible, button:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 2px;
}
```

### Skip to Content
```jsx
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
   focus:z-50 focus:px-4 focus:py-2 focus:bg-gold focus:text-forest focus:rounded-lg">
  Skip to main content
</a>
```

### ARIA Labels
```jsx
<button aria-label="Toggle navigation menu" aria-expanded={isOpen}>
  <svg aria-hidden="true">{/* Icon */}</svg>
</button>
```

---

## 14. Responsive Patterns

### Mobile-First Sizing
```css
/* Base (mobile) */
font-size: 2.75rem;

/* Tablet */
@media (min-width: 768px) {
  font-size: 4rem;
}

/* Desktop */
@media (min-width: 1024px) {
  font-size: 4.5rem;
}
```

### Touch-Friendly Interactions
```css
/* Minimum touch target: 44x44px */
padding: 0.75rem 1.25rem; /* 12px 20px */
min-height: 44px;

/* Hover states only on devices that support hover */
@media (hover: hover) {
  &:hover {
    transform: scale(1.05);
  }
}
```

### Simplified Mobile Organics
```jsx
{/* Desktop: complex organic shape */}
<div className="hidden lg:block accent-shape-1" />

{/* Mobile: simpler gradient */}
<div className="lg:hidden bg-gradient-to-br from-gold/5 to-sky/5" />
```

---

## 15. Content Pattern Guidelines

### When to Use Each Pattern:

**Organic Shapes:**
- Hero sections
- Full-width backgrounds
- Section dividers
- Image frames

**Flowing Lines:**
- Headline emphasis
- Quote blocks
- Section accents
- Navigation underlines

**Elevated Cards:**
- Service offerings
- Feature blocks
- Team members
- Testimonials

**Trust Indicators:**
- Stats sections
- Credibility markers
- Process steps
- Benefits lists

**Color Coding:**
- Category differentiation
- Visual hierarchy
- Navigation cues
- Brand consistency

---

## 📐 Design Token Reference

### Spacing Scale (8px base)
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)

### Border Radius Scale
- sm: 0.5rem (8px) - small elements
- md: 0.75rem (12px) - default buttons
- lg: 1rem (16px) - cards
- xl: 1.5rem (24px) - premium cards
- 2xl: 2rem (32px) - images
- Organic: 40% 60% 45% 55% / 55% 45% 60% 40%

### Shadow Depths
- sm: Subtle lift (hover states)
- md: Standard elevation (cards)
- lg: Prominent elevation (modals)
- xl: Maximum elevation (dropdowns)
- Custom: Brand-tinted (forest + gold)

### Animation Timing
- Fast: 200ms (color changes)
- Medium: 300ms (transforms)
- Slow: 500ms (complex transitions)
- Morph: 20s (organic shapes)

---

**Usage:** Reference this document when creating new sections or components to maintain visual consistency with the established design language.

**Last Updated:** January 6, 2026
