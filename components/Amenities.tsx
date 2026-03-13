'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Wifi,
  AirVent,
  Tv,
  BookOpen,
  Sparkles,
  Coffee,
  Gamepad2,
  UtensilsCrossed,
  Zap,
  Shield,
  Camera,
  WashingMachine,
} from 'lucide-react'

const amenities = [
  { icon: Wifi, title: 'WiFi Connection' },
  { icon: AirVent, title: 'Air Conditioning' },
  { icon: Tv, title: 'Smart TV' },
  { icon: BookOpen, title: 'Library' },
  { icon: Sparkles, title: 'Housekeeping' },
  { icon: Coffee, title: 'Coffee Machine' },
  { icon: Gamepad2, title: 'Recreational Space' },
  { icon: UtensilsCrossed, title: 'Cooked Meals' },
  { icon: Zap, title: 'Automation' },
  { icon: Shield, title: '24/7 Security' },
  { icon: Camera, title: 'CCTV Surveillance' },
  { icon: WashingMachine, title: 'Laundry Services' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function Amenities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="amenities" className="relative section-padding bg-[#EFE9D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="relative inline-block">
            <p className="relative font-script text-2xl sm:text-3xl text-primary tracking-wider mb-3">
              Everything You Need
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F5E6E] mb-6 text-shadow-soft">
            World-Class Amenities
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-6"
            style={{ background: 'linear-gradient(90deg, #0F5E6E, #0F5E6E, #F04E1E)' }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for comfortable, convenient, and secure living – all under one roof
          </p>
        </motion.div>

        {/* Compact icon grid */}
        <motion.div
          className="grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 max-w-3xl lg:max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {amenities.map((amenity) => {
            const Icon = amenity.icon
            return (
              <motion.div
                key={amenity.title}
                variants={itemVariants}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#0F5E6E]/10 mb-2">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F5E6E]" strokeWidth={1.5} />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium leading-tight">
                  {amenity.title}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
