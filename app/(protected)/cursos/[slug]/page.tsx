'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getCourseBySlug } from '@/lib/courses-data'
import { 
  ArrowLeft,
  ArrowRight,
  Award, 
  BookOpen, 
  Calendar,
  CheckCircle,
  Clock, 
  Download,
  FileText,
  GraduationCap,
  Heart,
  Info,
  Lock,
  Medal,
  Play,
  Shield,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Video
} from 'lucide-react'

export default function CourseSummaryPage() {
  const params = useParams()
  const router = useRouter()
  const courseSlug = params.slug as string
  const [activeTab, setActiveTab] = useState('overview')
  const [enrolling, setEnrolling] = useState(false)

  // Get course data from shared data file
  const course = getCourseBySlug(courseSlug)
  
  // If course not found, redirect to courses list
  useEffect(() => {
    if (!course) {
      router.push('/cursos')
    }
  }, [course, router])

  if (!course) {
    return null // or loading spinner
  }

  const handleStartCourse = () => {
    setEnrolling(true)
    // Simulate enrollment process
    setTimeout(() => {
      router.push(`/cursos/${courseSlug}/estudo`)
    }, 1500)
  }

  const handleDownloadCertificate = () => {
    // Implementation for certificate download
    console.log('Downloading certificate...')
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Segurança': return Shield
      case 'Saúde': return Heart
      case 'Liderança': return Users
      default: return BookOpen
    }
  }

  const CategoryIcon = getCategoryIcon(course.category)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'available': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'locked': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
      default: return ''
    }
  }

  return (
    <div className="flex-1 space-y-6 p-8">
      {/* Header with course image */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-black/20" />
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-8">
            <div className="flex items-center gap-4 mb-4">
              <CategoryIcon className="h-8 w-8 text-white" />
              <Badge className="bg-white/20 text-white border-white/30">
                {course.category}
              </Badge>
              <Badge className={getStatusColor(course.status)}>
                {course.status === 'completed' && 'Concluído'}
                {course.status === 'in-progress' && 'Em Andamento'}
                {course.status === 'available' && 'Disponível'}
                {course.status === 'locked' && 'Bloqueado'}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">{course.title}</h1>
            <p className="text-white/90 text-lg max-w-3xl">{course.description}</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-8 py-6">
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">
                <span className="font-semibold">{course.duration}</span>
                <span className="text-muted-foreground"> de conteúdo</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">
                <span className="font-semibold">{course.nivel}</span>
                <span className="text-muted-foreground"> nível</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">
                <span className="font-semibold">{course.formato}</span>
              </span>
            </div>
            {course.avaliacoes.total > 0 && (
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">
                  <span className="font-semibold">{course.avaliacoes.media}</span>
                  <span className="text-muted-foreground"> ({course.avaliacoes.total} avaliações)</span>
                </span>
              </div>
            )}
          </div>

          {/* Progress bar for enrolled courses */}
          {(course.status === 'in-progress' || course.status === 'completed') && (
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Progresso do curso</span>
                <span className="font-medium">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
              {course.status === 'completed' && (
                <div className="flex items-center gap-2 mt-2 text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    Concluído em {new Date(course.completedDate).toLocaleDateString('pt-BR')}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content - 2/3 */}
          <div className="lg:col-span-2 space-y-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="content">Conteúdo</TabsTrigger>
                <TabsTrigger value="requirements">Requisitos</TabsTrigger>
                <TabsTrigger value="reviews">Avaliações</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                {/* Objectives */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Objetivos do Curso
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.objetivos.map((objetivo: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{objetivo}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Competencies */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5" />
                      Competências Desenvolvidas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.competencias.map((comp: string, index: number) => (
                        <div key={index} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                          <Medal className="h-4 w-4 text-orange-500" />
                          <span className="text-sm">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Target Audience */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Público-Alvo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.publicoAlvo.map((publico: string, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-blue-500 rounded-full" />
                          <span>{publico}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="content" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Conteúdo Programático</CardTitle>
                    <CardDescription>
                      {course.conteudoProgramatico.length} módulos • {course.duration} total
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {course.conteudoProgramatico.map((modulo: any) => (
                      <div 
                        key={modulo.modulo} 
                        className="border rounded-lg p-4 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                              modulo.concluido ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {modulo.concluido ? (
                                <CheckCircle className="h-5 w-5" />
                              ) : (
                                <span className="text-sm font-semibold">{modulo.modulo}</span>
                              )}
                            </div>
                            <div>
                              <h4 className="font-semibold">Módulo {modulo.modulo}: {modulo.titulo}</h4>
                              <p className="text-sm text-muted-foreground">{modulo.duracao}</p>
                            </div>
                          </div>
                          {modulo.concluido && (
                            <Badge variant="outline" className="text-green-600">
                              Concluído
                            </Badge>
                          )}
                        </div>
                        <ul className="ml-11 space-y-1">
                          {modulo.topicos.map((topico: string, index: number) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="h-1 w-1 bg-gray-400 rounded-full" />
                              {topico}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="requirements" className="space-y-6 mt-6">
                {/* Prerequisites */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="h-5 w-5" />
                      Pré-requisitos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.requisitos.map((req: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Certification */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Certificação
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <p className="font-semibold">{course.certificacao.tipo}</p>
                        <p className="text-sm text-muted-foreground">Validade: {course.certificacao.validade}</p>
                      </div>
                      <Award className="h-8 w-8 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Requisitos para certificação:</p>
                      <ul className="space-y-1">
                        {course.certificacao.requisitos.map((req: string, index: number) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="h-1 w-1 bg-gray-400 rounded-full" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Avaliações do Curso</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Rating Summary */}
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <div className="text-4xl font-bold">{course.avaliacoes.media}</div>
                        <div className="flex items-center gap-1 my-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-5 w-5 ${
                                star <= Math.round(course.avaliacoes.media)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {course.avaliacoes.total} avaliações
                        </p>
                      </div>
                      <div className="flex-1 space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center gap-2">
                            <span className="text-sm w-4">{rating}</span>
                            <Star className="h-4 w-4 text-yellow-400" />
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-yellow-400"
                                style={{ 
                                  width: `${(course.avaliacoes.distribuicao[rating] || 0) / course.avaliacoes.total * 100}%` 
                                }}
                              />
                            </div>
                            <span className="text-sm text-muted-foreground w-12">
                              {course.avaliacoes.distribuicao[rating] || 0}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Reviews */}
                    {course.avaliacoes.depoimentos.length > 0 && (
                      <div className="space-y-4 pt-6 border-t">
                        {course.avaliacoes.depoimentos.map((depoimento: any, index: number) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-semibold">{depoimento.nome}</p>
                                <p className="text-sm text-muted-foreground">{depoimento.cargo}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-0.5">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star 
                                      key={star} 
                                      className={`h-4 w-4 ${
                                        star <= depoimento.avaliacao
                                          ? 'fill-yellow-400 text-yellow-400'
                                          : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  {new Date(depoimento.data).toLocaleDateString('pt-BR')}
                                </span>
                              </div>
                            </div>
                            <p className="text-sm">{depoimento.comentario}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar - 1/3 */}
          <div className="space-y-6">
            {/* Action Card */}
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Ações do Curso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {course.status === 'completed' && (
                  <>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg space-y-2">
                      <div className="flex items-center gap-2 text-green-600">
                        <Trophy className="h-5 w-5" />
                        <span className="font-semibold">Curso Concluído!</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Parabéns! Você concluiu este curso com {course.score}% de aproveitamento.
                      </p>
                    </div>
                    {course.certificateAvailable && (
                      <Button 
                        className="w-full" 
                        onClick={handleDownloadCertificate}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Baixar Certificado
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => router.push(`/cursos/${courseSlug}/estudo`)}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Revisar Conteúdo
                    </Button>
                  </>
                )}

                {course.status === 'in-progress' && (
                  <>
                    <Button 
                      className="w-full"
                      onClick={() => router.push(`/cursos/${courseSlug}/estudo`)}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Continuar Curso
                    </Button>
                    <div className="text-center text-sm text-muted-foreground">
                      {course.progress}% concluído
                    </div>
                  </>
                )}

                {course.status === 'available' && (
                  <>
                    <Button 
                      className="w-full"
                      onClick={handleStartCourse}
                      disabled={enrolling}
                    >
                      {enrolling ? (
                        <>Matriculando...</>
                      ) : (
                        <>
                          <BookOpen className="mr-2 h-4 w-4" />
                          Iniciar Curso
                        </>
                      )}
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      Comece agora mesmo!
                    </p>
                  </>
                )}

                {course.status === 'locked' && (
                  <div className="space-y-3">
                    <Button className="w-full" disabled>
                      <Lock className="mr-2 h-4 w-4" />
                      Curso Bloqueado
                    </Button>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Complete os pré-requisitos para desbloquear este curso.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Course Info */}
            <Card>
              <CardHeader>
                <CardTitle>Informações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-sm text-muted-foreground">Duração</span>
                  <span className="text-sm font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-sm text-muted-foreground">Nível</span>
                  <span className="text-sm font-medium">{course.nivel}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-sm text-muted-foreground">Formato</span>
                  <span className="text-sm font-medium">{course.formato}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-sm text-muted-foreground">Categoria</span>
                  <Badge variant="outline">{course.category}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Next Classes */}
            {course.proximasTurmas.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Próximas Turmas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {course.proximasTurmas.map((turma: any, index: number) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">
                          {new Date(turma.data).toLocaleDateString('pt-BR')}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {turma.periodo}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {turma.vagas} vagas disponíveis
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}