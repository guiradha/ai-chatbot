'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface ChartDataPoint {
  label: string
  value: number
  color?: string
}

interface AnimatedBarChartProps {
  data: ChartDataPoint[]
  height?: number
  showValues?: boolean
  animate?: boolean
}

export function AnimatedBarChart({ 
  data, 
  height = 200,
  showValues = true,
  animate = true
}: AnimatedBarChartProps) {
  const maxValue = Math.max(...data.map(d => d.value))
  
  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-2" style={{ height }}>
        {data.map((item, index) => {
          const heightPercentage = (item.value / maxValue) * 100
          
          return (
            <motion.div
              key={index}
              className="flex-1 flex flex-col items-center justify-end gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {showValues && (
                <motion.span
                  className="text-sm font-semibold text-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {item.value}
                </motion.span>
              )}
              
              <motion.div
                className="w-full rounded-t-lg relative overflow-hidden cursor-pointer group"
                style={{ 
                  backgroundColor: item.color || '#0063F3',
                }}
                initial={animate ? { height: 0 } : { height: `${heightPercentage}%` }}
                whileInView={{ height: `${heightPercentage}%` }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <span className="text-xs text-muted-foreground text-center mt-2 line-clamp-2">
                {item.label}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

interface AnimatedLineChartProps {
  data: number[]
  labels?: string[]
  height?: number
  color?: string
  showTrend?: boolean
}

export function AnimatedLineChart({ 
  data, 
  labels = [],
  height = 200,
  color = '#0063F3',
  showTrend = true
}: AnimatedLineChartProps) {
  const maxValue = Math.max(...data)
  const minValue = Math.min(...data)
  const range = maxValue - minValue
  
  const points = data.map((value, index) => ({
    x: (index / (data.length - 1)) * 100,
    y: 100 - ((value - minValue) / range) * 100
  }))
  
  const pathData = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`
  
  const trend = data[data.length - 1] - data[0]
  const TrendIcon = trend > 0 ? TrendingUp : trend < 0 ? TrendingDown : Minus
  const trendColor = trend > 0 ? 'text-green-600' : trend < 0 ? 'text-red-600' : 'text-gray-600'
  
  return (
    <div className="w-full relative" style={{ height }}>
      {showTrend && (
        <motion.div
          className={`absolute top-0 right-0 flex items-center gap-1 ${trendColor}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <TrendIcon className="w-4 h-4" />
          <span className="text-sm font-semibold">
            {trend > 0 ? '+' : ''}{((trend / data[0]) * 100).toFixed(1)}%
          </span>
        </motion.div>
      )}
      
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((y) => (
          <motion.line
            key={y}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 * (y / 25) }}
          />
        ))}
        
        {/* Area under the line */}
        <motion.path
          d={`${pathData} L 100,100 L 0,100 Z`}
          fill={`url(#gradient-${color.replace('#', '')})`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* The line itself */}
        <motion.path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Data points */}
        {points.map((point, index) => (
          <motion.circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="1.5"
            fill={color}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 * index + 0.5 }}
          >
            <animate
              attributeName="r"
              values="1.5;2.5;1.5"
              dur="2s"
              repeatCount="indefinite"
              begin={`${index * 0.2}s`}
            />
          </motion.circle>
        ))}
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id={`gradient-${color.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Labels */}
      {labels.length > 0 && (
        <div className="flex justify-between mt-2">
          {labels.map((label, index) => (
            <motion.span
              key={index}
              className="text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index + 1 }}
            >
              {label}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  )
}

interface AnimatedPieChartProps {
  data: Array<{ label: string; value: number; color: string }>
  size?: number
}

export function AnimatedPieChart({ data, size = 200 }: AnimatedPieChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  let cumulativePercentage = 0
  
  const segments = data.map((item) => {
    const percentage = (item.value / total) * 100
    const startAngle = (cumulativePercentage / 100) * 360
    const endAngle = ((cumulativePercentage + percentage) / 100) * 360
    cumulativePercentage += percentage
    
    return {
      ...item,
      percentage,
      startAngle,
      endAngle
    }
  })
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        {segments.map((segment, index) => {
          const radius = 40
          const circumference = 2 * Math.PI * radius
          const strokeDasharray = (segment.percentage / 100) * circumference
          const strokeDashoffset = -((segment.startAngle / 360) * circumference)
          
          return (
            <motion.circle
              key={index}
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth="20"
              strokeDasharray={`${strokeDasharray} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              initial={{ 
                strokeDasharray: `0 ${circumference}`,
                opacity: 0 
              }}
              animate={{ 
                strokeDasharray: `${strokeDasharray} ${circumference}`,
                opacity: 1 
              }}
              transition={{ 
                duration: 1,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="cursor-pointer hover:brightness-110 transition-all"
            />
          )
        })}
      </svg>
      
      {/* Legend */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold">{total}</div>
          <div className="text-xs text-muted-foreground">Total</div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="mt-4 space-y-2">
        {segments.map((segment, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: segment.color }}
              />
              <span className="text-muted-foreground">{segment.label}</span>
            </div>
            <span className="font-semibold">{segment.percentage.toFixed(1)}%</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}