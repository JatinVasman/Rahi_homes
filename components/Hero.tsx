'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Rahi Homes
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-1 bg-muted-red mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 font-light"
          >
            Where Comfort Meets Community
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl sm:text-2xl text-beige-light mb-8"
          >
            Premium Girls Hostel in the Heart of Vile Parle, Mumbai
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Experience safe, stylish, and thoughtfully designed living spaces crafted for modern women who value comfort, community, and convenience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-muted-red text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Book a Visit
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-medium border-2 border-white hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center text-white hover:text-beige-light transition-colors cursor-pointer"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  )
}
