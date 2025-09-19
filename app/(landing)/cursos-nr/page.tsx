'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Clock, Shield, Users, Heart, ArrowRight, BookOpen, Search, ChevronUp } from "lucide-react"
import { SaoESalvoLogo } from '@/components/sao-e-salvo-logo'
import { GlobalFooter } from '@/components/global-footer'
import { getAllCourses } from '@/lib/courses-data'

export default function CursosNRPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll visibility for floating button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleTagClick = (tagValue: string) => {
    setSearchQuery(tagValue)
  }

  // Helper function to extract NR from title
  const extractNR = (title: string): string | null => {
    const nrMatch = title.match(/NR[-\s]?(\d+)/i)
    if (nrMatch) return `NR-${nrMatch[1]}`
    if (title.includes('Lei Lucas')) return 'Lei Lucas'
    if (title.includes('Lei 14.540')) return 'Lei 14.540'
    if (title.includes('LGPD')) return 'Lei 13.709'
    if (title.includes('NBR')) return title.match(/NBR[-\s]?(\d+)/i)?.[0] || null
    return null
  }

  // Helper function to determine course type
  const getCourseType = (title: string): string => {
    const lowerTitle = title.toLowerCase()
    if (lowerTitle.includes('reciclagem') || lowerTitle.includes('periódico')) return 'Periódico'
    if (lowerTitle.includes('complementar') || lowerTitle.includes('sep')) return 'Complementar'
    if (lowerTitle.includes('supervisor') || lowerTitle.includes('avançado')) return 'Específico'
    if (lowerTitle.includes('obrigatório') || title.includes('Lei Lucas') || title.includes('Lei 14.540') || title.includes('LGPD')) return 'Obrigatório'
    if (lowerTitle.includes('esg') || lowerTitle.includes('sustentab')) return 'ESG'
    return 'Iniciação'
  }

  // Get all courses from the data file and transform them for the landing page
  const allCoursesData = getAllCourses()
  const cursos = allCoursesData.map(course => ({
    id: course.id,
    title: course.title,
    description: course.description,
    duration: course.duration,
    category: course.category,
    slug: course.slug,
    nr: extractNR(course.title),
    level: course.nivel || 'Intermediário',
    type: getCourseType(course.title),
    image: course.image
  }))

  /* Old hardcoded courses - removed in favor of dynamic import
    {
      id: 1,
      title: 'NR-35 Trabalho em Altura',
      description: 'Capacitação completa para trabalhos em altura com foco em segurança, EPIs e prevenção de acidentes.',
      duration: '40 horas',
      category: 'Segurança',
      slug: 'nr-35-trabalho-em-altura',
      nr: 'NR-35',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nr-35-trabalho-em-altura.png'
    },
    {
      id: 2,
      title: 'Direção Defensiva',
      description: 'Técnicas essenciais de direção preventiva para reduzir riscos e garantir segurança no trânsito.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'direcao-defensiva',
      nr: null,
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/direcao-defensiva.png'
    },
    {
      id: 3,
      title: 'NR-35 Trabalho em Altura',
      description: 'Atualização obrigatória para profissionais certificados em trabalho em altura conforme NR-35.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'reciclagem-nr-35-teorico',
      nr: 'NR-35',
      level: 'Intermediário',
      type: 'Periódico',
      image: '/training-covers/reciclagem-nr-35-teorico.png'
    },
    {
      id: 4,
      title: 'NR-33 Espaços Confinados',
      description: 'Reciclagem periódica para trabalhadores autorizados em espaços confinados segundo a NR-33.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'reciclagem-nr-33-espacos-confinados',
      nr: 'NR-33',
      level: 'Intermediário',
      type: 'Periódico',
      image: '/training-covers/reciclagem-nr-33-espacos-confinados.png'
    },
    {
      id: 5,
      title: 'Gestão da Cultura de Segurança',
      description: 'Desenvolva uma cultura organizacional sólida em segurança com métodos práticos e eficazes.',
      duration: '30 horas',
      category: 'Liderança',
      slug: 'gestao-cultura-seguranca',
      nr: null,
      level: 'Avançado',
      type: 'Iniciação',
      image: '/training-covers/gestao-cultura-seguranca.png'
    },
    {
      id: 6,
      title: 'Lei Lucas - Primeiros Socorros',
      description: 'Primeiros socorros obrigatórios para educadores conforme exigências da Lei Lucas.',
      duration: '4 horas',
      category: 'Saúde',
      slug: 'lei-lucas',
      nr: null,
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/lei-lucas.png'
    },
    {
      id: 7,
      title: 'Combate a Incêndios',
      description: 'Aprenda a identificar classes de incêndio e operar extintores com segurança e eficiência.',
      duration: '16 horas',
      category: 'Segurança',
      slug: 'nocoes-combate-incendios',
      nr: 'NR-23',
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/nocoes-combate-incendios.png'
    },
    {
      id: 8,
      title: 'Primeiros Socorros',
      description: 'Técnicas fundamentais de atendimento emergencial para salvar vidas em situações críticas.',
      duration: '20 horas',
      category: 'Saúde',
      slug: 'nocoes-primeiros-socorros',
      nr: null,
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/nocoes-primeiros-socorros.png'
    },
    {
      id: 9,
      title: 'NR-05 CIPA Grau de Risco 1',
      description: 'Formação essencial para membros da CIPA em empresas de grau de risco 1.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-05-cipa-grau-risco-1',
      nr: 'NR-05',
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/cipa.png'
    },
    {
      id: 10,
      title: 'NR-05 CIPA Grau de Risco 2',
      description: 'Capacitação completa para integrantes da CIPA em empresas grau de risco 2.',
      duration: '12 horas',
      category: 'Segurança',
      slug: 'nr-05-cipa-grau-risco-2',
      nr: 'NR-05',
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/cipa.png'
    },
    {
      id: 11,
      title: 'NR-05 CIPA Grau de Risco 3',
      description: 'Treinamento avançado para membros da CIPA em ambientes de grau de risco 3.',
      duration: '16 horas',
      category: 'Segurança',
      slug: 'nr-05-cipa-grau-risco-3',
      nr: 'NR-05',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/cipa.png'
    },
    {
      id: 12,
      title: 'NR-05 CIPA Grau de Risco 4',
      description: 'Formação especializada para CIPA em operações de alto risco grau 4.',
      duration: '20 horas',
      category: 'Segurança',
      slug: 'nr-05-cipa-grau-risco-4',
      nr: 'NR-05',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/cipa.png'
    },
    {
      id: 13,
      title: 'NR-06 Equipamento de Proteção Individual',
      description: 'Uso correto, seleção e conservação de equipamentos de proteção individual conforme NR-6.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-06-epi',
      nr: 'NR-06',
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/uso-epi.png'
    },
    {
      id: 14,
      title: 'NR-10 Segurança em Eletricidade',
      description: 'Segurança fundamental em instalações elétricas e medidas de controle de riscos elétricos.',
      duration: '40 horas',
      category: 'Segurança',
      slug: 'nr-10-basico',
      nr: 'NR-10',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nr-10-basico.png'
    },
    {
      id: 15,
      title: 'NR-10 Complementar (SEP)',
      description: 'Especialização em sistemas elétricos de potência com foco em alta tensão e SEP.',
      duration: '40 horas',
      category: 'Segurança',
      slug: 'nr-10-complementar-sep',
      nr: 'NR-10',
      level: 'Avançado',
      type: 'Complementar',
      image: '/training-covers/nr-10-complementar-sep.png'
    },
    {
      id: 16,
      title: 'NR-11 Segurança em Transpaleteira',
      description: 'Operação segura de transpaleteiras manuais e elétricas conforme normas regulamentadoras.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-11-seguranca-transpaleteira',
      nr: 'NR-11',
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/nr-11-empilhadeira.png'
    },
    {
      id: 17,
      title: 'NR-11 Operador de Empilhadeira',
      description: 'Certificação completa para operadores de empilhadeira com práticas de segurança e eficiência.',
      duration: '16 horas',
      category: 'Segurança',
      slug: 'nr-11-operador-empilhadeira',
      nr: 'NR-11',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nr-11-empilhadeira.png'
    },
    {
      id: 18,
      title: 'NR-11 Operação de Rebocadores',
      description: 'Operação segura de rebocadores industriais para movimentação de cargas em fábricas e armazéns.',
      duration: '16 horas',
      category: 'Segurança',
      slug: 'nr-11-seguranca-operacao-rebocadores',
      nr: 'NR-11',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nr-11-seguranca-operacao-rebocadores.png'
    },
    {
      id: 19,
      title: 'NR-11 Transporte e Movimentação de Materiais',
      description: 'Movimentação segura de materiais com diversos equipamentos de transporte e elevação de cargas.',
      duration: '20 horas',
      category: 'Segurança',
      slug: 'nr-11-transporte-movimentacao-materiais',
      nr: 'NR-11',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nr-11-transporte-movimentacao-materiais.png'
    },
    {
      id: 20,
      title: 'NR-11 Pontes Rolantes',
      description: 'Operação certificada de pontes rolantes com foco em segurança e produtividade industrial.',
      duration: '16 horas',
      category: 'Segurança',
      slug: 'nr-11-pontes-rolantes',
      nr: 'NR-11',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nr-11-ponte-rolante.png'
    },
    {
      id: 21,
      title: 'NR-11 Operação de Talhas',
      description: 'Técnicas seguras para operação de talhas elétricas e manuais em ambientes industriais.',
      duration: '12 horas',
      category: 'Segurança',
      slug: 'nr-11-seguranca-talhas',
      nr: 'NR-11',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nr-11-ponte-rolante.png'
    },
    {
      id: 22,
      title: 'NR-12 Máquinas e Equipamentos',
      description: 'Segurança na operação de máquinas e equipamentos com dispositivos de proteção conforme NR-12.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-12-maquinas-equipamentos',
      nr: 'NR-12',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nr-12-seguranca-maquinas.png'
    },
    {
      id: 23,
      title: 'NR-13 Operador de Caldeiras',
      description: 'Operação segura de caldeiras industriais com inspeção e manutenção preventiva.',
      duration: '40 horas',
      category: 'Segurança',
      slug: 'nr-13-operador-caldeiras',
      nr: 'NR-13',
      level: 'Avançado',
      type: 'Iniciação',
      image: '/training-covers/nr-13-caldeiras.png'
    },
    {
      id: 24,
      title: 'NR-13 Vasos de Pressão',
      description: 'Operação e inspeção de vasos de pressão com foco em segurança e conformidade normativa.',
      duration: '40 horas',
      category: 'Segurança',
      slug: 'nr-13-vasos-pressao',
      nr: 'NR-13',
      level: 'Avançado',
      type: 'Iniciação',
      image: '/training-covers/nr-13-caldeiras.png'
    },
    {
      id: 25,
      title: 'NR-17 Ergonomia',
      description: 'Princípios ergonômicos para prevenir lesões e melhorar a produtividade no ambiente de trabalho.',
      duration: '16 horas',
      category: 'Saúde',
      slug: 'nr-17-ergonomia',
      nr: 'NR-17',
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/nr-17-ergonomia.png'
    },
    {
      id: 26,
      title: 'NR-17 Ergonomia Teleatendimento',
      description: 'Ergonomia específica para operadores de call center e teleatendimento.',
      duration: '4 horas',
      category: 'Saúde',
      slug: 'nr-17-ergonomia-teleatendimento',
      nr: 'NR-17',
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/trabalho-eletricidade-periodico.png'
    },
    {
      id: 27,
      title: 'NR-18 Sinaleiro e Amarrador de Cargas',
      description: 'Técnicas de sinalização e amarração segura de cargas para operações com guindastes e gruas.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-18-sinaleiro-amarrador-cargas',
      nr: 'NR-18',
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/nr-18-sinaleiro-amarrador-cargas.png'
    },
    {
      id: 28,
      title: 'NR-18 Plataforma Móvel de Trabalho',
      description: 'Operação segura de plataformas elevatórias móveis com análise de riscos e boas práticas.',
      duration: '16 horas',
      category: 'Segurança',
      slug: 'nr-18-pemt',
      nr: 'NR-18',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nr-11-plataforma-elevatoria.png'
    },
    {
      id: 29,
      title: 'NR-20 Integração',
      description: 'Integração básica sobre riscos e prevenção em áreas com líquidos inflamáveis e combustíveis.',
      duration: '4 horas',
      category: 'Segurança',
      slug: 'nr-20-iniciacao',
      nr: 'NR-20',
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/nr-20-intermediario.png'
    },
    {
      id: 30,
      title: 'NR-20 Segurança com Inflamáveis',
      description: 'Segurança básica em operações com líquidos inflamáveis e gases combustíveis.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-20-basico',
      nr: 'NR-20',
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/inflamaveis-periodico.png'
    },
    {
      id: 31,
      title: 'NR-20 Instalações Classe III',
      description: 'Operação segura em instalações com inflamáveis de classe III conforme NR-20.',
      duration: '16 horas',
      category: 'Segurança',
      slug: 'nr-20-intermediario',
      nr: 'NR-20',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nr-20-intermediario.png'
    },
    {
      id: 32,
      title: 'NR-20 Exposição ao Benzeno',
      description: 'Prevenção de riscos à saúde por exposição ao benzeno em postos de combustíveis.',
      duration: '4 horas',
      category: 'Saúde',
      slug: 'nr-20-exposicao-benzeno',
      nr: 'NR-20',
      level: 'Básico',
      type: 'Específico',
      image: '/training-covers/nr-20-avancado-i.png'
    },
    {
      id: 33,
      title: 'NR-26 Sinalização de Segurança',
      description: 'Identificação e aplicação correta de cores e sinais de segurança no ambiente de trabalho.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-26-sinalizacao-seguranca',
      nr: 'NR-26',
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/nr-26-sinalizacao-seguranca.png'
    },
    {
      id: 34,
      title: 'NR-33 Espaço Confinado',
      description: 'Trabalho seguro em espaços confinados com identificação de riscos e medidas de emergência.',
      duration: '16 horas',
      category: 'Segurança',
      slug: 'nr-33-espaco-confinado',
      nr: 'NR-33',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nr-33-espaco-confinado.png'
    },
    {
      id: 35,
      title: 'NR-33 Supervisor Espaço Confinado',
      description: 'Supervisão especializada de trabalhos em espaços confinados com gestão de permissões.',
      duration: '40 horas',
      category: 'Segurança',
      slug: 'nr-33-supervisor-espaco-confinado',
      nr: 'NR-33',
      level: 'Avançado',
      type: 'Iniciação',
      image: '/training-covers/gestao-seguranca-trabalho.png'
    },
    {
      id: 36,
      title: 'NR-35 Supervisor Trabalho em Altura',
      description: 'Supervisão e planejamento de trabalhos em altura com análise de riscos e medidas preventivas.',
      duration: '40 horas',
      category: 'Segurança',
      slug: 'nr-35-supervisor-trabalho-altura',
      nr: 'NR-35',
      level: 'Avançado',
      type: 'Iniciação',
      image: '/training-covers/nr-35-supervisor-trabalho-altura.png'
    },
    {
      id: 37,
      title: 'LOTO - Lockout e Tagout',
      description: 'Bloqueio e etiquetagem de energias perigosas para manutenção segura de equipamentos.',
      duration: '16 horas',
      category: 'Segurança',
      slug: 'loto-lockout-tagout',
      nr: null,
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/loto-lockout-tagout.png'
    },
    {
      id: 38,
      title: 'PPR - Proteção Respiratória',
      description: 'Seleção e uso correto de respiradores para proteção contra agentes químicos e particulados.',
      duration: '16 horas',
      category: 'Saúde',
      slug: 'ppr-protecao-respiratoria',
      nr: null,
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/uso-epi.png'
    },
    {
      id: 39,
      title: 'PCA - Conservação Auditiva',
      description: 'Programa de conservação auditiva para prevenir perdas auditivas ocupacionais.',
      duration: '8 horas',
      category: 'Saúde',
      slug: 'pca-conservacao-auditiva',
      nr: null,
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/higiene-ocupacional.png'
    },
    {
      id: 40,
      title: 'Prevenção ao Assédio e Violência',
      description: 'Prevenção e combate ao assédio moral e sexual no ambiente de trabalho conforme Lei 14.540.',
      duration: '4 horas',
      category: 'Saúde',
      slug: 'prevencao-combate-assedio-violencia-trabalho',
      nr: 'Lei 14.540',
      level: 'Básico',
      type: 'Obrigatório',
      image: '/training-covers/prevencao-combate-assedio-violencia-trabalho.png'
    },
    {
      id: 41,
      title: 'NR-01 - Disposições Gerais e GRO',
      description: 'Fundamentos de segurança do trabalho com gerenciamento de riscos ocupacionais (GRO).',
      duration: '4 horas',
      category: 'Segurança',
      slug: 'nr-01-disposicoes-gerais',
      nr: 'NR-01',
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/nr-01-disposicoes-gerais.png'
    },
    {
      id: 42,
      title: 'NR-05 - Representante Nomeado',
      description: 'Formação de representantes nomeados para prevenção de acidentes conforme NR-05.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-05-representante',
      nr: 'NR-05',
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/nr-05-representante.png'
    },
    {
      id: 43,
      title: 'NR-10 Complementar - SEP',
      description: 'Complemento obrigatório para trabalhos em sistemas elétricos de potência e alta tensão.',
      duration: '40 horas',
      category: 'Segurança',
      slug: 'nr-10-complementar-sep',
      nr: 'NR-10',
      level: 'Avançado',
      type: 'Complementar',
      image: '/training-covers/nr-10-complementar-sep.png'
    },
    {
      id: 44,
      title: 'NR-05 Representante - Grau de Risco 1',
      description: 'Formação de representantes para prevenção em empresas grau de risco 1.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-05-representante-grau-1',
      nr: 'NR-05',
      level: 'Básico',
      type: 'Específico',
      image: '/training-covers/nr-05-representante.png'
    },
    {
      id: 45,
      title: 'NR-05 Representante - Grau de Risco 2',
      description: 'Capacitação de representantes para segurança em empresas grau de risco 2.',
      duration: '12 horas',
      category: 'Segurança',
      slug: 'nr-05-representante-grau-2',
      nr: 'NR-05',
      level: 'Intermediário',
      type: 'Específico',
      image: '/training-covers/nr-05-representante.png'
    },
    {
      id: 46,
      title: 'NR-05 Representante - Grau de Risco 3',
      description: 'Formação avançada de representantes para ambientes grau de risco 3.',
      duration: '16 horas',
      category: 'Segurança',
      slug: 'nr-05-representante-grau-3',
      nr: 'NR-05',
      level: 'Avançado',
      type: 'Específico',
      image: '/training-covers/nr-05-representante.png'
    },
    {
      id: 47,
      title: 'NR-05 Representante - Grau de Risco 4',
      description: 'Especialização de representantes para operações de alto risco grau 4.',
      duration: '20 horas',
      category: 'Segurança',
      slug: 'nr-05-representante-grau-4',
      nr: 'NR-05',
      level: 'Avançado',
      type: 'Específico',
      image: '/training-covers/nr-05-representante.png'
    },
    {
      id: 48,
      title: 'NR-10 Básico - Reciclagem',
      description: 'Reciclagem bienal obrigatória para profissionais de instalações elétricas.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-10-basico-periodico',
      nr: 'NR-10',
      level: 'Intermediário',
      type: 'Periódico',
      image: '/training-covers/nr-10-basico.png'
    },
    {
      id: 49,
      title: 'NR-22 - Segurança na Mineração',
      description: 'Segurança especializada para trabalhos em mineração e atividades extrativistas.',
      duration: '40 horas',
      category: 'Segurança',
      slug: 'nr-22-mineracao',
      nr: 'NR-22',
      level: 'Avançado',
      type: 'Iniciação',
      image: '/training-covers/nr-12-seguranca-maquinas.png'
    },
    {
      id: 50,
      title: 'NR-23 - PPCI',
      description: 'Prevenção e proteção contra incêndios com planos de emergência e evacuação.',
      duration: '16 horas',
      category: 'Segurança',
      slug: 'nr-23-ppci',
      nr: 'NR-23',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nocoes-combate-incendios.png'
    },
    {
      id: 51,
      title: 'NR-10 - Áreas Classificadas',
      description: 'Segurança em áreas classificadas com risco de atmosferas explosivas.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-10-areas-classificadas',
      nr: 'NR-10',
      level: 'Avançado',
      type: 'Complementar',
      image: '/training-covers/nr-10-complementar-sep.png'
    },
    {
      id: 52,
      title: 'NR-10 - SEP Reciclagem',
      description: 'Atualização periódica para profissionais de sistemas elétricos de potência.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-10-sep-periodico',
      nr: 'NR-10',
      level: 'Avançado',
      type: 'Periódico',
      image: '/training-covers/trabalho-eletricidade-periodico.png'
    },
    {
      id: 53,
      title: 'NR-11 - Transporte e Movimentação Geral',
      description: 'Movimentação segura de cargas com equipamentos de transporte industrial.',
      duration: '16 horas',
      category: 'Segurança',
      slug: 'nr-11-transporte-geral',
      nr: 'NR-11',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nr-11-transporte-movimentacao-materiais.png'
    },
    {
      id: 54,
      title: 'NR-11 - Empilhadeira Reciclagem',
      description: 'Atualização obrigatória para operadores certificados de empilhadeiras.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-11-empilhadeira-periodico',
      nr: 'NR-11',
      level: 'Intermediário',
      type: 'Periódico',
      image: '/training-covers/nr-11-empilhadeira.png'
    },
    {
      id: 55,
      title: 'NR-13 - Vasos Pressão Categoria 1',
      description: 'Operação especializada de vasos de pressão categoria 1 conforme NR-13.',
      duration: '40 horas',
      category: 'Segurança',
      slug: 'nr-13-vasos-pressao-categoria-1',
      nr: 'NR-13',
      level: 'Avançado',
      type: 'Específico',
      image: '/training-covers/nr-13-caldeiras.png'
    },
    {
      id: 56,
      title: 'NR-13 - Caldeiras Reciclagem',
      description: 'Atualização periódica obrigatória para operadores de caldeiras industriais.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-13-caldeiras-periodico',
      nr: 'NR-13',
      level: 'Avançado',
      type: 'Periódico',
      image: '/training-covers/nr-13-caldeiras.png'
    },
    {
      id: 57,
      title: 'NR-17 - Operador de Checkout',
      description: 'Ergonomia aplicada para operadores de caixa e checkout em comércio.',
      duration: '4 horas',
      category: 'Saúde',
      slug: 'nr-17-checkout',
      nr: 'NR-17',
      level: 'Básico',
      type: 'Específico',
      image: '/training-covers/nr-17-ergonomia.png'
    },
    {
      id: 58,
      title: 'NR-17 - Levantamento Manual',
      description: 'Técnicas ergonômicas para levantamento e transporte manual de cargas.',
      duration: '4 horas',
      category: 'Saúde',
      slug: 'nr-17-levantamento-manual',
      nr: 'NR-17',
      level: 'Básico',
      type: 'Específico',
      image: '/training-covers/nr-17-ergonomia.png'
    },
    {
      id: 59,
      title: 'NR-18 - Construção Civil',
      description: 'Segurança fundamental para trabalhadores da construção civil conforme NR-18.',
      duration: '6 horas',
      category: 'Segurança',
      slug: 'seguranca-construcao-civil',
      nr: 'NR-18',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nr-18-sinaleiro-amarrador-cargas.png'
    },
    {
      id: 60,
      title: 'NR-20 - Classe I Básico',
      description: 'Operação segura em instalações classe I com líquidos inflamáveis.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-20-classe1-basico',
      nr: 'NR-20',
      level: 'Básico',
      type: 'Específico',
      image: '/training-covers/nr-20-intermediario.png'
    },
    {
      id: 61,
      title: 'NR-20 - Classe II Intermediário',
      description: 'Segurança intermediária para instalações classe II com combustíveis.',
      duration: '12 horas',
      category: 'Segurança',
      slug: 'nr-20-classe2-intermediario',
      nr: 'NR-20',
      level: 'Intermediário',
      type: 'Específico',
      image: '/training-covers/nr-20-intermediario.png'
    },
    {
      id: 62,
      title: 'NR-20 - Classe III Avançado',
      description: 'Especialização avançada para operações em instalações classe III.',
      duration: '16 horas',
      category: 'Segurança',
      slug: 'nr-20-classe3-avancado',
      nr: 'NR-20',
      level: 'Avançado',
      type: 'Específico',
      image: '/training-covers/nr-20-avancado-ii.png'
    },
    {
      id: 63,
      title: 'CIPAMIN - NR-22',
      description: 'Formação de comissão interna para prevenção de acidentes em mineração.',
      duration: '20 horas',
      category: 'Segurança',
      slug: 'cipamin-nr22',
      nr: 'NR-22',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/cipa.png'
    },
    {
      id: 64,
      title: 'Brigada de Incêndio - Básico',
      description: 'Formação de brigadistas para prevenção e combate a incêndios.',
      duration: '16 horas',
      category: 'Segurança',
      slug: 'brigada-incendio',
      nr: 'NBR-14276',
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/nr-23-brigada-incendio.png'
    },
    {
      id: 65,
      title: 'Brigada de Incêndio - Intermediário',
      description: 'Capacitação intermediária de brigada com técnicas avançadas de combate.',
      duration: '20 horas',
      category: 'Segurança',
      slug: 'brigada-incendio',
      nr: 'NBR-14276',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nocoes-combate-incendios.png'
    },
    {
      id: 66,
      title: 'NR-31 - CIPATR',
      description: 'Formação de CIPATR para prevenção de acidentes em atividades rurais.',
      duration: '20 horas',
      category: 'Segurança',
      slug: 'nr-31-agricultura',
      nr: 'NR-31',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nr-31-defensivos-agricolas.png'
    },
    {
      id: 67,
      title: 'NR-32 - Serviços de Saúde',
      description: 'Segurança especializada para profissionais de saúde e hospitais.',
      duration: '4 horas',
      category: 'Saúde',
      slug: 'nr-32-servicos-saude',
      nr: 'NR-32',
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/primeiros-socorros.png'
    },
    {
      id: 68,
      title: 'NR-34 - Trabalho a Quente',
      description: 'Trabalho a quente seguro em estaleiros e indústria naval.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-34-trabalho-quente',
      nr: 'NR-34',
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/nr-34-industria-naval.png'
    },
    {
      id: 69,
      title: 'NR-35 - Trabalho Altura Reciclagem',
      description: 'Atualização bienal obrigatória para trabalhos em altura conforme NR-35.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'nr-35-trabalho-altura-periodico',
      nr: 'NR-35',
      level: 'Intermediário',
      type: 'Periódico',
      image: '/training-covers/nr-35-resgate-altura.png'
    },
    {
      id: 70,
      title: 'NR-37 - Plataformas Petróleo',
      description: 'Segurança especializada para trabalhos em plataformas petrolíferas offshore.',
      duration: '40 horas',
      category: 'Segurança',
      slug: 'nr-37-plataformas-petroleo',
      nr: 'NR-37',
      level: 'Avançado',
      type: 'Iniciação',
      image: '/training-covers/nr-37-plataformas-petroleo.png'
    },
    {
      id: 71,
      title: 'RCP - Ressuscitação Cardiopulmonar',
      description: 'Técnicas de RCP e uso de DEA para atendimento de emergências cardíacas.',
      duration: '8 horas',
      category: 'Saúde',
      slug: 'rcp-primeiros-socorros',
      nr: null,
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/primeiros-socorros.png'
    },
    {
      id: 72,
      title: '5S - Ferramentas da Qualidade',
      description: 'Implantação do programa 5S para organização e qualidade no trabalho.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'programa-5s',
      nr: null,
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/investigacao-acidentes.png'
    },
    {
      id: 73,
      title: 'APR - Análise Preliminar de Riscos',
      description: 'Análise preliminar de riscos para identificação e controle de perigos.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'apr-analise-risco',
      nr: null,
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/analise-risco.png'
    },
    {
      id: 74,
      title: 'Prevenção COVID-19',
      description: 'Protocolos de prevenção contra COVID-19 e doenças infectocontagiosas.',
      duration: '2 horas',
      category: 'Saúde',
      slug: 'covid-19-prevencao',
      nr: null,
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/sipat.png'
    },
    {
      id: 75,
      title: 'Valas e Escavações',
      description: 'Procedimentos seguros para escavações, valas e trabalhos em subsolo.',
      duration: '8 horas',
      category: 'Segurança',
      slug: 'valas-escavacoes',
      nr: null,
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/analise-risco.png'
    },
    {
      id: 76,
      title: 'LGPD - Lei Geral Proteção Dados',
      description: 'Conformidade com a LGPD e proteção de dados pessoais na empresa.',
      duration: '4 horas',
      category: 'Liderança',
      slug: 'lgpd-protecao-dados',
      nr: 'Lei 13.709',
      level: 'Básico',
      type: 'Obrigatório',
      image: '/training-covers/integracao-seguranca.png'
    },
    {
      id: 77,
      title: 'SIPAT - Semana Prevenção',
      description: 'Planejamento e execução da Semana Interna de Prevenção de Acidentes.',
      duration: '4 horas',
      category: 'Liderança',
      slug: 'sipat-seguranca',
      nr: null,
      level: 'Intermediário',
      type: 'Iniciação',
      image: '/training-covers/sipat.png'
    },
    {
      id: 78,
      title: 'Líder SST',
      description: 'Desenvolvimento de lideranças para gestão eficaz de segurança do trabalho.',
      duration: '20 horas',
      category: 'Liderança',
      slug: 'lider-sst',
      nr: null,
      level: 'Avançado',
      type: 'Iniciação',
      image: '/training-covers/integracao-seguranca.png'
    },
    {
      id: 79,
      title: 'Bombeiro Civil - Classe I',
      description: 'Formação completa de bombeiro civil para atuação em emergências.',
      duration: '210 horas',
      category: 'Segurança',
      slug: 'bombeiro-civil-classe1',
      nr: null,
      level: 'Avançado',
      type: 'Iniciação',
      image: '/training-covers/bombeiro-civil.png'
    },
    {
      id: 80,
      title: 'Coleta Seletiva',
      description: 'Gestão de resíduos e coleta seletiva para sustentabilidade empresarial.',
      duration: '4 horas',
      category: 'Saúde',
      slug: 'coleta-seletiva',
      nr: null,
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/prevencao-combate-assedio-violencia-trabalho.png'
    }
  ] */

  // Filter courses based on search query and category
  const filteredCursos = cursos.filter(curso => {
    const matchesSearch = 
      curso.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      curso.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      curso.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (curso.nr && curso.nr.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || curso.category === selectedCategory
    
    return matchesSearch && matchesCategory
  }).sort((a, b) => a.title.localeCompare(b.title))

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Segurança': return Shield
      case 'Saúde': return Heart
      case 'Liderança': return Users
      default: return Shield
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Básico': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'Avançado': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-brand-grey-7 text-brand-grey-main dark:bg-brand-grey-2 dark:text-brand-grey-6'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Iniciação': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'Periódico': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
      case 'Complementar': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
      case 'Específico': return 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400'
      case 'Obrigatório': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      case 'ESG': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      default: return 'bg-brand-grey-7 text-brand-grey-main dark:bg-brand-grey-2 dark:text-brand-grey-6'
    }
  }

  const categories = ['all', 'Segurança', 'Saúde', 'Liderança']

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="py-20">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {cursos.length} Cursos em Segurança do Trabalho e ESG
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Capacite sua equipe com nossos cursos especializados em conformidade com as Normas Regulamentadoras e práticas ESG
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar cursos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 h-12 w-full rounded-lg"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-brand-blue-main text-white'
                    : 'bg-brand-grey-7 text-brand-grey-3 hover:bg-brand-grey-6 dark:bg-brand-grey-2 dark:text-brand-grey-6 dark:hover:bg-brand-grey-3'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className="pb-20">
        <div className="container px-4 mx-auto max-w-7xl">
          {filteredCursos.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground mb-4">Nenhum curso encontrado</p>
              <p className="text-muted-foreground">Tente uma busca diferente ou remova os filtros</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <p className="text-sm text-muted-foreground">
                  Mostrando {filteredCursos.length} de {cursos.length} cursos
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCursos.map((curso) => {
                  const CategoryIcon = getCategoryIcon(curso.category)
                  return (
                    <Card key={curso.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col group h-full">
                      {/* Image Header */}
                      <Link href={`/cursos-nr/${curso.slug}`}>
                        <div className="relative h-48 cursor-pointer overflow-hidden">
                          <img 
                            src={curso.image || "/training-covers/gestao-seguranca-trabalho.png"} 
                            alt={curso.title}
                            className={`w-full h-full object-cover ${['nr-35-trabalho-em-altura', 'nr-06-epi', 'ppr-protecao-respiratoria'].includes(curso.slug) ? 'object-top' : ''} ${['nr-17-ergonomia', 'nr-17-checkout', 'nr-17-levantamento-manual', 'nocoes-primeiros-socorros', 'nocoes-combate-incendios'].includes(curso.slug) ? 'object-top2' : ''}`}
                          />
                          
                          {/* Category and Duration - minimal style */}
                          <div className="absolute bottom-3 left-3 flex gap-2">
                            <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                              <CategoryIcon className="h-3 w-3" />
                              {curso.category}
                            </div>
                            <div className="bg-black/50 backdrop-blur-sm text-white px-2.5 py-1.5 rounded text-xs">
                              {curso.duration}
                            </div>
                          </div>
                        </div>
                      </Link>

                      <div className="flex flex-col flex-1">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg leading-tight line-clamp-2">{curso.title}</CardTitle>
                        </CardHeader>
                        
                        <CardContent className="flex-1 pb-3">
                          <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 mb-4">
                            {curso.description}
                          </p>
                          
                          {/* Simplified Badges - minimal style */}
                          <div className="flex flex-wrap gap-2">
                            {curso.nr && (
                              <Badge 
                                variant="outline" 
                                className="text-xs border-gray-200 text-gray-600 bg-transparent cursor-pointer hover:border-gray-400"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleTagClick(curso.nr!);
                                }}
                              >
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
                        </CardContent>

                        {/* Footer with button - now always at bottom */}
                        <CardFooter className="pt-0 mt-auto">
                          <Link href={`/cursos-nr/${curso.slug}`} className="w-full">
                            <Button className="w-full bg-brand-blue-main hover:bg-brand-blue-2 text-white">
                              Ver detalhes
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </CardFooter>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de um curso personalizado?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato com nossos especialistas para desenvolver soluções de cursos sob medida para sua empresa
          </p>
          <Button size="lg" className="bg-brand-blue-main hover:bg-brand-blue-2 text-white">
            Falar com Especialista
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <GlobalFooter />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-brand-blue-main hover:bg-brand-blue-2 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}