'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedHeroSectionProps {
  children: ReactNode
  className?: string
}

export function AnimatedHeroSection({ children, className = '' }: AnimatedHeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Animated background gradient blobs */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-brand-blue-main/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-blue-3/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-success/10 rounded-full blur-3xl"
        animate={{
          rotate: [0, 360],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  )
}