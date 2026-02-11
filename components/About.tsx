'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { OrganicBlobs, CurvedDivider } from './BackgroundAnimations'

/* ═══════════════════════════════════════════════════
 * ABOUT SECTION — Enhanced with blobs, stagger, and
 *                 gradient text effects
 *
 * BEFORE:
 *  - Simple fade-in/slide-in animations
 *  - Plain bg-beige-light background
 *
 * AFTER:
 *  - Organic blob backgrounds for depth
 *  - Dancing Script decorative subtitle
 *  - Gradient text effect on heading
 *  - Stagger content animations
 *  - Image hover zoom effect
 *  - Number counter-style stat cards
 *  - Curved section divider
 * ═══════════════════════════════════════════════════ */

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-32 bg-beige-light overflow-hidden">
      {/* Decorative blob backgrounds */}
      <OrganicBlobs />

      {/* Curved bottom divider */}
      <CurvedDivider fromColor="#F5F1EA" toColor="#FFFFFF" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Column with hover zoom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <Image
              src="/images/2_bed_Room_pic1.webp"
              alt="Rahi Homes Interior - 2 Bed Room"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            {/* Rose-gold border glow on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-rose-gold/30 rounded-2xl transition-colors duration-500" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Dancing Script decorative subtitle with glow */}
              <div className="relative inline-block">
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
                  Your Home Away From Home
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-shadow-soft">
                About Rahi Homes
              </h2>
              <div
                className="w-20 h-1 mb-6 sm:mb-8"
                style={{ background: 'linear-gradient(90deg, #B23A3A, #B76E79, #FFB5A0)' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6 text-gray-700 leading-relaxed"
            >
              <p>
                Welcome to <span className="font-semibold text-muted-red">Rahi Homes</span>, a
                premium girls hostel nestled in the heart of{' '}
                <span className="font-semibold">Vile Parle, Mumbai</span>, conveniently located
                opposite the prestigious <span className="font-semibold">DJ Sanghvi College</span>.
              </p>

              <p>
                Our thoughtfully designed <span className="font-semibold">3-floor property</span>{' '}
                offers comfortable accommodation options including{' '}
                <span className="font-semibold">2, 3, and 4-sharing rooms</span>, each crafted to
                provide the perfect balance of privacy and community living.
              </p>

              <p>
                Every room features <span className="font-semibold">well-ventilated spaces</span>{' '}
                with dedicated study desks for your academic pursuits, spacious wardrobes for your
                belongings, and modern bathrooms designed for your comfort and convenience.
              </p>

              <p>
                At Rahi Homes, we believe in creating more than just a place to stay – we foster a
                warm, <span className="font-semibold">community-focused environment</span> where
                young women can thrive, form lasting friendships, and feel truly at home while
                pursuing their dreams in Mumbai.
              </p>
            </motion.div>

            {/* Stats with hover animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              {[
                { value: '3', label: 'Floors' },
                { value: '2-4', label: 'Sharing Options' },
                { value: '24/7', label: 'Security' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="text-center group cursor-default"
                >
                  <div className="text-4xl font-bold text-muted-red mb-2 group-hover:text-rose-gold transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
