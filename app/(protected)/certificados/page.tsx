'use client'

import { Award, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { coursesData } from '@/lib/courses-data';
import { CertificateGenerator } from '@/components/certificate-generator';
import { createCertificateData } from '@/lib/pdf-generator';

export default function CertificadosPage() {
  // Mock user data - in a real app, this would come from auth/session
  const userName = "João da Silva";

  // Get completed courses with certificates
  const completedCourses = coursesData.filter(course => 
    course.status === 'completed' && course.certificateAvailable
  );

  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Certificados</h1>
        <p className="text-muted-foreground mt-2">
          Gerencie e acompanhe todos os certificados de treinamento da sua equipe
        </p>
      </div>

      {completedCourses.length === 0 ? (
        <Card className="p-12">
          <div className="text-center space-y-4">
            <Award className="h-12 w-12 text-muted-foreground mx-auto" />
            <div>
              <h3 className="text-lg font-medium">Nenhum certificado disponível</h3>
              <p className="text-muted-foreground mt-2">
                Complete seus cursos para ter acesso aos certificados
              </p>
            </div>
          </div>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {completedCourses.map((course) => {
            const certificateData = createCertificateData(userName, course.title, course);
            
            // Calculate validity date
            const completedDate = new Date(course.completedDate || '2024-03-15');
            const validityYears = course.certificacao?.validade === '1 ano' ? 1 : 2;
            const validityDate = new Date(completedDate);
            validityDate.setFullYear(validityDate.getFullYear() + validityYears);

            return (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-[#0063F3]" />
                    {course.title}
                  </CardTitle>
                  <CardDescription>
                    Emitido em {completedDate.toLocaleDateString('pt-BR')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>Válido até: {validityDate.toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Status: Ativo</span>
                    </div>
                    {course.score && (
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="h-4 w-4 text-yellow-500" />
                        <span>Nota: {course.score}%</span>
                      </div>
                    )}
                    <div className="mt-4">
                      <CertificateGenerator 
                        certificateData={certificateData}
                        className="w-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}