import React from 'react'

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
      text: "text-xl"
    },
    md: {
      text: "text-3xl"
    },
    lg: {
      text: "text-4xl"
    }
  }

  const currentSize = sizeClasses[size]

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Text - "são e salvo" with Work Sans bold and reduced letter spacing */}
      {showText && (
        <span 
          className={`${currentSize.text} leading-none flex items-center font-bold`}
          style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.05em' }}
        >
          são e salvo
        </span>
      )}
    </div>
  )
}