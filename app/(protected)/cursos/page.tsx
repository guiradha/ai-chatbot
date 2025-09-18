'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { 
  Search, 
  Filter, 
  Clock, 
  Award, 
  TrendingUp, 
  BookOpen,
  Calendar,
  Play,
  Check,
  Lock,
  Star,
  Download,
  Users,
  Shield,
  Heart
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { coursesData, CourseData } from '@/lib/courses-data'
import { CertificateDownloadButton } from '@/components/certificate-download-button'

export default function DashboardCursosPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterCategory, setFilterCategory] = useState('all')

  // Mock user data - in a real app, this would come from auth/session
  const userName = "João da Silva"

  // Mock data - in a real app, this would come from an API
  const userStats = {
    completed: 12,
    inProgress: 3,
    totalHours: 48,
    certificates: 8,
    averageScore: 85
  }

  // Helper function to extract NR number from title
  const extractNR = (title: string): string | null => {
    const nrMatch = title.match(/NR[-\s]?(\d+)/i)
    if (nrMatch) return `NR-${nrMatch[1]}`
    if (title.includes('Lei Lucas')) return 'Lei Lucas'
    if (title.includes('LGPD')) return 'Lei 13.709'
    return null
  }

  // Helper function to determine course type
  const getCourseType = (title: string): string => {
    if (title.toLowerCase().includes('reciclagem') || title.toLowerCase().includes('periódico')) return 'Periódico'
    if (title.toLowerCase().includes('complementar') || title.toLowerCase().includes('sep')) return 'Complementar'
    if (title.toLowerCase().includes('supervisor') || title.toLowerCase().includes('avançado')) return 'Específico'
    if (title.toLowerCase().includes('obrigatório') || title.includes('Lei Lucas') || title.includes('LGPD')) return 'Obrigatório'
    return 'Iniciação'
  }

  const cursos = coursesData.map((course, index) => ({
    ...course,
    // Add NR, level, and type properties like landing page
    nr: extractNR(course.title),
    level: course.nivel || 'Intermediário', // Use existing nivel property
    type: getCourseType(course.title),
    // Add some mock status/progress data for demonstration
    progress: index % 5 === 0 ? 100 : index % 5 === 1 ? Math.floor(Math.random() * 100) : 0,
    status: (index % 5 === 0 ? 'completed' : 
           index % 5 === 1 ? 'in-progress' : 
           index % 5 === 2 ? 'available' : 
           index % 5 === 3 ? 'available' : 'locked') as 'completed' | 'in-progress' | 'available' | 'locked',
    certificateAvailable: index % 5 === 0,
    score: index % 5 === 0 ? 80 + Math.floor(Math.random() * 20) : undefined,
    completedDate: index % 5 === 0 ? '2024-12-15' : undefined,
    nextClass: index % 5 === 1 ? '2025-01-20 14:00' : undefined,
    enrollmentOpen: index % 5 !== 4,
    prerequisite: index % 5 === 4 ? coursesData[Math.max(0, index - 1)]?.title : undefined,
    startDate: index % 5 === 3 ? '2025-02-01' : undefined
  }))

  // Filter logic
  const filteredCursos = cursos.filter(curso => {
    const matchesSearch = 
      curso.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      curso.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      curso.category.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = 
      filterStatus === 'all' || curso.status === filterStatus
    
    const matchesCategory = 
      filterCategory === 'all' || curso.category === filterCategory
    
    return matchesSearch && matchesStatus && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'available': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'locked': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
      default: return ''
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Concluído'
      case 'in-progress': return 'Em Andamento'
      case 'available': return 'Disponível'
      case 'locked': return 'Bloqueado'
      default: return status
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return Check
      case 'in-progress': return Play
      case 'available': return BookOpen
      case 'locked': return Lock
      default: return BookOpen
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Segurança': return Shield
      case 'Saúde': return Heart
      case 'Liderança': return Users
      default: return Shield
    }
  }

  return (
    <div className="flex-1 space-y-6 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meus Cursos</h1>
          <p className="text-muted-foreground">
            Gerencie seus cursos e acompanhe seu progresso de aprendizado
          </p>
        </div>
        <Button onClick={() => window.location.href = '/cursos-nr'}>
          <BookOpen className="mr-2 h-4 w-4" />
          Explorar Catálogo
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-5">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Concluídos</CardTitle>
            <Check className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.completed}</div>
            <p className="text-xs text-muted-foreground">cursos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Em Andamento</CardTitle>
            <Play className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.inProgress}</div>
            <p className="text-xs text-muted-foreground">cursos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Horas Totais</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.totalHours}h</div>
            <p className="text-xs text-muted-foreground">de aprendizado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificados</CardTitle>
            <Award className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.certificates}</div>
            <p className="text-xs text-muted-foreground">conquistados</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.averageScore}%</div>
            <p className="text-xs text-muted-foreground">de aproveitamento</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Buscar cursos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="completed">Concluídos</SelectItem>
            <SelectItem value="in-progress">Em Andamento</SelectItem>
            <SelectItem value="available">Disponíveis</SelectItem>
            <SelectItem value="locked">Bloqueados</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="Segurança">Segurança</SelectItem>
            <SelectItem value="Saúde">Saúde</SelectItem>
            <SelectItem value="Liderança">Liderança</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Course Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCursos.map((curso) => {
          const StatusIcon = getStatusIcon(curso.status)
          const CategoryIcon = getCategoryIcon(curso.category)
          return (
            <Card key={curso.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col group h-full">
              {/* Image Header */}
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-blue-600 overflow-hidden">
                {curso.image && (
                  <img 
                    src={curso.image} 
                    alt={curso.title}
                    className={`w-full h-full object-cover ${['nr-06-epi'].includes(curso.slug) ? 'object-top' : ''} ${['nr-17-ergonomia', 'nr-17-checkout', 'nr-17-levantamento-manual', 'nocoes-primeiros-socorros', 'nocoes-combate-incendios', 'nr-35-trabalho-em-altura', 'nr-10-basico', 'nr-20-intermediario', 'ppr-protecao-respiratoria', 'nr-05-representante-grau-1', 'nr-05-representante-grau-2', 'nr-05-representante-grau-3', 'nr-05-representante-grau-4'].includes(curso.slug) ? 'object-top2' : ''}`}
                  />
                )}
                
                {/* Category, Duration, and Certificate badges - left bottom */}
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {curso.certificateAvailable && (
                    <div className="flex items-center gap-1 bg-green-600/90 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                      <Award className="h-3 w-3" />
                      Certificado
                    </div>
                  )}
                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                    <CategoryIcon className="h-3 w-3" />
                    {curso.category}
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                    {curso.duration}
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight line-clamp-2">{curso.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1 pb-3">
                  <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 mb-4">
                    {curso.description}
                  </p>
                
                {/* Minimalist badges like landing page */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {curso.nr && (
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      {curso.nr}
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                    {curso.level}
                  </Badge>
                  <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                    {curso.type}
                  </Badge>
                </div>

                {/* Progress Bar */}
                {curso.status === 'in-progress' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Progresso</span>
                      <span className="font-medium">{curso.progress}%</span>
                    </div>
                    <Progress value={curso.progress} className="h-2" />
                    {curso.nextClass && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        Próxima aula: {new Date(curso.nextClass).toLocaleDateString('pt-BR')}
                      </div>
                    )}
                  </div>
                )}

                {/* Completed Info */}
                {curso.status === 'completed' && curso.score && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Pontuação</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span className="font-medium">{curso.score}%</span>
                      </div>
                    </div>
                    {curso.completedDate && (
                      <p className="text-xs text-muted-foreground">
                        Concluído em {new Date(curso.completedDate).toLocaleDateString('pt-BR')}
                      </p>
                    )}
                  </div>
                )}

                {/* Available Info */}
                {curso.status === 'available' && curso.startDate && (
                  <div className="text-xs text-muted-foreground">
                    <p>Início: {new Date(curso.startDate).toLocaleDateString('pt-BR')}</p>
                  </div>
                )}

                {/* Locked Info */}
                {curso.status === 'locked' && curso.prerequisite && (
                  <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
                    <p className="font-medium">Pré-requisito necessário:</p>
                    <p>{curso.prerequisite}</p>
                  </div>
                )}
                </CardContent>

                {/* Footer with button - now always at bottom */}
                <CardFooter className="pt-0 mt-auto">
                {curso.status === 'completed' && curso.certificateAvailable && (
                  <CertificateDownloadButton
                    course={curso}
                    userName={userName}
                    className="w-full"
                    variant="outline"
                  />
                )}
                {curso.status === 'in-progress' && (
                  <Button 
                    className="w-full"
                    onClick={() => window.location.href = `/cursos/${curso.slug}/estudo`}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Continuar
                  </Button>
                )}
                {curso.status === 'available' && (
                  <Button 
                    className="w-full"
                    onClick={() => window.location.href = `/cursos/${curso.slug}`}
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Iniciar Curso
                  </Button>
                )}
                {curso.status === 'locked' && (
                  <Button className="w-full" variant="secondary" disabled>
                    <Lock className="mr-2 h-4 w-4" />
                    Bloqueado
                  </Button>
                )}
                </CardFooter>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Empty State */}
      {filteredCursos.length === 0 && (
        <Card className="p-12">
          <div className="text-center space-y-4">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto" />
            <div>
              <h3 className="text-lg font-medium">Nenhum curso encontrado</h3>
              <p className="text-muted-foreground mt-2">
                Tente ajustar os filtros ou explorar nosso catálogo completo
              </p>
            </div>
            <Button onClick={() => window.location.href = '/cursos-nr'}>
              <Search className="mr-2 h-4 w-4" />
              Explorar Catálogo
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}