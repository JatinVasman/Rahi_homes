'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedGradientMesh } from './BackgroundAnimations'

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacityOnScroll = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
            backgroundImage: `url('/images/Hallway.webp')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F5E6E]/20 via-transparent to-[#F04E1E]/10" />
      </motion.div>

      {/* ── Content ──────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y: contentY, opacity: opacityOnScroll }}
      >
        {/* Main heading */}
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
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1"
                  style={{
                    background: 'linear-gradient(90deg, #0F5E6E, #0F5E6E, #F04E1E)',
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
