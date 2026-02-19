'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useCallback } from 'react'
import { MapPin } from 'lucide-react'
import { CursorSpotlight } from './BackgroundAnimations'

/* ═══════════════════════════════════════════════════
 * LOCATION SECTION — Enhanced with spotlight, hover
 *                    effects, and decorative elements
 * ═══════════════════════════════════════════════════ */

export default function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="location" className="py-20 lg:py-32 bg-[#FFEFD6] relative overflow-hidden">
      <CursorSpotlight className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 -inset-x-12 -inset-y-4 rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(255, 111, 174, 0.15) 0%, rgba(205, 180, 255, 0.1) 40%, transparent 70%)',
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
                Find Us Easily
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-shadow-soft">
              Our Location
            </h2>
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{ background: 'linear-gradient(90deg, #FF3C78, #FF6B2B, #FFB800)' }}
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in one of Mumbai&apos;s most well-connected neighborhoods
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map with shadow glow */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.01 }}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.566847299265!2d72.83611731490135!3d19.106822987067784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e5c6c6f%3A0x9e8e8e8e8e8e8e8e!2sVile%20Parle%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rahi Homes Location"
              />
              {/* Rose-gold border glow on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/15 rounded-2xl transition-colors duration-500 pointer-events-none" />
            </motion.div>

            {/* Address Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="card-glow bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="bg-primary rounded-full p-3 flex-shrink-0"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Rahi Homes</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-2">
                      <span className="font-semibold">Sant Villa</span>
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-2">59 E, R.B. Road</p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-2">Vile Parle West</p>
                    <p className="text-lg text-gray-700 leading-relaxed">Mumbai - 400056</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="card-glow bg-primary/5 rounded-xl p-6 border border-primary/20"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  🚇 Excellent Connectivity
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {[
                    '5 minutes walk from Vile Parle Metro Station',
                    '10 minutes from Vile Parle Railway Station',
                    '20 minutes from Mumbai Airport',
                    'Surrounded by shops, restaurants & cafes',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <span className="text-primary mr-2">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </CursorSpotlight>
    </section>
  )
}
