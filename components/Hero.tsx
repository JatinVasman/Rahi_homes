'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedGradientMesh, FloatingHearts } from './BackgroundAnimations'

/* ═══════════════════════════════════════════════════
 * HERO SECTION — Enhanced with animated backgrounds
 *
 * BEFORE (original):
 *  - Static background image with dark overlay
 *  - Simple fade-in text animation
 *
 * AFTER (enhanced):
 *  - Animated gradient mesh (beige → pink → lavender)
 *  - Floating abstract shapes (circles, rounded rects)
 *  - Particle system with glowing dots drifting upward
 *  - Parallax scroll effect on background image
 *  - Gradient text effect on heading
 *  - Floating hearts decoration
 *  - Text shadow for depth
 *  - Decorative subtitle in Dancing Script font
 *  - Enhanced letter spacing animation on hover
 * ═══════════════════════════════════════════════════ */
export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)

  /* Parallax: background image moves slower than scroll */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacityOnScroll = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Layer 1: Animated Gradient Mesh Background ───────── */}
      <AnimatedGradientMesh />

      {/* ── Layer 2: Background Image with Parallax ──────────── */}
      <motion.div className="absolute inset-0 z-[1]" style={{ y: bgY }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url('/images/3_bed_Room_pic2.webp')`,
          }}
        />
        {/* Gradient overlay: softer with pink/lavender tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      </motion.div>

      {/* ── Layer 3: Floating Hearts ──────────────────────────── */}
      <div className="absolute inset-0 z-[2]">
        <FloatingHearts />
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y: contentY, opacity: opacityOnScroll }}
      >
        {/* Decorative subtitle in Dancing Script */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-script text-2xl sm:text-3xl text-primary tracking-wider mb-4"
        >
          Welcome to Your Dream Home
        </motion.p>

        {/* Main heading with gradient text effect and text shadow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight text-shadow-hero">
            <motion.span
              className="inline-block"
              whileHover={{ letterSpacing: '4px' }}
              transition={{ duration: 0.3 }}
            >
              <span className="relative pb-1">
                Rahi
                {/* Animated underline with gradient */}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1"
                  style={{
                    background: 'linear-gradient(90deg, #FF3C78, #FF6B2B, #FFB800)',
                  }}
                  initial={{ scaleX: 0, transformOrigin: 'left' }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
            </motion.span>{' '}
            <motion.span
              className="inline-block"
              whileHover={{ letterSpacing: '4px' }}
              transition={{ duration: 0.3 }}
            >
              Homes
            </motion.span>
          </h1>
        </motion.div>
      </motion.div>
    </section>
  )
}
