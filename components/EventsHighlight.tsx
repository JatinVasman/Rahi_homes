'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const events = [
  { src: '/Event/1.mp4' },
  { src: '/Event/2.mp4' },
  { src: '/Event/3.mp4' },
]

export default function EventsHighlight() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="events"
      className="relative section-padding bg-[#EFE9D8] overflow-hidden"
    >
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
              Highlights
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F5E6E] mb-4 sm:mb-6 text-shadow-soft">
            Our Events
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-6"
            style={{
              background: 'linear-gradient(90deg, #0F5E6E, #0F5E6E, #F04E1E)',
            }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Relive the best moments from our community events and celebrations
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              <div
                className="relative overflow-hidden bg-white"
                style={{
                  borderRadius: '16px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.10)',
                }}
              >
                {/* Video container — 9:16 portrait for mobile-shot event clips */}
                <div
                  className="relative w-full"
                  style={{ paddingBottom: '150%' }}
                >
                  <video
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                    controls
                    preload="metadata"
                    playsInline
                    muted
                    style={{ borderRadius: '16px' }}
                  >
                    <source src={event.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
