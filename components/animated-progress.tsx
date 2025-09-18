'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Check, Lock, Play } from 'lucide-react'

interface AnimatedProgressProps {
  value: number
  showPercentage?: boolean
  showMilestones?: boolean
  className?: string
  color?: string
}

export function AnimatedProgress({ 
  value, 
  showPercentage = true,
  showMilestones = false,
  className = '',
  color = 'bg-brand-blue-main'
}: AnimatedProgressProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setDisplayValue(value), 100)
    return () => clearTimeout(timer)
  }, [value])

  const milestones = [25, 50, 75, 100]

  return (
    <div className={`relative ${className}`}>
      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color} relative`}
          initial={{ width: 0 }}
          animate={{ width: `${displayValue}%` }}
          transition={{ 
            duration: 1.5, 
            ease: [0.4, 0, 0.2, 1],
            delay: 0.2 
          }}
        >
          <motion.div
            className="absolute inset-0 bg-white/30"
            animate={{
              x: ['0%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            }}
          />
        </motion.div>
      </div>
      
      {showMilestones && (
        <div className="relative mt-2">
          <div className="flex justify-between">
            {milestones.map((milestone) => (
              <motion.div
                key={milestone}
                initial={{ scale: 0 }}
                animate={{ scale: displayValue >= milestone ? 1 : 0.8 }}
                transition={{ delay: (milestone / 100) * 1.5, duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                  ${displayValue >= milestone 
                    ? 'bg-brand-success text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                  }
                `}>
                  {displayValue >= milestone ? (
                    <Check className="w-4 h-4" />
                  ) : milestone === 100 ? (
                    <Lock className="w-4 h-4" />
                  ) : (
                    <span>{milestone}%</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      
      {showPercentage && (
        <motion.div
          className="absolute -top-8 transition-all duration-300"
          style={{ left: `${Math.min(displayValue, 95)}%` }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 py-1 rounded text-xs font-bold">
            {displayValue}%
          </span>
        </motion.div>
      )}
    </div>
  )
}

interface CircularProgressProps {
  value: number
  size?: number
  strokeWidth?: number
  className?: string
  showValue?: boolean
  color?: string
}

export function CircularProgress({
  value,
  size = 120,
  strokeWidth = 8,
  className = '',
  showValue = true,
  color = '#0063F3'
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const [offset, setOffset] = useState(circumference)

  useEffect(() => {
    const progressOffset = circumference - (value / 100) * circumference
    setOffset(progressOffset)
  }, [value, circumference])

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-gray-200 dark:text-gray-700"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          style={{
            strokeDasharray: circumference,
          }}
        />
      </svg>
      {showValue && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold">{value}%</div>
            <div className="text-xs text-muted-foreground">Completo</div>
          </div>
        </motion.div>
      )}
    </div>
  )
}