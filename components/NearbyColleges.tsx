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
      className="py-20 lg:py-32 bg-gradient-to-b from-beige-light to-white relative overflow-hidden"
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
                    'radial-gradient(ellipse at center, rgba(183, 110, 121, 0.35) 0%, rgba(232, 213, 242, 0.25) 40%, transparent 70%)',
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
              <p className="relative font-dancing text-xl sm:text-2xl text-rose-gold mb-3">
                Perfectly Located
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-shadow-soft">
              Nearby Colleges & Universities
            </h2>
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{ background: 'linear-gradient(90deg, #B23A3A, #B76E79, #FFB5A0)' }}
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
                <div className="absolute inset-0 bg-gradient-to-br from-blush/30 via-transparent to-lavender-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                <div className="flex items-start space-x-4 relative z-10">
                  {/* Icon with rose-gold transition on hover */}
                  <motion.div
                    className="bg-muted-red/10 rounded-full p-3 flex-shrink-0 group-hover:bg-rose-gold/15 transition-colors duration-300"
                    whileHover={{ rotate: [0, 5, -3, 0], scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <GraduationCap className="w-6 h-6 text-muted-red group-hover:text-rose-gold transition-colors duration-300" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug group-hover:text-muted-red transition-colors duration-300">
                      {college.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1.5 text-muted-red group-hover:text-rose-gold transition-colors duration-300" />
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
