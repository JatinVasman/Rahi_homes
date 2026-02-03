'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import Image from 'next/image'

const galleryImages = [
  {
    src: '/images/2_bed_Room_pic2.webp',
    alt: 'Cozy 2-Bed Room View',
    title: 'Comfortable Twin Sharing',
  },
  {
    src: '/images/2_bed_Room_pic3.webp',
    alt: 'Spacious 2-Bed Room',
    title: 'Spacious Interiors',
  },
  {
    src: '/images/2_bed_Room_pic4.webp',
    alt: '2-Bed Room Detail',
    title: 'Thoughtful Design',
  },
  {
    src: '/images/3_bed_Room_pic1.webp',
    alt: '3-Bed Room Overview',
    title: 'Triple Sharing Comfort',
  },
  {
    src: '/images/Common_Kitchen.webp',
    alt: 'Modern Common Kitchen',
    title: 'Fully Equipped Kitchen',
  },
  {
    src: '/images/CupboardPic.webp',
    alt: 'Spacious Wardrobes',
    title: 'Ample Storage',
  },
  {
    src: '/images/Enscape_2025-04-21-12-23-42.webp',
    alt: 'Building Exterior',
    title: 'Modern Architecture',
  },
  {
    src: '/images/HallWay.webp',
    alt: 'Clean Hallway',
    title: 'Well-Lit Corridors',
  },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlaying && !selectedImage) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying, selectedImage])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <section id="gallery" className="relative overflow-hidden">
      {/* Carousel Container - Full Section */}
      <div className="relative group w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-beige-light">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
            }}
            className="absolute inset-0 cursor-pointer"
            onClick={() => setSelectedImage(galleryImages[currentIndex].src)}
          >
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />

            {/* Minimal Overlay for Zoom Hint */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/30 backdrop-blur-md p-2 sm:p-3 rounded-full text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() => {
            prevSlide()
          }}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:bg-white text-gray-800 transition-all backdrop-blur-sm z-10 hover:scale-110 active:scale-95 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={() => {
            nextSlide()
          }}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:bg-white text-gray-800 transition-all backdrop-blur-sm z-10 hover:scale-110 active:scale-95 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-2 sm:gap-3 z-10">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1)
                setCurrentIndex(idx)
              }}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-muted-red w-6 sm:w-8'
                  : 'bg-white/60 w-1.5 sm:w-2 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50 bg-black/50 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-7xl h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery Full View"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
