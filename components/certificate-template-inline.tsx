import React from 'react'
import { Award, Calendar, Check } from 'lucide-react'
import { CertificateData } from './certificate-template'

interface CertificateTemplateInlineProps {
  data: CertificateData
}

export function CertificateTemplateInline({ data }: CertificateTemplateInlineProps) {
  return (
    <div 
      style={{ 
        width: '1123px',
        height: '794px',
        padding: '60px',
        fontFamily: 'Work Sans, Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
        backgroundColor: '#ffffff',
        color: '#000000',
        boxSizing: 'border-box'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            backgroundColor: 'rgb(37, 99, 235)', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginRight: '16px' 
          }}>
            <Award style={{ width: '24px', height: '24px', color: '#ffffff' }} />
          </div>
          <div>
            <div 
              style={{ 
                fontSize: '24px', 
                fontWeight: 700, 
                color: 'rgb(17, 24, 39)',
                fontFamily: 'Work Sans, Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
                letterSpacing: '-0.03em',
                textTransform: 'lowercase'
              }}
            >
              são e salvo
            </div>
            <div style={{ fontSize: '14px', color: 'rgb(107, 114, 128)' }}>Escola de Segurança do Trabalho</div>
          </div>
        </div>

        {/* Certificate Number */}
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '14px', color: 'rgb(107, 114, 128)' }}>Certificado Nº</div>
          <div style={{ fontSize: '18px', fontWeight: 600, color: 'rgb(17, 24, 39)' }}>{data.certificateNumber}</div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '32px' }}>
        {/* Certificate Title */}
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 700, color: 'rgb(17, 24, 39)', marginBottom: '8px', margin: 0 }}>CERTIFICADO</h1>
          <div style={{ width: '128px', height: '4px', backgroundColor: 'rgb(37, 99, 235)', margin: '0 auto', borderRadius: '9999px' }}></div>
        </div>

        {/* Certifies Text */}
        <div style={{ fontSize: '18px', color: 'rgb(75, 85, 99)', marginBottom: '32px', maxWidth: '896px', lineHeight: '1.625' }}>
          Certificamos que <span style={{ fontWeight: 600, color: 'rgb(17, 24, 39)' }}>{data.userName}</span> concluiu com aproveitamento o curso de
        </div>

        {/* Course Information */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'rgb(37, 99, 235)', marginBottom: '8px', margin: 0 }}>{data.courseName}</h2>
          {data.courseCode && (
            <div style={{ 
              display: 'inline-block', 
              padding: '8px 16px', 
              backgroundColor: 'rgb(219, 234, 254)', 
              color: 'rgb(29, 78, 216)', 
              borderRadius: '8px', 
              fontWeight: 600, 
              marginTop: '8px' 
            }}>
              {data.courseCode}
            </div>
          )}
        </div>

        {/* Course Details */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '32px', textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              backgroundColor: 'rgb(220, 252, 231)', 
              borderRadius: '9999px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '8px' 
            }}>
              <Check style={{ width: '24px', height: '24px', color: 'rgb(22, 163, 74)' }} />
            </div>
            <div style={{ fontSize: '14px', color: 'rgb(107, 114, 128)' }}>Carga Horária</div>
            <div style={{ fontWeight: 600, color: 'rgb(17, 24, 39)' }}>{data.hours}</div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              backgroundColor: 'rgb(219, 234, 254)', 
              borderRadius: '9999px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '8px' 
            }}>
              <Calendar style={{ width: '24px', height: '24px', color: 'rgb(37, 99, 235)' }} />
            </div>
            <div style={{ fontSize: '14px', color: 'rgb(107, 114, 128)' }}>Data de Conclusão</div>
            <div style={{ fontWeight: 600, color: 'rgb(17, 24, 39)' }}>{data.completionDate}</div>
          </div>

          {data.score && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: 'rgb(254, 249, 195)', 
                borderRadius: '9999px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '8px' 
              }}>
                <Award style={{ width: '24px', height: '24px', color: 'rgb(202, 138, 4)' }} />
              </div>
              <div style={{ fontSize: '14px', color: 'rgb(107, 114, 128)' }}>Aproveitamento</div>
              <div style={{ fontWeight: 600, color: 'rgb(17, 24, 39)' }}>{data.score}%</div>
            </div>
          )}
        </div>

        {/* Validity */}
        {data.validity && (
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '14px', color: 'rgb(107, 114, 128)' }}>Validade do Certificado</div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: 'rgb(17, 24, 39)' }}>{data.validity}</div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ marginTop: 'auto', paddingTop: '32px', borderTop: '1px solid rgb(156, 163, 175)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '192px', borderTop: '1px solid rgb(156, 163, 175)', marginBottom: '4px' }}></div>
            <div style={{ fontSize: '14px', color: 'rgb(75, 85, 99)' }}>
              {data.instructorName || 'Instrutor Responsável'}
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: 'rgb(107, 114, 128)', marginBottom: '8px' }}>
              Certificado emitido digitalmente pela São e Salvo
            </div>
            <div style={{ fontSize: '12px', color: 'rgb(156, 163, 175)' }}>
              Para verificar a autenticidade, acesse: saoe.salvo.com.br/verificar
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '192px', borderTop: '1px solid rgb(156, 163, 175)', marginBottom: '4px' }}></div>
            <div style={{ fontSize: '14px', color: 'rgb(75, 85, 99)' }}>Direção Técnica</div>
          </div>
        </div>
      </div>
    </div>
  )
}