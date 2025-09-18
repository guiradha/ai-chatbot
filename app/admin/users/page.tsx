'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Users,
  Search,
  Filter,
  Download,
  UserPlus,
  MoreVertical,
  Mail,
  Shield,
  Calendar
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserDialog } from '@/components/dialogs/user-dialog';

const mockUsers = [
  { id: 1, name: 'Ana Silva', email: 'ana.silva@empresa.com', role: 'Admin', department: 'TI', status: 'Ativo', lastLogin: '2h atrás' },
  { id: 2, name: 'Carlos Santos', email: 'carlos.santos@empresa.com', role: 'Supervisor', department: 'Operações', status: 'Ativo', lastLogin: '5h atrás' },
  { id: 3, name: 'Maria Costa', email: 'maria.costa@empresa.com', role: 'Técnico', department: 'Segurança', status: 'Inativo', lastLogin: '2 dias atrás' },
  { id: 4, name: 'João Oliveira', email: 'joao.oliveira@empresa.com', role: 'Operador', department: 'Produção', status: 'Ativo', lastLogin: '1 dia atrás' },
  { id: 5, name: 'Paula Ferreira', email: 'paula.ferreira@empresa.com', role: 'Admin', department: 'RH', status: 'Ativo', lastLogin: '30min atrás' },
];

export default function UsersPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<'add' | 'edit'>('add');
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const handleAddUser = () => {
    setSelectedUser(null);
    setDialogMode('add');
    setDialogOpen(true);
  };

  const handleEditUser = (user: any) => {
    setSelectedUser(user);
    setDialogMode('edit');
    setDialogOpen(true);
  };

  const handleSubmitUser = async (data: any) => {
    console.log('User data:', data);
    // Here you would typically call an API to save the user
    // For now, we'll just log the data
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Page Header */}
      <div className="flex items-center justify-between space-y-2 p-8 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Usuários</h1>
          <p className="text-muted-foreground">
            Gerencie usuários e permissões do sistema
          </p>
        </div>
        <Button onClick={handleAddUser}>
          <UserPlus className="mr-2 h-4 w-4" />
          Adicionar Usuário
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6 px-8 pb-8">
        {/* Filters and Search */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Buscar usuários..." 
              className="pl-9"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Departamento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="ti">TI</SelectItem>
              <SelectItem value="rh">RH</SelectItem>
              <SelectItem value="operacoes">Operações</SelectItem>
              <SelectItem value="seguranca">Segurança</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="active">Ativo</SelectItem>
              <SelectItem value="inactive">Inativo</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Mais Filtros
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>

        {/* Users Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium">Nome</th>
                    <th className="text-left p-4 font-medium">Email</th>
                    <th className="text-left p-4 font-medium">Função</th>
                    <th className="text-left p-4 font-medium">Departamento</th>
                    <th className="text-left p-4 font-medium">Status</th>
                    <th className="text-left p-4 font-medium">Último Login</th>
                    <th className="text-left p-4 font-medium">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-xs font-medium text-primary">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="font-medium">{user.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{user.email}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <Shield className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm">{user.role}</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm">{user.department}</td>
                      <td className="p-4">
                        <span className={cn(
                          "text-xs px-2 py-1 rounded-full",
                          user.status === 'Ativo' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' 
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400'
                        )}>
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{user.lastLogin}</td>
                      <td className="p-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleEditUser(user)}>Editar</DropdownMenuItem>
                            <DropdownMenuItem>Resetar Senha</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Desativar</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">+12% desde o último mês</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,543</div>
              <p className="text-xs text-muted-foreground">89.3% do total</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Novos Este Mês</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">184</div>
              <p className="text-xs text-muted-foreground">Meta: 200</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Retenção</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <p className="text-xs text-muted-foreground">+2.3% vs mês anterior</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <UserDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        mode={dialogMode}
        user={selectedUser}
        onSubmit={handleSubmitUser}
      />
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}