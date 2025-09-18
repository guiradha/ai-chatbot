'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Clock, Shield, Users, Heart, ArrowRight, BookOpen, Search, ChevronUp } from "lucide-react"
import { SaoESalvoLogo } from '@/components/sao-e-salvo-logo'

export default function TreinamentosPage() {
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

  const treinamentos = [
    {
      id: 1,
      title: 'NR-35 Trabalho em Altura',
      description: 'Curso completo sobre segurança em trabalho em altura, incluindo uso de EPIs e análise de riscos.',
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
      description: 'Aprenda os princípios da direção defensiva e como prevenir acidentes com atitudes seguras ao volante.',
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
      description: 'Curso de reciclagem para profissionais certificados em NR-35, focado na atualização de conhecimentos.',
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
      description: 'Renovação ou atualização de certificação de trabalhadores em espaços confinados.',
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
      description: 'Implante uma gestão da cultura de segurança no trabalho atrativa e eficaz para empresas.',
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
      description: 'Capacitação obrigatória em primeiros socorros para profissionais da educação conforme Lei Lucas.',
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
      description: 'Capacita profissionais para compreender o fogo, identificar classes de incêndio e operar extintores.',
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
      description: 'Noções básicas para agir corretamente em emergências com técnicas de atendimento imediato.',
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
      description: 'Capacita integrantes da CIPA grau de risco 1 para identificar riscos e promover segurança.',
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
      description: 'Capacita integrantes da CIPA grau de risco 2 para identificar riscos e promover segurança.',
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
      description: 'Capacita integrantes da CIPA grau de risco 3 para identificar riscos e promover segurança.',
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
      description: 'Capacita integrantes da CIPA grau de risco 4 para identificar riscos e promover segurança.',
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
      description: 'Aprenda sobre EPIs com base na NR-6 para identificar, utilizar e conservar corretamente.',
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
      description: 'Capacita profissionais para atuar com segurança em instalações e serviços elétricos.',
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
      description: 'Para profissionais em sistemas elétricos de potência, abordando riscos típicos e prevenção.',
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
      description: 'O curso aborda os princípios fundamentais da operação segura de transpaleteiras, seguindo as exigências das NRs 11 e 12.',
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
      description: 'Capacita profissionais para a operação segura e eficiente de empilhadeiras conforme as normas regulamentadoras.',
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
      description: 'Prepara profissionais para o uso seguro de rebocadores industriais em ambientes logísticos e fabris.',
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
      description: 'Capacitação completa sobre o manuseio seguro de materiais com pontes rolantes, talhas, transpaleteiras e outros equipamentos.',
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
      description: 'O curso aborda os princípios fundamentais da operação segura de pontes rolantes, seguindo as exigências da normativa.',
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
      description: 'Capacita profissionais para o manuseio correto e seguro de talhas e equipamentos de elevação de cargas.',
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
      description: 'Capacita profissionais para operar, ajustar e manter máquinas conforme a NR-12, abordando medidas de proteção.',
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
      description: 'Capacita profissionais para operar caldeiras de forma segura e conforme a legislação da NR-13.',
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
      description: 'Capacita profissionais para operar, inspecionar e manter vasos de pressão e unidades de processo conforme a NR-13.',
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
      description: 'Capacita profissionais para adaptar as condições de trabalho às características dos trabalhadores.',
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
      description: 'Capacita profissionais para aplicar práticas ergonômicas no ambiente de teleatendimento conforme a NR-17.',
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
      description: 'Capacita profissionais para atuar com segurança na sinalização e amarração de cargas em operações de içamento.',
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
      description: 'Capacita profissionais para identificar e minimizar riscos durante a operação de plataformas elevatórias.',
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
      description: 'Capacita trabalhadores para reconhecer riscos e adotar medidas preventivas em ambientes com inflamáveis.',
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
      description: 'Capacita profissionais para atuar com segurança em ambientes com inflamáveis e combustíveis.',
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
      description: 'Capacita profissionais para manutenção, inspeção e operação em instalações até classes III.',
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
      description: 'Capacitação obrigatória para trabalhadores expostos ao risco do benzeno, como frentistas de postos de combustível.',
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
      description: 'Capacita profissionais para identificar, aplicar e interpretar corretamente as cores e sinais de segurança.',
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
      description: 'Capacita profissionais para atuar com segurança em espaços confinados, abordando identificação de riscos.',
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
      description: 'Capacita profissionais para supervisionar atividades em espaços confinados conforme a NR-33.',
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
      description: 'Capacita profissionais para supervisionar, planejar e autorizar atividades em altura acima de 2 metros.',
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
      description: 'Conheça os princípios do bloqueio e etiquetagem de fontes de energia com o curso de LOTO.',
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
      description: 'Estabelece práticas para selecionar, usar e manter corretamente os Equipamentos de Proteção Respiratória.',
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
      description: 'Inclui avaliação dos riscos, exames audiométricos periódicos e monitoramento do ambiente.',
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
      description: 'Capacita profissionais para identificar, prevenir e enfrentar o assédio e violência no ambiente laboral.',
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
      description: 'Curso sobre disposições gerais, gerenciamento de riscos ocupacionais e diretrizes fundamentais de segurança e saúde no trabalho.',
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
      description: 'Capacitação para representantes nomeados da NR-05, abordando prevenção de acidentes e análise de riscos.',
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
      description: 'Curso complementar obrigatório para profissionais que trabalham com Sistema Elétrico de Potência (Alta Tensão).',
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
      description: 'Capacitação específica para representantes nomeados em empresas de grau de risco 1.',
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
      description: 'Capacitação para representantes nomeados em empresas de grau de risco 2.',
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
      description: 'Capacitação avançada para representantes em empresas de grau de risco 3.',
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
      description: 'Capacitação especializada para representantes em empresas de grau de risco 4.',
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
      description: 'Curso de reciclagem bienal obrigatório para profissionais que trabalham com eletricidade.',
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
      description: 'Curso sobre segurança e saúde ocupacional na indústria da mineração.',
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
      description: 'Curso sobre Prevenção e Proteção Contra Incêndios, medidas preventivas e sistemas de combate.',
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
      description: 'Curso sobre segurança em áreas classificadas com atmosferas explosivas.',
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
      description: 'Reciclagem para profissionais certificados em NR-10 SEP.',
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
      description: 'Curso geral sobre transporte e movimentação de materiais.',
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
      description: 'Reciclagem para operadores de empilhadeira.',
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
      description: 'Curso específico para vasos de pressão categoria 1.',
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
      description: 'Reciclagem para operadores de caldeiras.',
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
      description: 'Ergonomia específica para operadores de checkout.',
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
      description: 'Curso sobre levantamento e transporte manual de cargas.',
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
      description: 'Segurança e saúde na indústria da construção civil.',
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
      description: 'Curso básico para instalações classe I de inflamáveis.',
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
      description: 'Curso intermediário para instalações classe II.',
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
      description: 'Curso avançado para instalações classe III.',
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
      description: 'Comissão Interna de Prevenção de Acidentes na Mineração.',
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
      description: 'Formação básica de brigada de incêndio NBR 14276.',
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
      description: 'Formação intermediária de brigada de incêndio NBR 14276.',
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
      description: 'Comissão Interna de Prevenção de Acidentes do Trabalho Rural.',
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
      description: 'Segurança e saúde no trabalho em serviços de saúde.',
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
      description: 'Condições e meio ambiente de trabalho na indústria naval.',
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
      description: 'Reciclagem para trabalho em altura.',
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
      description: 'Segurança em plataformas de petróleo.',
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
      description: 'Técnicas de ressuscitação cardiopulmonar.',
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
      description: 'Metodologia 5S para organização e melhoria contínua.',
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
      description: 'Metodologia para análise preliminar de riscos.',
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
      description: 'Medidas preventivas contra COVID-19 no ambiente de trabalho.',
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
      description: 'Segurança em trabalhos com valas e escavações.',
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
      description: 'Lei Geral de Proteção de Dados Pessoais.',
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
      description: 'Organização e condução da SIPAT.',
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
      description: 'Formação de líderes em segurança e saúde no trabalho.',
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
      description: 'Formação de bombeiro civil classe I.',
      duration: '210 horas',
      category: 'Segurança',
      slug: 'bombeiro-civil-classe1',
      nr: null,
      level: 'Avançado',
      type: 'Iniciação',
      image: '/training-covers/higiene-ocupacional.png'
    },
    {
      id: 80,
      title: 'Coleta Seletiva',
      description: 'Práticas de coleta seletiva e sustentabilidade.',
      duration: '4 horas',
      category: 'Saúde',
      slug: 'coleta-seletiva',
      nr: null,
      level: 'Básico',
      type: 'Iniciação',
      image: '/training-covers/prevencao-combate-assedio-violencia-trabalho.png'
    }
  ]

  // Filter trainings based on search query and category
  const filteredTreinamentos = treinamentos.filter(treinamento => {
    const matchesSearch = 
      treinamento.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      treinamento.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      treinamento.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (treinamento.nr && treinamento.nr.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || treinamento.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

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
      default: return 'bg-brand-grey-7 text-brand-grey-main dark:bg-brand-grey-2 dark:text-brand-grey-6'
    }
  }

  const categories = ['all', 'Segurança', 'Saúde', 'Liderança']

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-[#0063F3]">
        <div className="container px-4 mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="cursor-pointer">
            <SaoESalvoLogo size="md" className="text-white" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/treinamentos" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
              Treinamentos
            </Link>
            <Link href="/#features" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
              Funcionalidades
            </Link>
            <Link href="/#benefits" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
              Benefícios
            </Link>
            <Link href="/#pricing" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
              Planos
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
              Depoimentos
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20">Entrar</Button>
            </Link>
            <Button className="bg-white text-[#0063F3] hover:bg-white/90 font-bold">Contato Comercial</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            80 Treinamentos em Segurança do Trabalho
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Capacite sua equipe com nossos cursos especializados em conformidade com as Normas Regulamentadoras
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar treinamentos..."
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

      {/* Treinamentos */}
      <section className="pb-20">
        <div className="container px-4 mx-auto max-w-7xl">
          {filteredTreinamentos.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground mb-4">Nenhum treinamento encontrado</p>
              <p className="text-muted-foreground">Tente uma busca diferente ou remova os filtros</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <p className="text-sm text-muted-foreground">
                  Mostrando {filteredTreinamentos.length} de {treinamentos.length} treinamentos
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTreinamentos.map((treinamento) => {
                  const CategoryIcon = getCategoryIcon(treinamento.category)
                  return (
                    <Card key={treinamento.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col group h-full">
                      {/* Image Header */}
                      <Link href={`/treinamentos/${treinamento.slug}`}>
                        <div className="relative h-48 cursor-pointer overflow-hidden">
                          <img 
                            src={treinamento.image || "/training-covers/gestao-seguranca-trabalho.png"} 
                            alt={treinamento.title}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Category Badge */}
                          <div className="absolute top-3 left-3">
                            <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-brand-grey-main px-2 py-1 rounded-full text-xs font-medium">
                              <CategoryIcon className="h-3 w-3" />
                              {treinamento.category}
                            </div>
                          </div>

                          {/* NR Tag */}
                          {treinamento.nr && (
                            <div className="absolute bottom-3 left-3">
                              <Badge 
                                className="bg-brand-blue-main/90 text-white border-0 cursor-pointer hover:bg-brand-blue-main text-xs"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleTagClick(treinamento.nr!);
                                }}
                              >
                                {treinamento.nr}
                              </Badge>
                            </div>
                          )}

                          {/* Duration */}
                          <div className="absolute bottom-3 right-3">
                            <div className="flex items-center gap-1 bg-brand-grey-main/70 text-white px-2 py-1 rounded-full text-xs">
                              <Clock className="h-3 w-3" />
                              {treinamento.duration}
                            </div>
                          </div>
                        </div>
                      </Link>

                      <div className="flex flex-col flex-1">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg leading-tight line-clamp-2">{treinamento.title}</CardTitle>
                        </CardHeader>
                        
                        <CardContent className="flex-1 pb-3">
                          <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 mb-4">
                            {treinamento.description}
                          </p>
                          
                          {/* Badges */}
                          <div className="flex flex-wrap gap-2">
                            <Badge className={`text-xs ${getLevelColor(treinamento.level)}`}>
                              {treinamento.level}
                            </Badge>
                            <Badge className={`text-xs ${getTypeColor(treinamento.type)}`}>
                              {treinamento.type}
                            </Badge>
                          </div>
                        </CardContent>

                        {/* Footer with button - now always at bottom */}
                        <CardFooter className="pt-0 mt-auto">
                          <Link href={`/treinamentos/${treinamento.slug}`} className="w-full">
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
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de um treinamento personalizado?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato com nossos especialistas para desenvolver soluções de treinamento sob medida para sua empresa
          </p>
          <Button size="lg" className="bg-brand-blue-main hover:bg-brand-blue-2 text-white">
            Falar com Especialista
            <ArrowRight className="ml-2 h-4 w-4" />
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
                <li><Link href="/#features" className="hover:text-primary">Funcionalidades</Link></li>
                <li><Link href="/#pricing" className="hover:text-primary">Planos</Link></li>
                <li><Link href="/seguranca" className="hover:text-primary">Segurança</Link></li>
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
                <li><Link href="/ajuda" className="hover:text-primary">Central de Ajuda</Link></li>
                <li><Link href="/contato" className="hover:text-primary">Contato</Link></li>
                <li><Link href="/status" className="hover:text-primary">Status</Link></li>
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