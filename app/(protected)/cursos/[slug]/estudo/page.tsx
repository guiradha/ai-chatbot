'use client'

import { useState, useRef, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { getCourseBySlug } from '@/lib/courses-data'
import { 
  ArrowLeft,
  ArrowRight,
  Book,
  BookOpen,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Fullscreen,
  Home,
  Lock,
  Menu,
  MessageSquare,
  Pause,
  Play,
  PlayCircle,
  RotateCw,
  Settings,
  SkipBack,
  SkipForward,
  Volume2,
  X
} from 'lucide-react'

export default function CourseLearningPage() {
  const params = useParams()
  const router = useRouter()
  const courseSlug = params.slug as string
  
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentLesson, setCurrentLesson] = useState({ moduleId: 1, lessonId: 1 })
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(100)
  const [progress, setProgress] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')
  const videoRef = useRef<HTMLVideoElement>(null)

  // Get course data from shared data
  const courseData = getCourseBySlug(courseSlug)
  
  // If course not found, redirect to courses list
  useEffect(() => {
    if (!courseData) {
      router.push('/cursos')
    }
  }, [courseData, router])

  if (!courseData || !courseData.modules) {
    return null // or loading spinner
  }
  
  // Calculate overall progress
  const calculateOverallProgress = () => {
    let totalLessons = 0
    let completedLessons = 0
    
    if (courseData.modules) {
      courseData.modules.forEach((module: any) => {
        module.lessons.forEach((lesson: any) => {
          totalLessons++
          if (lesson.completed) completedLessons++
        })
      })
    }
    
    return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0
  }

  const overallProgress = calculateOverallProgress()

  // Get current lesson data
  const getCurrentLesson = () => {
    if (!courseData.modules) return null
    const module = courseData.modules.find((m: any) => m.id === currentLesson.moduleId)
    if (!module) return null
    return module.lessons.find((l: any) => l.id === currentLesson.lessonId)
  }

  const currentLessonData = getCurrentLesson()

  // Video controls
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleSkipBack = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10
    }
  }

  const handleSkipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10
    }
  }

  const handleVolumeChange = (value: number) => {
    setVolume(value)
    if (videoRef.current) {
      videoRef.current.volume = value / 100
    }
  }

  // Navigation functions
  const navigateToLesson = (moduleId: number, lessonId: number) => {
    setCurrentLesson({ moduleId, lessonId })
  }

  const goToPreviousLesson = () => {
    let foundCurrent = false
    let previousLesson: any = null

    for (const module of [...(courseData.modules || [])].reverse()) {
      for (const lesson of [...module.lessons].reverse()) {
        if (foundCurrent && !lesson.locked) {
          navigateToLesson(module.id, lesson.id)
          return
        }
        if (lesson.id === currentLesson.lessonId) {
          foundCurrent = true
        }
      }
    }
  }

  const goToNextLesson = () => {
    let foundCurrent = false

    for (const module of courseData.modules || []) {
      for (const lesson of module.lessons) {
        if (foundCurrent && !lesson.locked) {
          navigateToLesson(module.id, lesson.id)
          return
        }
        if (lesson.id === currentLesson.lessonId) {
          foundCurrent = true
        }
      }
    }
  }

  const markLessonComplete = () => {
    // In production, this would update the database
    console.log('Marking lesson as complete:', currentLesson)
    goToNextLesson()
  }

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return PlayCircle
      case 'document': return FileText
      case 'quiz': return BookOpen
      case 'assignment': return Book
      default: return PlayCircle
    }
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className={`${
        sidebarOpen ? 'w-96' : 'w-0'
      } transition-all duration-300 border-r bg-card overflow-hidden`}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push(`/cursos/${courseSlug}`)}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <h2 className="font-semibold text-lg mb-2">{courseData.title}</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progresso Geral</span>
                <span className="font-medium">{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="h-2" />
            </div>
          </div>

          {/* Modules List */}
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-4">
              {courseData.modules.map((module: any) => (
                <Collapsible
                  key={module.id}
                  defaultOpen={module.status === 'in-progress'}
                >
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          module.status === 'completed' 
                            ? 'bg-green-100 text-green-700'
                            : module.status === 'in-progress'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {module.status === 'completed' ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : module.status === 'locked' ? (
                            <Lock className="h-4 w-4" />
                          ) : (
                            <span className="text-xs font-bold">{module.id}</span>
                          )}
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-sm">{module.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {module.duration} • {module.lessons.length} aulas
                          </p>
                        </div>
                      </div>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-11 pr-3 space-y-1 mt-1">
                    {module.lessons.map((lesson: any) => {
                      const LessonIcon = getLessonIcon(lesson.type)
                      const isCurrentLesson = lesson.id === currentLesson.lessonId
                      
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => !lesson.locked && navigateToLesson(module.id, lesson.id)}
                          disabled={lesson.locked}
                          className={`w-full text-left p-2 rounded-lg transition-colors ${
                            isCurrentLesson
                              ? 'bg-primary/10 text-primary'
                              : lesson.locked
                              ? 'opacity-50 cursor-not-allowed'
                              : 'hover:bg-muted'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`h-6 w-6 rounded-full flex items-center justify-center ${
                              lesson.completed
                                ? 'bg-green-100 text-green-700'
                                : isCurrentLesson
                                ? 'bg-primary/20 text-primary'
                                : 'bg-gray-100 text-gray-500'
                            }`}>
                              {lesson.completed ? (
                                <CheckCircle className="h-4 w-4" />
                              ) : lesson.locked ? (
                                <Lock className="h-3 w-3" />
                              ) : (
                                <LessonIcon className="h-3 w-3" />
                              )}
                            </div>
                            <div className="flex-1">
                              <p className={`text-sm ${
                                isCurrentLesson ? 'font-medium' : ''
                              }`}>
                                {lesson.title}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span>{lesson.duration}</span>
                                {lesson.type === 'quiz' && (
                                  <span>• {lesson.questions} questões</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-14 border-b px-4 flex items-center justify-between bg-card">
          <div className="flex items-center gap-4">
            {!sidebarOpen && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            )}
            <div className="flex items-center gap-2">
              <Badge variant="outline">{currentLessonData?.type}</Badge>
              <h1 className="font-medium">{currentLessonData?.title}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Fullscreen className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Video/Content Area */}
        <div className="flex-1 flex">
          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Video Player or Content */}
            {currentLessonData?.type === 'video' ? (
              <div className="flex-1 bg-black relative">
                <video
                  ref={videoRef}
                  className="w-full h-full"
                  src={currentLessonData.videoUrl}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onTimeUpdate={(e) => {
                    const video = e.target as HTMLVideoElement
                    setProgress((video.currentTime / video.duration) * 100)
                  }}
                >
                  <source src={currentLessonData.videoUrl} type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="space-y-2">
                    {/* Progress Bar */}
                    <div className="bg-white/20 rounded-full h-1 overflow-hidden">
                      <div 
                        className="bg-primary h-full transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    
                    {/* Controls */}
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white hover:bg-white/20"
                          onClick={togglePlay}
                        >
                          {isPlaying ? (
                            <Pause className="h-4 w-4" />
                          ) : (
                            <Play className="h-4 w-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white hover:bg-white/20"
                          onClick={handleSkipBack}
                        >
                          <SkipBack className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white hover:bg-white/20"
                          onClick={handleSkipForward}
                        >
                          <SkipForward className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center gap-2">
                          <Volume2 className="h-4 w-4" />
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={volume}
                            onChange={(e) => handleVolumeChange(parseInt(e.target.value))}
                            className="w-20"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">
                          {currentLessonData.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentLessonData?.type === 'quiz' ? (
              <div className="flex-1 p-8 overflow-auto">
                <Card className="max-w-4xl mx-auto">
                  <CardHeader>
                    <CardTitle>Quiz - {currentLessonData.title}</CardTitle>
                    <CardDescription>
                      {currentLessonData.questions} questões • {currentLessonData.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Quiz content would go here */}
                    <div className="text-center py-12">
                      <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-medium mb-2">Quiz Disponível</h3>
                      <p className="text-muted-foreground mb-6">
                        Teste seus conhecimentos com {currentLessonData.questions} questões
                      </p>
                      <Button>Iniciar Quiz</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : currentLessonData?.type === 'document' ? (
              <div className="flex-1 p-8 overflow-auto">
                <Card className="max-w-4xl mx-auto">
                  <CardHeader>
                    <CardTitle>{currentLessonData.title}</CardTitle>
                    <CardDescription>
                      Material de apoio • {currentLessonData.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-medium mb-2">Documento Disponível</h3>
                      <p className="text-muted-foreground mb-6">
                        Baixe o material de apoio para estudo complementar
                      </p>
                      <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Baixar PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : currentLessonData?.type === 'assignment' ? (
              <div className="flex-1 p-8 overflow-auto">
                <Card className="max-w-4xl mx-auto">
                  <CardHeader>
                    <CardTitle>{currentLessonData.title}</CardTitle>
                    <CardDescription>
                      Atividade prática • {currentLessonData.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Book className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-medium mb-2">Atividade Prática</h3>
                      <p className="text-muted-foreground mb-6">
                        Complete a atividade prática para aplicar os conhecimentos adquiridos
                      </p>
                      <Button>Começar Atividade</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-medium mb-2">Selecione uma aula</h3>
                  <p className="text-muted-foreground">
                    Escolha uma aula na lista ao lado para começar
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Navigation */}
            <div className="h-20 border-t bg-card px-8 flex items-center justify-between">
              <Button
                variant="outline"
                onClick={goToPreviousLesson}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Aula Anterior
              </Button>

              <div className="flex items-center gap-4">
                {currentLessonData && !currentLessonData.completed && (
                  <Button
                    variant="outline"
                    onClick={markLessonComplete}
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Marcar como Concluída
                  </Button>
                )}
              </div>

              <Button
                onClick={goToNextLesson}
              >
                Próxima Aula
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Panel - Tabs */}
          <div className="w-96 border-l bg-card">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
              <TabsList className="grid w-full grid-cols-4 rounded-none">
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="notes">Anotações</TabsTrigger>
                <TabsTrigger value="discussion">Discussão</TabsTrigger>
                <TabsTrigger value="modules">Módulos</TabsTrigger>
              </TabsList>

              <ScrollArea className="flex-1">
                <TabsContent value="overview" className="p-4 space-y-4 m-0">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Sobre esta aula</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">{currentLessonData?.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {currentLessonData?.type === 'video' && 'Videoaula com conteúdo teórico e demonstrações práticas.'}
                          {currentLessonData?.type === 'quiz' && `Avaliação com ${currentLessonData?.questions} questões para testar seus conhecimentos.`}
                          {currentLessonData?.type === 'document' && 'Material complementar para download e estudo.'}
                          {currentLessonData?.type === 'assignment' && 'Atividade prática para aplicação dos conceitos aprendidos.'}
                        </p>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-medium mb-2">Objetivos de Aprendizagem</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Compreender os conceitos fundamentais</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Aplicar as técnicas na prática</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Identificar situações de risco</span>
                          </li>
                        </ul>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-medium mb-2">Recursos Adicionais</h4>
                        <div className="space-y-2">
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <FileText className="mr-2 h-4 w-4" />
                            Material de Apoio
                          </Button>
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <Download className="mr-2 h-4 w-4" />
                            Slides da Apresentação
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Progresso do Módulo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Aulas concluídas</span>
                          <span className="font-medium">2 de 6</span>
                        </div>
                        <Progress value={33} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notes" className="p-4 m-0">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-base">Suas Anotações</CardTitle>
                      <CardDescription>
                        Faça anotações sobre a aula para revisar depois
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <textarea
                        className="w-full h-96 p-3 rounded-md border resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Digite suas anotações aqui..."
                      />
                      <div className="mt-4 flex justify-end">
                        <Button size="sm">Salvar Anotações</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="discussion" className="p-4 space-y-4 m-0">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Discussão</CardTitle>
                      <CardDescription>
                        Tire dúvidas e interaja com outros alunos
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Discussion items */}
                      <div className="space-y-4">
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-xs font-medium">AS</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">Ana Silva</p>
                              <p className="text-xs text-muted-foreground">há 2 horas</p>
                            </div>
                          </div>
                          <p className="text-sm">
                            Alguém pode explicar melhor sobre a ancoragem tipo C?
                          </p>
                          <Button variant="ghost" size="sm" className="mt-2">
                            <MessageSquare className="mr-2 h-3 w-3" />
                            Responder
                          </Button>
                        </div>

                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                              <span className="text-xs font-medium">JS</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">João Santos</p>
                              <p className="text-xs text-muted-foreground">há 5 horas</p>
                            </div>
                          </div>
                          <p className="text-sm">
                            Excelente explicação sobre os tipos de trava-quedas!
                          </p>
                          <Button variant="ghost" size="sm" className="mt-2">
                            <MessageSquare className="mr-2 h-3 w-3" />
                            Responder
                          </Button>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <textarea
                          className="w-full h-20 p-2 text-sm rounded-md border resize-none"
                          placeholder="Faça uma pergunta ou comentário..."
                        />
                        <Button size="sm" className="w-full">
                          Publicar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="modules" className="p-4 m-0">
                  <div className="space-y-4">
                    {/* Course Info Header */}
                    <div className="space-y-2">
                      <h2 className="font-semibold text-lg">{courseData.title}</h2>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progresso Geral</span>
                          <span className="font-medium">{overallProgress}%</span>
                        </div>
                        <Progress value={overallProgress} className="h-2" />
                      </div>
                    </div>

                    <Separator />

                    {/* Modules List */}
                    <div className="space-y-4">
                      {courseData.modules.map((module: any) => (
                        <Collapsible
                          key={module.id}
                          defaultOpen={module.status === 'in-progress'}
                        >
                          <CollapsibleTrigger className="w-full">
                            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
                              <div className="flex items-center gap-3">
                                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                                  module.status === 'completed' 
                                    ? 'bg-green-100 text-green-700'
                                    : module.status === 'in-progress'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-gray-100 text-gray-500'
                                }`}>
                                  {module.status === 'completed' ? (
                                    <CheckCircle className="h-5 w-5" />
                                  ) : module.status === 'locked' ? (
                                    <Lock className="h-4 w-4" />
                                  ) : (
                                    <span className="text-xs font-bold">{module.id}</span>
                                  )}
                                </div>
                                <div className="text-left">
                                  <p className="font-medium text-sm">{module.title}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {module.duration} • {module.lessons.length} aulas
                                  </p>
                                </div>
                              </div>
                              <ChevronDown className="h-4 w-4 text-muted-foreground" />
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-11 pr-3 space-y-1 mt-1">
                            {module.lessons.map((lesson: any) => {
                              const LessonIcon = getLessonIcon(lesson.type)
                              const isCurrentLesson = lesson.id === currentLesson.lessonId
                              
                              return (
                                <button
                                  key={lesson.id}
                                  onClick={() => !lesson.locked && navigateToLesson(module.id, lesson.id)}
                                  disabled={lesson.locked}
                                  className={`w-full text-left p-2 rounded-lg transition-colors ${
                                    isCurrentLesson
                                      ? 'bg-primary/10 text-primary'
                                      : lesson.locked
                                      ? 'opacity-50 cursor-not-allowed'
                                      : 'hover:bg-muted'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`h-6 w-6 rounded-full flex items-center justify-center ${
                                      lesson.completed
                                        ? 'bg-green-100 text-green-700'
                                        : isCurrentLesson
                                        ? 'bg-primary/20 text-primary'
                                        : 'bg-gray-100 text-gray-500'
                                    }`}>
                                      {lesson.completed ? (
                                        <CheckCircle className="h-4 w-4" />
                                      ) : lesson.locked ? (
                                        <Lock className="h-3 w-3" />
                                      ) : (
                                        <LessonIcon className="h-3 w-3" />
                                      )}
                                    </div>
                                    <div className="flex-1">
                                      <p className={`text-sm ${
                                        isCurrentLesson ? 'font-medium' : ''
                                      }`}>
                                        {lesson.title}
                                      </p>
                                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <span>{lesson.duration}</span>
                                        {lesson.type === 'quiz' && (
                                          <span>• {lesson.questions} questões</span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              )
                            })}
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}