'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  title: string
  image?: string
  imageScale?: number
  bio: string[]
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ketan Jogi',
    role: 'Director',
    title: 'Director',
    image: '/Team/Ketan.jpeg',
    bio: [
      'Ketan Jogi, Director at Rahi Homes Girls Hostel, brings over 25 years of experience as the Director of Chetna Paints Pvt. Ltd., where he has built a strong reputation for quality, consistency, and trust in the paint manufacturing industry.',
      'Expanding his entrepreneurial journey, he has also ventured into hospitality with Vihaara Villa and into real estate with Vihaara Business Bay, bringing the same commitment to excellence across sectors.',
      'At Rahi Homes, he applies these principles to create a safe, comfortable, and well-managed living space for young women. With a focus on cleanliness, security, and everyday convenience, Mr. Jogi is dedicated to offering an environment that truly feels like a home away from home.',
    ],
  },
  {
    name: 'Rahi Gandhi',
    role: 'CEO',
    title: 'Chief Executive Officer',
    image: '/Team/Rahi Gandhi.jpeg',
    bio: [
      'Rahi Gandhi, CEO of Rahi Homes, leads the organization with a clear focus on creating safe, comfortable, and well-managed living spaces for students and working women. With a strong understanding of operations and resident needs, she brings a practical and people-focused approach to leadership.',
      'She plays a key role in shaping the vision and growth of Rahi Homes, ensuring that every aspect of the space reflects reliability, care, and attention to detail. Her approach emphasizes consistency in service, efficient management, and a welcoming environment.',
      'Under her leadership, Rahi Homes continues to grow as a trusted name in accommodation, offering residents a space that is not just functional, but supportive and thoughtfully designed for everyday living.',
    ],
  },
  {
    name: 'Hiren Gandhi',
    role: 'Director',
    title: 'Director',
    image: '/Team/Hiren Gandhi.jpeg',
    bio: [
      'Hiren Gandhi, Director at Rahi Homes Girls Hostel, brings over 15 years of experience in the hostel industry, with a strong foundation in marketing and resident engagement. His deep understanding of the sector allows him to anticipate needs and create solutions that enhance both occupancy and overall living experience.',
      'With his marketing expertise, he plays a key role in positioning Rahi Homes as a trusted and preferred choice for students and working women. His approach focuses on clear communication, service quality, and building a strong connection with residents and their families.',
      'At Rahi Homes, he combines industry knowledge with a practical, people-focused mindset to ensure smooth operations and consistent standards. His contribution helps create a comfortable, well-managed environment that residents can rely on every day.',
    ],
  },
  {
    name: 'Veera Jogi',
    role: 'CFO',
    title: 'Chief Financial Officer',
    image: '/Team/Veera Jogi.jpeg',
    imageScale: 1.3,
    bio: [
      'Veera Jogi, CFO at Rahi Homes, oversees the financial planning and management of the organization with a clear focus on stability, efficiency, and long-term growth. With a strong understanding of budgeting and financial operations, she ensures that every aspect of the business runs with discipline and transparency.',
      'She plays an important role in managing cash flow, optimizing costs, and supporting strategic decisions that enable smooth day-to-day functioning as well as future expansion. Her approach is practical, detail-oriented, and focused on maintaining financial clarity.',
      'At Rahi Homes, Veera brings a balanced and responsible perspective, helping build a strong financial foundation. Her commitment ensures that the organization remains reliable, sustainable, and well-prepared for growth.',
    ],
  },
]

function TeamCard({
  member,
  index,
  isInView,
}: {
  member: TeamMember
  index: number
  isInView: boolean
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#D5CFC1]/50 hover:border-[#0F5E6E]/25">
        {/* Top accent bar */}
        <div
          className="h-1.5 w-full"
          style={{
            background: 'linear-gradient(90deg, #0F5E6E, #0F5E6E, #F04E1E)',
          }}
        />

        <div className="p-6 sm:p-8">
          {/* Image + Name Row */}
          <div className="flex items-center gap-5 mb-6">
            {/* Image or Monogram */}
            {member.image ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-lg ring-3 ring-[#0F5E6E]/15 ring-offset-2 flex-shrink-0"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                  style={member.imageScale ? { transform: `scale(${member.imageScale})` } : undefined}
                />
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-lg ring-3 ring-[#0F5E6E]/15 ring-offset-2 flex-shrink-0 flex items-center justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, #0F5E6E 0%, #0A4A58 100%)',
                }}
              >
                <span className="text-white font-playfair text-2xl sm:text-3xl font-bold">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </motion.div>
            )}

            {/* Name + Role */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F5E6E] font-playfair leading-tight">
                {member.name}
              </h3>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="inline-block px-3 py-1 bg-[#0F5E6E]/10 text-[#0F5E6E] text-xs sm:text-sm font-semibold rounded-full">
                  {member.role}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-1">{member.title}</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-3 text-gray-600 leading-relaxed text-[15px]">
            <p>{member.bio[0]}</p>

            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? 'auto' : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="space-y-3 pt-1">
                {member.bio.slice(1).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>

            {member.bio.length > 1 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1 text-[#0F5E6E] font-semibold text-sm hover:text-[#F04E1E] transition-colors duration-300 mt-2 group/btn"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
                <motion.svg
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="team"
      className="relative section-padding bg-[#EFE9D8] overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-[0.04]"
          style={{
            background:
              'radial-gradient(circle, #0F5E6E 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-[0.04]"
          style={{
            background:
              'radial-gradient(circle, #F04E1E 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 -inset-x-12 -inset-y-4 rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(15, 94, 110, 0.12) 0%, rgba(15, 94, 110, 0.06) 40%, transparent 70%)',
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
                The People Behind Rahi Homes
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F5E6E] mb-4 sm:mb-6 text-shadow-soft">
              Our Leadership Team
            </h2>
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{
                background: 'linear-gradient(90deg, #0F5E6E, #0F5E6E, #F04E1E)',
              }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed"
          >
            Driven by experience, guided by values — meet the team dedicated to
            making Rahi Homes a trusted, comfortable, and well-managed space.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
