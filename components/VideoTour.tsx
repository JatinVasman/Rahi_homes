'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function VideoTour() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="video-tour" className="relative section-padding bg-[#EFE9D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 -inset-x-12 -inset-y-4 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(15, 94, 110, 0.12) 0%, rgba(15, 94, 110, 0.06) 40%, transparent 70%)',
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
              Explore Our Spaces
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F5E6E] mb-4 sm:mb-6 text-shadow-soft">
            Take a Tour of Rahi Home
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-6"
            style={{ background: 'linear-gradient(90deg, #0F5E6E, #0F5E6E, #F04E1E)' }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Walk through our beautifully designed rooms, common areas, and amenities
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div
            className="relative w-[80%] overflow-hidden"
            style={{
              maxWidth: '1200px',
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            }}
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <video
                className="absolute inset-0 w-full h-full object-cover"
                controls
                preload="metadata"
                playsInline
                muted
                style={{ borderRadius: '12px' }}
                poster=""
              >
                <source src="/rahi-home-tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
