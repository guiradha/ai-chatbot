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
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  BookOpen,
  Users,
  Calendar,
  Clock,
  Award,
  TrendingUp,
  Search,
  Plus,
  Edit2,
  Trash2,
  Copy,
  MoreVertical,
  AlertTriangle,
  CheckCircle,
  XCircle,
  PlayCircle,
  PauseCircle,
  FileText,
} from 'lucide-react';

// Mock data
const trainings = [
  {
    id: '1',
    code: 'NR-35',
    title: 'Trabalho em Altura',
    category: 'Segurança',
    status: 'active',
    duration: '8 horas',
    validity: '2 anos',
    enrolled: 245,
    completed: 198,
    rating: 4.8,
    lastUpdated: '2024-02-15',
  },
  {
    id: '2',
    code: 'NR-10',
    title: 'Segurança em Instalações e Serviços em Eletricidade',
    category: 'Segurança',
    status: 'active',
    duration: '40 horas',
    validity: '2 anos',
    enrolled: 180,
    completed: 156,
    rating: 4.7,
    lastUpdated: '2024-03-01',
  },
  {
    id: '3',
    code: 'NR-12',
    title: 'Segurança no Trabalho em Máquinas e Equipamentos',
    category: 'Operacional',
    status: 'draft',
    duration: '16 horas',
    validity: '3 anos',
    enrolled: 0,
    completed: 0,
    rating: 0,
    lastUpdated: '2024-03-10',
  },
  {
    id: '4',
    code: 'NR-06',
    title: 'Equipamento de Proteção Individual - EPI',
    category: 'Segurança',
    status: 'active',
    duration: '4 horas',
    validity: '1 ano',
    enrolled: 520,
    completed: 485,
    rating: 4.9,
    lastUpdated: '2024-01-20',
  },
];

const upcomingClasses = [
  {
    id: '1',
    training: 'NR-35 - Trabalho em Altura',
    instructor: 'Carlos Mendes',
    date: '2024-03-18',
    time: '08:00 - 17:00',
    location: 'Sala de Treinamento A',
    enrolled: 15,
    capacity: 20,
  },
  {
    id: '2',
    training: 'NR-10 - Segurança Elétrica',
    instructor: 'Ana Paula Silva',
    date: '2024-03-20',
    time: '08:00 - 12:00',
    location: 'Online',
    enrolled: 28,
    capacity: 30,
  },
  {
    id: '3',
    training: 'NR-06 - EPIs',
    instructor: 'Roberto Santos',
    date: '2024-03-22',
    time: '14:00 - 18:00',
    location: 'Sala de Treinamento B',
    enrolled: 18,
    capacity: 25,
  },
];

export default function TrainingsManagementPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todos');
  const [statusFilter, setStatusFilter] = useState('Todos');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
            <PlayCircle className="w-3 h-3 mr-1" />
            Ativo
          </Badge>
        );
      case 'draft':
        return (
          <Badge className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
            <Edit2 className="w-3 h-3 mr-1" />
            Rascunho
          </Badge>
        );
      case 'archived':
        return (
          <Badge className="bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400">
            <XCircle className="w-3 h-3 mr-1" />
            Arquivado
          </Badge>
        );
      default:
        return null;
    }
  };

  const getCompletionRate = (enrolled: number, completed: number) => {
    if (enrolled === 0) return 0;
    return Math.round((completed / enrolled) * 100);
  };

  return (
    <div className="flex-1 space-y-6 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Gerenciar Treinamentos
          </h1>
          <p className="text-muted-foreground">
            Configure e monitore cursos e treinamentos de segurança
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Agendar Turma
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Treinamento
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Treinamentos Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">
              +5 novos este mês
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Inscritos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-green-600">
              +18% vs mês anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Taxa de Conclusão
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.3%</div>
            <p className="text-xs text-muted-foreground">
              Meta: 85%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Certificados Emitidos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">892</div>
            <p className="text-xs text-muted-foreground">
              Este mês
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="trainings" className="space-y-4">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="trainings">Treinamentos</TabsTrigger>
          <TabsTrigger value="classes">Turmas</TabsTrigger>
          <TabsTrigger value="certificates">Certificados</TabsTrigger>
        </TabsList>

        <TabsContent value="trainings" className="space-y-4">
          {/* Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Buscar treinamentos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Select
                    value={categoryFilter}
                    onValueChange={setCategoryFilter}
                  >
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Todos">Todos</SelectItem>
                      <SelectItem value="Segurança">Segurança</SelectItem>
                      <SelectItem value="Operacional">Operacional</SelectItem>
                      <SelectItem value="Comportamental">
                        Comportamental
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Todos">Todos</SelectItem>
                      <SelectItem value="active">Ativo</SelectItem>
                      <SelectItem value="draft">Rascunho</SelectItem>
                      <SelectItem value="archived">Arquivado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trainings Table */}
          <Card>
            <CardHeader>
              <CardTitle>Lista de Treinamentos</CardTitle>
              <CardDescription>
                Gerencie todos os treinamentos disponíveis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Código</TableHead>
                    <TableHead>Título</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progresso</TableHead>
                    <TableHead>Avaliação</TableHead>
                    <TableHead>Validade</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trainings.map((training) => (
                    <TableRow key={training.id}>
                      <TableCell className="font-medium">
                        {training.code}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{training.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {training.duration}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>{training.category}</TableCell>
                      <TableCell>{getStatusBadge(training.status)}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Progress
                              value={getCompletionRate(
                                training.enrolled,
                                training.completed
                              )}
                              className="w-[60px] h-2"
                            />
                            <span className="text-sm">
                              {getCompletionRate(
                                training.enrolled,
                                training.completed
                              )}
                              %
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {training.completed}/{training.enrolled} concluídos
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        {training.rating > 0 ? (
                          <div className="flex items-center gap-1">
                            <span className="text-sm font-medium">
                              {training.rating}
                            </span>
                            <span className="text-yellow-500">★</span>
                          </div>
                        ) : (
                          <span className="text-sm text-muted-foreground">
                            -
                          </span>
                        )}
                      </TableCell>
                      <TableCell>{training.validity}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="classes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Próximas Turmas</CardTitle>
              <CardDescription>
                Turmas agendadas para os próximos dias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingClasses.map((class_) => (
                  <div
                    key={class_.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="space-y-1">
                      <p className="font-medium">{class_.training}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {class_.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {class_.time}
                        </span>
                        <span>{class_.location}</span>
                      </div>
                      <p className="text-sm">Instrutor: {class_.instructor}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">
                          {class_.enrolled}/{class_.capacity}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Inscritos
                        </p>
                      </div>
                      <Button size="sm">Gerenciar</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certificates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gestão de Certificados</CardTitle>
              <CardDescription>
                Controle de emissão e validade de certificados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Emitidos Hoje
                        </p>
                        <p className="text-2xl font-bold">23</p>
                      </div>
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Vencendo (30 dias)
                        </p>
                        <p className="text-2xl font-bold text-orange-600">
                          156
                        </p>
                      </div>
                      <AlertTriangle className="h-8 w-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Total Ativo
                        </p>
                        <p className="text-2xl font-bold">3,847</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 flex gap-3">
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Relatório de Validade
                </Button>
                <Button variant="outline">
                  <Award className="mr-2 h-4 w-4" />
                  Emitir em Lote
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}