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
  Download,
  RefreshCw,
  UserPlus,
  FileText,
  BarChart,
  Clock,
  Settings,
  Building2,
  Award,
  AlertCircle,
  Target,
  Zap,
  FileCheck,
  TrendingDown,
  HardHat
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from 'react';

// Generic company data - would come from auth context
const company = {
  name: 'Sua Empresa',
  cnpj: '12.345.678/0001-90',
  sector: 'Industrial',
  employees: 1247,
  activeTeams: 8,
  complianceRate: 87.2,
  logo: '/company-logos/default.png'
};

// Company-specific stats
const companyStats = [
  {
    title: 'Total de Colaboradores',
    value: company.employees.toLocaleString('pt-BR'),
    change: '+12.3%',
    icon: Users,
    trend: 'up',
    description: '87 contratados este mês'
  },
  {
    title: 'Taxa de Conformidade',
    value: `${company.complianceRate}%`,
    change: '+5.8%',
    icon: Target,
    trend: 'up',
    description: 'Acima da meta (85%)'
  },
  {
    title: 'Certificados Ativos',
    value: '1.087',
    change: '+156',
    icon: Award,
    trend: 'up',
    description: 'Novos certificados este mês'
  },
  {
    title: 'Equipes Ativas',
    value: company.activeTeams.toString(),
    change: '+2',
    icon: Users,
    trend: 'up',
    description: 'Novas equipes criadas'
  }
];

// Compliance by department
const departmentCompliance = [
  { 
    name: 'Operações', 
    employees: 560, 
    compliant: 512, 
    percentage: 91,
    manager: 'Carlos Santos',
    criticalNRs: ['NR-6', 'NR-35']
  },
  { 
    name: 'Manutenção', 
    employees: 180, 
    compliant: 162, 
    percentage: 90,
    manager: 'Maria Oliveira', 
    criticalNRs: ['NR-10', 'NR-12']
  },
  { 
    name: 'Logística', 
    employees: 120, 
    compliant: 96, 
    percentage: 80,
    manager: 'João Silva',
    criticalNRs: ['NR-11', 'NR-17']
  },
  { 
    name: 'Administração', 
    employees: 387, 
    compliant: 348, 
    percentage: 88,
    manager: 'Ana Costa',
    criticalNRs: ['NR-5', 'NR-23']
  }
];

// Critical alerts for the company
const criticalAlerts = [
  {
    type: 'expired',
    department: 'Operações',
    message: '23 certificados NR-6 vencidos',
    employees: ['João Silva', 'Carlos Santos', 'Maria Costa'],
    priority: 'high',
    action: 'Renovação urgente necessária'
  },
  {
    type: 'expiring',
    department: 'Manutenção',
    message: '45 certificados NR-10 vencendo em 15 dias',
    employees: ['Pedro Lima', 'Ana Souza'],
    priority: 'medium',
    action: 'Agendar renovação'
  },
  {
    type: 'incomplete',
    department: 'Logística',
    message: '12 funcionários sem treinamento NR-11',
    employees: ['Roberto Dias', 'Lucia Ferreira'],
    priority: 'high',
    action: 'Agendar treinamento obrigatório'
  }
];

// Recent company activity
const recentActivity = [
  {
    title: 'Nova equipe criada - Equipe Solar',
    type: 'team',
    date: '2 horas atrás',
    icon: Users,
    color: 'text-blue-600',
    details: '87 funcionários precisam de treinamento obrigatório'
  },
  {
    title: '156 certificados NR-35 emitidos',
    type: 'certificate',
    date: '5 horas atrás',
    icon: Award,
    color: 'text-green-600',
    details: 'Turma de trabalho em altura concluída'
  },
  {
    title: 'Auditoria MTE programada',
    type: 'audit',
    date: '1 dia atrás',
    icon: FileCheck,
    color: 'text-orange-600',
    details: 'Equipe Residencial Park - 15/01/2025'
  },
  {
    title: '12 funcionários contratados',
    type: 'hiring',
    date: '2 dias atrás',
    icon: UserPlus,
    color: 'text-purple-600',
    details: 'Departamento de Operações'
  }
];

// Upcoming training sessions for the company
const upcomingTrainings = [
  {
    title: 'NR-6 Equipamentos de Proteção Individual',
    date: '20 Jan, 08:00',
    instructor: 'Téc. Carlos Mendes',
    participants: 25,
    location: 'Auditório Sede',
    department: 'Operações'
  },
  {
    title: 'NR-35 Trabalho em Altura',
    date: '22 Jan, 14:00',
    instructor: 'Téc. Ana Silva',
    participants: 18,
    location: 'Campo de Treinamento',
    department: 'Operações'
  },
  {
    title: 'NR-10 Segurança Elétrica',
    date: '25 Jan, 09:00',
    instructor: 'Eng. João Santos',
    participants: 12,
    location: 'Sala de Treinamento 2',
    department: 'Manutenção'
  }
];

// Company active teams/projects
const activeTeams = [
  {
    name: 'Equipe Solar',
    employees: 87,
    compliance: 92,
    startDate: '2024-12-01',
    type: 'Projeto',
    criticalNRs: ['NR-6', 'NR-35', 'NR-23']
  },
  {
    name: 'Equipe Residencial Park',
    employees: 156,
    compliance: 88,
    startDate: '2024-08-15',
    type: 'Operacional',
    criticalNRs: ['NR-17', 'NR-23', 'NR-6']
  },
  {
    name: 'Equipe Norte',
    employees: 234,
    compliance: 85,
    startDate: '2024-06-01',
    type: 'Manutenção',
    criticalNRs: ['NR-10', 'NR-35', 'NR-12']
  }
];

export default function AdminDashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString('pt-BR'));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'low': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Company Admin Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="h-16 w-16 rounded-lg bg-white/10 flex items-center justify-center">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{company.name} - Admin</h1>
              <p className="text-blue-200 mt-1">
                Painel de Gestão de Segurança e Saúde no Trabalho
              </p>
              <p className="text-sm text-blue-300 mt-2">
                {currentTime} • CNPJ: {company.cnpj} • {company.employees} colaboradores • {company.activeTeams} equipes ativas
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="bg-green-600 text-white px-3 py-1">
              <Target className="mr-1 h-3 w-3" />
              {company.complianceRate}% Conforme
            </Badge>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-[180px] bg-blue-800 border-blue-700 text-white">
                <SelectValue placeholder="Selecione o período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Últimos 7 dias</SelectItem>
                <SelectItem value="30d">Últimos 30 dias</SelectItem>
                <SelectItem value="90d">Últimos 90 dias</SelectItem>
                <SelectItem value="year">Este ano</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="secondary" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Relatório Mensal
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6 p-8">
        
        {/* Critical Alerts */}
        {criticalAlerts.length > 0 && (
          <Card className="border-red-200 bg-red-50 dark:bg-red-900/10">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-red-700 dark:text-red-400">
                  <AlertCircle className="inline mr-2 h-5 w-5" />
                  Alertas Críticos de Conformidade
                </CardTitle>
                <Button size="sm" variant="destructive">
                  Resolver Todos ({criticalAlerts.length})
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {criticalAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className={`h-5 w-5 ${
                        alert.priority === 'high' ? 'text-red-600' : 'text-yellow-600'
                      }`} />
                      <div>
                        <p className="font-medium">{alert.department}</p>
                        <p className="text-sm text-muted-foreground">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Ação: {alert.action}
                        </p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Resolver
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Company Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {companyStats.map((stat, index) => {
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
                      {isPositive ? <TrendingUp className="inline h-3 w-3 mr-1" /> : 
                                   <TrendingDown className="inline h-3 w-3 mr-1" />}
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

        {/* Main Dashboard Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Department Compliance */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Conformidade por Departamento</CardTitle>
              <CardDescription>
                Status de treinamentos por área da empresa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentCompliance.map((dept, index) => (
                  <div key={index} className="space-y-3 p-4 rounded-lg border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{dept.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Gestor: {dept.manager} • {dept.compliant} de {dept.employees} em conformidade
                        </p>
                      </div>
                      <div className={`text-xl font-bold ${
                        dept.percentage >= 90 ? 'text-green-600' : 
                        dept.percentage >= 80 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {dept.percentage}%
                      </div>
                    </div>
                    <Progress value={dept.percentage} className="h-2" />
                    <div className="flex gap-2">
                      {dept.criticalNRs.map(nr => (
                        <Badge key={nr} variant="outline" className="text-xs">
                          {nr}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Company Trainings */}
          <Card>
            <CardHeader>
              <CardTitle>Próximos Treinamentos</CardTitle>
              <CardDescription>
                Agenda de capacitações da empresa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTrainings.map((training, index) => (
                  <div key={index} className="space-y-2 border-b pb-3 last:border-0">
                    <div>
                      <p className="text-sm font-medium">{training.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {training.instructor} • {training.participants} participantes
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{training.date}</span>
                      <Badge variant="outline" className="text-xs">
                        {training.department}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Local: {training.location}
                    </p>
                  </div>
                ))}
                <Button className="w-full" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Gerenciar Agenda
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Teams */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Equipes Ativas</CardTitle>
              <CardDescription>
                Equipes e projetos em andamento com status de conformidade
              </CardDescription>
            </div>
            <Button size="sm">
              <Users className="mr-2 h-4 w-4" />
              Nova Equipe
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {activeTeams.map((team, index) => (
                <div key={index} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-medium">{team.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {team.employees} colaboradores • {team.type}
                      </p>
                    </div>
                    <div className={`text-lg font-bold ${
                      team.compliance >= 90 ? 'text-green-600' : 
                      team.compliance >= 80 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {team.compliance}%
                    </div>
                  </div>
                  <Progress value={team.compliance} className="h-2 mb-3" />
                  <div className="flex gap-1 mb-3">
                    {team.criticalNRs.map(nr => (
                      <Badge key={nr} variant="outline" className="text-xs">
                        {nr}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Criada em: {new Date(team.startDate).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
            <CardDescription>
              Últimas movimentações e eventos importantes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`${activity.color} bg-opacity-10 p-2 rounded-lg mt-1`}>
                    <activity.icon className={`h-5 w-5 ${activity.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground mb-1">
                      {activity.type} • {activity.date}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.details}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Detalhes
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions for Company Admin */}
        <div className="grid gap-4 md:grid-cols-5">
          <Button className="h-auto flex-col gap-2 p-4 bg-brand-blue-main hover:bg-brand-blue-2">
            <UserPlus className="h-6 w-6" />
            <span>Cadastrar Funcionário</span>
          </Button>
          <Button className="h-auto flex-col gap-2 p-4" variant="outline">
            <Calendar className="h-6 w-6" />
            <span>Agendar Treinamento</span>
          </Button>
          <Button className="h-auto flex-col gap-2 p-4" variant="outline">
            <FileCheck className="h-6 w-6" />
            <span>Relatório Conformidade</span>
          </Button>
          <Button className="h-auto flex-col gap-2 p-4" variant="outline">
            <HardHat className="h-6 w-6" />
            <span>Gerenciar Obras</span>
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