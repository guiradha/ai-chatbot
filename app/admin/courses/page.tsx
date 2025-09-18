'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap,
  Search,
  Filter,
  Plus,
  MoreVertical,
  Users,
  Clock,
  Star,
  TrendingUp,
  Edit,
  Eye
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
import { CourseDialog } from '@/components/dialogs/course-dialog';

const mockCourses = [
  { 
    id: 1, 
    title: 'NR-35 Trabalho em Altura', 
    category: 'Segurança',
    students: 1234,
    duration: '40 horas',
    rating: 4.8,
    status: 'Ativo',
    completion: 85,
    lastUpdated: '2 dias atrás'
  },
  { 
    id: 2, 
    title: 'NR-10 Segurança em Eletricidade', 
    category: 'Segurança',
    students: 987,
    duration: '40 horas',
    rating: 4.7,
    status: 'Ativo',
    completion: 78,
    lastUpdated: '1 semana atrás'
  },
  { 
    id: 3, 
    title: 'Primeiros Socorros', 
    category: 'Saúde',
    students: 2341,
    duration: '20 horas',
    rating: 4.9,
    status: 'Ativo',
    completion: 92,
    lastUpdated: '3 dias atrás'
  },
  { 
    id: 4, 
    title: 'NR-33 Espaço Confinado', 
    category: 'Segurança',
    students: 543,
    duration: '16 horas',
    rating: 4.6,
    status: 'Em Revisão',
    completion: 67,
    lastUpdated: '1 dia atrás'
  },
];

export default function CoursesPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<'add' | 'edit'>('add');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const handleAddCourse = () => {
    setSelectedCourse(null);
    setDialogMode('add');
    setDialogOpen(true);
  };

  const handleEditCourse = (course: any) => {
    setSelectedCourse(course);
    setDialogMode('edit');
    setDialogOpen(true);
  };

  const handleSubmitCourse = async (data: any) => {
    console.log('Course data:', data);
    // Here you would typically call an API to save the course
    // For now, we'll just log the data
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Page Header */}
      <div className="flex items-center justify-between space-y-2 p-8 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Cursos</h1>
          <p className="text-muted-foreground">
            Gerencie cursos e treinamentos disponíveis
          </p>
        </div>
        <Button onClick={handleAddCourse}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Curso
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6 px-8 pb-8">
        {/* Filters and Search */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Buscar cursos..." 
              className="pl-9"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="seguranca">Segurança</SelectItem>
              <SelectItem value="saude">Saúde</SelectItem>
              <SelectItem value="meio-ambiente">Meio Ambiente</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="active">Ativo</SelectItem>
              <SelectItem value="draft">Rascunho</SelectItem>
              <SelectItem value="review">Em Revisão</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Mais Filtros
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total de Cursos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-muted-foreground">12 novos este mês</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Alunos Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5,234</div>
              <p className="text-xs text-muted-foreground">+23% vs mês anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Conclusão</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78.5%</div>
              <p className="text-xs text-muted-foreground">+3.2% vs mês anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avaliação Média</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.7/5</div>
              <p className="text-xs text-muted-foreground">Baseado em 1.2k avaliações</p>
            </CardContent>
          </Card>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription className="mt-1">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {course.students} alunos
                        </span>
                      </div>
                    </CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        Visualizar
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEditCourse(course)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem>Estatísticas</DropdownMenuItem>
                      <DropdownMenuItem>Duplicar</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Arquivar</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant={course.status === 'Ativo' ? 'default' : 'secondary'}>
                      {course.status}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Taxa de Conclusão</span>
                      <span className="font-medium">{course.completion}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all"
                        style={{ width: `${course.completion}%` }}
                      />
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    Atualizado {course.lastUpdated}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <CourseDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        mode={dialogMode}
        course={selectedCourse}
        onSubmit={handleSubmitCourse}
      />
    </div>
  );
}