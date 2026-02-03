'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/rahi_home_Logo.png"
                alt="Rahi Homes Logo"
                width={180}
                height={75}
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium girls hostel in Vile Parle, Mumbai. Where comfort meets community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Amenities', 'Colleges', 'Location', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                    className="text-gray-400 hover:text-muted-red transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+919821327143" className="hover:text-muted-red transition-colors">
                  +91 9821327143
                </a>
              </li>
              <li>
                <a href="tel:+918104071032" className="hover:text-muted-red transition-colors">
                  +91 8104071032
                </a>
              </li>
              <li>
                <a
                  href="mailto:rahi.homes56@gmail.com"
                  className="hover:text-muted-red transition-colors"
                >
                  rahi.homes56@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/rahi.homes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-muted-red transition-colors"
                >
                  @Rahi.homes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Rahi Homes. All rights reserved.
            </p>
            <motion.p
              className="text-gray-400 text-sm flex items-center space-x-1"
              whileHover={{ scale: 1.05 }}
            >
              <span>Made with</span>
              <Heart className="w-4 h-4 text-muted-red fill-current" />
              <span>for our residents</span>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}
