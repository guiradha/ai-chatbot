'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Shield, 
  AlertTriangle, 
  Check,
  TrendingUp,
  Activity,
  BookOpen,
  Calendar,
  Download,
  RefreshCw,
  UserPlus,
  FileText,
  BarChart,
  Clock,
  Settings
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const stats = [
  {
    title: 'Total de Usuários',
    value: '2,847',
    change: '+12.5%',
    icon: Users,
    trend: 'up',
    description: '240 novos este mês'
  },
  {
    title: 'Cursos Ativos',
    value: '48',
    change: '+8%',
    icon: BookOpen,
    trend: 'up',
    description: '12 novos publicados'
  },
  {
    title: 'Taxa de Conclusão',
    value: '78.5%',
    change: '+3.2%',
    icon: Check,
    trend: 'up',
    description: 'Média geral'
  },
  {
    title: 'Incidentes Reportados',
    value: '23',
    change: '-15%',
    icon: AlertTriangle,
    trend: 'down',
    description: 'Este mês'
  }
];

const recentUsers = [
  { name: 'Ana Silva', email: 'ana.silva@empresa.com', role: 'Operador', status: 'Ativo', joined: '2h atrás' },
  { name: 'Carlos Santos', email: 'carlos.santos@empresa.com', role: 'Supervisor', status: 'Ativo', joined: '5h atrás' },
  { name: 'Maria Costa', email: 'maria.costa@empresa.com', role: 'Técnico', status: 'Pendente', joined: '1d atrás' },
  { name: 'João Oliveira', email: 'joao.oliveira@empresa.com', role: 'Operador', status: 'Ativo', joined: '2d atrás' },
  { name: 'Paula Ferreira', email: 'paula.ferreira@empresa.com', role: 'Admin', status: 'Ativo', joined: '3d atrás' },
];

const topCourses = [
  { name: 'Segurança no Trabalho NR-35', completions: 456, rating: 4.8, completion: 85 },
  { name: 'Primeiros Socorros', completions: 342, rating: 4.7, completion: 78 },
  { name: 'Uso de EPIs', completions: 298, rating: 4.6, completion: 92 },
  { name: 'Prevenção de Acidentes', completions: 267, rating: 4.9, completion: 73 },
];

const systemHealth = [
  { name: 'API', status: 'operational', latency: '45ms' },
  { name: 'Database', status: 'operational', latency: '12ms' },
  { name: 'Storage', status: 'operational', latency: '89ms' },
  { name: 'Email Service', status: 'degraded', latency: '234ms' },
];

export default function AdminDashboardPage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Page Header */}
      <div className="flex items-center justify-between space-y-2 p-8 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Painel Administrativo</h1>
          <p className="text-muted-foreground">
            Gerencie usuários, cursos e monitore o sistema
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="7d">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione o período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Últimas 24 horas</SelectItem>
              <SelectItem value="7d">Últimos 7 dias</SelectItem>
              <SelectItem value="30d">Últimos 30 dias</SelectItem>
              <SelectItem value="90d">Últimos 90 dias</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Atualizar
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6 px-8 pb-8">

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isPositive = stat.trend === 'up';
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs">
                  <span className={isPositive ? 'text-green-600' : 'text-red-600'}>
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {stat.description}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Users */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Usuários Recentes</CardTitle>
              <CardDescription>
                Últimos usuários cadastrados no sistema
              </CardDescription>
            </div>
            <Button size="sm" variant="outline">
              <UserPlus className="mr-2 h-4 w-4" />
              Adicionar
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground">{user.role}</span>
                    <span className={cn(
                      "text-xs px-2 py-1 rounded-full",
                      user.status === 'Ativo' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' 
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                    )}>
                      {user.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline" size="sm">
              Ver todos os usuários
            </Button>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle>Status do Sistema</CardTitle>
            <CardDescription>
              Monitoramento em tempo real
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemHealth.map((service, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "h-2 w-2 rounded-full",
                      service.status === 'operational' 
                        ? 'bg-green-500' 
                        : 'bg-yellow-500'
                    )} />
                    <span className="text-sm">{service.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {service.latency}
                  </span>
                </div>
              ))}
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span>Uptime</span>
                  <span className="font-medium">99.98%</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span>Última checagem</span>
                  <span className="text-muted-foreground">30s atrás</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Trainings */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Cursos Populares</CardTitle>
            <CardDescription>
              Cursos com maior engajamento este mês
            </CardDescription>
          </div>
          <Button size="sm" variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Ver Relatório
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topCourses.map((curso, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{curso.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {curso.completions} conclusões • {curso.rating} ★
                    </p>
                  </div>
                  <span className="text-sm font-medium">{curso.completion}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all"
                    style={{ width: `${curso.completion}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-4">
        <Button className="h-auto flex-col gap-2 p-4">
          <Users className="h-6 w-6" />
          <span>Gerenciar Usuários</span>
        </Button>
        <Button className="h-auto flex-col gap-2 p-4" variant="outline">
          <BookOpen className="h-6 w-6" />
          <span>Criar Curso</span>
        </Button>
        <Button className="h-auto flex-col gap-2 p-4" variant="outline">
          <BarChart className="h-6 w-6" />
          <span>Gerar Relatório</span>
        </Button>
        <Button className="h-auto flex-col gap-2 p-4" variant="outline">
          <Settings className="h-6 w-6" />
          <span>Configurações</span>
        </Button>
      </div>
      </div>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}