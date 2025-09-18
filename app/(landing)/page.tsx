'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Award, 
  BookOpen, 
  TrendingUp, 
  Check,
  ArrowRight,
  Play,
  Star,
  Building2,
  Clock,
  BarChart3,
  GraduationCap,
  FileCheck,
  UserCheck,
  Activity,
  Shield,
  MessageSquare,
  Mic,
  Camera,
  Heart,
  MapPin
} from 'lucide-react'
import FeaturesSection from '@/components/features-section'
import { SaoESalvoLogo } from '@/components/sao-e-salvo-logo'
import { GlobalFooter } from '@/components/global-footer'

export default function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const locations = [
    'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Porto Alegre, RS', 
    'Curitiba, PR', 'Salvador, BA', 'Fortaleza, CE', 'Brasília, DF', 
    'Manaus, AM', 'Recife, PE', 'Belém, PA', 'Goiânia, GO',
    'Campinas, SP', 'Santos, SP', 'Vitória, ES', 'Florianópolis, SC',
    'Campo Grande, MS', 'Natal, RN', 'João Pessoa, PB', 'Maceió, AL',
    'São José dos Campos, SP', 'Ribeirão Preto, SP', 'Uberlândia, MG', 'Sorocaba, SP'
  ]

  const [activities, setActivities] = useState([
    { id: 1, type: 'certificate', action: 'Certificado NR-35 emitido', icon: FileCheck, color: 'text-brand-success', bgColor: 'bg-brand-success/10', time: 'agora', location: 'São Paulo, SP' },
    { id: 2, type: 'training', action: 'Treinamento NR-10 iniciado', icon: GraduationCap, color: 'text-brand-info', bgColor: 'bg-brand-info/10', time: '1 min', location: 'Rio de Janeiro, RJ' },
    { id: 3, type: 'user', action: 'Novo usuário cadastrado', icon: UserCheck, color: 'text-brand-purple', bgColor: 'bg-brand-purple/10', time: '2 min', location: 'Belo Horizonte, MG' },
    { id: 4, type: 'completion', action: 'Módulo SST concluído', icon: Check, color: 'text-brand-blue-main', bgColor: 'bg-brand-blue-main/10', time: '3 min', location: 'Curitiba, PR' },
    { id: 5, type: 'certificate', action: 'Certificado NR-33 emitido', icon: Award, color: 'text-brand-warning', bgColor: 'bg-brand-warning/10', time: '5 min', location: 'Porto Alegre, RS' }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setActivities(prev => {
        const newActivities = [...prev]
        const removedActivity = newActivities.pop()
        
        const activityTypes = [
          { type: 'certificate', action: 'Certificado NR-35 emitido', icon: FileCheck, color: 'text-brand-success', bgColor: 'bg-brand-success/10' },
          { type: 'certificate', action: 'Certificado NR-10 emitido', icon: FileCheck, color: 'text-brand-success', bgColor: 'bg-brand-success/10' },
          { type: 'certificate', action: 'Certificado NR-33 emitido', icon: Award, color: 'text-brand-warning', bgColor: 'bg-brand-warning/10' },
          { type: 'training', action: 'Treinamento NR-6 iniciado', icon: GraduationCap, color: 'text-brand-info', bgColor: 'bg-brand-info/10' },
          { type: 'training', action: 'Treinamento CIPA iniciado', icon: GraduationCap, color: 'text-brand-info', bgColor: 'bg-brand-info/10' },
          { type: 'user', action: 'Novo usuário cadastrado', icon: UserCheck, color: 'text-brand-purple', bgColor: 'bg-brand-purple/10' },
          { type: 'completion', action: 'Módulo SST concluído', icon: Check, color: 'text-brand-blue-main', bgColor: 'bg-brand-blue-main/10' },
          { type: 'completion', action: 'Avaliação aprovada', icon: Check, color: 'text-brand-blue-main', bgColor: 'bg-brand-blue-main/10' },
          { type: 'training', action: 'Treinamento NR-12 iniciado', icon: GraduationCap, color: 'text-brand-info', bgColor: 'bg-brand-info/10' },
          { type: 'certificate', action: 'Certificado NR-18 emitido', icon: FileCheck, color: 'text-brand-success', bgColor: 'bg-brand-success/10' },
        ]
        
        const randomActivity = activityTypes[Math.floor(Math.random() * activityTypes.length)]
        const randomLocation = locations[Math.floor(Math.random() * locations.length)]
        
        const newActivity = {
          ...randomActivity,
          id: Date.now(),
          time: 'agora',
          location: randomLocation
        }
        
        const updatedActivities = [newActivity, ...newActivities].map((activity, index) => ({
          ...activity,
          time: index === 0 ? 'agora' : index === 1 ? '1 min' : index === 2 ? '2 min' : index === 3 ? '3 min' : '5 min'
        }))
        
        return updatedActivities
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % 4)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(testimonialInterval)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:max-w-3xl flex-shrink-0">
              <Badge className="mb-4 bg-brand-blue-main/10 text-brand-blue-main border-brand-blue-main hover:bg-brand-grey-main hover:text-white hover:border-brand-grey-main transition-all cursor-pointer">
                <TrendingUp className="h-3 w-3 mr-1" />
                Novo: Riscos Psicossociais NR-1 2025
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Transforme <span className="text-brand-blue-main font-bold">Segurança</span> em vantagem competitiva
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Plataforma completa de treinamentos em Segurança e Saúde no Trabalho. 
                Garanta 100% de conformidade com as NRs de forma simples, digital e personalizada para sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/login">
                  <Button size="lg" className="w-full sm:w-auto bg-brand-blue-main hover:bg-brand-blue-2 text-white">
                    Acessar Plataforma
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Play className="mr-2 h-4 w-4" />
                  Ver Demonstração
                </Button>
              </div>
            </div>
            <div className="relative flex-1 w-full lg:max-w-[550px] ml-auto">
              <div className="relative z-10 bg-card rounded-lg shadow-2xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
                    <Badge variant="default" className="animate-pulse">AO VIVO</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Atividade em tempo real</span>
                  </div>
                </div>
                <div className="space-y-3 overflow-hidden relative" style={{minHeight: '240px'}}>
                  {activities.map((activity, index) => {
                    const Icon = activity.icon
                    return (
                      <div
                        key={activity.id}
                        className="flex items-center justify-between p-3 bg-brand-grey-7/30 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`h-10 w-10 rounded-full ${activity.bgColor} flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`h-5 w-5 ${activity.color}`} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-sm">{activity.action}</p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {activity.location}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground font-medium ml-2">{activity.time}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="absolute top-8 -right-8 h-72 w-72 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-72 w-72 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-y">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-grey-main">50K+</div>
              <p className="text-sm text-muted-foreground">Profissionais Treinados</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-grey-main">1.2K+</div>
              <p className="text-sm text-muted-foreground">Empresas Atendidas</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-grey-main">97%</div>
              <p className="text-sm text-muted-foreground">Taxa de Aprovação</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-grey-main">4.93/5</div>
              <p className="text-sm text-muted-foreground">Avaliação Média</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Treinamentos Section */}
      <section id="treinamentos" className="py-12 bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              80 <span className="text-brand-blue-main">Treinamentos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Capacite sua equipe com nossos cursos especializados em segurança do trabalho e saúde ocupacional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* NR-35 - Trabalho em Altura */}
            <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col group h-full">
              <Link href="/cursos-nr/nr-35-trabalho-em-altura">
                <div className="relative h-48 cursor-pointer overflow-hidden">
                  <img 
                    src="/training-covers/nr-35-trabalho-em-altura.png" 
                    alt="NR-35 Trabalho em Altura"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Category and Duration - minimal style */}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                      <Shield className="h-3 w-3" />
                      Segurança
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                      40 horas
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex flex-col flex-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight line-clamp-2">NR-35 Trabalho em Altura</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 pb-3">
                  <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 mb-4">
                    Capacitação completa para trabalhos em altura com foco em segurança, EPIs e prevenção de acidentes.
                  </p>
                  
                  {/* Simplified Badges - minimal style */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      NR-35
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      Intermediário
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      Iniciação
                    </Badge>
                  </div>
                </CardContent>

                {/* Footer with button - now always at bottom */}
                <CardFooter className="pt-0 mt-auto">
                  <Link href="/cursos-nr/nr-35-trabalho-em-altura" className="w-full">
                    <Button className="w-full bg-brand-blue-main hover:bg-brand-blue-2 text-white">
                      Ver detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </Card>

            {/* NR-33 - Espaço Confinado */}
            <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col group h-full">
              <Link href="/cursos-nr/nr-33-espaco-confinado">
                <div className="relative h-48 cursor-pointer overflow-hidden">
                  <img 
                    src="/training-covers/nr-33-espaco-confinado.png" 
                    alt="NR-33 Espaço Confinado"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Category and Duration - minimal style */}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                      <Shield className="h-3 w-3" />
                      Segurança
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                      16 horas
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex flex-col flex-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight line-clamp-2">NR-33 Espaço Confinado</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 pb-3">
                  <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 mb-4">
                    Trabalho seguro em espaços confinados com identificação de riscos e medidas de emergência.
                  </p>
                  
                  {/* Simplified Badges - minimal style */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      NR-33
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      Intermediário
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      Iniciação
                    </Badge>
                  </div>
                </CardContent>

                {/* Footer with button - now always at bottom */}
                <CardFooter className="pt-0 mt-auto">
                  <Link href="/cursos-nr/nr-33-espaco-confinado" className="w-full">
                    <Button className="w-full bg-brand-blue-main hover:bg-brand-blue-2 text-white">
                      Ver detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </Card>

            {/* NR-10 - Segurança em Eletricidade */}
            <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col group h-full">
              <Link href="/cursos-nr/nr-10-basico">
                <div className="relative h-48 cursor-pointer overflow-hidden">
                  <img 
                    src="/training-covers/nr-10-basico.png" 
                    alt="NR-10 Segurança em Eletricidade"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Category and Duration - minimal style */}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                      <Shield className="h-3 w-3" />
                      Segurança
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                      40 horas
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex flex-col flex-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight line-clamp-2">NR-10 Segurança em Eletricidade</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 pb-3">
                  <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 mb-4">
                    Segurança fundamental em instalações elétricas e medidas de controle de riscos elétricos.
                  </p>
                  
                  {/* Simplified Badges - minimal style */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      NR-10
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      Intermediário
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      Iniciação
                    </Badge>
                  </div>
                </CardContent>

                {/* Footer with button - now always at bottom */}
                <CardFooter className="pt-0 mt-auto">
                  <Link href="/cursos-nr/nr-10-basico" className="w-full">
                    <Button className="w-full bg-brand-blue-main hover:bg-brand-blue-2 text-white">
                      Ver detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </Card>

            {/* Combate a Incêndios */}
            <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col group h-full">
              <Link href="/cursos-nr/nocoes-combate-incendios">
                <div className="relative h-48 cursor-pointer overflow-hidden">
                  <img 
                    src="/training-covers/nocoes-combate-incendios.png" 
                    alt="Combate a Incêndios"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Category and Duration - minimal style */}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                      <Shield className="h-3 w-3" />
                      Segurança
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                      16 horas
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex flex-col flex-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight line-clamp-2">Combate a Incêndios</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 pb-3">
                  <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 mb-4">
                    Aprenda a identificar classes de incêndio e operar extintores com segurança e eficiência.
                  </p>
                  
                  {/* Simplified Badges - minimal style */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      NR-23
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      Básico
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      Iniciação
                    </Badge>
                  </div>
                </CardContent>

                {/* Footer with button - now always at bottom */}
                <CardFooter className="pt-0 mt-auto">
                  <Link href="/cursos-nr/nocoes-combate-incendios" className="w-full">
                    <Button className="w-full bg-brand-blue-main hover:bg-brand-blue-2 text-white">
                      Ver detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </Card>

            {/* NR-05 - CIPA */}
            <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col group h-full">
              <Link href="/cursos-nr/nr-05-cipa-grau-risco-2">
                <div className="relative h-48 cursor-pointer overflow-hidden">
                  <img 
                    src="/training-covers/cipa.png" 
                    alt="NR-05 CIPA Grau de Risco 2"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Category and Duration - minimal style */}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                      <Shield className="h-3 w-3" />
                      Segurança
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                      12 horas
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex flex-col flex-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight line-clamp-2">NR-05 CIPA Grau de Risco 2</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 pb-3">
                  <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 mb-4">
                    Capacitação completa para integrantes da CIPA em empresas grau de risco 2.
                  </p>
                  
                  {/* Simplified Badges - minimal style */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      NR-05
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      Básico
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      Iniciação
                    </Badge>
                  </div>
                </CardContent>

                {/* Footer with button - now always at bottom */}
                <CardFooter className="pt-0 mt-auto">
                  <Link href="/cursos-nr/nr-05-cipa-grau-risco-2" className="w-full">
                    <Button className="w-full bg-brand-blue-main hover:bg-brand-blue-2 text-white">
                      Ver detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </Card>

            {/* Primeiros Socorros */}
            <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col group h-full">
              <Link href="/cursos-nr/nocoes-primeiros-socorros">
                <div className="relative h-48 cursor-pointer overflow-hidden">
                  <img 
                    src="/training-covers/nocoes-primeiros-socorros.png" 
                    alt="Primeiros Socorros"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Category and Duration - minimal style */}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                      <Heart className="h-3 w-3" />
                      Saúde
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                      20 horas
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex flex-col flex-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight line-clamp-2">Primeiros Socorros</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 pb-3">
                  <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 mb-4">
                    Técnicas fundamentais de atendimento emergencial para salvar vidas em situações críticas.
                  </p>
                  
                  {/* Simplified Badges - minimal style */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      Básico
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-transparent">
                      Iniciação
                    </Badge>
                  </div>
                </CardContent>

                {/* Footer with button - now always at bottom */}
                <CardFooter className="pt-0 mt-auto">
                  <Link href="/cursos-nr/nocoes-primeiros-socorros" className="w-full">
                    <Button className="w-full bg-brand-blue-main hover:bg-brand-blue-2 text-white">
                      Ver detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Mais de <strong>50.000 profissionais</strong> já se capacitaram com nossos treinamentos
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/treinamentos">
                <Button size="lg" className="bg-brand-blue-main hover:bg-brand-blue-2 text-white">
                  Ver Todos os Treinamentos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-12 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Por que empresas líderes escolhem São e Salvo?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Check className="h-5 w-5 text-brand-grey-main mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Redução de 60% nos custos</h3>
                    <p className="text-sm text-muted-foreground">
                      Economia comparada a treinamentos presenciais, sem perder qualidade
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check className="h-5 w-5 text-brand-grey-main mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">45% menos acidentes</h3>
                    <p className="text-sm text-muted-foreground">
                      Redução média em acidentes de trabalho após implementação
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check className="h-5 w-5 text-brand-grey-main mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">100% de conformidade</h3>
                    <p className="text-sm text-muted-foreground">
                      Garanta aprovação em todas as fiscalizações do MTE
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check className="h-5 w-5 text-brand-grey-main mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">ROI em 3 meses</h3>
                    <p className="text-sm text-muted-foreground">
                      Retorno sobre investimento comprovado no primeiro trimestre
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Testimonials Carousel */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {/* Testimonial 1 */}
                  <Card className="p-8 flex-shrink-0 w-full">
                    <div className="flex items-center gap-2 mb-6">
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    </div>
                    <blockquote className="text-lg mb-4">
                      "A São e Salvo revolucionou nosso programa de SST. Conseguimos treinar 
                      15.000 colaboradores em todas as unidades, garantindo conformidade em todas as 
                      operações industriais. A personalização com as cores e identidade da 
                      nossa empresa foi fundamental para o engajamento."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format&q=80"
                        alt="Carlos Mendes"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">Carlos Mendes</p>
                        <p className="text-sm text-muted-foreground">Diretor de SST - Vale</p>
                      </div>
                    </div>
                  </Card>

                  {/* Testimonial 2 */}
                  <Card className="p-8 flex-shrink-0 w-full">
                    <div className="flex items-center gap-2 mb-6">
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    </div>
                    <blockquote className="text-lg mb-4">
                      "Implementamos a São e Salvo em todas nossas plataformas marítimas. 
                      A praticidade de treinar equipes offshore com certificação válida reduziu 
                      nossos custos em 40% e aumentou significativamente o engajamento dos colaboradores."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face&auto=format&q=80"
                        alt="Marina Santos"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">Marina Santos</p>
                        <p className="text-sm text-muted-foreground">Gerente de SSO - Petrobras</p>
                      </div>
                    </div>
                  </Card>

                  {/* Testimonial 3 */}
                  <Card className="p-8 flex-shrink-0 w-full">
                    <div className="flex items-center gap-2 mb-6">
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    </div>
                    <blockquote className="text-lg mb-4">
                      "A plataforma superou nossas expectativas. Interface intuitiva, conteúdo 
                      técnico de excelência e suporte excepcional. Conseguimos certificar 3.000 
                      colaboradores em construção civil em apenas 4 meses."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=80"
                        alt="Roberto Silva"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">Roberto Silva</p>
                        <p className="text-sm text-muted-foreground">Diretor Técnico - MRV Engenharia</p>
                      </div>
                    </div>
                  </Card>

                  {/* Testimonial 4 */}
                  <Card className="p-8 flex-shrink-0 w-full">
                    <div className="flex items-center gap-2 mb-6">
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    </div>
                    <blockquote className="text-lg mb-4">
                      "Solução completa e profissional. A gamificação mantém nossos colaboradores 
                      engajados e os relatórios gerenciais nos dão visibilidade total do progresso. 
                      Recomendo para qualquer empresa que busca excelência em SST."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format&q=80"
                        alt="Ana Costa"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">Ana Costa</p>
                        <p className="text-sm text-muted-foreground">Coordenadora SST - JBS</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              
              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 mt-6">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      currentTestimonial === index ? 'bg-brand-blue-main' : 'bg-brand-grey-6 hover:bg-brand-grey-5'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <Card className="p-8 md:p-12 text-center text-white bg-brand-blue-main">
            <h2 className="text-3xl font-bold mb-4">
              Proteja sua equipe com a plataforma líder em SST
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Solução completa para empresas. Faturamento via boleto ou nota fiscal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="bg-white text-brand-grey-main hover:bg-white/90">
                  Entrar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10">
                Falar com Consultor
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">
              Junte-se a mais de 1.200 empresas que já garantem conformidade com São e Salvo
            </p>
          </Card>
        </div>
      </section>

      <GlobalFooter />
    </div>
  )
}