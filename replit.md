# ChatGPT Wrapped 2025 - ACE Edition

## Overview
An interactive, visually stunning website that showcases a personalized ChatGPT Wrapped 2025 experience for "Ace". Inspired by Spotify Wrapped, this site features scroll-triggered animations, gradient backgrounds, and engaging data visualizations divided into two distinct sections.

## Project Architecture

### Frontend (React + TypeScript + Tailwind)
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Routing**: Wouter
- **State**: React hooks (useState, useEffect, useRef)
- **Animations**: Custom CSS keyframes + Intersection Observer API

### Key Components

#### Part 1 - Professional/Polished Section
- `HeroSection.tsx` - Full-screen animated gradient hero with sparkle effects
- `TopCategories.tsx` - Grid of top 5 categories with animated cards
- `CategoryCard.tsx` - Individual category card with hover effects
- `MonthlyTimeline.tsx` - Vertical timeline with activity visualization
- `Superlatives.tsx` - Awards-style superlative cards
- `Moodboard.tsx` - Visual color theme representation
- `ProfileCard.tsx` - User profile summary card
- `FinalQuote.tsx` - Dramatic closing quote section

#### Part 2 - Playful/Chaotic Section
- `SectionDivider.tsx` - Gradient transition divider
- `FunnyVersion.tsx` - Humorous/meme-style stats
- `GenZTagalog.tsx` - Filipino Gen Z style presentation
- `VisualPoster.tsx` - ASCII art poster display
- `AnalyticsDashboard.tsx` - Detailed analytics with charts
- `Footer.tsx` - Site footer

### Color Palette (Custom CSS Variables)
- Tech Blue: `hsl(210, 100%, 50%)`
- Mandarin Gold: `hsl(43, 96%, 56%)`
- Portfolio Pink: `hsl(330, 81%, 60%)`
- Capstone Green: `hsl(142, 76%, 45%)`
- Admin Grey: `hsl(0, 0%, 45%)`

### Animation System
- `animate-fade-in-up` - Fade in from below
- `animate-scale-in` - Scale up effect
- `animate-gradient-shift` - Moving gradient background
- `animate-bounce-subtle` - Gentle bounce
- `animate-pulse-glow` - Subtle pulsing glow
- `animate-bar-fill` - Progress bar fill animation

## File Structure
```
client/src/
├── components/
│   ├── examples/           # Example components for preview
│   ├── ui/                 # Shadcn UI components
│   ├── HeroSection.tsx
│   ├── TopCategories.tsx
│   ├── CategoryCard.tsx
│   ├── MonthlyTimeline.tsx
│   ├── Superlatives.tsx
│   ├── Moodboard.tsx
│   ├── ProfileCard.tsx
│   ├── FinalQuote.tsx
│   ├── SectionDivider.tsx
│   ├── FunnyVersion.tsx
│   ├── GenZTagalog.tsx
│   ├── VisualPoster.tsx
│   ├── AnalyticsDashboard.tsx
│   └── Footer.tsx
├── pages/
│   └── home.tsx            # Main page assembly
├── App.tsx                 # Root component
└── index.css              # Global styles + CSS variables
```

## Recent Changes (December 2025)
- Initial creation of ChatGPT Wrapped 2025 website
- Implemented all sections from user's wrapped data
- Added scroll-triggered animations using Intersection Observer
- Created dark theme with custom gradient backgrounds
- Built responsive layout for mobile/tablet/desktop

## Running the Project
The application runs on port 5000 with `npm run dev` which starts both the Express backend and Vite frontend server.
