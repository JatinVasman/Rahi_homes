'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { OrganicBlobs, CurvedDivider } from './BackgroundAnimations'

export default function StudentLife() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="student-life" className="relative section-padding bg-[#EFE9D8] overflow-hidden">
      <OrganicBlobs />
      <CurvedDivider fromColor="#EFE9D8" toColor="#EFE9D8" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Column — single image on the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[350px] sm:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl group order-1"
          >
            <Image
              src="/images/students-images.jpeg"
              alt="Students Community at Rahi Homes"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/15 rounded-2xl transition-colors duration-500" />

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-xl -z-10 pointer-events-none" />
            <div className="absolute -bottom-8 -left-4 w-32 h-32 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-xl -z-10 pointer-events-none" />
          </motion.div>

          {/* Content Column — text on the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative inline-block">
                <motion.div
                  className="absolute inset-0 -inset-x-12 -inset-y-4 rounded-full pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(15, 94, 110, 0.12) 0%, rgba(15, 94, 110, 0.06) 40%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <p className="relative font-script text-2xl sm:text-3xl text-primary tracking-wider mb-3">
                  A Vibrant Community
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F5E6E] mb-4 sm:mb-6 text-shadow-soft">
                Student Life at Rahi Homes
              </h2>
              <div
                className="w-20 h-1 mb-6 sm:mb-8"
                style={{ background: 'linear-gradient(90deg, #0F5E6E, #0F5E6E, #F04E1E)' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6 text-gray-700 leading-relaxed text-lg"
            >
              <p>
                At Rahi Homes, you&apos;ll find more than just a place to stay—you&apos;ll find a
                supportive <span className="font-semibold text-primary">community</span>.
              </p>
              <p>
                Whether it&apos;s late-night study sessions, celebrating birthdays, or simply
                relaxing after college, our environment is designed to help you thrive.
              </p>
              <p>
                Build lifelong friendships and experience the vibrant student life that makes our
                hostel truly special.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
