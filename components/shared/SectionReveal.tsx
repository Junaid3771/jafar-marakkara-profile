'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function SectionReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: SectionRevealProps) {
  const initialMap = {
    up:    { opacity: 0, y: 40 },
    down:  { opacity: 0, y: -40 },
    left:  { opacity: 0, x: 40 },
    right: { opacity: 0, x: -40 },
  }

  return (
    <motion.div
      initial={initialMap[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
