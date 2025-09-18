'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { useState, useEffect } from 'react'

export type NotificationType = 'success' | 'error' | 'warning' | 'info'

interface NotificationProps {
  type: NotificationType
  title: string
  message: string
  duration?: number
  onClose?: () => void
}

const iconMap = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
}

const colorMap = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
  info: 'bg-blue-500',
}

const bgColorMap = {
  success: 'bg-green-50 dark:bg-green-900/20',
  error: 'bg-red-50 dark:bg-red-900/20',
  warning: 'bg-yellow-50 dark:bg-yellow-900/20',
  info: 'bg-blue-50 dark:bg-blue-900/20',
}

const textColorMap = {
  success: 'text-green-800 dark:text-green-200',
  error: 'text-red-800 dark:text-red-200',
  warning: 'text-yellow-800 dark:text-yellow-200',
  info: 'text-blue-800 dark:text-blue-200',
}

export function AnimatedNotification({ 
  type, 
  title, 
  message, 
  duration = 5000, 
  onClose 
}: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(100)
  const Icon = iconMap[type]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, duration)

    const interval = setInterval(() => {
      setProgress((prev) => Math.max(0, prev - (100 / (duration / 100))))
    }, 100)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [duration, onClose])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`relative overflow-hidden rounded-lg shadow-lg ${bgColorMap[type]} p-4 min-w-[350px]`}
        >
          <div className="flex items-start gap-3">
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className={`${colorMap[type]} rounded-full p-1`}
            >
              <Icon className="w-5 h-5 text-white" />
            </motion.div>
            
            <div className="flex-1">
              <motion.h4
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className={`font-semibold ${textColorMap[type]}`}
              >
                {title}
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-sm mt-1 ${textColorMap[type]} opacity-90`}
              >
                {message}
              </motion.p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setIsVisible(false)
                onClose?.()
              }}
              className={`${textColorMap[type]} opacity-70 hover:opacity-100 transition-opacity`}
            >
              <X className="w-4 h-4" />
            </motion.button>
          </div>
          
          {/* Progress bar */}
          <motion.div
            className={`absolute bottom-0 left-0 h-1 ${colorMap[type]}`}
            initial={{ width: "100%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface NotificationContainerProps {
  notifications: Array<NotificationProps & { id: string }>
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}

export function NotificationContainer({ 
  notifications, 
  position = 'top-right' 
}: NotificationContainerProps) {
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50 space-y-3`}>
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            layout
            initial={{ opacity: 0, y: position.includes('top') ? -20 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: position.includes('right') ? 100 : -100 }}
          >
            <AnimatedNotification {...notification} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}