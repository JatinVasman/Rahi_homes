# Rahi Homes - Premium Girls Hostel Website

A modern, animated, and beautifully designed Next.js website for Rahi Homes — a premium girls hostel in Vile Parle, Mumbai. Features a feminine boutique aesthetic with rich animations, micro-interactions, and a polished user experience.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (Extended with custom colors & animations)
- **Framer Motion** (Scroll animations, hover effects, layout animations)
- **React Hot Toast** (Notifications)
- **Lucide React** (Icons)
- **Google Fonts** (Playfair Display, Poppins, Dancing Script)

## ✨ Features

### Design & Aesthetics

- 🎨 Feminine boutique design with rose-gold, blush, lavender, and peach accents
- 🌸 Decorative Dancing Script subtitles with animated glow blobs
- 💕 Rising heart bubble animations in the Hero section
- ✨ Animated gradient mesh backgrounds
- 🔮 Glassmorphism navbar with gradient accent line on scroll
- 🎯 Active section detection with animated dot indicator in navbar
- 💎 Shimmer sweep effect on CTA buttons

### Animations & Interactions

- 🫧 Hearts rising like bubbles from bottom to top with side-to-side sway
- 🌊 Organic blob backgrounds and curved section dividers
- 🖱️ Cursor spotlight effect on interactive sections
- 🃏 Stagger fade-in animations on cards and content
- 🎴 Card hover effects with lift, scale, glow, and gradient shifts
- 📝 Input glow effects on form focus
- 🎠 Image carousel with smooth transitions and lightbox
- ♻️ Parallax scroll effect on Hero section

### Performance & Accessibility

- ⚡ GPU-accelerated CSS animations for 60fps performance
- 📱 Fully responsive (mobile-first approach)
- ♿ `prefers-reduced-motion` support for accessibility
- 🔍 SEO optimized with meta tags
- 🖼️ Optimized images using Next.js Image component
- 🏗️ Clean component-based architecture

## 📋 Sections

1. **Hero** — Parallax background with animated gradient mesh and rising heart bubbles
2. **About** — Two-column layout with image zoom, animated stats, and glow subtitle
3. **Gallery** — Image carousel with lightbox, hover titles, and rose-gold indicators
4. **Amenities** — Grid of 13 feature cards with stagger animations and organic blob background
5. **Nearby Colleges** — Cards with hover effects, cursor spotlight, and glow subtitle
6. **Location** — Google Maps embed with card-glow effects and glow subtitle
7. **Floor Plan** — Zoomable floor plan with download option and glow subtitle
8. **Contact** — Form with validation, input glow, animated success state, and contact info cards
9. **Footer** — Gradient accent strip, pulsing heart icon, and rose-gold link hovers

## 🛠️ Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
rahi-homes/
├── app/
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles, animations, utilities
├── components/
│   ├── Navbar.tsx              # Glassmorphism nav with active detection
│   ├── Hero.tsx                # Parallax hero with rising hearts
│   ├── About.tsx               # About with blob backgrounds
│   ├── Gallery.tsx             # Image carousel with lightbox
│   ├── Amenities.tsx           # Animated amenity cards
│   ├── NearbyColleges.tsx      # College cards with spotlight
│   ├── Location.tsx            # Map embed with glow cards
│   ├── FloorPlan.tsx           # Zoomable floor plan
│   ├── Contact.tsx             # Contact form with animations
│   ├── Footer.tsx              # Animated footer
│   └── BackgroundAnimations.tsx # Reusable animation components
├── public/images/              # Static image assets
├── tailwind.config.ts          # Extended Tailwind config
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies
```

## 🎨 Color Palette

| Color       | Hex       | Usage                         |
| ----------- | --------- | ----------------------------- |
| Soft Beige  | `#F5F1EA` | Section backgrounds           |
| Muted Red   | `#B23A3A` | Primary accent, CTA buttons   |
| Light Brown | `#C8B8A8` | Secondary text, borders       |
| Rose Gold   | `#B76E79` | Decorative accents, glows     |
| Blush       | `#FFE5E5` | Soft highlights, hover states |
| Lavender    | `#E8D5F2` | Glow effects, gradients       |
| Peach       | `#FFB5A0` | Warm accents                  |

## 🎭 Animation Components

The `BackgroundAnimations.tsx` file provides reusable components:

- **AnimatedGradientMesh** — Slow-morphing gradient background
- **FloatingShapes** — Drifting abstract shapes
- **ParticleSystem** — Glowing dots drifting upward
- **OrganicBlobs** — Morphing blob backgrounds
- **WaveAnimation** — Gentle wave section dividers
- **CursorSpotlight** — Mouse-following radial spotlight
- **FloatingHearts** — Rising bubble-style hearts
- **CurvedDivider** — Gradient curved section dividers
- **ParallaxWrapper** — Scroll-based parallax effect

## 📞 Contact Information

- **Phone**: +91 9821327143, +91 8104071032
- **Email**: rahi.homes56@gmail.com
- **Instagram**: @Rahi.homes
- **Address**: Sant Villa, 59 E, R.B. Road, Vile Parle West, Mumbai 400056

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Vercel will automatically detect Next.js and configure everything for you.

### Alternative Platforms

- **Netlify**: Supports Next.js with SSR
- **Railway**: Simple deployment with CLI
- **AWS Amplify**: Enterprise-grade hosting

## 📝 License

© 2026 Rahi Homes. All rights reserved.

## 🤝 Support

For any queries or support, please contact us through the website or reach out via email.

---

**Built with ❤️ for Rahi Homes residents**
