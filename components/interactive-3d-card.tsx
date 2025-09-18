'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface Interactive3DCardProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function Interactive3DCard({ 
  children, 
  className = '',
  intensity = 10
}: Interactive3DCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`])
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }
  
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ scale: { duration: 0.2 } }}
      className={`relative ${className}`}
    >
      <motion.div
        style={{
          transform: "translateZ(50px)",
        }}
        className="relative"
      >
        {children}
      </motion.div>
      
      {/* Holographic effect overlay */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
        style={{
          background: `linear-gradient(105deg, 
            transparent 0%, 
            rgba(0, 99, 243, 0.1) 25%, 
            rgba(48, 127, 244, 0.2) 50%, 
            rgba(88, 141, 207, 0.1) 75%, 
            transparent 100%)`,
          transform: "translateZ(60px)",
        }}
        whileHover={{ opacity: 1 }}
        transition={{ opacity: { duration: 0.3 } }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-4 rounded-xl opacity-0 blur-2xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 99, 243, 0.3), transparent)",
          transform: "translateZ(-10px)",
        }}
        whileHover={{ opacity: 1 }}
        transition={{ opacity: { duration: 0.3 } }}
      />
    </motion.div>
  )
}