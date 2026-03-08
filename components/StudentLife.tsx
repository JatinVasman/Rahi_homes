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
    <section
      id="student-life"
      className="relative py-16 sm:py-20 lg:py-32 bg-[#FFF9F0] overflow-hidden"
    >
      <OrganicBlobs />
      <CurvedDivider fromColor="#FFF9F0" toColor="#FFF9F0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
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
                      'radial-gradient(ellipse at center, rgba(255, 60, 120, 0.15) 0%, rgba(255, 107, 43, 0.1) 40%, transparent 70%)',
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-shadow-soft">
                Student Life at Rahi Homes
              </h2>
              <div
                className="w-20 h-1 mb-6 sm:mb-8"
                style={{ background: 'linear-gradient(90deg, #FF3C78, #FF6B2B, #FFB800)' }}
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

          {/* Dual Image Collage Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative h-[500px] sm:h-[600px] lg:h-[700px] w-full"
          >
            {/* Image 1: Main (larger, back) */}
            <motion.div
              whileHover={{ scale: 1.05, zIndex: 30 }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 right-0 w-[80%] h-[70%] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white"
            >
              <Image
                src="/images/students-images2.jpeg"
                alt="Students Community at Rahi Homes 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>

            {/* Image 2: Secondary (smaller, front overlapping) */}
            <motion.div
              whileHover={{ scale: 1.05, zIndex: 30 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-10 left-0 w-[70%] h-[60%] rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white"
            >
              <Image
                src="/images/students-images.jpeg"
                alt="Students Community at Rahi Homes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 70vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl -z-10 pointer-events-none" />
            <div className="absolute -bottom-8 left-10 w-32 h-32 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-xl -z-10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
