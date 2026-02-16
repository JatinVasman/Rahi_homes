'use client'

import { useEffect, useRef, useCallback, useMemo, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/* ═══════════════════════════════════════════════════
 * ANIMATED GRADIENT MESH
 * Slow-morphing gradient background (beige → pink → lavender)
 * Used as the primary background for the Hero section.
 * The gradient-mesh class in globals.css handles the animation.
 * ═══════════════════════════════════════════════════ */
export function AnimatedGradientMesh({
  className = '',
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return <div className={`gradient-mesh absolute inset-0 ${className}`}>{children}</div>
}

/* ═══════════════════════════════════════════════════
 * FLOATING SHAPES
 * Abstract circles & rounded rectangles in muted red /
 * light brown with opacity 0.1–0.3. Each shape has its
 * own animation delay & duration for organic feel.
 * Uses CSS transform (GPU-accelerated).
 * ═══════════════════════════════════════════════════ */
interface FloatingShape {
  width: number
  height: number
  top: string
  left: string
  color: string
  borderRadius: string
  delay: number
  duration: number
  opacity: number
}

export function FloatingShapes({ count = 8 }: { count?: number }) {
  /* Generate deterministic shape configs to avoid hydration mismatch */
  const shapes: FloatingShape[] = useMemo(() => {
    const configs: FloatingShape[] = []
    const colors = [
      'rgba(255, 111, 174, 0.06)', // primary pink
      'rgba(205, 180, 255, 0.08)', // secondary lilac
      'rgba(247, 217, 196, 0.05)', // accent champagne
      'rgba(233, 213, 255, 0.08)', // lavender
      'rgba(255, 214, 231, 0.05)', // soft pink
    ]

    /* Predefined positions to avoid random() hydration issues */
    const positions = [
      { top: '8%', left: '12%', w: 80, h: 80, r: '50%' },
      { top: '25%', left: '78%', w: 120, h: 60, r: '30px' },
      { top: '60%', left: '5%', w: 100, h: 100, r: '50%' },
      { top: '75%', left: '85%', w: 60, h: 60, r: '50%' },
      { top: '15%', left: '45%', w: 90, h: 45, r: '22px' },
      { top: '50%', left: '35%', w: 70, h: 70, r: '50%' },
      { top: '35%', left: '90%', w: 50, h: 50, r: '50%' },
      { top: '85%', left: '55%', w: 110, h: 55, r: '28px' },
      { top: '45%', left: '65%', w: 65, h: 65, r: '50%' },
      { top: '10%', left: '30%', w: 55, h: 55, r: '50%' },
    ]

    for (let i = 0; i < Math.min(count, positions.length); i++) {
      const pos = positions[i]
      configs.push({
        width: pos.w,
        height: pos.h,
        top: pos.top,
        left: pos.left,
        color: colors[i % colors.length],
        borderRadius: pos.r,
        delay: i * 0.8,
        duration: 6 + (i % 4) * 2,
        opacity: 0.1 + (i % 3) * 0.05,
      })
    }
    return configs
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: shape.width,
            height: shape.height,
            top: shape.top,
            left: shape.left,
            backgroundColor: shape.color,
            borderRadius: shape.borderRadius,
            opacity: shape.opacity,
          }}
          animate={{
            y: [0, -15, 10, -8, 0],
            x: [0, 8, -5, 12, 0],
            rotate: [0, 3, -2, 4, 0],
            scale: [1, 1.05, 0.95, 1.02, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════
 * PARTICLE SYSTEM
 * Small glowing dots drifting upward.
 * Each particle has a unique size, position, and speed.
 * CSS-based animation for maximum performance.
 * ═══════════════════════════════════════════════════ */
interface ParticleConfig {
  size: number
  left: string
  delay: number
  duration: number
  opacity: number
}

export function ParticleSystem({ count = 15 }: { count?: number }) {
  const particles: ParticleConfig[] = useMemo(() => {
    const configs: ParticleConfig[] = []
    for (let i = 0; i < count; i++) {
      configs.push({
        size: 3 + (i % 4) * 2, // 3–9 px
        left: `${(i * 7.3) % 100}%`, // Evenly distributed
        delay: i * 0.6, // Staggered start
        duration: 6 + (i % 5) * 2, // 6–14s
        opacity: 0.3 + (i % 3) * 0.15, // 0.3–0.6
      })
    }
    return configs
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: '-10px',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════
 * ORGANIC BLOBS
 * Slowly morphing blob shapes used as subtle
 * section backgrounds. Uses the blob CSS class from
 * globals.css for the border-radius animation.
 * ═══════════════════════════════════════════════════ */
export function OrganicBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Top-right blob: soft lavender */}
      <div
        className="blob absolute -top-20 -right-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        style={{
          background:
            'linear-gradient(135deg, rgba(205, 180, 255, 0.08), rgba(255, 214, 231, 0.06))',
        }}
      />
      {/* Bottom-left blob: soft peach */}
      <div
        className="blob-slow absolute -bottom-24 -left-24 w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 111, 174, 0.06), rgba(255, 249, 252, 0.08))',
          animationDelay: '4s',
        }}
      />
    </div>
  )
}

/* ═══════════════════════════════════════════════════
 * WAVE ANIMATION
 * Gentle wave patterns in pastel gradients.
 * Used as section dividers between major sections.
 * ═══════════════════════════════════════════════════ */
export function WaveAnimation({
  position = 'bottom',
  color = 'white',
}: {
  position?: 'top' | 'bottom'
  color?: string
}) {
  return (
    <div
      className={`absolute left-0 right-0 overflow-hidden pointer-events-none ${
        position === 'top' ? 'top-0 rotate-180' : 'bottom-0'
      }`}
      style={{ height: '80px' }}
      aria-hidden="true"
    >
      <svg
        className="absolute bottom-0 w-[200%] animate-wave"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ height: '100%' }}
      >
        <path
          d="M0,30 C360,60 720,0 1080,30 C1260,45 1350,20 1440,30 L1440,60 L0,60 Z"
          fill={color}
          opacity="0.6"
        />
        <path
          d="M0,35 C320,10 640,55 960,30 C1120,20 1280,45 1440,35 L1440,60 L0,60 Z"
          fill={color}
          opacity="0.3"
        />
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
 * CURSOR SPOTLIGHT
 * Soft radial spotlight that follows cursor movement.
 * Sets --mouse-x and --mouse-y CSS variables for
 * the spotlight effect defined in globals.css.
 * Only active on desktop (disables on touch devices).
 * ═══════════════════════════════════════════════════ */
export function CursorSpotlight({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`)
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`cursor-spotlight ${className}`}
    >
      {children}
    </div>
  )
}

/* ═══════════════════════════════════════════════════
 * FLOATING HEARTS — Rising Bubble Style
 * Hearts rise from bottom to top like water bubbles,
 * gently swaying side-to-side, fading in at the
 * bottom and disappearing at the top. Rose-gold color.
 * ═══════════════════════════════════════════════════ */
export function FloatingHearts() {
  const hearts = useMemo(
    () => [
      { left: '5%', size: 16, delay: 0, dur: 16, sway: 20 },
      { left: '12%', size: 12, delay: 2, dur: 20, sway: -15 },
      { left: '20%', size: 18, delay: 5, dur: 18, sway: 25 },
      { left: '30%', size: 10, delay: 1.5, dur: 22, sway: -18 },
      { left: '38%', size: 14, delay: 7, dur: 17, sway: 12 },
      { left: '48%', size: 20, delay: 3, dur: 20, sway: -22 },
      { left: '55%', size: 12, delay: 9, dur: 19, sway: 16 },
      { left: '65%', size: 16, delay: 1, dur: 16, sway: -20 },
      { left: '72%', size: 14, delay: 6, dur: 22, sway: 14 },
      { left: '80%', size: 18, delay: 0.5, dur: 18, sway: -25 },
      { left: '88%', size: 10, delay: 4, dur: 20, sway: 18 },
      { left: '95%', size: 16, delay: 8, dur: 17, sway: -12 },
    ],
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          className="absolute text-primary"
          style={{
            left: heart.left,
            bottom: '-5%',
            fontSize: heart.size,
          }}
          animate={{
            y: [0, '-110vh'],
            x: [0, heart.sway, 0, -heart.sway, 0],
            rotate: [0, 20, -20, 10, 0],
            scale: [0.5, 1, 1.1, 1, 0.6],
            opacity: [0, 0.35, 0.4, 0.3, 0],
          }}
          transition={{
            duration: heart.dur,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════
 * CURVED SECTION DIVIDER
 * Gradient curved divider between sections.
 * Renders an SVG with pastel gradient fill.
 * ═══════════════════════════════════════════════════ */
export function CurvedDivider({
  fromColor = '#FFF9FC',
  toColor = '#FFFFFF',
  flip = false,
}: {
  fromColor?: string
  toColor?: string
  flip?: boolean
}) {
  return (
    <div
      className={`w-full overflow-hidden pointer-events-none ${flip ? 'rotate-180' : ''}`}
      style={{ height: '80px', marginBottom: '-1px' }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient
            id={`dividerGrad-${flip ? 'flip' : 'normal'}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="50%" stopColor="rgba(255, 214, 231, 0.5)" />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <path
          d="M0,40 Q360,80 720,40 Q1080,0 1440,40 L1440,80 L0,80 Z"
          fill={`url(#dividerGrad-${flip ? 'flip' : 'normal'})`}
        />
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
 * PARALLAX WRAPPER
 * Wraps content with a parallax scroll effect.
 * Uses Framer Motion's useScroll + useTransform
 * for GPU-accelerated parallax.
 * ═══════════════════════════════════════════════════ */
export function ParallaxWrapper({
  children,
  speed = 0.3,
  className = '',
}: {
  children: React.ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}
