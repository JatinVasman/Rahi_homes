'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ZoomIn, X, Download } from 'lucide-react'

export default function FloorPlan() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="floor-plan" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Floor Plan</h2>
            <div className="w-20 h-1 bg-muted-red mx-auto mb-6" />
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
            {/* Main Image */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 border-4 border-beige-light">
              <Image
                src="/images/FloorPlan_pic.webp"
                alt="Rahi Homes Floor Plan"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsModalOpen(true)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-md p-4 rounded-full shadow-lg hover:bg-white"
                >
                  <ZoomIn className="w-8 h-8 text-gray-800" />
                </motion.button>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center gap-4 mt-8"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-6 py-3 bg-muted-red text-white rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <ZoomIn className="w-5 h-5" />
                View Full Size
              </button>
              <a
                href="/images/FloorPlan_pic.webp"
                download="Rahi_Homes_Floor_Plan.webp"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                Download
              </a>
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
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50 bg-black/50 p-3 rounded-full"
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
