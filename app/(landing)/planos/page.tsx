'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Check,
  X,
  ArrowRight,
  Star,
  Users,
  Building2,
  Zap,
  Shield,
  Clock,
  FileText,
  BarChart3,
  Headphones,
  Globe,
  Award,
  Phone,
  Mail
} from 'lucide-react'
import { GlobalFooter } from '@/components/global-footer'

export default function PricingPage() {
  const plans = [
    {
      name: 'Gratuito',
      description: 'Ideal para empresas pequenas que estão começando',
      price: 'R$ 0',
      period: '/usuário/mês',
      highlight: false,
      maxUsers: 10,
      features: [
        { name: '10 usuários gratuitos', included: true },
        { name: '5 cursos ativos', included: true },
        { name: 'Relatórios básicos', included: true },
        { name: 'Suporte por email', included: true },
        { name: '3 anos de histórico', included: true },
        { name: 'Certificados válidos MTE', included: true },
        { name: 'Cursos ilimitados', included: false },
        { name: 'Relatórios avançados', included: false },
        { name: 'Integração API', included: false },
        { name: 'Suporte prioritário', included: false },
        { name: 'Personalização da marca', included: false },
        { name: 'Histórico ilimitado', included: false }
      ],
      cta: 'Começar gratuitamente',
      ctaLink: '/register'
    },
    {
      name: 'Premium',
      description: 'Para empresas que precisam de recursos avançados',
      price: 'R$ 29',
      period: '/usuário/mês',
      originalPrice: 'R$ 39',
      highlight: true,
      badge: 'Mais Popular',
      features: [
        { name: 'Usuários ilimitados', included: true },
        { name: 'Cursos ilimitados', included: true },
        { name: 'Relatórios avançados', included: true },
        { name: 'Suporte prioritário', included: true },
        { name: 'Integração API', included: true },
        { name: 'Personalização da marca', included: true },
        { name: 'Histórico ilimitado', included: true },
        { name: 'Analytics em tempo real', included: true },
        { name: 'Gamificação avançada', included: true },
        { name: 'Certificados personalizados', included: true },
        { name: 'Backup automático', included: true },
        { name: 'Treinamento da equipe', included: true }
      ],
      cta: 'Iniciar teste de 30 dias',
      ctaLink: '/register?plan=premium'
    },
    {
      name: 'Enterprise',
      description: 'Solução personalizada para grandes organizações',
      price: 'Sob consulta',
      period: '',
      highlight: false,
      features: [
        { name: 'Tudo do plano Premium', included: true },
        { name: 'Preços por local/unidade', included: true },
        { name: 'Gerente de conta dedicado', included: true },
        { name: 'SLA garantido', included: true },
        { name: 'Integração personalizada', included: true },
        { name: 'Consultoria em SST', included: true },
        { name: 'Auditoria de conformidade', included: true },
        { name: 'Treinamento presencial', included: true },
        { name: 'Suporte 24/7', included: true },
        { name: 'Implementação guiada', included: true },
        { name: 'Relatórios executivos', included: true },
        { name: 'Customização completa', included: true }
      ],
      cta: 'Falar com vendas',
      ctaLink: '/contato'
    }
  ]

  const additionalSeats = {
    name: 'Usuários Ocasionais',
    description: 'Para colaboradores que usam a plataforma esporadicamente',
    price: 'R$ 8',
    period: '/usuário/mês',
    features: [
      'Acesso limitado aos cursos',
      'Visualização de relatórios',
      'Certificados básicos',
      'Suporte por email'
    ]
  }

  const faqs = [
    {
      question: 'Como funciona o teste gratuito de 30 dias?',
      answer: 'O teste gratuito inclui acesso completo ao plano Premium por 30 dias, sem necessidade de cartão de crédito. Você pode cancelar a qualquer momento.'
    },
    {
      question: 'Posso trocar de plano a qualquer momento?',
      answer: 'Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas no próximo ciclo de cobrança.'
    },
    {
      question: 'Os certificados são válidos perante o Ministério do Trabalho?',
      answer: 'Sim, todos os nossos certificados são válidos e reconhecidos pelo MTE, seguindo todas as normas regulamentadoras vigentes.'
    },
    {
      question: 'Como funciona a cobrança?',
      answer: 'A cobrança é mensal ou anual, por usuário ativo. Oferecemos desconto de 20% para pagamento anual. Aceitamos boleto bancário e cartão de crédito.'
    },
    {
      question: 'Há limite de cursos ou certificados?',
      answer: 'No plano Gratuito há limite de 5 cursos ativos. Nos planos Premium e Enterprise não há limites para cursos ou certificados emitidos.'
    },
    {
      question: 'Que tipo de suporte vocês oferecem?',
      answer: 'Oferecemos suporte por email para todos os planos, chat ao vivo para Premium, e suporte dedicado 24/7 para Enterprise.'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 mx-auto text-center">
          <Badge className="mb-4 bg-brand-blue-main/10 text-brand-blue-main border-brand-blue-main">
            <Star className="h-3 w-3 mr-1" />
            O melhor custo-benefício do Brasil
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            Planos que <span className="text-brand-blue-main">crescem</span> com sua empresa
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Escolha o plano ideal para sua empresa. Todos incluem certificação válida MTE, 
            suporte especializado e acesso a todas as NRs vigentes.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto pt-6">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`relative overflow-hidden ${
                  plan.highlight 
                    ? 'border-brand-blue-main shadow-xl scale-105 bg-gradient-to-b from-white to-blue-50/30' 
                    : 'hover:shadow-lg transition-shadow duration-300'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-brand-blue-main text-white px-4 py-1 whitespace-nowrap">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-sm">{plan.description}</CardDescription>
                  
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          {plan.originalPrice}
                        </span>
                      )}
                      {plan.period && (
                        <span className="text-muted-foreground">{plan.period}</span>
                      )}
                    </div>
                    {plan.name === 'Premium' && (
                      <p className="text-sm text-green-600 font-medium mt-2">
                        Economize 25% com pagamento anual
                      </p>
                    )}
                    {plan.maxUsers && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Até {plan.maxUsers} usuários inclusos
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={`text-sm ${!feature.included ? 'text-muted-foreground' : ''}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="pt-6">
                  <Link href={plan.ctaLink} className="w-full">
                    <Button 
                      className={`w-full ${
                        plan.highlight 
                          ? 'bg-brand-blue-main hover:bg-brand-blue-2 text-white' 
                          : plan.name === 'Enterprise'
                          ? 'bg-slate-900 hover:bg-slate-800 text-white'
                          : 'bg-white border border-brand-blue-main text-brand-blue-main hover:bg-brand-blue-main hover:text-white'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Additional Seats Card */}
          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-brand-blue-main" />
                  <CardTitle className="text-xl">{additionalSeats.name}</CardTitle>
                </div>
                <CardDescription>{additionalSeats.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{additionalSeats.price}</span>
                  <span className="text-muted-foreground">{additionalSeats.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {additionalSeats.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compare todos os recursos</h2>
            <p className="text-lg text-muted-foreground">
              Veja em detalhes o que está incluído em cada plano
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Recursos</th>
                  <th className="text-center p-4 font-semibold">Gratuito</th>
                  <th className="text-center p-4 font-semibold text-brand-blue-main">Premium</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-slate-50">
                  <td className="p-4 font-medium">Usuários</td>
                  <td className="text-center p-4">Até 10</td>
                  <td className="text-center p-4">Ilimitados</td>
                  <td className="text-center p-4">Ilimitados</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Cursos ativos</td>
                  <td className="text-center p-4">5</td>
                  <td className="text-center p-4">Ilimitados</td>
                  <td className="text-center p-4">Ilimitados</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-4 font-medium">Certificados válidos MTE</td>
                  <td className="text-center p-4"><Check className="h-4 w-4 text-green-600 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="h-4 w-4 text-green-600 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="h-4 w-4 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Relatórios avançados</td>
                  <td className="text-center p-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                  <td className="text-center p-4"><Check className="h-4 w-4 text-green-600 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="h-4 w-4 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-4 font-medium">Integração API</td>
                  <td className="text-center p-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                  <td className="text-center p-4"><Check className="h-4 w-4 text-green-600 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="h-4 w-4 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Personalização da marca</td>
                  <td className="text-center p-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                  <td className="text-center p-4"><Check className="h-4 w-4 text-green-600 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="h-4 w-4 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-4 font-medium">Suporte</td>
                  <td className="text-center p-4">Email</td>
                  <td className="text-center p-4">Prioritário</td>
                  <td className="text-center p-4">24/7 Dedicado</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Gerente de conta</td>
                  <td className="text-center p-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                  <td className="text-center p-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                  <td className="text-center p-4"><Check className="h-4 w-4 text-green-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground">
              Esclarecemos as principais dúvidas sobre nossos planos
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <Card className="p-8 md:p-12 text-center text-white bg-brand-blue-main">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para transformar a segurança da sua empresa?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Comece gratuitamente ou teste o Premium por 30 dias. Cancele quando quiser.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-white text-brand-blue-main hover:bg-white/90">
                  Começar gratuitamente
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contato">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  <Phone className="mr-2 h-4 w-4" />
                  Falar com vendas
                </Button>
              </Link>
            </div>
            <p className="text-sm mt-6 opacity-75">
              Já usado por mais de 1.200 empresas em todo o Brasil
            </p>
          </Card>
        </div>
      </section>

      <GlobalFooter />
    </div>
  )
}