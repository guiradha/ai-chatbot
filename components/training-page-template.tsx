import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, CheckCircle, Award, MapPin, BookOpen, Shield } from "lucide-react"
import { SaoESalvoLogo } from '@/components/sao-e-salvo-logo'
import { ReactNode } from 'react'

export interface TrainingModule {
  title: string
  description: string
}

export interface TrainingCompetency {
  title: string
  icon: ReactNode
  skills: string[]
}

export interface TrainingCertification {
  validade: string
  orgao: string
  requisitos: string[]
}

export interface TrainingData {
  title: string
  description: string
  duration: string
  category: string
  format: string
  location: string
  nivel: string
  objetivos: string[]
  modules: TrainingModule[]
  competencias: TrainingCompetency[]
  certificacao: TrainingCertification
  theme: {
    primaryColor: string
    gradientFrom: string
    gradientTo: string
    bgColor: string
    textColor: string
    iconBg: string
    iconColor: string
    ctaColor: string
  }
  heroIcon: ReactNode
  heroImage?: string
  warningMessage?: ReactNode
  ctaTitle?: string
  ctaSubtitle?: string
}

interface TrainingPageTemplateProps {
  data: TrainingData
}

export function TrainingPageTemplate({ data }: TrainingPageTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="cursor-pointer">
            <SaoESalvoLogo size="md" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/treinamentos" className="text-sm font-medium hover:text-primary transition-colors">
              Treinamentos
            </Link>
            <Link href="/#features" className="text-sm font-medium hover:text-primary transition-colors">
              Funcionalidades
            </Link>
            <Link href="/#benefits" className="text-sm font-medium hover:text-primary transition-colors">
              Benefícios
            </Link>
            <Link href="/#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Planos
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Depoimentos
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contato Comercial</Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container px-4 mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-700">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/treinamentos" className="hover:text-gray-700">Treinamentos</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{data.title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center [&>*]:!text-[#4D7298]">
                  {data.heroIcon}
                </div>
                <Badge className="bg-gray-100 text-gray-600">
                  {data.nivel}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {data.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {data.description}
              </p>
              
              <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{data.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{data.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{data.format}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>{data.category}</span>
                </div>
              </div>

              {data.warningMessage && (
                <div className="mb-6">
                  {data.warningMessage}
                </div>
              )}
            </div>
            
            <div className="relative">
              <img 
                src={data.heroImage || "/training-covers/gestao-seguranca-trabalho.png"} 
                alt={data.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos do Treinamento */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Award className="h-6 w-6 text-gray-600" />
              </div>
              <h2 className="text-3xl font-bold">Objetivos do Treinamento</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Este treinamento foi desenvolvido para capacitar profissionais com conhecimentos práticos e teóricos essenciais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {data.objetivos.map((objetivo, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-600">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-800 leading-relaxed">{objetivo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos do Curso */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-gray-600" />
              </div>
              <h2 className="text-3xl font-bold">Módulos do Curso</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              O curso é estruturado em módulos progressivos para facilitar seu aprendizado e garantir que você domine todos os aspectos teóricos e práticos.
            </p>
          </div>
          
          <div className="space-y-4">
            {data.modules.map((module, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-white/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-2xl bg-gray-100 flex items-center justify-center shadow-sm">
                      <span className="text-lg font-bold text-gray-600">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">{module.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competências Desenvolvidas */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Shield className="h-6 w-6 text-gray-600" />
              </div>
              <h2 className="text-3xl font-bold">Competências Desenvolvidas</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ao concluir este treinamento, você terá desenvolvido as seguintes competências essenciais para atuar com segurança e eficiência
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {data.competencias.map((competencia, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center [&>*]:!text-gray-600">
                    {competencia.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{competencia.title}</h3>
                </div>
                <div className="space-y-4">
                  {competencia.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificação */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Award className="h-6 w-6 text-gray-600" />
              </div>
              <h2 className="text-3xl font-bold">Certificação</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Obtenha seu certificado reconhecido e comprove sua qualificação profissional
            </p>
          </div>

          <div className="space-y-8">
            {/* Validade e Reconhecimento */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-2xl bg-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Award className="h-8 w-8 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl mb-2">Validade</h3>
                    <p className="text-gray-600 text-3xl font-bold text-green-600">{data.certificacao.validade}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-2xl bg-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Shield className="h-8 w-8 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl mb-2">Reconhecimento</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{data.certificacao.orgao}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Requisitos */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-16 w-16 rounded-2xl bg-gray-100 flex items-center justify-center shadow-sm">
                  <CheckCircle className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-semibold text-2xl">Requisitos para Certificação</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.certificacao.requisitos.map((req, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="text-gray-800 font-medium leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white" style={{backgroundColor: '#4D7298'}}>
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{data.ctaTitle || "Capacite sua Equipe"}</h2>
          <p className="text-xl mb-8 opacity-90">
            {data.ctaSubtitle || `Treinamento completo conforme ${data.title.split(' - ')[0] || 'normas regulamentadoras'}`}
          </p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12 mt-auto">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <SaoESalvoLogo size="md" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Tecnologia a favor da vida
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Produto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/treinamentos" className="hover:text-primary">Treinamentos</Link></li>
                <li><a href="#" className="hover:text-primary">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-primary">Planos</a></li>
                <li><a href="#" className="hover:text-primary">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Empresa</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/sobre" className="hover:text-primary">Sobre</Link></li>
                <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                <li><Link href="/carreiras" className="hover:text-primary">Carreiras</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Suporte</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-primary">Contato</a></li>
                <li><a href="#" className="hover:text-primary">Status</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t mt-8">
          <div className="container px-4 mx-auto py-4 text-center text-sm text-muted-foreground">
            © 2025 São e Salvo. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}