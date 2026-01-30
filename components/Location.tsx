'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'

export default function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="location" className="py-20 lg:py-32 bg-beige-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Location
          </h2>
          <div className="w-20 h-1 bg-muted-red mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in one of Mumbai&apos;s most well-connected neighborhoods
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
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
          </motion.div>

          {/* Address Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-muted-red rounded-full p-3 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Rahi Homes
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-2">
                    <span className="font-semibold">Sant Villa</span>
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-2">
                    59 E, R.B. Road
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-2">
                    Vile Parle West
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Mumbai - 400056
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-muted-red/5 rounded-xl p-6 border border-muted-red/20"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                🚇 Excellent Connectivity
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-muted-red mr-2">•</span>
                  <span>5 minutes walk from Vile Parle Metro Station</span>
                </li>
                <li className="flex items-start">
                  <span className="text-muted-red mr-2">•</span>
                  <span>10 minutes from Vile Parle Railway Station</span>
                </li>
                <li className="flex items-start">
                  <span className="text-muted-red mr-2">•</span>
                  <span>20 minutes from Mumbai Airport</span>
                </li>
                <li className="flex items-start">
                  <span className="text-muted-red mr-2">•</span>
                  <span>Surrounded by shops, restaurants & cafes</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
