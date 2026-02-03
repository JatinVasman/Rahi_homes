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
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Stay connected with blazing-fast internet',
  },
  {
    icon: AirVent,
    title: 'Air Conditioning',
    description: 'Climate-controlled comfort year-round',
  },
  {
    icon: Tv,
    title: 'Smart TV',
    description: 'Entertainment in common areas',
  },
  {
    icon: BookOpen,
    title: 'Library',
    description: 'Quiet space for reading and studying',
  },
  {
    icon: Sparkles,
    title: 'Housekeeping',
    description: 'Regular cleaning and maintenance',
  },
  {
    icon: Coffee,
    title: 'Coffee Machine',
    description: 'Fresh brew anytime you need it',
  },
  {
    icon: Gamepad2,
    title: 'Recreational Space',
    description: 'Relax and unwind with activities',
  },
  {
    icon: UtensilsCrossed,
    title: 'Home-Cooked Meals',
    description: 'Nutritious and delicious food',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Smart home features for convenience',
  },
  {
    icon: Shield,
    title: '24/7 Security',
    description: 'Your safety is our priority',
  },
  {
    icon: Camera,
    title: 'CCTV Surveillance',
    description: 'Monitored premises round the clock',
  },
  {
    icon: WashingMachine,
    title: 'Laundry Services',
    description: 'On-site washing facilities',
  },
]

export default function Amenities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            World-Class Amenities
          </h2>
          <div className="w-20 h-1 bg-muted-red mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for comfortable, convenient, and secure living – all under one roof
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-beige-light rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-muted-red transition-colors duration-300">
                  <Icon className="w-7 h-7 text-muted-red group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{amenity.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{amenity.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
