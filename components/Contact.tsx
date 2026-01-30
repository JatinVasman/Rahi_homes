'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, Instagram, Send } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
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

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
      isValid = false
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
      isValid = false
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number'
      isValid = false
    }

    // Message validation
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
      // Success toast
      toast.success('Thank you! We will contact you soon.')
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        message: '',
      })
      setErrors({
        name: '',
        phone: '',
        message: '',
      })
    } else {
      toast.error('Please fix the errors in the form')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-muted-red mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of the following channels. We&apos;re here to help!
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-muted-red rounded-full p-3 flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone</h4>
                <a href="tel:+919821327143" className="text-gray-700 hover:text-muted-red transition-colors block">
                  +91 9821327143
                </a>
                <a href="tel:+918104071032" className="text-gray-700 hover:text-muted-red transition-colors block">
                  +91 8104071032
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-muted-red rounded-full p-3 flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                <a href="mailto:rahi.homes56@gmail.com" className="text-gray-700 hover:text-muted-red transition-colors">
                  rahi.homes56@gmail.com
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start space-x-4">
              <div className="bg-muted-red rounded-full p-3 flex-shrink-0">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Instagram</h4>
                <a 
                  href="https://instagram.com/rahi.homes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-muted-red transition-colors"
                >
                  @Rahi.homes
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-muted-red focus:border-transparent transition-all outline-none`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-muted-red focus:border-transparent transition-all outline-none`}
                  placeholder="Enter your 10-digit mobile number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-muted-red focus:border-transparent transition-all outline-none resize-none`}
                  placeholder="Tell us about your requirements..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-muted-red text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
