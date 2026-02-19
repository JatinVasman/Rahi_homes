'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Wifi,
  AirVent,
  Tv,
  BookOpen,
  Sparkles,
  Coffee,
  Gamepad2,
  UtensilsCrossed,
  Zap,
  Shield,
  Camera,
  WashingMachine,
} from 'lucide-react'
import { OrganicBlobs, CurvedDivider } from './BackgroundAnimations'

/* ═══════════════════════════════════════════════════
 * AMENITIES SECTION — Enhanced with rich hover effects
 *
 * BEFORE:
 *  - Simple fade-in + translateY(-8px) on hover
 *  - Basic whileHover prop
 *
 * AFTER:
 *  - Lift + scale(1.03) on hover
 *  - Rose-gold border glow via card-glow CSS class
 *  - Icon bounce animation (rotate 15deg)
 *  - Background gradient shift (beige → blush pink)
 *  - Corner flourish decoration
 *  - Stagger fade-in with 100ms delay per card
 *  - Organic blob backgrounds for the section
 *  - Dancing Script decorative subtitle
 *  - Curved section divider at top
 * ═══════════════════════════════════════════════════ */

const amenities = [
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Stay connected with blazing-fast internet',
  },
  {
    icon: AirVent,
    title: 'Air Conditioning',
    description: 'Climate-controlled comfort year-round',
  },
  {
    icon: Tv,
    title: 'Smart TV',
    description: 'Entertainment in common areas',
  },
  {
    icon: BookOpen,
    title: 'Library',
    description: 'Quiet space for reading and studying',
  },
  {
    icon: Sparkles,
    title: 'Housekeeping',
    description: 'Regular cleaning and maintenance',
  },
  {
    icon: Coffee,
    title: 'Coffee Machine',
    description: 'Fresh brew anytime you need it',
  },
  {
    icon: Gamepad2,
    title: 'Recreational Space',
    description: 'Relax and unwind with activities',
  },
  {
    icon: UtensilsCrossed,
    title: 'Home-Cooked Meals',
    description: 'Nutritious and delicious food',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Smart home features for convenience',
  },
  {
    icon: Shield,
    title: '24/7 Security',
    description: 'Your safety is our priority',
  },
  {
    icon: Camera,
    title: 'CCTV Surveillance',
    description: 'Monitored premises round the clock',
  },
  {
    icon: WashingMachine,
    title: 'Laundry Services',
    description: 'On-site washing facilities',
  },
]

/* Framer Motion stagger variants */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // 100ms delay between each card
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Amenities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="amenities" className="relative py-20 lg:py-32 bg-[#FFF5E6] overflow-hidden">
      {/* Organic blob backgrounds */}
      <OrganicBlobs />

      {/* Curved divider at top */}
      <CurvedDivider fromColor="#FFF5E6" toColor="#FFF5E6" flip />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Decorative subtitle with glow */}
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 -inset-x-12 -inset-y-4 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(255, 60, 120, 0.18) 0%, rgba(255, 107, 43, 0.12) 40%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <p className="relative font-script text-2xl sm:text-3xl text-primary tracking-wider mb-3">
              Everything You Need
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-shadow-soft">
            World-Class Amenities
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-6"
            style={{ background: 'linear-gradient(90deg, #FF3C78, #FF6B2B, #FFB800)' }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for comfortable, convenient, and secure living – all under one roof
          </p>
        </motion.div>

        {/* Staggered card grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {amenities.map((amenity) => {
            const Icon = amenity.icon
            return (
              <motion.div
                key={amenity.title}
                variants={cardVariants}
                /* ✨ Enhanced hover: lift + scale + glow */
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                className="card-glow card-gradient-hover corner-flourish rounded-xl p-6 cursor-pointer group relative"
              >
                {/* Icon container with bounce animation on hover */}
                <motion.div
                  className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary transition-colors duration-300"
                  whileHover={{ rotate: [0, 8, -5, 3, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </motion.div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-deep transition-colors duration-300">
                  {amenity.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{amenity.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
