'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  Shield, 
  AlertTriangle, 
  Check,
  TrendingUp,
  Activity,
  BookOpen,
  Calendar,
  Clock,
  Award,
  AlertCircle,
  FileCheck,
  Timer,
  Target,
  Bell,
  User
} from 'lucide-react';
import { SaoESalvoLogo } from '@/components/sao-e-salvo-logo';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Mock individual user data - employee of Construtora ABC
const currentUser = {
  name: 'João Silva',
  employeeId: 'ABC-2024-5847',
  department: 'Operações',
  role: 'Operador de Máquinas',
  hireDate: '2023-03-15',
  company: 'Construtora ABC'
};

const userStats = [
  {
    title: 'Cursos Concluídos',
    value: '8',
    change: '+3 este mês',
    icon: Check,
    trend: 'up',
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/20'
  },
  {
    title: 'Horas de Treinamento',
    value: '64h',
    change: '+16h este mês',
    icon: Clock,
    trend: 'up',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20'
  },
  {
    title: 'Certificados Válidos',
    value: '6',
    change: '2 renovados',
    icon: Award,
    trend: 'up',
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900/20'
  },
  {
    title: 'Pontuação Geral',
    value: '92%',
    change: '+8% melhoria',
    icon: Target,
    trend: 'up',
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900/20'
  }
];

// Individual user's training status
const myTrainings = [
  {
    id: 'nr35',
    nr: 'NR-35',
    title: 'Trabalho em Altura',
    status: 'completed',
    completedDate: '2024-01-15',
    expiryDate: '2026-01-15',
    score: 95,
    certificate: 'NR35-2024-JS847'
  },
  {
    id: 'nr18',
    nr: 'NR-18',
    title: 'Construção Civil',
    status: 'completed',
    completedDate: '2024-02-10',
    expiryDate: '2025-02-10',
    score: 88,
    certificate: 'NR18-2024-JS848'
  },
  {
    id: 'nr10',
    nr: 'NR-10',
    title: 'Segurança em Eletricidade',
    status: 'expiring',
    completedDate: '2023-03-20',
    expiryDate: '2025-03-20',
    score: 92,
    certificate: 'NR10-2023-JS849',
    daysToExpiry: 45
  },
  {
    id: 'cipa',
    nr: 'NR-5',
    title: 'CIPA',
    status: 'in_progress',
    progress: 65,
    startDate: '2024-12-01',
    expectedCompletion: '2024-12-30'
  },
  {
    id: 'nr33',
    nr: 'NR-33',
    title: 'Espaço Confinado',
    status: 'not_started',
    requiredBy: '2025-02-15',
    hours: 16
  }
];

const recentActivities = [
  {
    title: 'Certificado NR-35 renovado',
    type: 'certificate',
    date: '2 horas atrás',
    icon: Award,
    color: 'text-green-600'
  },
  {
    title: 'Módulo 3 - CIPA concluído',
    type: 'progress',
    date: '1 dia atrás',
    icon: BookOpen,
    color: 'text-blue-600'
  },
  {
    title: 'Avaliação NR-18 aprovada',
    type: 'completion',
    date: '3 dias atrás',
    icon: Check,
    color: 'text-green-600'
  },
  {
    title: 'Alerta: NR-10 vence em 45 dias',
    type: 'alert',
    date: '5 dias atrás',
    icon: AlertTriangle,
    color: 'text-yellow-600'
  }
];

const upcomingDeadlines = [
  {
    title: 'Renovação NR-10',
    date: '15 Mar, 2025',
    type: 'renewal',
    priority: 'medium',
    daysLeft: 45
  },
  {
    title: 'Conclusão CIPA',
    date: '30 Dez, 2024',
    type: 'completion',
    priority: 'high',
    daysLeft: 8
  },
  {
    title: 'Início NR-33',
    date: '15 Fev, 2025',
    type: 'start',
    priority: 'low',
    daysLeft: 75
  }
];

export default function InicioPage() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'expiring': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'in_progress': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20';
      case 'not_started': return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'completed': return 'Concluído';
      case 'expiring': return 'Vencendo';
      case 'in_progress': return 'Em andamento';
      case 'not_started': return 'Não iniciado';
      default: return status;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="flex-1 space-y-6 p-8">
      {/* Personal Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Olá, {currentUser.name}!</h1>
              <p className="text-sm text-muted-foreground">
                {currentTime} • {currentUser.department} • {currentUser.role}
              </p>
            </div>
          </div>
          <p className="text-muted-foreground">
            {currentUser.company} • Matrícula: {currentUser.employeeId}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Bell className="mr-2 h-4 w-4" />
            Notificações (2)
          </Button>
          <Button size="sm" className="bg-brand-blue-main hover:bg-brand-blue-2">
            <Award className="mr-2 h-4 w-4" />
            Meus Certificados
          </Button>
        </div>
      </div>

      {/* Personal Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {userStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <div className={`${stat.bgColor} p-2 rounded-lg`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* My Training Status */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Meus Treinamentos</CardTitle>
            <CardDescription>
              Status dos seus treinamentos obrigatórios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myTrainings.map((training) => (
                <div key={training.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${getStatusColor(training.status)}`}>
                      {training.status === 'completed' && <Check className="h-5 w-5" />}
                      {training.status === 'expiring' && <Clock className="h-5 w-5" />}
                      {training.status === 'in_progress' && <Activity className="h-5 w-5" />}
                      {training.status === 'not_started' && <Timer className="h-5 w-5" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{training.nr}: {training.title}</p>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                        {training.expiryDate && (
                          <span>Válido até: {new Date(training.expiryDate).toLocaleDateString('pt-BR')}</span>
                        )}
                        {training.daysToExpiry && (
                          <span className="text-yellow-600 font-medium">
                            Vence em {training.daysToExpiry} dias
                          </span>
                        )}
                      </div>
                      {training.progress && (
                        <Progress value={training.progress} className="mt-2 h-1" />
                      )}
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant={training.status === 'not_started' || training.status === 'expiring' ? 'default' : 'outline'}
                    className={training.status === 'not_started' || training.status === 'expiring' ? 'bg-brand-blue-main hover:bg-brand-blue-2' : ''}
                  >
                    {training.status === 'completed' ? 'Ver Certificado' : 
                     training.status === 'expiring' ? 'Renovar' :
                     training.status === 'in_progress' ? 'Continuar' : 'Iniciar'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle>Próximos Prazos</CardTitle>
            <CardDescription>
              Deadlines importantes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="space-y-2 border-b pb-3 last:border-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium">{deadline.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge 
                          className={`text-xs ${getPriorityColor(deadline.priority)}`}
                        >
                          {deadline.priority === 'high' ? 'Urgente' : 
                           deadline.priority === 'medium' ? 'Importante' : 'Normal'}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {deadline.daysLeft} dias
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {deadline.date}
                  </p>
                </div>
              ))}
              <Button className="w-full" variant="outline" size="sm">
                Ver Agenda Completa
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Atividades Recentes</CardTitle>
          <CardDescription>
            Seu progresso nos últimos dias
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`${activity.color} bg-opacity-10 p-2 rounded-lg`}>
                  <activity.icon className={`h-5 w-5 ${activity.color}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.type} • {activity.date}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  Ver
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
          <CardDescription>
            Acesse rapidamente as funcionalidades mais usadas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <Button variant="outline" className="h-auto flex-col gap-2 p-4" asChild>
              <Link href="/assistente">
                <Activity className="h-6 w-6" />
                <span className="text-sm">Assistente IA</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4" asChild>
              <Link href="/cursos">
                <BookOpen className="h-6 w-6" />
                <span className="text-sm">Meus Cursos</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4" asChild>
              <Link href="/certificados">
                <Award className="h-6 w-6" />
                <span className="text-sm">Certificados</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4" asChild>
              <Link href="/calendario">
                <Calendar className="h-6 w-6" />
                <span className="text-sm">Calendário</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}