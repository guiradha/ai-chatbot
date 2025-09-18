import { Users, UserPlus, Mail, Shield, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const teamMembers = [
  { id: 1, name: 'João Silva', email: 'joao.silva@empresa.com', role: 'Supervisor', status: 'Ativo', trainings: 12 },
  { id: 2, name: 'Maria Santos', email: 'maria.santos@empresa.com', role: 'Operador', status: 'Ativo', trainings: 8 },
  { id: 3, name: 'Pedro Costa', email: 'pedro.costa@empresa.com', role: 'Técnico', status: 'Ativo', trainings: 15 },
  { id: 4, name: 'Ana Oliveira', email: 'ana.oliveira@empresa.com', role: 'Operador', status: 'Inativo', trainings: 6 },
  { id: 5, name: 'Carlos Ferreira', email: 'carlos.ferreira@empresa.com', role: 'Supervisor', status: 'Ativo', trainings: 10 },
];

export default function EquipePage() {
  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Equipe</h1>
          <p className="text-muted-foreground mt-2">
            Gerencie os membros da sua equipe e suas permissões
          </p>
        </div>
        <Button className="bg-[#0063F3] hover:bg-[#0063F3]/90">
          <UserPlus className="h-4 w-4 mr-2" />
          Adicionar Membro
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total de Membros</CardDescription>
            <CardTitle className="text-3xl">89</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>15 novos este mês</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Membros Ativos</CardDescription>
            <CardTitle className="text-3xl">75</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <Shield className="h-4 w-4" />
              <span>84% do total</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Treinamentos Concluídos</CardDescription>
            <CardTitle className="text-3xl">432</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>Média de 4.8 por membro</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Membros da Equipe</CardTitle>
          <CardDescription>Lista completa de todos os colaboradores</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Função</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Treinamentos</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      {member.email}
                    </div>
                  </TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>
                    <Badge variant={member.status === 'Ativo' ? 'default' : 'secondary'}>
                      {member.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">{member.trainings}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
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