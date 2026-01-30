'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 lg:py-32 bg-beige-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069"
              alt="Rahi Homes Interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About Rahi Homes
              </h2>
              <div className="w-20 h-1 bg-muted-red mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6 text-gray-700 text-lg leading-relaxed"
            >
              <p>
                Welcome to <span className="font-semibold text-muted-red">Rahi Homes</span>, 
                a premium girls hostel nestled in the heart of{' '}
                <span className="font-semibold">Vile Parle, Mumbai</span>, conveniently located 
                opposite the prestigious <span className="font-semibold">DJ Sanghvi College</span>.
              </p>

              <p>
                Our thoughtfully designed <span className="font-semibold">3-floor property</span> offers 
                comfortable accommodation options including <span className="font-semibold">2, 3, and 4-sharing rooms</span>, 
                each crafted to provide the perfect balance of privacy and community living.
              </p>

              <p>
                Every room features <span className="font-semibold">well-ventilated spaces</span> with 
                dedicated study desks for your academic pursuits, spacious wardrobes for your belongings, 
                and modern bathrooms designed for your comfort and convenience.
              </p>

              <p>
                At Rahi Homes, we believe in creating more than just a place to stay – we foster a 
                warm, <span className="font-semibold">community-focused environment</span> where young 
                women can thrive, form lasting friendships, and feel truly at home while pursuing 
                their dreams in Mumbai.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-muted-red mb-2">3</div>
                <div className="text-sm text-gray-600">Floors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-muted-red mb-2">2-4</div>
                <div className="text-sm text-gray-600">Sharing Options</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-muted-red mb-2">24/7</div>
                <div className="text-sm text-gray-600">Security</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
