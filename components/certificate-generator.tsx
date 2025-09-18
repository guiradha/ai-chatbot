'use client'

import React, { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { CertificateTemplate, CertificateData } from '@/components/certificate-template'
import { CertificateTemplateInline } from '@/components/certificate-template-inline'
import { generateCertificatePDF, downloadPDFBlob } from '@/lib/pdf-generator'
import { Download, Loader2 } from 'lucide-react'

interface CertificateGeneratorProps {
  certificateData: CertificateData
  className?: string
  showPreview?: boolean
}

export function CertificateGenerator({
  certificateData,
  className = '',
  showPreview = false
}: CertificateGeneratorProps) {
  const certificateRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGeneratePDF = async () => {
    if (!certificateRef.current) {
      console.error('Certificate element not found')
      return
    }

    setIsGenerating(true)

    try {
      // Generate PDF
      const pdfBlob = await generateCertificatePDF(certificateRef.current, {
        filename: `certificado-${certificateData.courseCode || 'curso'}-${certificateData.userName.replace(/\s+/g, '-').toLowerCase()}.pdf`,
        quality: 1.0,
        format: 'a4',
        orientation: 'landscape'
      })

      // Download the PDF
      const filename = `certificado-${certificateData.courseCode || 'curso'}-${certificateData.userName.replace(/\s+/g, '-').toLowerCase()}.pdf`
      downloadPDFBlob(pdfBlob, filename)

    } catch (error) {
      console.error('Error generating certificate PDF:', error)
      // You could add a toast notification here
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className={className}>
      {/* Download Button */}
      <div className="mb-4">
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

      {/* Certificate Preview */}
      {showPreview && (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div
            ref={certificateRef}
            className="transform-gpu"
            style={{ 
              transformOrigin: 'top left',
              transform: 'scale(0.5)', // Scale down for preview
              width: '1123px', // 297mm converted to px at 96dpi
              height: '794px'  // 210mm converted to px at 96dpi
            }}
          >
            <CertificateTemplate data={certificateData} showBorder={false} />
          </div>
        </div>
      )}

      {/* Hidden certificate for PDF generation - use inline template */}
      {!showPreview && (
        <div 
          ref={certificateRef}
          className="fixed opacity-0 pointer-events-none"
          style={{ 
            top: '-9999px',
            left: '-9999px',
            width: '1123px', // 297mm converted to px at 96dpi
            height: '794px', // 210mm converted to px at 96dpi
            position: 'fixed',
            zIndex: -1
          }}
        >
          <CertificateTemplateInline data={certificateData} />
        </div>
      )}
    </div>
  )
}

// Hook for generating certificates programmatically
export function useCertificateGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)

  const generateCertificate = async (certificateData: CertificateData) => {
    setIsGenerating(true)

    try {
      // Create a temporary element for PDF generation
      const tempDiv = document.createElement('div')
      tempDiv.style.position = 'fixed'
      tempDiv.style.top = '-9999px'
      tempDiv.style.left = '-9999px'
      tempDiv.style.width = '1123px' // 297mm at 96dpi
      tempDiv.style.height = '794px'  // 210mm at 96dpi
      tempDiv.style.pointerEvents = 'none'
      tempDiv.style.zIndex = '-1'
      tempDiv.style.opacity = '0'
      
      document.body.appendChild(tempDiv)

      // Use React to render the certificate into the temp div
      const { createRoot } = await import('react-dom/client')
      const root = createRoot(tempDiv)
      
      // Render the certificate using inline template
      root.render(React.createElement(CertificateTemplateInline, {
        data: certificateData
      }))

      // Wait for rendering
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Generate PDF
      const pdfBlob = await generateCertificatePDF(tempDiv, {
        filename: `certificado-${certificateData.courseCode || 'curso'}-${certificateData.userName.replace(/\s+/g, '-').toLowerCase()}.pdf`,
        quality: 1.0,
        format: 'a4',
        orientation: 'landscape'
      })

      // Clean up
      root.unmount()
      document.body.removeChild(tempDiv)

      // Download the PDF
      const filename = `certificado-${certificateData.courseCode || 'curso'}-${certificateData.userName.replace(/\s+/g, '-').toLowerCase()}.pdf`
      downloadPDFBlob(pdfBlob, filename)

      return pdfBlob

    } catch (error) {
      console.error('Error generating certificate:', error)
      throw error
    } finally {
      setIsGenerating(false)
    }
  }

  return {
    generateCertificate,
    isGenerating
  }
}