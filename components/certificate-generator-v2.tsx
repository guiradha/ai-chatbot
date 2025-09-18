'use client'

import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '@/components/ui/button'
import { CertificateData } from '@/components/certificate-template'
import { CertificateTemplateInline } from '@/components/certificate-template-inline'
import { generateCertificatePDF, downloadPDFBlob } from '@/lib/pdf-generator'
import { Download, Loader2 } from 'lucide-react'

interface CertificateGeneratorV2Props {
  certificateData: CertificateData
  className?: string
}

export function CertificateGeneratorV2({
  certificateData,
  className = ''
}: CertificateGeneratorV2Props) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGeneratePDF = async () => {
    setIsGenerating(true)

    try {
      // Create a container for the certificate
      const container = document.createElement('div')
      container.id = 'certificate-render-container'
      container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: white;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      `
      document.body.appendChild(container)

      // Create certificate element
      const certificateWrapper = document.createElement('div')
      certificateWrapper.style.cssText = `
        width: 1123px;
        height: 794px;
        background: white;
      `
      container.appendChild(certificateWrapper)

      // Use React to render the certificate
      const { createRoot } = await import('react-dom/client')
      const root = createRoot(certificateWrapper)
      
      // Render the inline template
      root.render(<CertificateTemplateInline data={certificateData} />)

      // Wait for rendering to complete
      await new Promise(resolve => setTimeout(resolve, 500))

      console.log('Rendering complete, generating PDF...')

      // Generate PDF
      const pdfBlob = await generateCertificatePDF(certificateWrapper, {
        filename: `certificado-${certificateData.courseCode || 'curso'}-${certificateData.userName.replace(/\s+/g, '-').toLowerCase()}.pdf`,
        quality: 1.0,
        format: 'a4',
        orientation: 'landscape'
      })

      // Clean up
      root.unmount()
      document.body.removeChild(container)

      // Download the PDF
      const filename = `certificado-${certificateData.courseCode || 'curso'}-${certificateData.userName.replace(/\s+/g, '-').toLowerCase()}.pdf`
      downloadPDFBlob(pdfBlob, filename)

    } catch (error) {
      console.error('Error generating certificate PDF:', error)
      // Clean up on error
      const container = document.getElementById('certificate-render-container')
      if (container) {
        document.body.removeChild(container)
      }
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className={className}>
      <Button
        onClick={handleGeneratePDF}
        disabled={isGenerating}
        className="w-full sm:w-auto"
      >
        {isGenerating ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Gerando PDF...
          </>
        ) : (
          <>
            <Download className="h-4 w-4 mr-2" />
            Baixar Certificado
          </>
        )}
      </Button>
    </div>
  )
}