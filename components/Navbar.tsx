'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import Image from 'next/image'

/* ═══════════════════════════════════════════════════
 * NAVBAR — Premium aesthetic with glassmorphism,
 *          gradient accents, and micro-interactions
 * ═══════════════════════════════════════════════════ */

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Colleges', href: '#colleges' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navItems.map((item) => item.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(`#${sections[i]}`)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-rose-gold/5'
          : 'bg-gradient-to-b from-black/30 to-transparent'
      }`}
    >
      {/* Gradient accent line at bottom of navbar when scrolled */}
      {isScrolled && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background:
              'linear-gradient(90deg, transparent, #B76E79, #FFB5A0, #E8D5F2, transparent)',
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with hover glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection('#home')}
              className="flex items-center group transition-all duration-300"
            >
              <div
                className={`rounded-lg px-2.5 py-1.5 transition-all duration-400 ${
                  isScrolled
                    ? 'bg-transparent group-hover:bg-blush/20'
                    : 'bg-white/95 shadow-lg shadow-black/10 group-hover:shadow-rose-gold/20 group-hover:shadow-xl'
                }`}
              >
                <Image
                  src="/images/rahi_home_Logo.png"
                  alt="Rahi Homes Logo"
                  width={150}
                  height={60}
                  className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href
              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-150 rounded-lg ${
                    isScrolled
                      ? isActive
                        ? 'text-muted-red'
                        : 'text-gray-600 hover:text-muted-red hover:bg-blush/20'
                      : isActive
                        ? 'text-white'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}

                  {/* Active indicator — animated underline dot */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                      style={{
                        background: isScrolled
                          ? 'linear-gradient(135deg, #B23A3A, #B76E79)'
                          : 'white',
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              )
            })}

            {/* CTA Button — gradient with shimmer */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="relative ml-4 overflow-hidden text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-150 group"
              style={{
                background: 'linear-gradient(135deg, #B23A3A, #B76E79, #c75050)',
              }}
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-400 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Book a Visit
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className={`p-2.5 rounded-xl transition-all duration-150 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-blush/20 hover:text-muted-red'
                  : 'text-white hover:bg-white/15 backdrop-blur-sm'
              }`}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — full glassmorphism overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-rose-gold/10"
          >
            {/* Rose-gold gradient line at top */}
            <div
              className="h-[1px] w-full"
              style={{
                background: 'linear-gradient(90deg, transparent, #B76E79, #FFB5A0, transparent)',
              }}
            />

            <div className="px-5 py-6 space-y-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center w-full text-left px-4 py-3.5 rounded-xl transition-all duration-250 font-medium ${
                      isActive
                        ? 'bg-gradient-to-r from-blush/40 to-lavender-light/20 text-muted-red'
                        : 'text-gray-700 hover:bg-blush/20 hover:text-muted-red'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="mobileActive"
                        className="w-1 h-5 rounded-full mr-3"
                        style={{
                          background: 'linear-gradient(180deg, #B23A3A, #B76E79)',
                        }}
                      />
                    )}
                    {item.name}
                  </motion.button>
                )
              })}

              {/* Mobile CTA */}
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollToSection('#contact')}
                className="relative overflow-hidden w-full text-white px-6 py-3.5 rounded-full transition-all mt-4 shadow-lg font-medium group"
                style={{
                  background: 'linear-gradient(135deg, #B23A3A, #B76E79, #c75050)',
                }}
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Book a Visit
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
