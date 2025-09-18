'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingCardProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FloatingCard({ children, delay = 0, className = '' }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className={`transform-gpu ${className}`}
    >
      <motion.div
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        className="h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

interface FloatingCardsGridProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function FloatingCardsGrid({ children, className = '', staggerDelay = 0.1 }: FloatingCardsGridProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}