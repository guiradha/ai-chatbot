'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ConfettiParticle {
  id: number
  x: number
  y: number
  rotation: number
  color: string
  scale: number
  velocityX: number
  velocityY: number
}

interface ConfettiCelebrationProps {
  isActive: boolean
  particleCount?: number
  duration?: number
  colors?: string[]
}

export function ConfettiCelebration({ 
  isActive, 
  particleCount = 100,
  duration = 3000,
  colors = ['#0063F3', '#307FF4', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']
}: ConfettiCelebrationProps) {
  const [particles, setParticles] = useState<ConfettiParticle[]>([])

  useEffect(() => {
    if (isActive) {
      const newParticles: ConfettiParticle[] = []
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: Date.now() + i,
          x: Math.random() * window.innerWidth,
          y: -50,
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          scale: Math.random() * 0.5 + 0.5,
          velocityX: (Math.random() - 0.5) * 10,
          velocityY: Math.random() * 5 + 5
        })
      }
      
      setParticles(newParticles)
      
      const timer = setTimeout(() => {
        setParticles([])
      }, duration)
      
      return () => clearTimeout(timer)
    } else {
      setParticles([])
    }
  }, [isActive, particleCount, duration, colors])

  return (
    <AnimatePresence>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed pointer-events-none z-50"
          initial={{
            x: particle.x,
            y: particle.y,
            rotate: particle.rotation,
            scale: particle.scale,
            opacity: 1
          }}
          animate={{
            x: particle.x + particle.velocityX * 100,
            y: window.innerHeight + 100,
            rotate: particle.rotation + Math.random() * 720,
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: duration / 1000,
            ease: [0.2, 0.8, 0.3, 0.9]
          }}
          style={{
            width: '10px',
            height: '10px',
            backgroundColor: particle.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%'
          }}
        />
      ))}
    </AnimatePresence>
  )
}

interface CelebrationButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function CelebrationButton({ children, onClick, className = '' }: CelebrationButtonProps) {
  const [celebrate, setCelebrate] = useState(false)

  const handleClick = () => {
    setCelebrate(true)
    onClick?.()
    setTimeout(() => setCelebrate(false), 3000)
  }

  return (
    <>
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={className}
      >
        {children}
      </motion.button>
      <ConfettiCelebration isActive={celebrate} />
    </>
  )
}