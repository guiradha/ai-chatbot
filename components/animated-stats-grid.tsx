'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from './animated-counter'
import { LucideIcon } from 'lucide-react'

interface StatItem {
  title: string
  value: number
  suffix?: string
  prefix?: string
  change?: string
  icon: LucideIcon
  color: string
  bgColor: string
  trend?: 'up' | 'down' | 'neutral'
}

interface AnimatedStatsGridProps {
  stats: StatItem[]
  columns?: number
}

export function AnimatedStatsGrid({ stats, columns = 4 }: AnimatedStatsGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const getTrendColor = (trend?: string) => {
    switch (trend) {
      case 'up': return 'text-green-600 dark:text-green-400'
      case 'down': return 'text-red-600 dark:text-red-400'
      default: return 'text-gray-600 dark:text-gray-400'
    }
  }

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up': return '↑'
      case 'down': return '↓'
      default: return '→'
    }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={`grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns}`}
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 30px -10px rgba(0, 99, 243, 0.3)",
              transition: { duration: 0.2 }
            }}
            className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg overflow-hidden group cursor-pointer"
          >
            {/* Background decoration */}
            <motion.div
              className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-10"
              style={{ backgroundColor: stat.color }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Icon */}
            <motion.div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${stat.bgColor} mb-4`}
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Icon className={`w-6 h-6 ${stat.color}`} />
            </motion.div>
            
            {/* Title */}
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
              {stat.title}
            </h3>
            
            {/* Value */}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2}
                />
              </span>
              
              {stat.change && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className={`text-sm font-medium ${getTrendColor(stat.trend)} flex items-center gap-1`}
                >
                  <span>{getTrendIcon(stat.trend)}</span>
                  {stat.change}
                </motion.span>
              )}
            </div>
            
            {/* Animated progress bar at bottom */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent"
              style={{ color: stat.color }}
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.2
              }}
            />
          </motion.div>
        )
      })}
    </motion.div>
  )
}