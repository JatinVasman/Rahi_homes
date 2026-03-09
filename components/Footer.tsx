'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative text-white py-12 overflow-hidden" style={{ background: '#F04E1E' }}>
      {/* Subtle teal accent at top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(90deg, #0F5E6E, #0F5E6E, #0F5E6E)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 bg-white/95 rounded-lg inline-block p-2">
              <Image
                src="/images/rahi_home_Logo.png"
                alt="Rahi Homes Logo"
                width={180}
                height={75}
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-white/90 leading-relaxed">
              Premium girls hostel in Vile Parle, Mumbai. Where comfort meets community.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Amenities', 'Colleges', 'Location', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                    className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-white/85">
              <li>
                <a
                  href="tel:+919821327143"
                  className="flex items-center gap-2.5 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 text-white/70 flex-shrink-0" />
                  +91 9821327143
                </a>
              </li>
              <li>
                <a
                  href="tel:+918104071032"
                  className="flex items-center gap-2.5 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 text-white/70 flex-shrink-0" />
                  +91 8104071032
                </a>
              </li>
              <li>
                <a
                  href="mailto:rahi.homes56@gmail.com"
                  className="flex items-center gap-2.5 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-white/70 flex-shrink-0" />
                  rahi.homes56@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/rahi.homes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4 text-white/70 flex-shrink-0" />
                  @Rahi.homes
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm">
              © {new Date().getFullYear()} Rahi Homes. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
