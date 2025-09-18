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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  UserPlus,
  Download,
  Upload,
  MoreHorizontal,
  Edit,
  Trash2,
  Mail,
  Shield,
  Ban,
  Check,
  X,
  Filter,
} from 'lucide-react';

// Mock data
const users = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao.silva@empresa.com',
    department: 'Operações',
    role: 'Operador',
    status: 'active',
    lastLogin: '2024-03-15 14:30',
    completedTrainings: 12,
    pendingTrainings: 3,
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria.santos@empresa.com',
    department: 'Segurança',
    role: 'Supervisor',
    status: 'active',
    lastLogin: '2024-03-15 08:45',
    completedTrainings: 18,
    pendingTrainings: 1,
  },
  {
    id: '3',
    name: 'Carlos Oliveira',
    email: 'carlos.oliveira@empresa.com',
    department: 'Manutenção',
    role: 'Técnico',
    status: 'inactive',
    lastLogin: '2024-02-28 16:20',
    completedTrainings: 8,
    pendingTrainings: 5,
  },
  {
    id: '4',
    name: 'Ana Costa',
    email: 'ana.costa@empresa.com',
    department: 'RH',
    role: 'Admin',
    status: 'active',
    lastLogin: '2024-03-15 10:15',
    completedTrainings: 15,
    pendingTrainings: 0,
  },
  {
    id: '5',
    name: 'Pedro Ferreira',
    email: 'pedro.ferreira@empresa.com',
    department: 'Operações',
    role: 'Operador',
    status: 'pending',
    lastLogin: 'Nunca',
    completedTrainings: 0,
    pendingTrainings: 10,
  },
];

const departments = [
  'Todos',
  'Operações',
  'Segurança',
  'Manutenção',
  'RH',
  'Administrativo',
  'Logística',
];

const roles = ['Todos', 'Admin', 'Supervisor', 'Técnico', 'Operador'];

export default function UsersManagementPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('Todos');
  const [roleFilter, setRoleFilter] = useState('Todos');
  const [statusFilter, setStatusFilter] = useState('Todos');

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      departmentFilter === 'Todos' || user.department === departmentFilter;
    const matchesRole = roleFilter === 'Todos' || user.role === roleFilter;
    const matchesStatus =
      statusFilter === 'Todos' || user.status === statusFilter;
    return matchesSearch && matchesDepartment && matchesRole && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
            <Check className="w-3 h-3 mr-1" />
            Ativo
          </Badge>
        );
      case 'inactive':
        return (
          <Badge className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
            <X className="w-3 h-3 mr-1" />
            Inativo
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400">
            <Shield className="w-3 h-3 mr-1" />
            Pendente
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 space-y-6 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Gerenciar Usuários
          </h1>
          <p className="text-muted-foreground">
            Gerencie contas de usuários, permissões e treinamentos
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Importar
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Adicionar Usuário
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Usuários
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">+12% desde o último mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Usuários Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,543</div>
            <p className="text-xs text-green-600">89.3% do total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Novos Este Mês
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Aguardando aprovação: 23</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Taxa de Engajamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.5%</div>
            <p className="text-xs text-muted-foreground">Login nos últimos 7 dias</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome ou email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Departamento" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Cargo" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todos">Todos</SelectItem>
                  <SelectItem value="active">Ativo</SelectItem>
                  <SelectItem value="inactive">Inativo</SelectItem>
                  <SelectItem value="pending">Pendente</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Usuários</CardTitle>
          <CardDescription>
            {filteredUsers.length} usuário(s) encontrado(s)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Departamento</TableHead>
                <TableHead>Cargo</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Treinamentos</TableHead>
                <TableHead>Último Login</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm">
                        ✓ {user.completedTrainings} Completos
                      </span>
                      {user.pendingTrainings > 0 && (
                        <span className="text-sm text-orange-600">
                          ⚠ {user.pendingTrainings} Pendentes
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {user.lastLogin}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          Enviar Email
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Shield className="mr-2 h-4 w-4" />
                          Gerenciar Permissões
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Ban className="mr-2 h-4 w-4" />
                          Suspender
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}