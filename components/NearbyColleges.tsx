'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, MapPin } from 'lucide-react'

const colleges = [
  {
    name: 'DJ Sanghvi College of Engineering',
    distance: 'Right Opposite',
  },
  {
    name: 'Narsee Monjee College of Commerce and Economics',
    distance: '1.2 km',
  },
  {
    name: 'Mukesh Patel School of Technology Management & Engineering',
    distance: '1.5 km',
  },
  {
    name: 'Bhagubhai Mafatlal Polytechnic & College of Engineering',
    distance: '2.1 km',
  },
  {
    name: 'NMIMS',
    distance: '2.5 km',
  },
  {
    name: 'Mithibai College of Arts',
    distance: '1.8 km',
  },
]

export default function NearbyColleges() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="colleges" className="py-20 lg:py-32 bg-gradient-to-b from-beige-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nearby Colleges & Universities
          </h2>
          <div className="w-20 h-1 bg-muted-red mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perfectly located near Mumbai's premier educational institutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((college, index) => (
            <motion.div
              key={college.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-muted-red/10 rounded-full p-3 flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-muted-red" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
                    {college.name}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1.5 text-muted-red" />
                    <span className="font-medium">{college.distance}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 font-medium">
            ✨ Ideal location for students – save time on commute and focus on what matters most
          </p>
        </motion.div>
      </div>
    </section>
  )
}
