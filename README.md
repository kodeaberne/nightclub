# Nightclub Website

A modern nightclub website built with Next.js, featuring event listings, blog posts, booking system, and interactive media components.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Libraries:**
    - Motion (Framer Motion) - Animations
    - Swiper - Carousel components
    - React Icons - Icon library
- **Validation:** Zod
- **Runtime:** React 19

## Project Structure

```
app/
├── actions.ts              # Global server actions (newsletter)
├── components/
│   ├── blog/              # Blog-related components
│   │   ├── Blogposts.tsx  # Blog post listing
│   │   └── PostComment.tsx # Comment form component
│   ├── booking/           # Booking form components
│   │   └── BookingForm.tsx # Table reservation form
│   ├── contact/           # Contact form components
│   │   └── PostContact.tsx # Contact message form
│   ├── global/            # Shared components
│   │   ├── Header.tsx     # Page header component
│   │   ├── Footer.tsx     # Site footer
│   │   ├── Navigation.tsx # Main navigation (sticky, responsive)
│   │   ├── MenuOverlay.tsx # Mobile menu overlay
│   │   └── Title.tsx      # Page title component
│   └── index/             # Homepage components
│       ├── Hero.tsx       # Hero section
│       ├── Welcome.tsx    # Welcome section
│       ├── Events.tsx     # Events listing
│       ├── Gallery.tsx    # Image gallery
│       ├── MusicPlayer.tsx # Interactive music player
│       ├── Video.tsx      # Video showcase
│       ├── Testimonials.tsx # Customer testimonials
│       ├── Blogposts.tsx  # Blog preview
│       ├── Newsletter.tsx # Newsletter signup
│       └── EmailForm.tsx # Email form component
├── blog/
│   ├── [id]/
│   │   └── page.tsx       # Dynamic blog post page
│   ├── actions.ts         # Blog server actions (comments)
│   └── page.tsx           # Blog listing page
├── booking/
│   ├── actions.ts         # Booking server actions
│   └── page.tsx           # Booking page
├── contact/
│   ├── actions.ts         # Contact server actions
│   └── page.tsx           # Contact page
├── layout.tsx             # Root layout
├── page.tsx               # Homepage
└── globals.css            # Global styles and Tailwind config
```

## Features

### Homepage

- **Hero Section:** Full-screen hero with background images
- **Events:** Dynamic event listings fetched from API
- **Gallery:** Image gallery with carousel functionality
- **Music Player:** Interactive audio player with playlist, shuffle, and controls
- **Video Showcase:** Video carousel with navigation
- **Testimonials:** Customer testimonials display
- **Blog Preview:** Latest blog posts preview
- **Newsletter:** Email subscription form

### Blog

- **Blog Listing:** Grid/list view of all blog posts
- **Dynamic Blog Posts:** Individual post pages with full content
- **Comments System:** Post comments with validation
- **Comment Threading:** Display comments with timestamps

### Booking

- **Table Reservation:** Select table, date, guests, and contact info
- **Availability Check:** Validates table availability before booking
- **Form Validation:** Client and server-side validation

### Contact

- **Contact Form:** Name, email, and message submission
- **Form Validation:** Input validation with error messages

## API Integration

The application connects to a backend API running on `localhost:4000`. The following endpoints are used:

### GET Endpoints

- `GET /events` - Fetch all events
- `GET /gallery` - Fetch gallery images
- `GET /testimonials` - Fetch customer testimonials
- `GET /blogposts` - Fetch all blog posts
- `GET /blogposts/:id` - Fetch single blog post
- `GET /comments?blogpostId=:id` - Fetch comments for a blog post
- `GET /reservations` - Fetch all reservations (for availability check)

### POST Endpoints

- `POST /newsletters` - Subscribe to newsletter
- `POST /comments` - Submit blog post comment
- `POST /reservations` - Create table reservation
- `POST /contact_messages` - Submit contact message

## Component Architecture

### Server Components

- Pages use Server Components by default
- Data fetching happens at the page level
- Uses `'use cache'` directive for data caching
- Suspense boundaries for loading states

### Client Components

Components marked with `'use client'`:

- `MusicPlayer` - Requires browser APIs (audio, state)
- `Navigation` - Interactive menu with state
- `MenuOverlay` - Mobile menu overlay
- Form components - Handle user interactions

### Server Actions

All form submissions use Next.js Server Actions:

- `newsletterSignup` - Newsletter subscription
- `submitComment` - Blog post comments
- `submitBooking` - Table reservations
- `submitContact` - Contact messages

**Pattern:** Server actions return state objects with:

- `success`: Boolean indicating success
- `errors`: Object with field-specific errors
- `fields`: Object with form field values

## Styling

### Tailwind CSS 4

- Custom theme configuration in `globals.css`
- Custom color: `pink` (#ff2a70)
- Custom font: Ubuntu (loaded via `next/font/google`)
- Responsive design with mobile-first approach

### Custom Styles

- Swiper pagination and navigation customization
- Background pattern image
- Custom video swiper button positioning

### Design System

- Primary color: Pink (#ff2a70)
- Background: Black (#000000)
- Foreground: White (#ffffff)
- Font: Ubuntu (weights: 300, 400, 500, 700)

## Form Validation

All forms implement consistent validation:

### Validation Rules

- **Name:** Minimum 3 characters
- **Email:** Minimum 5 characters
- **Content/Message:** Minimum 10 characters
- **Phone:** Minimum 6 characters
- **Date:** Minimum 10 characters (date format)
- **Table:** Must be selected
- **Guests:** Minimum 1 character

### Validation Flow

1. Client-side validation (if implemented)
2. Server-side validation in Server Actions
3. Error state returned to form component
4. Success state triggers UI feedback

### Special Validations

- **Booking:** Checks table availability before submission
- **Comments:** Validates blog post ID exists

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Backend API running on `localhost:4000`

### Installation

```bash
npm install
```

### Development

1. Start the backend API server on port 4000
2. Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Configuration

### Next.js Config (`next.config.ts`)

- Component caching enabled
- Image optimization configured
- Remote patterns for `localhost:4000` API

### TypeScript Config

- Path aliases: `@/*` maps to project root
- Strict mode enabled
- React JSX transform

### Environment

- API endpoint: `http://localhost:4000` (hardcoded, consider environment variables for production)

## Development Patterns

### Data Fetching

- Server Components fetch data directly in components
- Uses native `fetch` with Next.js caching
- Suspense boundaries for loading states
- Cache directives for optimal performance

### Routing

- App Router file-based routing
- Dynamic routes: `[id]` for blog posts
- Navigation uses Next.js `Link` component
- Active route highlighting in navigation

### State Management

- React hooks (`useState`, `useEffect`) for client components
- Server Actions for form state management
- URL state for navigation active states

### Code Organization

- Components organized by feature domain
- Server actions co-located with pages
- Shared components in `global/` directory
- TypeScript for type safety

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment Considerations

1. **Environment Variables:** Replace hardcoded API URLs with environment variables
2. **API Endpoint:** Update `next.config.ts` remote patterns for production API
3. **Image Optimization:** Configure production image domains
4. **Error Handling:** Add error boundaries and error pages
5. **Loading States:** Enhance Suspense fallbacks

## Browser Support

- Modern browsers with ES2017+ support
- Responsive design for mobile, tablet, and desktop
- Touch-friendly interactions for mobile devices
