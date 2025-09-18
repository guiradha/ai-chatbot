'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Activity, BookOpen, Users } from 'lucide-react'

interface FuturisticLoadingProps {
  isLoading: boolean
  message?: string
  submessage?: string
}

export function FuturisticLoading({ isLoading, message = "Carregando", submessage = "Preparando sua experiência..." }: FuturisticLoadingProps) {
  const icons = [Shield, Activity, BookOpen, Users]
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
        >
          <div className="relative">
            {/* Orbiting icons */}
            <div className="relative w-40 h-40">
              {icons.map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 4,
                    delay: index * 0.25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <motion.div
                    className="absolute"
                    style={{
                      top: '0',
                      transform: 'translateY(-60px)'
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon className="w-6 h-6 text-brand-blue-main" />
                  </motion.div>
                </motion.div>
              ))}
              
              {/* Center circle */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-brand-blue-main to-brand-blue-3 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    className="w-full h-full rounded-full border-4 border-white/30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Pulse rings */}
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={`ring-${index}`}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    className="w-32 h-32 border-2 border-brand-blue-main/30 rounded-full"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: [0.8, 1.5, 2],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.5,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Text */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h3
                className="text-xl font-semibold text-foreground"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {message}
              </motion.h3>
              <motion.p
                className="text-sm text-muted-foreground mt-2"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
              >
                {submessage}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function SimplePulseLoader() {
  return (
    <div className="flex space-x-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-3 h-3 bg-brand-blue-main rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 1.5,
            delay: index * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export function ProgressLoader({ progress = 0 }: { progress?: number }) {
  return (
    <div className="w-full max-w-xs">
      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-blue-main to-brand-blue-3"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-white/30"
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)'
            }}
          />
        </motion.div>
      </div>
      <motion.p
        className="text-center text-sm text-muted-foreground mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {progress}% concluído
      </motion.p>
    </div>
  )
}