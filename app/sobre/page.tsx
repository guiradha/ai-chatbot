'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SaoESalvoLogo } from '@/components/sao-e-salvo-logo'
import { 
  ArrowRight,
  Shield,
  Heart,
  Users,
  CheckCircle,
  Linkedin
} from 'lucide-react'

export default function SobrePage() {
  const founders = [
    {
      name: 'Alexandre Wawruk',
      role: 'Chief Sales Officer',
      image: '/team/alexandre.jpg',
      bio: '+10 anos de experiência em educação corporativa e desenvolvimento de negócios enterprise.',
      linkedin: '#'
    },
    {
      name: 'Natascha Giora',
      role: 'Chief Expansion Officer',
      image: '/team/natasha.jpg',
      bio: 'MBA em Gestão de Riscos pela Trevisan. Expertise em auditoria e controles internos.',
      linkedin: '#'
    },
    {
      name: 'Marina Proença',
      role: 'Chief Product Officer',
      image: '/team/marina.jpg',
      bio: '3x Fundadora. +20 anos liderando produtos digitais e marketing.',
      linkedin: '#'
    },
    {
      name: 'Guilherme Monteiro',
      role: 'Chief Technology Officer',
      image: '/team/guilherme.jpg',
      bio: '+20 anos em startups de alto crescimento. Especialista em IA e liderança de equipes.',
      linkedin: '#'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Minimalist */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-4 bg-brand-blue-main/10 text-brand-blue-main border-brand-blue-main">
              Nossa História
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Tecnologia a favor da <span className="text-brand-blue-main">vida</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nascemos com a missão de transformar a segurança do trabalho no Brasil 
              através da educação digital acessível e eficaz para todas as empresas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values - Minimalist Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-brand-blue-main/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-brand-blue-main" />
              </div>
              <h3 className="font-bold mb-2">Segurança Primeiro</h3>
              <p className="text-sm text-muted-foreground">
                Cada funcionalidade é pensada para proteger vidas
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-brand-blue-main/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-brand-blue-main" />
              </div>
              <h3 className="font-bold mb-2">Responsabilidade</h3>
              <p className="text-sm text-muted-foreground">
                Toda pessoa merece voltar para casa em segurança
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-brand-blue-main/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-brand-blue-main" />
              </div>
              <h3 className="font-bold mb-2">Parceria Genuína</h3>
              <p className="text-sm text-muted-foreground">
                Crescemos junto com nossos clientes
              </p>
            </div>
          </div>

          {/* Impact Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-8 border-y">
            <div>
              <div className="text-3xl font-bold text-brand-grey-main">50K+</div>
              <p className="text-sm text-muted-foreground">Profissionais Treinados</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-grey-main">1.2K+</div>
              <p className="text-sm text-muted-foreground">Empresas Atendidas</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-grey-main">45%</div>
              <p className="text-sm text-muted-foreground">Redução de Acidentes</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-grey-main">35</div>
              <p className="text-sm text-muted-foreground">NRs Cobertas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section - Minimalist Cards */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos <span className="text-brand-blue-main">Fundadores</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quatro profissionais apaixonados por segurança e tecnologia, 
              unidos pelo propósito de salvar vidas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {founders.map((founder, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square relative">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{founder.name}</h3>
                  <p className="text-sm text-brand-blue-main font-medium mb-2">{founder.role}</p>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{founder.bio}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Minimalist */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Por que empresas líderes escolhem São e Salvo?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="h-5 w-5 text-brand-grey-main mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Redução de 60% nos custos</h3>
                    <p className="text-sm text-muted-foreground">
                      Economia comparada a treinamentos presenciais
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-5 w-5 text-brand-grey-main mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">100% de conformidade</h3>
                    <p className="text-sm text-muted-foreground">
                      Garanta aprovação em todas as fiscalizações
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-5 w-5 text-brand-grey-main mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Certificação válida</h3>
                    <p className="text-sm text-muted-foreground">
                      Reconhecida pelo Ministério do Trabalho
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="h-5 w-5 text-brand-grey-main mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Suporte especializado</h3>
                    <p className="text-sm text-muted-foreground">
                      Equipe técnica dedicada ao seu sucesso
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 text-center bg-brand-blue-main text-white">
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="mb-6 opacity-90">
                Democratizar o acesso à educação em segurança do trabalho, 
                garantindo que toda empresa possa proporcionar um ambiente 
                seguro e em conformidade para seus colaboradores.
              </p>
              <div className="border-t border-white/20 pt-6">
                <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
                <p className="opacity-90">
                  Ser a plataforma líder em treinamento de SST na América Latina, 
                  reconhecida por salvar vidas através da tecnologia.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <Card className="p-8 md:p-12 text-center text-white bg-brand-blue-main">
            <h2 className="text-3xl font-bold mb-4">
              Faça parte desta transformação
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Junte-se às mais de 1.200 empresas que já protegem suas equipes com São e Salvo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assistente">
                <Button size="lg" className="bg-white text-brand-grey-main hover:bg-white/90">
                  Começar Agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10">
                Agendar Demonstração
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <SaoESalvoLogo size="md" />
              </div>
              <p className="text-sm text-muted-foreground">
                Tecnologia a favor da vida
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Produto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/treinamentos" className="hover:text-primary">Treinamentos</Link></li>
                <li><a href="#" className="hover:text-primary">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-primary">Planos</a></li>
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
                <li><Link href="/central-de-ajuda" className="hover:text-primary">Central de Ajuda</Link></li>
                <li><Link href="/contato" className="hover:text-primary">Contato</Link></li>
                <li><Link href="/status" className="hover:text-primary">Status</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-4">
          <div className="container px-4 mx-auto text-center text-sm text-muted-foreground">
            © 2025 São e Salvo. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}