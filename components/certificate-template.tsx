import React from 'react'
import { Award, Calendar, Check } from 'lucide-react'

export interface CertificateData {
  userName: string
  courseName: string
  courseCode?: string // e.g., "NR-35"
  completionDate: string
  validity?: string
  score?: number
  hours: string
  certificateNumber: string
  instructorName?: string
}

interface CertificateTemplateProps {
  data: CertificateData
  showBorder?: boolean
}

export function CertificateTemplate({ data, showBorder = true }: CertificateTemplateProps) {
  return (
    <div 
      className={`bg-white font-sans ${showBorder ? 'border border-gray-200' : ''}`}
      style={{ 
        width: '1123px', // 297mm at 96dpi
        height: '794px', // 210mm at 96dpi
        padding: '60px',
        fontFamily: 'Work Sans, Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
        backgroundColor: '#ffffff',
        color: '#000000',
        boxSizing: 'border-box'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div>
            <div 
              className="text-2xl font-bold text-gray-900"
              style={{ 
                fontFamily: 'var(--font-work-sans)', 
                letterSpacing: '-0.03em',
                textTransform: 'lowercase'
              }}
            >
              são e salvo
            </div>
            <div className="text-sm text-gray-500">Escola de Segurança do Trabalho</div>
          </div>
        </div>

        {/* Certificate Number */}
        <div className="text-right">
          <div className="text-sm text-gray-500">Certificado Nº</div>
          <div className="text-lg font-semibold text-gray-900">{data.certificateNumber}</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center mb-8">
        {/* Certificate Title */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">CERTIFICADO</h1>
          <div className="w-32 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Certifies Text */}
        <div className="text-lg text-gray-600 mb-8 max-w-4xl leading-relaxed">
          Certificamos que <span className="font-semibold text-gray-900">{data.userName}</span> concluiu com aproveitamento o curso de
        </div>

        {/* Course Information */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">{data.courseName}</h2>
          {data.courseCode && (
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-semibold">
              {data.courseCode}
            </div>
          )}
        </div>

        {/* Course Details */}
        <div className="grid grid-cols-3 gap-8 text-center mb-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-sm text-gray-500">Carga Horária</div>
            <div className="font-semibold text-gray-900">{data.hours}</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-sm text-gray-500">Data de Conclusão</div>
            <div className="font-semibold text-gray-900">{data.completionDate}</div>
          </div>

          {data.score && (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-sm text-gray-500">Aproveitamento</div>
              <div className="font-semibold text-gray-900">{data.score}%</div>
            </div>
          )}
        </div>

        {/* Validity */}
        {data.validity && (
          <div className="text-center mb-6">
            <div className="text-sm text-gray-500">Validade do Certificado</div>
            <div className="text-lg font-semibold text-gray-900">{data.validity}</div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-8 border-t border-gray-200">
        <div className="flex justify-between items-end">
          <div className="text-center">
            <div className="w-48 border-t border-gray-400 mb-1"></div>
            <div className="text-sm text-gray-600">
              {data.instructorName || 'Instrutor Responsável'}
            </div>
          </div>

          <div className="text-center">
            <div className="text-xs text-gray-500 mb-2">
              Certificado emitido digitalmente pela São e Salvo
            </div>
            <div className="text-xs text-gray-400">
              Para verificar a autenticidade, acesse: saoe.salvo.com.br/verificar
            </div>
          </div>

          <div className="text-center">
            <div className="w-48 border-t border-gray-400 mb-1"></div>
            <div className="text-sm text-gray-600">Direção Técnica</div>
          </div>
        </div>
      </div>
    </div>
  )
}