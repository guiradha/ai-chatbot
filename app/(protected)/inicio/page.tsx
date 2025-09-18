'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Shield, 
  AlertTriangle, 
  CheckCircle2,
  TrendingUp,
  Activity,
  BookOpen,
  Calendar
} from 'lucide-react';
import { SaoESalvoLogo } from '@/components/sao-e-salvo-logo';
import Link from 'next/link';

const stats = [
  {
    title: 'Cursos Concluídos',
    value: '12',
    change: '+20%',
    icon: CheckCircle2,
    trend: 'up',
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/20'
  },
  {
    title: 'Horas de Aprendizado',
    value: '48h',
    change: '+15%',
    icon: Activity,
    trend: 'up',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20'
  },
  {
    title: 'Certificados',
    value: '8',
    change: '+2 este mês',
    icon: Shield,
    trend: 'up',
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900/20'
  },
  {
    title: 'Pontuação Média',
    value: '85%',
    change: '+5%',
    icon: TrendingUp,
    trend: 'up',
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900/20'
  }
];

const recentActivities = [
  {
    title: 'Treinamento de Segurança no Trabalho',
    type: 'Concluído',
    date: '2 horas atrás',
    icon: CheckCircle2,
    color: 'text-green-600'
  },
  {
    title: 'Quiz de Primeiros Socorros',
    type: 'Em progresso',
    date: '5 horas atrás',
    icon: Activity,
    color: 'text-blue-600'
  },
  {
    title: 'Certificado de NR-35 obtido',
    type: 'Certificado',
    date: 'Ontem',
    icon: Shield,
    color: 'text-purple-600'
  },
  {
    title: 'Novo treinamento disponível: EPIs',
    type: 'Novo',
    date: '2 dias atrás',
    icon: AlertTriangle,
    color: 'text-orange-600'
  }
];

const upcomingCourses = [
  {
    title: 'Prevenção de Acidentes',
    date: '15 Jan, 14:00',
    duration: '2h',
    instructor: 'João Silva',
    spots: '5 vagas'
  },
  {
    title: 'Uso Correto de EPIs',
    date: '18 Jan, 10:00',
    duration: '1.5h',
    instructor: 'Maria Santos',
    spots: '3 vagas'
  },
  {
    title: 'Procedimentos de Emergência',
    date: '22 Jan, 15:00',
    duration: '3h',
    instructor: 'Carlos Oliveira',
    spots: '8 vagas'
  }
];

export default function InicioPage() {
  return (
    <div className="flex-1 space-y-6 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Início</h1>
          <p className="text-muted-foreground">
            Bem-vindo ao seu painel de segurança e cursos
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Ver Calendário
          </Button>
          <Button>
            <BookOpen className="mr-2 h-4 w-4" />
            Novo Curso
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
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
                  {stat.change} em relação ao mês passado
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Activity */}
        <Card className="md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
            <CardDescription>
              Suas últimas ações e atualizações no sistema
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

        {/* Upcoming Trainings */}
        <Card>
          <CardHeader>
            <CardTitle>Próximos Cursos</CardTitle>
            <CardDescription>
              Cursos agendados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingCourses.map((curso, index) => (
                <div key={index} className="space-y-2 border-b pb-3 last:border-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium">{curso.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {curso.instructor} • {curso.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{curso.date}</span>
                    <span className="text-primary font-medium">{curso.spots}</span>
                  </div>
                </div>
              ))}
              <Button className="w-full" variant="outline" size="sm">
                Ver todos
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

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
              <Link href="/inicio/cursos">
                <BookOpen className="h-6 w-6" />
                <span className="text-sm">Cursos</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4" disabled>
              <Shield className="h-6 w-6" />
              <span className="text-sm">Certificados</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4" disabled>
              <Users className="h-6 w-6" />
              <span className="text-sm">Minha Equipe</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}