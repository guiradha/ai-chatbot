import React from 'react'
import { ShieldCheck } from 'lucide-react'

interface SaoESalvoLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export function SaoESalvoLogo({ 
  className = "", 
  size = 'md',
  showText = true 
}: SaoESalvoLogoProps) {
  const sizeClasses = {
    sm: {
      icon: "h-4 w-4",
      text: "text-xl"
    },
    md: {
      icon: "h-6 w-6", 
      text: "text-3xl"
    },
    lg: {
      icon: "h-8 w-8",
      text: "text-4xl"
    }
  }

  const currentSize = sizeClasses[size]

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <ShieldCheck className={`${currentSize.icon} text-brand-blue-main self-center`} />
      
      {showText && (
        <span className={`${currentSize.text} leading-none flex items-center`}>
          <span className="font-bold">são</span>
          <span className="font-normal"> e </span>
          <span className="font-bold">salvo</span>
        </span>
      )}
    </div>
  )
}