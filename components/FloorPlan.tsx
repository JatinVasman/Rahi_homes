'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ZoomIn, X, Download } from 'lucide-react'

/* ═══════════════════════════════════════════════════
 * FLOOR PLAN — Enhanced with hover effects and
 *              decorative styling
 * ═══════════════════════════════════════════════════ */

export default function FloorPlan() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="floor-plan" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
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
                Thoughtfully Designed
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-shadow-soft">
              Floor Plan
            </h2>
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{ background: 'linear-gradient(90deg, #FF6FAE, #CDB4FF, #FFD6E7)' }}
            />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the thoughtfully designed layout of Rahi Homes
            </p>
          </motion.div>

          {/* Floor Plan Image Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Main Image with card-glow */}
            <div className="card-glow relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 border-4 border-soft">
              <Image
                src="/images/FloorPlan_pic.webp"
                alt="Rahi Homes Floor Plan"
                fill
                className="object-contain p-2 sm:p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsModalOpen(true)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-full shadow-lg hover:bg-white"
                >
                  <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800" />
                </motion.button>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="btn-ripple flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-white rounded-full hover:bg-deep transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                View Full Size
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/images/FloorPlan_pic.webp"
                download="Rahi_Homes_Floor_Plan.webp"
                className="btn-ripple flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-50 bg-black/50 p-3 rounded-full"
            onClick={() => setIsModalOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-7xl h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/FloorPlan_pic.webp"
              alt="Rahi Homes Floor Plan - Full View"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </motion.div>

          {/* Download button in modal */}
          <a
            href="/images/FloorPlan_pic.webp"
            download="Rahi_Homes_Floor_Plan.webp"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Download className="w-5 h-5" />
            Download Floor Plan
          </a>
        </motion.div>
      )}
    </section>
  )
}
