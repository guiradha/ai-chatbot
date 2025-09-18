'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Shield,
  Search,
  Download,
  FileCheck,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CertificateDialog } from '@/components/dialogs/certificate-dialog';

export default function CertificatesPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<'add' | 'edit'>('add');
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const handleAddCertificate = () => {
    setSelectedCertificate(null);
    setDialogMode('add');
    setDialogOpen(true);
  };

  const handleEditCertificate = (certificate: any) => {
    setSelectedCertificate(certificate);
    setDialogMode('edit');
    setDialogOpen(true);
  };

  const handleSubmitCertificate = async (data: any) => {
    console.log('Certificate data:', data);
    // Here you would typically call an API to save the certificate
    // For now, we'll just log the data
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Page Header */}
      <div className="flex items-center justify-between space-y-2 p-8 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Certificados</h1>
          <p className="text-muted-foreground">
            Gerencie certificados emitidos e validações
          </p>
        </div>
        <Button onClick={handleAddCertificate}>
          <FileCheck className="mr-2 h-4 w-4" />
          Emitir Certificado
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6 px-8 pb-8">
        {/* Search and Filters */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Buscar por certificado ou aluno..." 
              className="pl-9"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="valid">Válido</SelectItem>
              <SelectItem value="expired">Expirado</SelectItem>
              <SelectItem value="revoked">Revogado</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Emitidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,543</div>
              <p className="text-xs text-muted-foreground">Desde o início</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Válidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10,234</div>
              <p className="text-xs text-green-600">81.6% do total</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Expirando (30 dias)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">287</div>
              <p className="text-xs text-yellow-600">Requer atenção</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Emitidos este mês</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">456</div>
              <p className="text-xs text-muted-foreground">+23% vs anterior</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Certificates */}
        <Card>
          <CardHeader>
            <CardTitle>Certificados Recentes</CardTitle>
            <CardDescription>Últimos certificados emitidos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <th className="text-left p-4 font-medium">Código</th>
                    <th className="text-left p-4 font-medium">Aluno</th>
                    <th className="text-left p-4 font-medium">Curso</th>
                    <th className="text-left p-4 font-medium">Emissão</th>
                    <th className="text-left p-4 font-medium">Validade</th>
                    <th className="text-left p-4 font-medium">Status</th>
                    <th className="text-left p-4 font-medium">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { 
                      code: 'CERT-2024-0456', 
                      student: 'João Silva', 
                      course: 'NR-35', 
                      issued: '01/12/2024',
                      expiry: '01/12/2026',
                      status: 'valid'
                    },
                    { 
                      code: 'CERT-2024-0455', 
                      student: 'Maria Santos', 
                      course: 'NR-10', 
                      issued: '30/11/2024',
                      expiry: '30/11/2025',
                      status: 'valid'
                    },
                    { 
                      code: 'CERT-2024-0454', 
                      student: 'Pedro Costa', 
                      course: 'Primeiros Socorros', 
                      issued: '28/11/2024',
                      expiry: '28/11/2025',
                      status: 'valid'
                    },
                    { 
                      code: 'CERT-2023-0123', 
                      student: 'Ana Oliveira', 
                      course: 'NR-33', 
                      issued: '15/01/2023',
                      expiry: '15/01/2024',
                      status: 'expired'
                    },
                  ].map((cert, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="p-4">
                        <code className="text-xs bg-muted px-2 py-1 rounded">
                          {cert.code}
                        </code>
                      </td>
                      <td className="p-4">{cert.student}</td>
                      <td className="p-4">{cert.course}</td>
                      <td className="p-4 text-sm">{cert.issued}</td>
                      <td className="p-4 text-sm">{cert.expiry}</td>
                      <td className="p-4">
                        {cert.status === 'valid' ? (
                          <Badge className="bg-green-100 text-green-700">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Válido
                          </Badge>
                        ) : cert.status === 'expired' ? (
                          <Badge className="bg-red-100 text-red-700">
                            <XCircle className="h-3 w-3 mr-1" />
                            Expirado
                          </Badge>
                        ) : (
                          <Badge className="bg-yellow-100 text-yellow-700">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Expirando
                          </Badge>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" onClick={() => handleEditCertificate({
                            id: cert.code,
                            studentName: cert.student,
                            courseName: cert.course,
                            completionDate: cert.issued,
                            expiryDate: cert.expiry,
                            hours: '40 horas',
                            instructorName: 'João Silva'
                          })}>
                            Ver
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <CertificateDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        mode={dialogMode}
        certificate={selectedCertificate}
        onSubmit={handleSubmitCertificate}
      />
    </div>
  );
}