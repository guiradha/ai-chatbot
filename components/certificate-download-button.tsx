'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Download, Loader2 } from 'lucide-react'
import { useCertificateGenerator } from '@/components/certificate-generator'
import { createCertificateData } from '@/lib/pdf-generator'
import { CourseData } from '@/lib/courses-data'

interface CertificateDownloadButtonProps {
  course: CourseData
  userName: string
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export function CertificateDownloadButton({
  course,
  userName,
  className = '',
  variant = 'outline',
  size = 'default'
}: CertificateDownloadButtonProps) {
  const { generateCertificate, isGenerating } = useCertificateGenerator()

  const handleDownload = async () => {
    if (!course.certificateAvailable) return

    try {
      const certificateData = createCertificateData(userName, course.title, course)
      await generateCertificate(certificateData)
    } catch (error) {
      console.error('Error downloading certificate:', error)
      // You could add a toast notification here
    }
  }

  if (!course.certificateAvailable) {
    return null
  }

  return (
    <Button
      onClick={handleDownload}
      disabled={isGenerating}
      variant={variant}
      size={size}
      className={className}
    >
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Gerando...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Baixar Certificado
        </>
      )}
    </Button>
  )
}