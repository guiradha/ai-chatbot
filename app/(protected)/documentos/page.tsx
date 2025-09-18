import { FileText, Download, Upload, Folder, Search, Filter, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const documents = [
  { id: 1, name: 'Manual NR-35 - Trabalho em Altura.pdf', type: 'Manual', size: '2.4 MB', date: '15/03/2024', category: 'Segurança' },
  { id: 2, name: 'Procedimento de Emergência.docx', type: 'Procedimento', size: '856 KB', date: '10/03/2024', category: 'Emergência' },
  { id: 3, name: 'Check-list Diário de Segurança.xlsx', type: 'Checklist', size: '124 KB', date: '08/03/2024', category: 'Segurança' },
  { id: 4, name: 'Política de SST.pdf', type: 'Política', size: '1.2 MB', date: '01/03/2024', category: 'Compliance' },
  { id: 5, name: 'Análise de Risco - Setor A.pdf', type: 'Análise', size: '3.1 MB', date: '28/02/2024', category: 'Risco' },
  { id: 6, name: 'Certificado Modelo.docx', type: 'Template', size: '432 KB', date: '25/02/2024', category: 'Certificados' },
];

const categories = ['Todos', 'Segurança', 'Emergência', 'Compliance', 'Risco', 'Certificados'];

export default function DocumentosPage() {
  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Documentos</h1>
          <p className="text-muted-foreground mt-2">
            Central de documentos e arquivos de segurança do trabalho
          </p>
        </div>
        <Button className="bg-[#0063F3] hover:bg-[#0063F3]/90">
          <Upload className="h-4 w-4 mr-2" />
          Enviar Documento
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total de Documentos</CardDescription>
            <CardTitle className="text-3xl">156</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="h-4 w-4" />
              <span>23 novos este mês</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Espaço Utilizado</CardDescription>
            <CardTitle className="text-3xl">8.2 GB</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Folder className="h-4 w-4" />
              <span>De 50 GB disponíveis</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Downloads</CardDescription>
            <CardTitle className="text-3xl">892</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <Download className="h-4 w-4" />
              <span>+15% este mês</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Categorias</CardDescription>
            <CardTitle className="text-3xl">12</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Folder className="h-4 w-4" />
              <span>Organizadas</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Biblioteca de Documentos</CardTitle>
              <CardDescription>Todos os documentos disponíveis para download</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar documentos..." className="pl-8 w-64" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === 'Todos' ? 'default' : 'outline'}
                className="cursor-pointer"
              >
                {category}
              </Badge>
            ))}
          </div>
          
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-[#0063F3]/10 rounded">
                    <FileText className="h-5 w-5 text-[#0063F3]" />
                  </div>
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{doc.type}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span>{doc.date}</span>
                      <span>•</span>
                      <Badge variant="secondary" className="text-xs">
                        {doc.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}