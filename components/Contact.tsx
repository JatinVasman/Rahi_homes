'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { OrganicBlobs } from './BackgroundAnimations'

/* ═══════════════════════════════════════════════════
 * CONTACT SECTION — Enhanced with form animations
 *
 * BEFORE:
 *  - Basic form with standard border focus
 *  - Simple toast notification on submit
 *
 * AFTER:
 *  - Soft pink glow on input focus (input-glow CSS)
 *  - Animated success checkmark after submit
 *  - Button ripple effect on click
 *  - Form field slide-in animations
 *  - Contact info card hover effects
 *  - Organic blob backgrounds
 *  - Dancing Script subtitle
 *  - Gradient section divider
 * ═══════════════════════════════════════════════════ */

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      message: '',
    }

    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
      isValid = false
    }

    const phoneRegex = /^[6-9]\d{9}$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
      isValid = false
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
      isValid = false
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitted(true)
      toast.success('Thank you! We will contact you soon.')

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', phone: '', message: '' })
        setErrors({ name: '', phone: '', message: '' })
      }, 3000)
    } else {
      toast.error('Please fix the errors in the form')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-gradient-to-b from-[#F8F4F8] to-white relative overflow-hidden"
    >
      <OrganicBlobs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              We&apos;d Love to Hear From You
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-shadow-soft">
            Get In Touch
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-6"
            style={{ background: 'linear-gradient(90deg, #FF6FAE, #CDB4FF, #FFD6E7)' }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>
        </motion.div>

        {/* Centered Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          {isSubmitted ? (
            /* ✨ Success state with checkmark animation */
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
              >
                <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold text-gray-900 mb-2"
              >
                Message Sent!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-600"
              >
                We&apos;ll get back to you soon.
              </motion.p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              {/* Name field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-glow w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all outline-none`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </motion.div>

              {/* Phone field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`input-glow w-full px-4 py-3 rounded-lg border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all outline-none`}
                  placeholder="Enter your 10-digit mobile number"
                />
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </motion.div>

              {/* Message field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`input-glow w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all outline-none resize-none`}
                  placeholder="Tell us about your requirements..."
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-ripple w-full text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all shadow-lg flex items-center justify-center space-x-2 group"
                style={{ background: 'linear-gradient(135deg, #FF6FAE, #D63384)' }}
              >
                <span>Send Message</span>
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 5, rotate: -45 }}
                  transition={{ duration: 0.2 }}
                >
                  <Send className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
