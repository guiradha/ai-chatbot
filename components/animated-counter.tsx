'use client'

import { useEffect, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

export function AnimatedCounter({ 
  value, 
  duration = 2, 
  suffix = '', 
  prefix = '',
  decimals = 0,
  className = ''
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)
  
  const spring = useSpring(0, { 
    duration: duration * 1000,
    bounce: 0.2 
  })

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplayValue(latest)
    })
    return unsubscribe
  }, [spring])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
      {suffix}
    </span>
  )
}