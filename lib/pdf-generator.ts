import html2canvas from 'html2canvas'
import domtoimage from 'dom-to-image-more'
import jsPDF from 'jspdf'
import { CertificateData } from '@/components/certificate-template'

export interface PDFGenerationOptions {
  filename?: string
  quality?: number
  format?: 'a4' | 'letter'
  orientation?: 'landscape' | 'portrait'
}

async function generatePDFWithDomToImage(
  certificateElement: HTMLElement,
  options: PDFGenerationOptions = {}
): Promise<Blob> {
  const {
    quality = 1.0,
    format = 'a4',
    orientation = 'landscape'
  } = options

  console.log('Generating PDF with dom-to-image-more...');
  console.log('Element dimensions:', {
    width: certificateElement.offsetWidth,
    height: certificateElement.offsetHeight,
    innerHTML: certificateElement.innerHTML.substring(0, 200)
  });

  // Generate image using dom-to-image-more
  const dataUrl = await domtoimage.toPng(certificateElement, {
    width: 1123,
    height: 794,
    bgcolor: '#ffffff',
    style: {
      'font-family': 'Work Sans, Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
      'background-color': '#ffffff',
      'color': '#000000'
    },
    filter: (node: any) => {
      // Filter out problematic nodes
      if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') {
        return false
      }
      return true
    }
  })

  console.log('Generated dataUrl length:', dataUrl?.length);

  // Calculate dimensions for A4 landscape
  const imgWidth = 297 // A4 width in mm
  const imgHeight = 210 // A4 height in mm

  // Create PDF
  const pdf = new jsPDF({
    orientation: orientation,
    unit: 'mm',
    format: format
  })

  // Add image to PDF
  pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight)

  // Return as blob
  return pdf.output('blob')
}

export async function generateCertificatePDF(
  certificateElement: HTMLElement,
  options: PDFGenerationOptions = {}
): Promise<Blob> {
  const {
    filename = 'certificado.pdf',
    quality = 1.0,
    format = 'a4',
    orientation = 'landscape'
  } = options

  console.log('Starting PDF generation...');
  console.log('Certificate element:', {
    exists: !!certificateElement,
    width: certificateElement?.offsetWidth,
    height: certificateElement?.offsetHeight,
    hasContent: certificateElement?.innerHTML?.length > 0
  });

  // Try dom-to-image-more first as fallback for lab() color issues
  try {
    console.log('Attempting PDF generation with dom-to-image-more...')
    const result = await generatePDFWithDomToImage(certificateElement, options)
    console.log('PDF generated successfully with dom-to-image-more');
    return result;
  } catch (domError) {
    console.warn('dom-to-image-more failed, falling back to html2canvas:', domError)
  }

  try {
    // Wait for fonts to load
    if (document.fonts) {
      await document.fonts.ready
    }

    // Add a small delay to ensure rendering is complete
    await new Promise(resolve => setTimeout(resolve, 500))

    // Convert the React component to canvas
    const canvas = await html2canvas(certificateElement, {
      scale: 1, // Use scale 1 for better compatibility
      useCORS: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      width: 1123, // Fixed width in pixels
      height: 794, // Fixed height in pixels
      logging: false, // Disable logging to prevent console errors
      foreignObjectRendering: false, // Disable for better compatibility
      imageTimeout: 15000, // Increase timeout
      removeContainer: true,
      ignoreElements: (element) => {
        // Ignore elements that might cause issues
        const tagName = element.tagName
        return tagName === 'SCRIPT' || tagName === 'STYLE' || tagName === 'NOSCRIPT'
      },
      onclone: (clonedDoc) => {
        try {
          // Remove ALL existing stylesheets to prevent lab() issues
          const existingStyles = clonedDoc.querySelectorAll('style, link[rel="stylesheet"]')
          existingStyles.forEach(element => element.remove())

          // Add our complete replacement styles
          const style = clonedDoc.createElement('style')
          style.textContent = `
            * {
              font-family: 'Work Sans', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
              color: rgb(0, 0, 0) !important;
              box-sizing: border-box !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            
            /* Layout utilities */
            .flex { display: flex !important; }
            .items-center { align-items: center !important; }
            .justify-between { justify-content: space-between !important; }
            .justify-center { justify-content: center !important; }
            .flex-col { flex-direction: column !important; }
            .gap-2 { gap: 8px !important; }
            .gap-3 { gap: 12px !important; }
            .gap-4 { gap: 16px !important; }
            .gap-6 { gap: 24px !important; }
            .gap-8 { gap: 32px !important; }
            .grid { display: grid !important; }
            .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
            
            /* Spacing */
            .mb-1 { margin-bottom: 4px !important; }
            .mb-2 { margin-bottom: 8px !important; }
            .mb-4 { margin-bottom: 16px !important; }
            .mb-6 { margin-bottom: 24px !important; }
            .mb-8 { margin-bottom: 32px !important; }
            .mr-2 { margin-right: 8px !important; }
            .mr-4 { margin-right: 16px !important; }
            .mt-4 { margin-top: 16px !important; }
            .mt-auto { margin-top: auto !important; }
            .pt-8 { padding-top: 32px !important; }
            
            /* Text styles */
            .text-2xl { font-size: 24px !important; line-height: 32px !important; }
            .text-3xl { font-size: 30px !important; line-height: 36px !important; }
            .text-4xl { font-size: 36px !important; line-height: 40px !important; }
            .text-lg { font-size: 18px !important; line-height: 28px !important; }
            .text-sm { font-size: 14px !important; line-height: 20px !important; }
            .text-xs { font-size: 12px !important; line-height: 16px !important; }
            .font-bold { font-weight: 700 !important; }
            .font-semibold { font-weight: 600 !important; }
            .text-center { text-align: center !important; }
            .leading-relaxed { line-height: 1.625 !important; }
            
            /* Colors */
            .bg-white { background-color: rgb(255, 255, 255) !important; }
            .bg-blue-600 { background-color: rgb(37, 99, 235) !important; }
            .text-blue-600 { color: rgb(37, 99, 235) !important; }
            .text-green-600 { color: rgb(22, 163, 74) !important; }
            .text-yellow-600 { color: rgb(202, 138, 4) !important; }
            .bg-green-100 { background-color: rgb(220, 252, 231) !important; }
            .bg-blue-100 { background-color: rgb(219, 234, 254) !important; }
            .bg-yellow-100 { background-color: rgb(254, 249, 195) !important; }
            .text-gray-900 { color: rgb(17, 24, 39) !important; }
            .text-gray-600 { color: rgb(75, 85, 99) !important; }
            .text-gray-500 { color: rgb(107, 114, 128) !important; }
            .text-gray-400 { color: rgb(156, 163, 175) !important; }
            .bg-gray-100 { background-color: rgb(243, 244, 246) !important; }
            .border-gray-400 { border-color: rgb(156, 163, 175) !important; }
            .text-white { color: rgb(255, 255, 255) !important; }
            
            /* Border and radius */
            .rounded-lg { border-radius: 8px !important; }
            .rounded-full { border-radius: 9999px !important; }
            .border-t { border-top: 1px solid !important; }
            
            /* Sizing */
            .w-12 { width: 48px !important; }
            .h-12 { height: 48px !important; }
            .w-32 { width: 128px !important; }
            .h-1 { height: 4px !important; }
            .w-48 { width: 192px !important; }
            .max-w-4xl { max-width: 896px !important; }
            .mx-auto { margin-left: auto !important; margin-right: auto !important; }
            
            /* SVG icons */
            svg {
              width: 1em !important;
              height: 1em !important;
              fill: currentColor !important;
            }
          `
          clonedDoc.head.appendChild(style)
        } catch (err) {
          console.warn('Error adding styles to cloned document:', err)
        }
      }
    })

    // Calculate dimensions for A4 landscape
    const imgWidth = 297 // A4 width in mm
    const imgHeight = 210 // A4 height in mm

    // Create PDF
    const pdf = new jsPDF({
      orientation: orientation,
      unit: 'mm',
      format: format
    })

    // Convert canvas to image
    const imgData = canvas.toDataURL('image/png', quality)

    // Add image to PDF
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)

    // Return as blob
    return pdf.output('blob')
  } catch (error) {
    console.error('Error generating PDF:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : undefined
    console.error('Error details:', {
      message: errorMessage,
      stack: errorStack,
      elementDimensions: {
        width: certificateElement?.offsetWidth,
        height: certificateElement?.offsetHeight
      }
    })
    throw new Error(`Failed to generate certificate PDF: ${errorMessage}`)
  }
}

export function downloadPDFBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export function generateCertificateNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 5).toUpperCase()
  return `SE${timestamp}${random}`
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

export function formatDateLong(date: Date): string {
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

export function createCertificateData(
  userName: string,
  courseTitle: string,
  courseData: any
): CertificateData {
  const completionDate = new Date()
  
  // Extract NR code from course title if present
  const nrMatch = courseTitle.match(/NR[-\s]?(\d+)/i)
  const courseCode = nrMatch ? `NR-${nrMatch[1]}` : undefined

  return {
    userName,
    courseName: courseTitle,
    courseCode,
    completionDate: formatDateLong(completionDate),
    validity: courseData?.certificacao?.validade || '2 anos',
    score: courseData?.score || undefined,
    hours: courseData?.duration || '40 horas',
    certificateNumber: generateCertificateNumber(),
    instructorName: courseData?.instructor || 'Instrutor Responsável'
  }
}