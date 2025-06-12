# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package Manager

**This project uses PNPM exclusively.**

- Always use `pnpm` commands, never `yarn` or `npm`
- Lock file is `pnpm-lock.yaml`

## Commands

### Development

- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm build` - Create production build in .next directory
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

### Dependencies

- `pnpm install` - Install all dependencies
- `pnpm add <package>` - Add production dependency
- `pnpm add -D <package>` - Add development dependency

## Architecture

This is a modern React TypeScript application for Environmental Law and Science, PLLC built with Next.js 15 and the App Router.

### Tech Stack

- **Next.js 15** with App Router for SSG and routing
- **React 19** with TypeScript for type safety
- **Tailwind CSS** for utility-first styling
- **Material-UI v7** for UI components (Button, Typography, etc.)
- **Vercel Analytics** for performance tracking
- **pnpm** for package management

### Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── practice_focus/    # Practice areas page
│   ├── presentations/     # Presentations page
│   └── representative_experience/ # Case studies page
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/             # Legacy page components
│   ├── configs/           # Theme and configuration
│   ├── styles/            # Custom CSS for complex animations
│   └── utils/             # Utility functions (cn for class merging)
├── public/
│   ├── images/            # Optimized images
│   └── manifest.json      # PWA manifest
├── plans/                 # Migration documentation
└── vercel.json            # Vercel deployment configuration
```

### Routing Structure

All routes use Next.js App Router (app/ directory):

- `/` - Home page with hero section and service panels
- `/about` - About the firm
- `/experience` - Professional experience
- `/practice_focus` - Practice areas and specializations
- `/presentations` - Speaking engagements and presentations
- `/contact` - Contact information
- `/representative_experience` - Case studies and past work

### Component Architecture

#### Layout Components

- **Navbar** - Fixed top navigation with hover effects
- **Footer** - Bottom footer with LinkedIn link
- **Logo** - Firm branding and home link
- **NavLinks/NavLink** - Navigation with active state and hover underlines

#### Page Templates

- **CoreTemplate** - Main content template with light/dark modes and images
- **SimpleTemplate** - Simplified page template for basic content

#### Content Components

- **Panel** - Interactive service panels with Material-UI Cards
- **CorePanel** - Main practice focus section with image and panels
- **AboutPanel/ContactPanel** - Specific content sections
- **Transition/BlueTransition** - Visual transition elements

#### Practice Area Components

- **PFAS** - PFAS and Chemical Regulation content
- **ContaminatedSites** - Contaminated Sites and Brownfields
- **Compliance** - Environmental Compliance and Advocacy
- **BusinessTransactions** - Transactional Advice

### Styling Approach

#### Tailwind CSS (Primary)

- Utility-first CSS framework for most styling
- Custom configuration in `tailwind.config.js` with brand colors and fonts
- Use `cn()` utility function for conditional classes

#### Material-UI Components

- Used for complex UI components (Button, Typography, Card, etc.)
- Custom theme configuration in `src/configs/theme.ts`
- Integrated with Tailwind for consistent styling

#### Custom CSS

- Complex animations in `src/styles/components.css`
- Hover underline effects for navigation
- Global styles in `src/configs/global.css`

### Key Design Patterns

#### Styling

```typescript
// Use cn utility for conditional classes
import { cn } from '../utils/cn'

<div className={cn(
  "base-classes",
  condition && "conditional-classes"
)}>
```

#### Component Structure

```typescript
// Functional components with TypeScript
interface Props {
  title: string
  children: React.ReactNode
}

const Component = ({ title, children }: Props): React.ReactElement => {
  return (
    <div className="tailwind-classes">
      <Typography variant="h1">{title}</Typography>
      {children}
    </div>
  )
}
```

#### Image Handling

```typescript
// Next.js Image optimization
import Image from 'next/image'

<Image
  src="/images/example.jpg"
  alt="Description"
  width={800}
  height={600}
  style={{ objectFit: 'cover' }}
/>
```

### Performance Optimizations

- Static Site Generation (SSG) for all pages
- Next.js Image optimization for all images
- Tailwind CSS purging for minimal bundle size
- Modern ES modules and tree shaking

### Deployment

- **Platform**: Vercel with automatic deployments
- **Build Command**: `pnpm build`
- **Install Command**: `pnpm install`
- **Node.js Version**: 20.x
- **Framework**: Auto-detected Next.js

### Development Guidelines

#### Code Quality

- TypeScript strict mode enabled
- ESLint and Prettier configured
- Functional components with proper TypeScript types
- Consistent use of `React.ReactElement` return type

#### Styling Rules

- Use Tailwind utilities for styling
- Keep Material-UI components for complex UI elements
- Use custom CSS sparingly for complex animations only
- Follow mobile-first responsive design

#### File Organization

- Components in `src/components/` by function
- Pages in both `app/` (new App Router) and `src/pages/` (legacy)
- Images in `public/images/` with optimized formats
- Utilities in `src/utils/`
