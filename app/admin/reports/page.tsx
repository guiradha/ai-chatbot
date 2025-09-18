'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3,
  Download,
  Calendar,
  TrendingUp,
  Users,
  FileText,
  Activity,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ReportsPage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Page Header */}
      <div className="flex items-center justify-between space-y-2 p-8 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Relatórios</h1>
          <p className="text-muted-foreground">
            Análises e métricas do sistema
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="30d">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Últimos 7 dias</SelectItem>
              <SelectItem value="30d">Últimos 30 dias</SelectItem>
              <SelectItem value="90d">Últimos 90 dias</SelectItem>
              <SelectItem value="12m">Últimos 12 meses</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Exportar Relatório
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6 px-8 pb-8">
        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Usuários Totais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <div className="flex items-center text-xs text-green-600">
                <ArrowUp className="h-3 w-3 mr-1" />
                12.5% vs mês anterior
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Certificados Emitidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <div className="flex items-center text-xs text-green-600">
                <ArrowUp className="h-3 w-3 mr-1" />
                8.3% vs mês anterior
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Conclusão</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78.5%</div>
              <div className="flex items-center text-xs text-green-600">
                <ArrowUp className="h-3 w-3 mr-1" />
                3.2% vs mês anterior
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Incidentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <div className="flex items-center text-xs text-red-600">
                <ArrowDown className="h-3 w-3 mr-1" />
                15% vs mês anterior
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Placeholder */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Progresso Mensal</CardTitle>
              <CardDescription>Evolução de usuários e conclusões</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded">
                <BarChart3 className="h-12 w-12 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Distribuição por Departamento</CardTitle>
              <CardDescription>Usuários ativos por setor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded">
                <Activity className="h-12 w-12 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Relatórios Recentes</CardTitle>
            <CardDescription>Últimos relatórios gerados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Relatório Mensal SST', date: '01/12/2024', size: '2.4 MB' },
                { name: 'Análise de Incidentes', date: '28/11/2024', size: '1.8 MB' },
                { name: 'Certificações Emitidas', date: '25/11/2024', size: '3.2 MB' },
                { name: 'Progresso de Treinamentos', date: '20/11/2024', size: '1.5 MB' },
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{report.name}</p>
                      <p className="text-sm text-muted-foreground">{report.date} • {report.size}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}