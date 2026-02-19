'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, MapPin } from 'lucide-react'
import { CursorSpotlight } from './BackgroundAnimations'

/* ═══════════════════════════════════════════════════
 * NEARBY COLLEGES — Enhanced with rich hover effects
 *
 * BEFORE:
 *  - Simple whileHover y: -5
 *  - Basic shadow-lg → shadow-2xl
 *
 * AFTER:
 *  - Smooth card zoom (scale 1.03)
 *  - Gradient overlay animation on hover
 *  - Icon color transition to rose gold
 *  - Soft shadow expansion with rose-gold tint
 *  - Alternating slide-in (left/right) on scroll
 *  - Cursor spotlight effect on section
 *  - Dancing Script section subtitle
 *  - Dotted pattern border animation
 *  - Gradient heading divider
 * ═══════════════════════════════════════════════════ */

const colleges = [
  {
    name: 'DJ Sanghvi College of Engineering',
    distance: '100m',
  },
  {
    name: 'Narsee Monjee College of Commerce and Economics',
    distance: '400m',
  },
  {
    name: 'Mukesh Patel School of Technology Management & Engineering',
    distance: '250m',
  },
  {
    name: 'Bhagubhai Mafatlal Polytechnic & College of Engineering',
    distance: '400m',
  },
  {
    name: 'NMIMS',
    distance: '500m',
  },
  {
    name: 'Mithibai College of Arts',
    distance: '600m',
  },
]

/* Stagger container for alternating slide-in */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export default function NearbyColleges() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="colleges"
      className="py-20 lg:py-32 bg-gradient-to-b from-[#FFEFD6] to-[#FFF5E6] relative overflow-hidden"
    >
      <CursorSpotlight className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Decorative subtitle with fade-away background animation */}
            <div className="relative inline-block">
              {/* Animated glowing blob behind the text */}
              <motion.div
                className="absolute inset-0 -inset-x-12 -inset-y-4 rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(255, 111, 174, 0.15) 0%, rgba(205, 180, 255, 0.1) 40%, transparent 70%)',
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
                Perfectly Located
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-shadow-soft">
              Nearby Colleges & Universities
            </h2>
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{ background: 'linear-gradient(90deg, #FF3C78, #FF6B2B, #FFB800)' }}
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfectly located near Mumbai&apos;s premier educational institutions
            </p>
          </motion.div>

          {/* Card grid with stagger + alternating slide-in */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {colleges.map((college, index) => (
              <motion.div
                key={college.name}
                /* Alternating slide-in: even from left, odd from right */
                variants={{
                  hidden: {
                    opacity: 0,
                    x: index % 2 === 0 ? -40 : 40,
                    scale: 0.95,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: 'easeOut' },
                  },
                }}
                /* ✨ Enhanced hover: zoom + shadow expansion */
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                className="card-glow bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
              >
                {/* Gradient overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                <div className="flex items-start space-x-4 relative z-10">
                  {/* Icon with rose-gold transition on hover */}
                  <motion.div
                    className="bg-primary/8 rounded-full p-3 flex-shrink-0 group-hover:bg-primary/12 transition-colors duration-300"
                    whileHover={{ rotate: [0, 5, -3, 0], scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <GraduationCap className="w-6 h-6 text-primary group-hover:text-deep transition-colors duration-300" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug group-hover:text-deep transition-colors duration-300">
                      {college.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1.5 text-primary group-hover:text-deep transition-colors duration-300" />
                      <span className="font-medium">{college.distance}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          ></motion.div>
        </div>
      </CursorSpotlight>
    </section>
  )
}
