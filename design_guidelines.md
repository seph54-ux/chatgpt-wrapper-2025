# ChatGPT Wrapped 2025 — Design Guidelines

## Design Approach

**Reference Inspiration:** Spotify Wrapped + Apple Product Launch Pages + Modern Data Visualization (Linear, Stripe Dashboard)

This is an experiential storytelling page that reveals user data through scroll-driven narrative. Each section should feel like unwrapping a gift, with deliberate pacing and visual reveals.

**Core Principles:**
- Bold, confident typography that demands attention
- Gradient treatments for visual depth and energy
- Scroll-triggered animations that feel premium, not gimmicky
- Data visualization that's beautiful first, functional second
- Two distinct visual tones: polished/professional (Part 1) and playful/chaotic (Part 2)

---

## Typography

**Display Hierarchy:**
- Hero Title: Ultra-bold, 4xl to 6xl responsive, tracking tight (-0.02em)
- Section Headers: Bold, 3xl to 5xl, dramatic line height (1.1)
- Stat Numbers: Extra bold, 5xl to 7xl, tabular numbers for alignment
- Category Labels: Medium weight, uppercase, tracking wide (0.1em), xs to sm
- Body Text: Regular weight, base to lg, comfortable line height (1.6)
- Quotes: Italic, xl to 2xl, serif font for contrast

**Font Pairing:**
- Primary: Inter or Work Sans (modern, geometric sans-serif)
- Display: Same as primary but use weight variations
- Monospace: JetBrains Mono or Fira Code (for ASCII art section)

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24, 32

**Section Structure:**
- Full viewport hero (min-h-screen)
- Content sections: py-20 to py-32 on desktop, py-12 on mobile
- Inner containers: max-w-6xl for content, max-w-7xl for wide layouts
- Card grids: gap-6 to gap-8

**Grid Patterns:**
- Top 5 Categories: Single column on mobile, 2-column on tablet, 3-column on desktop (awkward 5th item spans 2 cols or centered)
- Monthly Timeline: Vertical timeline on mobile, horizontal scroll on desktop
- Superlatives: 2-column grid with feature cards
- Analytics Dashboard: Mixed layout with larger primary metrics, smaller secondary stats

---

## Component Library

### Hero Section
- Full viewport with centered content
- Animated gradient background (diagonal or radial)
- Large title with subtitle below
- Animated accent element (sparkles, particles, or geometric shapes)
- Scroll indicator with gentle bounce animation

### Stat Cards
- Elevated cards with subtle shadow
- Icon or emoji at top (2xl to 3xl size)
- Large number display (bold, prominent)
- Category label below
- Hover effect: subtle lift (translate-y-1) and shadow increase
- Border or gradient accent on one edge

### Timeline Component
- Horizontal scrollable container on desktop
- Month labels with activity bars
- Peak months have enlarged bars
- Connecting line between months
- Tooltips on hover showing exact data

### Progress Bars
- Rounded, full-width bars
- Animated fill on scroll into view
- Percentage label inline or above
- Height: h-3 to h-4 for visibility

### Quote Blocks
- Large text, centered
- Decorative quotation marks (using Unicode or icon)
- Subtle background treatment or border accent
- Wide padding for breathing room

### ASCII Art Container
- Monospace font, pre-formatted text preservation
- Dark background with light text (high contrast)
- Border with rounded corners
- Horizontal scroll if needed on mobile

### Dashboard Cards
- Grid layout with mixed sizes (some span 2 columns)
- Chart visualizations using simple CSS (bar charts as divs)
- Metric number + label + icon pattern
- Subtle gradient or border treatments

---

## Images

**Hero Section:** No large hero image. Use animated gradient background instead.

**Section Decorative Elements:**
- Emoji/Icon illustrations: Use large emoji (3xl to 4xl) as visual anchors in stat cards (🖥️, 📁, ⚙️, ✍️, 🈶, etc.)
- Visual moodboard: Create CSS gradient blocks representing each theme
- No photography needed for this project

---

## Section-Specific Treatments

### Part 1: Polished Professional Wrapped

**Hero:** Centered, dramatic reveal with title animation on load

**Top 5 Categories:** Card grid with icons, hover animations, numbered badges (1-5)

**Monthly Timeline:** Horizontal scrollable timeline with bar graph visualization, peaks clearly emphasized

**Superlatives:** Large feature cards, 2-column layout, each with icon + title + description

**Moodboard:** CSS grid of gradient blocks, each representing a theme with label

**Profile Card:** Centered card with list of accomplishments, avatar placeholder (large emoji or initials)

**Final Quote:** Full-width, centered, dramatic typography

### Part 2: Playful Chaotic Energy

**Visual Shift:** More compressed spacing, mixed alignment, playful typography

**Funny Version:** Meme-style layout with exaggerated spacing, comic sans vibes (but keep it readable), larger emojis

**Gen Z Tagalog:** Casual feel, bullet lists with emoji, relaxed grid, Filipino aesthetic (bright, energetic)

**Visual Poster:** ASCII art in monospace container, centered, preserve exact formatting

**Analytics Dashboard:** Serious grid layout returns, but with fun labels, charts with animated fills

---

## Animations (Strategic Use)

**On Scroll Triggers:**
- Stat numbers: Count up animation from 0 to final value
- Cards: Fade in + slide up (stagger by 100ms each)
- Progress bars: Fill animation from left to right
- Timeline bars: Grow from bottom to top

**Hover States:**
- Cards: Subtle lift (2-4px) + shadow increase
- Buttons: Slight scale (1.02) + brightness increase on background

**Page Load:**
- Hero title: Fade in + scale from 0.95 to 1.0
- Gradient background: Slow animated shift

**Keep Animations Under 0.5s Duration:** Quick, snappy, premium feel

---

## Responsive Behavior

**Mobile (< 768px):**
- All grids collapse to single column
- Timeline becomes vertical scroll
- Font sizes reduce by 1-2 steps
- Padding reduces to py-12

**Tablet (768px - 1024px):**
- 2-column grids where appropriate
- Moderate font scaling
- Timeline stays horizontal but may scroll

**Desktop (> 1024px):**
- Full 3-4 column layouts
- Largest typography
- Generous spacing (py-24 to py-32)