'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle, Phone, Mail } from 'lucide-react'
import toast from 'react-hot-toast'

/* ═══════════════════════════════════════════════════
 * CONTACT POPUP — Shows on site load after a delay
 *
 * Features:
 *  - Backdrop blur overlay
 *  - Slide-in animation
 *  - Contact form with validation
 *  - Success state with checkmark
 *  - Auto-dismiss on success
 *  - Dismissible via close button or backdrop click
 * ═══════════════════════════════════════════════════ */

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false)
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

  /* Show popup after 3 seconds on page load */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const validateForm = () => {
    const newErrors = { name: '', phone: '', message: '' }
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
      newErrors.phone = 'Please enter a valid 10-digit mobile number'
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
        setIsOpen(false)
        setIsSubmitted(false)
        setFormData({ name: '', phone: '', message: '' })
        setErrors({ name: '', phone: '', message: '' })
      }, 2500)
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top gradient accent */}
            <div
              className="h-1"
              style={{
                background: 'linear-gradient(90deg, #FF6FAE, #CDB4FF, #FFD6E7, #D63384)',
              }}
            />

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-primary hover:bg-gray-100 transition-all duration-200 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">We&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <p className="font-script text-2xl text-primary tracking-wider mb-1">
                      Welcome to Rahi Homes
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h3>
                    <p className="text-gray-500 text-sm">
                      Leave your details and we&apos;ll contact you shortly
                    </p>
                  </div>

                  {/* Quick contact info */}
                  <div className="flex items-center justify-center gap-6 mb-6 text-sm text-gray-500">
                    <a
                      href="tel:+919821327143"
                      className="flex items-center gap-1.5 hover:text-primary transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>9821327143</span>
                    </a>
                    <a
                      href="mailto:rahi.homes56@gmail.com"
                      className="flex items-center gap-1.5 hover:text-primary transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email Us</span>
                    </a>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input-glow w-full px-4 py-3 rounded-lg border ${
                          errors.name ? 'border-red-400' : 'border-gray-200'
                        } focus:ring-2 focus:ring-primary/30 focus:border-transparent transition-all outline-none text-sm`}
                        placeholder="Your Name *"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`input-glow w-full px-4 py-3 rounded-lg border ${
                          errors.phone ? 'border-red-400' : 'border-gray-200'
                        } focus:ring-2 focus:ring-primary/30 focus:border-transparent transition-all outline-none text-sm`}
                        placeholder="Phone Number *"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className={`input-glow w-full px-4 py-3 rounded-lg border ${
                          errors.message ? 'border-red-400' : 'border-gray-200'
                        } focus:ring-2 focus:ring-primary/30 focus:border-transparent transition-all outline-none resize-none text-sm`}
                        placeholder="Your Message *"
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-ripple w-full text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all shadow-md flex items-center justify-center space-x-2 text-sm"
                      style={{ background: 'linear-gradient(135deg, #FF6FAE, #D63384)' }}
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
