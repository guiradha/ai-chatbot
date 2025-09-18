'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  BarChart,
  Download,
  FileText,
  TrendingUp,
  TrendingDown,
  Users,
  Award,
  AlertTriangle,
  Calendar,
  Filter,
  Printer,
  Share2,
  CheckCircle,
  XCircle,
  Clock,
  PieChart,
  Activity,
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Mock data for charts
const trainingCompletionData = [
  { month: 'Jan', completed: 420, started: 480, pending: 60 },
  { month: 'Fev', completed: 456, started: 520, pending: 64 },
  { month: 'Mar', completed: 489, started: 540, pending: 51 },
  { month: 'Abr', completed: 512, started: 580, pending: 68 },
  { month: 'Mai', completed: 534, started: 600, pending: 66 },
  { month: 'Jun', completed: 567, started: 620, pending: 53 },
];

const departmentData = [
  { name: 'Operações', value: 35, color: '#0063F3' },
  { name: 'Manutenção', value: 25, color: '#307FF4' },
  { name: 'Segurança', value: 20, color: '#588DCF' },
  { name: 'Administrativo', value: 12, color: '#90B8F6' },
  { name: 'Logística', value: 8, color: '#C1D5F5' },
];

const certificateStatusData = [
  { status: 'Válido', count: 2456, percentage: 68 },
  { status: 'Vencendo (30d)', count: 523, percentage: 15 },
  { status: 'Vencendo (60d)', count: 312, percentage: 9 },
  { status: 'Vencido', count: 289, percentage: 8 },
];

const topTrainings = [
  { name: 'NR-35 - Trabalho em Altura', completions: 456, rating: 4.8 },
  { name: 'NR-10 - Segurança Elétrica', completions: 342, rating: 4.7 },
  { name: 'NR-06 - EPIs', completions: 298, rating: 4.6 },
  { name: 'NR-12 - Máquinas', completions: 267, rating: 4.9 },
  { name: 'Primeiros Socorros', completions: 245, rating: 4.7 },
];

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState('30d');
  const [department, setDepartment] = useState('all');

  return (
    <div className="flex-1 space-y-6 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Relatórios e Análises
          </h1>
          <p className="text-muted-foreground">
            Visualize métricas e gere relatórios detalhados
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Últimos 7 dias</SelectItem>
              <SelectItem value="30d">Últimos 30 dias</SelectItem>
              <SelectItem value="90d">Últimos 90 dias</SelectItem>
              <SelectItem value="1y">Último ano</SelectItem>
              <SelectItem value="custom">Personalizado</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Imprimir
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taxa de Conclusão
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.3%</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              +3.2% vs mês anterior
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Certificados Ativos
            </CardTitle>
            <Award className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,580</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Activity className="mr-1 h-3 w-3" />
              92% em conformidade
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Engajamento
            </CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.5%</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              +5.1% vs mês anterior
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Alertas de Vencimento
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">523</div>
            <div className="flex items-center text-xs text-orange-600">
              <Clock className="mr-1 h-3 w-3" />
              Próximos 30 dias
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="training">Treinamentos</TabsTrigger>
          <TabsTrigger value="compliance">Conformidade</TabsTrigger>
          <TabsTrigger value="custom">Personalizado</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Training Completion Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Tendência de Conclusão</CardTitle>
                <CardDescription>
                  Evolução mensal de treinamentos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={trainingCompletionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="completed"
                      stackId="1"
                      stroke="#10B981"
                      fill="#10B981"
                      name="Concluídos"
                    />
                    <Area
                      type="monotone"
                      dataKey="pending"
                      stackId="1"
                      stroke="#F59E0B"
                      fill="#F59E0B"
                      name="Pendentes"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Distribution by Department */}
            <Card>
              <CardHeader>
                <CardTitle>Distribuição por Departamento</CardTitle>
                <CardDescription>
                  Participação em treinamentos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={departmentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {departmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Certificate Status */}
          <Card>
            <CardHeader>
              <CardTitle>Status de Certificados</CardTitle>
              <CardDescription>
                Visão geral de validade dos certificados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certificateStatusData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-3 w-3 rounded-full ${
                            item.status === 'Válido'
                              ? 'bg-green-600'
                              : item.status.includes('Vencendo')
                              ? 'bg-orange-600'
                              : 'bg-red-600'
                          }`}
                        />
                        <span className="text-sm font-medium">
                          {item.status}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {item.count} ({item.percentage}%)
                      </span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="training" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top 5 Treinamentos</CardTitle>
              <CardDescription>
                Treinamentos mais realizados no período
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topTrainings.map((training, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                        <span className="text-sm font-bold text-primary">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{training.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {training.completions} conclusões
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">
                        {training.rating}
                      </span>
                      <span className="text-yellow-500">★</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conformidade por NR</CardTitle>
              <CardDescription>
                Status de conformidade por norma regulamentadora
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { nr: 'NR-6', name: 'EPIs', compliance: 98 },
                  { nr: 'NR-10', name: 'Elétrica', compliance: 95 },
                  { nr: 'NR-12', name: 'Máquinas', compliance: 92 },
                  { nr: 'NR-35', name: 'Altura', compliance: 78 },
                  { nr: 'NR-33', name: 'Espaço Confinado', compliance: 85 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="font-medium">{item.nr}</span>
                        <span className="text-sm text-muted-foreground ml-2">
                          {item.name}
                        </span>
                      </div>
                      <span
                        className={`text-lg font-bold ${
                          item.compliance >= 90
                            ? 'text-green-600'
                            : item.compliance >= 80
                            ? 'text-orange-600'
                            : 'text-red-600'
                        }`}
                      >
                        {item.compliance}%
                      </span>
                    </div>
                    <Progress
                      value={item.compliance}
                      className={`h-2 ${
                        item.compliance >= 90
                          ? '[&>div]:bg-green-600'
                          : item.compliance >= 80
                          ? '[&>div]:bg-orange-600'
                          : '[&>div]:bg-red-600'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="custom" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Relatório Personalizado</CardTitle>
              <CardDescription>
                Configure e gere relatórios personalizados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">
                    Tipo de Relatório
                  </label>
                  <Select defaultValue="training">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="training">Treinamentos</SelectItem>
                      <SelectItem value="certificates">Certificados</SelectItem>
                      <SelectItem value="users">Usuários</SelectItem>
                      <SelectItem value="compliance">Conformidade</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium">Departamento</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="operations">Operações</SelectItem>
                      <SelectItem value="maintenance">Manutenção</SelectItem>
                      <SelectItem value="safety">Segurança</SelectItem>
                      <SelectItem value="admin">Administrativo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium">Formato</label>
                  <Select defaultValue="pdf">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="excel">Excel</SelectItem>
                      <SelectItem value="csv">CSV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1">
                    <FileText className="mr-2 h-4 w-4" />
                    Gerar Relatório
                  </Button>
                  <Button variant="outline">
                    <Share2 className="mr-2 h-4 w-4" />
                    Compartilhar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}