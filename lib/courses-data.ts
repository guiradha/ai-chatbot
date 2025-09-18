import { Award, BookOpen, Shield, Heart, Users, Target, Trophy, Check, Clock, FileText, PlayCircle, Book } from 'lucide-react'
import { additionalCoursesData } from './additional-courses-data'
import { direcaoDefensivaCourse } from './direcao-defensiva-course'

// Helper function to generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
}

// Helper function to map course titles to appropriate cover images
const getCourseImage = (title: string): string => {
  const lowerTitle = title.toLowerCase()
  
  // Direct mappings for existing images
  if (lowerTitle.includes('nr-35') && lowerTitle.includes('altura')) {
    if (lowerTitle.includes('supervisor')) {
      return '/training-covers/nr-35-supervisor-trabalho-altura.png'
    } else if (lowerTitle.includes('reciclagem')) {
      return '/training-covers/nr-35-resgate-altura.png'
    } else {
      return '/training-covers/nr-35-trabalho-em-altura.png'
    }
  }
  if (lowerTitle.includes('nr-33') && lowerTitle.includes('confinado')) {
    if (lowerTitle.includes('reciclagem')) {
      return '/training-covers/reciclagem-nr-33-espacos-confinados.png'
    } else {
      return '/training-covers/nr-33-espaco-confinado.png'
    }
  }
  if (lowerTitle.includes('nr-10')) {
    if (lowerTitle.includes('complementar') || lowerTitle.includes('sep')) {
      return '/training-covers/nr-10-complementar-sep.png'
    } else if (lowerTitle.includes('reciclagem') || lowerTitle.includes('periodico')) {
      return '/training-covers/trabalho-eletricidade-periodico.png'
    } else {
      return '/training-covers/nr-10-basico.png'
    }
  }
  if (lowerTitle.includes('nr-11')) {
    if (lowerTitle.includes('empilhadeira')) {
      return '/training-covers/nr-11-empilhadeira.png'
    } else if (lowerTitle.includes('ponte') || lowerTitle.includes('talha')) {
      return '/training-covers/nr-11-ponte-rolante.png'
    } else if (lowerTitle.includes('rebocador')) {
      return '/training-covers/nr-11-seguranca-operacao-rebocadores.png'
    } else if (lowerTitle.includes('plataforma')) {
      return '/training-covers/nr-11-plataforma-elevatoria.png'
    } else {
      return '/training-covers/nr-11-transporte-movimentacao-materiais.png'
    }
  }
  if (lowerTitle.includes('nr-12')) {
    return '/training-covers/nr-12-seguranca-maquinas.png'
  }
  if (lowerTitle.includes('nr-13')) {
    return '/training-covers/nr-13-caldeiras.png'
  }
  if (lowerTitle.includes('nr-17')) {
    return '/training-covers/nr-17-ergonomia.png'
  }
  if (lowerTitle.includes('nr-18')) {
    return '/training-covers/nr-18-sinaleiro-amarrador-cargas.png'
  }
  if (lowerTitle.includes('nr-20')) {
    if (lowerTitle.includes('benzeno')) {
      return '/training-covers/nr-20-avancado-i.png'
    } else if (lowerTitle.includes('classe iii') || lowerTitle.includes('avancado')) {
      return '/training-covers/nr-20-avancado-ii.png'
    } else if (lowerTitle.includes('periodico') || lowerTitle.includes('inflamavel')) {
      return '/training-covers/inflamaveis-periodico.png'
    } else {
      return '/training-covers/nr-20-intermediario.png'
    }
  }
  if (lowerTitle.includes('nr-22') || lowerTitle.includes('mineracao') || lowerTitle.includes('cipamin')) {
    return '/training-covers/nr-12-seguranca-maquinas.png' // Use similar industrial image
  }
  if (lowerTitle.includes('nr-23') || lowerTitle.includes('incendio') || lowerTitle.includes('brigada')) {
    return '/training-covers/nr-23-brigada-incendio.png'
  }
  if (lowerTitle.includes('nr-26')) {
    return '/training-covers/nr-26-sinalizacao-seguranca.png'
  }
  if (lowerTitle.includes('nr-31') || lowerTitle.includes('cipatr')) {
    return '/training-covers/nr-31-defensivos-agricolas.png'
  }
  if (lowerTitle.includes('nr-32')) {
    return '/training-covers/primeiros-socorros.png'
  }
  if (lowerTitle.includes('nr-34')) {
    return '/training-covers/nr-34-industria-naval.png'
  }
  if (lowerTitle.includes('nr-37')) {
    return '/training-covers/nr-37-plataformas-petroleo.png'
  }
  if (lowerTitle.includes('cipa') && !lowerTitle.includes('tr')) {
    return '/training-covers/cipa.png'
  }
  if (lowerTitle.includes('nr-05') || lowerTitle.includes('representante')) {
    return '/training-covers/nr-05-representante.png'
  }
  if (lowerTitle.includes('nr-01')) {
    return '/training-covers/nr-01-disposicoes-gerais.png'
  }
  if (lowerTitle.includes('direção') || lowerTitle.includes('direcao')) {
    return '/training-covers/direcao-defensiva.png'
  }
  if (lowerTitle.includes('lei lucas')) {
    return '/training-covers/lei-lucas.png'
  }
  if (lowerTitle.includes('primeiros socorros') || lowerTitle.includes('rcp')) {
    return '/training-covers/primeiros-socorros.png'
  }
  if (lowerTitle.includes('combate') && lowerTitle.includes('incendio')) {
    return '/training-covers/nocoes-combate-incendios.png'
  }
  if (lowerTitle.includes('epi') || lowerTitle.includes('proteção individual') || lowerTitle.includes('respiratoria')) {
    return '/training-covers/uso-epi.png'
  }
  if (lowerTitle.includes('loto') || lowerTitle.includes('lockout')) {
    return '/training-covers/loto-lockout-tagout.png'
  }
  if (lowerTitle.includes('assedio') || lowerTitle.includes('violencia')) {
    return '/training-covers/prevencao-combate-assedio-violencia-trabalho.png'
  }
  if (lowerTitle.includes('gestao') || lowerTitle.includes('cultura') || lowerTitle.includes('lider')) {
    return '/training-covers/gestao-cultura-seguranca.png'
  }
  if (lowerTitle.includes('higiene') || lowerTitle.includes('auditiva') || lowerTitle.includes('conservacao')) {
    return '/training-covers/higiene-ocupacional.png'
  }
  if (lowerTitle.includes('sipat') || lowerTitle.includes('covid') || lowerTitle.includes('prevencao')) {
    return '/training-covers/sipat.png'
  }
  if (lowerTitle.includes('5s') || lowerTitle.includes('qualidade') || lowerTitle.includes('apr') || lowerTitle.includes('analise') || lowerTitle.includes('risco')) {
    return '/training-covers/analise-risco.png'
  }
  if (lowerTitle.includes('integra') || lowerTitle.includes('lgpd')) {
    return '/training-covers/integracao-seguranca.png'
  }
  if (lowerTitle.includes('bombeiro') || lowerTitle.includes('emergencia')) {
    return '/training-covers/higiene-ocupacional.png'
  }
  if (lowerTitle.includes('coleta') || lowerTitle.includes('residuo')) {
    return '/training-covers/prevencao-combate-assedio-violencia-trabalho.png'
  }
  if (lowerTitle.includes('vala') || lowerTitle.includes('escava')) {
    return '/training-covers/analise-risco.png'
  }
  
  // Default fallback to a safe existing image
  return '/training-covers/integracao-seguranca.png'
}

export interface CourseModule {
  id: number
  title: string
  duration: string
  status: 'completed' | 'in-progress' | 'locked' | 'available'
  lessons: CourseLesson[]
}

export interface CourseLesson {
  id: number
  title: string
  type: 'video' | 'quiz' | 'document' | 'assignment'
  duration: string
  completed: boolean
  locked?: boolean
  current?: boolean
  videoUrl?: string
  documentUrl?: string
  questions?: number
}

export interface CourseData {
  id: number
  slug: string
  title: string
  description: string
  category: 'Segurança' | 'Saúde' | 'Liderança'
  duration: string
  instructor: string
  image: string
  progress: number
  status: 'completed' | 'in-progress' | 'available' | 'locked'
  score?: number
  completedDate?: string
  certificateAvailable?: boolean
  nextClass?: string
  enrollmentOpen?: boolean
  startDate?: string
  prerequisite?: string
  nivel: string
  formato: string
  cargaHoraria: {
    teoria: string
    pratica: string
  }
  objetivos: string[]
  conteudoProgramatico: Array<{
    modulo: number
    titulo: string
    duracao: string
    topicos: string[]
    concluido: boolean
  }>
  competencias: string[]
  publicoAlvo: string[]
  requisitos: string[]
  certificacao: {
    validade: string
    tipo: string
    requisitos: string[]
  }
  proximasTurmas: Array<{
    data: string
    vagas: number
    periodo: string
  }>
  avaliacoes: {
    media: number
    total: number
    distribuicao: Record<number, number>
    depoimentos: Array<{
      nome: string
      cargo: string
      avaliacao: number
      comentario: string
      data: string
    }>
  }
  modules?: CourseModule[]
}

// Generate modules for each course
const generateModules = (courseTitle: string, duration: string): CourseModule[] => {
  const baseModules: CourseModule[] = [
    {
      id: 1,
      title: 'Introdução e Fundamentos',
      duration: '2 horas',
      status: 'completed',
      lessons: [
        {
          id: 1,
          title: 'Apresentação do Curso',
          type: 'video',
          duration: '15 min',
          completed: true,
          videoUrl: '#'
        },
        {
          id: 2,
          title: 'Conceitos Fundamentais',
          type: 'video',
          duration: '30 min',
          completed: true,
          videoUrl: '#'
        },
        {
          id: 3,
          title: 'Normas e Regulamentações',
          type: 'document',
          duration: '20 min',
          completed: true,
          documentUrl: '#'
        },
        {
          id: 4,
          title: 'Quiz - Módulo 1',
          type: 'quiz',
          duration: '15 min',
          completed: true,
          questions: 10
        }
      ]
    },
    {
      id: 2,
      title: 'Identificação de Riscos',
      duration: '3 horas',
      status: 'in-progress',
      lessons: [
        {
          id: 5,
          title: 'Tipos de Riscos',
          type: 'video',
          duration: '45 min',
          completed: true,
          videoUrl: '#'
        },
        {
          id: 6,
          title: 'Análise e Avaliação',
          type: 'video',
          duration: '50 min',
          completed: false,
          current: true,
          videoUrl: '#'
        },
        {
          id: 7,
          title: 'Medidas Preventivas',
          type: 'video',
          duration: '40 min',
          completed: false,
          videoUrl: '#'
        },
        {
          id: 8,
          title: 'Exercício Prático',
          type: 'assignment',
          duration: '45 min',
          completed: false
        }
      ]
    },
    {
      id: 3,
      title: 'Equipamentos e Procedimentos',
      duration: '4 horas',
      status: 'locked',
      lessons: [
        {
          id: 9,
          title: 'Equipamentos de Segurança',
          type: 'video',
          duration: '1h',
          completed: false,
          locked: true
        },
        {
          id: 10,
          title: 'Procedimentos Operacionais',
          type: 'video',
          duration: '1h 30min',
          completed: false,
          locked: true
        },
        {
          id: 11,
          title: 'Manutenção e Inspeção',
          type: 'video',
          duration: '1h',
          completed: false,
          locked: true
        },
        {
          id: 12,
          title: 'Atividade Prática',
          type: 'assignment',
          duration: '30 min',
          completed: false,
          locked: true
        }
      ]
    },
    {
      id: 4,
      title: 'Aplicação Prática',
      duration: '3 horas',
      status: 'locked',
      lessons: [
        {
          id: 13,
          title: 'Estudos de Caso',
          type: 'video',
          duration: '1h',
          completed: false,
          locked: true
        },
        {
          id: 14,
          title: 'Simulações',
          type: 'assignment',
          duration: '1h 30min',
          completed: false,
          locked: true
        },
        {
          id: 15,
          title: 'Projeto Final',
          type: 'assignment',
          duration: '30 min',
          completed: false,
          locked: true
        }
      ]
    },
    {
      id: 5,
      title: 'Avaliação e Certificação',
      duration: '2 horas',
      status: 'locked',
      lessons: [
        {
          id: 16,
          title: 'Revisão Geral',
          type: 'video',
          duration: '1h',
          completed: false,
          locked: true
        },
        {
          id: 17,
          title: 'Avaliação Final',
          type: 'quiz',
          duration: '1h',
          completed: false,
          locked: true,
          questions: 50
        }
      ]
    }
  ]
  
  return baseModules
}

export const coursesData: CourseData[] = [
  {
    id: 1,
    slug: 'nr-35-trabalho-em-altura',
    title: 'NR-35 Trabalho em Altura',
    description: 'Capacitação completa para trabalhos em altura com foco em segurança, EPIs e prevenção de acidentes.',
    category: 'Segurança',
    duration: '40 horas',
    instructor: 'João Silva',
    image: '/training-covers/nr-35-trabalho-em-altura.png',
    progress: 100,
    status: 'completed',
    score: 92,
    completedDate: '2024-12-15',
    certificateAvailable: true,
    nivel: 'Intermediário',
    formato: 'Online com práticas presenciais',
    cargaHoraria: { teoria: '24 horas', pratica: '16 horas' },
    objetivos: [
      'Reconhecer riscos de trabalho em altura',
      'Aplicar medidas de prevenção e controle',
      'Utilizar EPIs específicos corretamente',
      'Executar procedimentos de emergência e resgate'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'Introdução e Conceitos',
        duracao: '4 horas',
        topicos: [
          'Norma Regulamentadora NR-35',
          'Conceitos e definições de trabalho em altura',
          'Responsabilidades do trabalhador e empregador'
        ],
        concluido: true
      },
      {
        modulo: 2,
        titulo: 'Análise de Risco',
        duracao: '8 horas',
        topicos: [
          'Identificação de perigos',
          'Avaliação de riscos',
          'Medidas de controle',
          'Permissão de Trabalho (PT)'
        ],
        concluido: true
      },
      {
        modulo: 3,
        titulo: 'Equipamentos de Proteção',
        duracao: '8 horas',
        topicos: [
          'EPIs para trabalho em altura',
          'Inspeção e conservação',
          'Sistemas de ancoragem'
        ],
        concluido: true
      },
      {
        modulo: 4,
        titulo: 'Técnicas de Trabalho',
        duracao: '12 horas',
        topicos: [
          'Técnicas de posicionamento',
          'Movimentação segura',
          'Trabalho em telhados e estruturas'
        ],
        concluido: true
      },
      {
        modulo: 5,
        titulo: 'Emergência e Resgate',
        duracao: '8 horas',
        topicos: [
          'Plano de emergência',
          'Técnicas de resgate',
          'Primeiros socorros básicos'
        ],
        concluido: true
      }
    ],
    competencias: [
      'Análise e identificação de riscos em altura',
      'Uso correto de equipamentos de proteção',
      'Aplicação de técnicas seguras de trabalho',
      'Execução de procedimentos de emergência'
    ],
    publicoAlvo: [
      'Trabalhadores que executam atividades em altura',
      'Supervisores e encarregados de equipes',
      'Profissionais de segurança do trabalho',
      'Técnicos de manutenção e construção civil'
    ],
    requisitos: [
      'Idade mínima de 18 anos',
      'Estar apto fisicamente (ASO)',
      'Ensino fundamental completo',
      'Experiência prévia em trabalhos em altura (desejável)'
    ],
    certificacao: {
      validade: '2 anos',
      tipo: 'Certificado de Capacitação NR-35',
      requisitos: [
        'Frequência mínima de 100%',
        'Nota mínima 7.0 na avaliação teórica',
        'Aprovação na avaliação prática',
        'Participação em todas as atividades'
      ]
    },
    proximasTurmas: [
      { data: '2025-02-01', vagas: 5, periodo: 'Manhã' },
      { data: '2025-02-15', vagas: 12, periodo: 'Tarde' },
      { data: '2025-03-01', vagas: 20, periodo: 'Integral' }
    ],
    avaliacoes: {
      media: 4.8,
      total: 245,
      distribuicao: { 5: 180, 4: 45, 3: 15, 2: 3, 1: 2 },
      depoimentos: [
        {
          nome: 'Carlos Santos',
          cargo: 'Técnico de Manutenção',
          avaliacao: 5,
          comentario: 'Excelente curso! Muito prático e didático.',
          data: '2024-12-01'
        },
        {
          nome: 'Ana Paula',
          cargo: 'Engenheira de Segurança',
          avaliacao: 5,
          comentario: 'Conteúdo completo e instrutor muito experiente.',
          data: '2024-11-20'
        }
      ]
    },
    modules: generateModules('NR-35 Trabalho em Altura', '40 horas')
  },
  {
    id: 2,
    slug: 'direcao-defensiva',
    title: 'Direção Defensiva',
    description: 'Técnicas essenciais de direção preventiva para reduzir riscos e garantir segurança no trânsito.',
    category: 'Segurança',
    duration: '8 horas',
    instructor: 'Maria Santos',
    image: '/training-covers/direcao-defensiva.png',
    progress: 65,
    status: 'in-progress',
    nextClass: '2025-01-20 14:00',
    nivel: 'Básico',
    formato: 'Online',
    cargaHoraria: { teoria: '6 horas', pratica: '2 horas' },
    objetivos: [
      'Desenvolver habilidades de direção preventiva',
      'Identificar situações de risco no trânsito',
      'Aplicar técnicas de condução segura',
      'Reduzir acidentes e infrações'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'Fundamentos da Direção Defensiva',
        duracao: '2 horas',
        topicos: ['Conceitos básicos', 'Estatísticas de acidentes', 'Fatores de risco'],
        concluido: true
      },
      {
        modulo: 2,
        titulo: 'Técnicas de Prevenção',
        duracao: '3 horas',
        topicos: ['Distância segura', 'Velocidade adequada', 'Visibilidade'],
        concluido: false
      },
      {
        modulo: 3,
        titulo: 'Condições Adversas',
        duracao: '2 horas',
        topicos: ['Chuva e neblina', 'Condução noturna', 'Fadiga ao volante'],
        concluido: false
      },
      {
        modulo: 4,
        titulo: 'Prática e Avaliação',
        duracao: '1 hora',
        topicos: ['Simulações', 'Avaliação final'],
        concluido: false
      }
    ],
    competencias: [
      'Condução preventiva e segura',
      'Análise de riscos no trânsito',
      'Tomada de decisão rápida',
      'Manutenção preventiva do veículo'
    ],
    publicoAlvo: [
      'Motoristas profissionais',
      'Colaboradores que dirigem a trabalho',
      'Gestores de frota',
      'Qualquer condutor interessado em segurança'
    ],
    requisitos: [
      'CNH válida',
      'Experiência mínima de 1 ano de direção'
    ],
    certificacao: {
      validade: '2 anos',
      tipo: 'Certificado de Direção Defensiva',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação final'
      ]
    },
    proximasTurmas: [
      { data: '2025-01-20', vagas: 15, periodo: 'Tarde' },
      { data: '2025-02-05', vagas: 20, periodo: 'Manhã' }
    ],
    avaliacoes: {
      media: 4.7,
      total: 189,
      distribuicao: { 5: 140, 4: 35, 3: 10, 2: 3, 1: 1 },
      depoimentos: []
    },
    modules: generateModules('Direção Defensiva', '8 horas')
  },
  {
    id: 3,
    slug: 'nr-35-trabalho-altura-reciclagem',
    title: 'NR-35 Trabalho em Altura (Reciclagem)',
    description: 'Atualização obrigatória para profissionais certificados em trabalho em altura conforme NR-35.',
    category: 'Segurança',
    duration: '8 horas',
    instructor: 'João Silva',
    image: '/training-covers/reciclagem-nr-35-teorico.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Intermediário',
    formato: 'Online',
    cargaHoraria: { teoria: '6 horas', pratica: '2 horas' },
    objetivos: [
      'Revisar conceitos de trabalho em altura',
      'Atualizar sobre mudanças normativas',
      'Reforçar boas práticas de segurança'
    ],
    conteudoProgramatico: [],
    competencias: [],
    publicoAlvo: ['Profissionais com certificação NR-35 vencida ou próxima do vencimento'],
    requisitos: ['Certificação NR-35 anterior'],
    certificacao: {
      validade: '2 anos',
      tipo: 'Certificado de Reciclagem NR-35',
      requisitos: ['Frequência mínima de 100%', 'Aprovação na avaliação']
    },
    proximasTurmas: [],
    avaliacoes: { media: 4.6, total: 98, distribuicao: {}, depoimentos: [] },
    modules: generateModules('NR-35 Reciclagem', '8 horas')
  },
  {
    id: 4,
    slug: 'nr-33-espacos-confinados-reciclagem',
    title: 'NR-33 Espaços Confinados (Reciclagem)',
    description: 'Reciclagem periódica para trabalhadores autorizados em espaços confinados segundo a NR-33.',
    category: 'Segurança',
    duration: '8 horas',
    instructor: 'Pedro Lima',
    image: '/training-covers/reciclagem-nr-33-espacos-confinados.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Intermediário',
    formato: 'Online',
    cargaHoraria: { teoria: '6 horas', pratica: '2 horas' },
    objetivos: [
      'Revisar procedimentos de segurança em espaços confinados',
      'Atualizar conhecimentos sobre riscos',
      'Reforçar uso de equipamentos'
    ],
    conteudoProgramatico: [],
    competencias: [],
    publicoAlvo: ['Trabalhadores com certificação NR-33'],
    requisitos: ['Certificação NR-33 anterior'],
    certificacao: {
      validade: '1 ano',
      tipo: 'Certificado de Reciclagem NR-33',
      requisitos: ['Frequência mínima de 100%']
    },
    proximasTurmas: [],
    avaliacoes: { media: 4.5, total: 67, distribuicao: {}, depoimentos: [] },
    modules: generateModules('NR-33 Reciclagem', '8 horas')
  },
  {
    id: 5,
    slug: 'gestao-cultura-seguranca',
    title: 'Gestão da Cultura de Segurança',
    description: 'Desenvolva uma cultura organizacional sólida em segurança com métodos práticos e eficazes.',
    category: 'Liderança',
    duration: '30 horas',
    instructor: 'Roberto Alves',
    image: '/training-covers/gestao-cultura-seguranca.png',
    progress: 0,
    status: 'locked',
    prerequisite: 'NR-35 Trabalho em Altura',
    nivel: 'Avançado',
    formato: 'Online',
    cargaHoraria: { teoria: '20 horas', pratica: '10 horas' },
    objetivos: [
      'Desenvolver competências para implementar uma cultura de segurança eficaz',
      'Compreender os estágios de maturidade da cultura de segurança',
      'Capacitar líderes para promover ambientes de trabalho seguros',
      'Aplicar métodos de avaliação e desenvolvimento cultural',
      'Analisar casos reais de implementação bem-sucedida'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'Conceitos e Fundamentos',
        duracao: '10 horas',
        topicos: [
          'Introdução à cultura de segurança e seus conceitos fundamentais',
          'Estágios de maturidade organizacional em segurança',
          'Benefícios práticos para prevenção de acidentes',
          'Promoção de ambientes de trabalho mais seguros',
          'Indicadores de uma cultura de segurança madura'
        ],
        concluido: false
      },
      {
        modulo: 2,
        titulo: 'Elementos e Avaliação',
        duracao: '10 horas',
        topicos: [
          'Principais elementos que compõem a cultura de segurança',
          'Métodos para avaliação cultural nas organizações',
          'Estratégias para desenvolvimento de cultura sólida e eficaz',
          'Ferramentas de diagnóstico organizacional',
          'Planejamento de intervenções culturais'
        ],
        concluido: false
      },
      {
        modulo: 3,
        titulo: 'Liderança em Segurança',
        duracao: '10 horas',
        topicos: [
          'Influência da liderança na consolidação da cultura de segurança',
          'Atitudes e comportamentos que inspiram ambientes seguros',
          'Comunicação eficaz em segurança do trabalho',
          'Técnicas de engajamento e motivação de equipes',
          'Casos reais de liderança transformadora'
        ],
        concluido: false
      }
    ],
    competencias: [
      'Conceitos fundamentais de cultura de segurança',
      'Estágios de maturidade organizacional',
      'Indicadores de cultura madura',
      'Benefícios práticos para prevenção',
      'Métodos de avaliação cultural',
      'Ferramentas de diagnóstico organizacional',
      'Planejamento de intervenções culturais',
      'Estratégias de desenvolvimento',
      'Influência da liderança na segurança',
      'Comunicação eficaz em segurança',
      'Técnicas de engajamento de equipes',
      'Motivação para ambientes seguros',
      'Casos reais de implementação',
      'Estratégias de consolidação cultural',
      'Desenvolvimento de cultura sólida',
      'Liderança transformadora em segurança'
    ],
    publicoAlvo: ['Gestores', 'Supervisores', 'Profissionais de SST'],
    requisitos: ['Experiência em gestão', 'Formação em segurança'],
    certificacao: {
      validade: '3 anos',
      tipo: 'Certificado em Gestão de Cultura de Segurança',
      requisitos: ['Frequência mínima de 100%', 'Projeto final aprovado']
    },
    proximasTurmas: [],
    avaliacoes: { media: 4.9, total: 156, distribuicao: {}, depoimentos: [] },
    modules: generateModules('Gestão da Cultura de Segurança', '30 horas')
  },
  {
    id: 6,
    slug: 'lei-lucas-primeiros-socorros',
    title: 'Lei Lucas - Primeiros Socorros',
    description: 'Primeiros socorros obrigatórios para educadores conforme exigências da Lei Lucas.',
    category: 'Saúde',
    duration: '4 horas',
    instructor: 'Lucia Ferreira',
    image: '/training-covers/lei-lucas.png',
    progress: 100,
    status: 'completed',
    score: 95,
    completedDate: '2024-10-10',
    certificateAvailable: true,
    nivel: 'Básico',
    formato: 'Presencial',
    cargaHoraria: { teoria: '2 horas', pratica: '2 horas' },
    objetivos: [
      'Capacitar profissionais da educação conforme a Lei Lucas',
      'Desenvolver habilidades essenciais de primeiros socorros',
      'Treinar técnicas de RCP e reanimação cardiopulmonar',
      'Ensinar controle de hemorragias e estabilização de vítimas',
      'Preparar para situações de emergência no ambiente escolar'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'Introdução à Lei Lucas',
        duracao: '30 min',
        topicos: [
          'Contexto histórico da criação da lei',
          'Objetivos da legislação',
          'Exigências para instituições de ensino',
          'Responsabilidades legais dos profissionais',
          'Impacto na segurança escolar'
        ],
        concluido: true
      },
      {
        modulo: 2,
        titulo: 'Aspectos gerais dos primeiros socorros',
        duracao: '30 min',
        topicos: [
          'Definição e importância dos primeiros socorros',
          'Conceitos de urgência e emergência',
          'Objetivos dos primeiros socorros',
          'Princípios éticos e legais',
          'Equipamentos básicos'
        ],
        concluido: true
      },
      {
        modulo: 3,
        titulo: 'Sinais vitais e avaliação primária',
        duracao: '45 min',
        topicos: [
          'Verificação de pulso, respiração e temperatura',
          'Avaliação de cenários e segurança',
          'Identificação de problemas vitais',
          'Protocolo de avaliação inicial',
          'Priorização de atendimento'
        ],
        concluido: true
      },
      {
        modulo: 4,
        titulo: 'Parada cardiorrespiratória (PCR)',
        duracao: '60 min',
        topicos: [
          'Causas da PCR em crianças e adultos',
          'Procedimentos de reanimação cardiopulmonar (RCP)',
          'Técnicas específicas para crianças e adultos',
          'Uso do DEA',
          'Cuidados pós-reanimação'
        ],
        concluido: true
      },
      {
        modulo: 5,
        titulo: 'Hemorragias e controle',
        duracao: '30 min',
        topicos: [
          'Tipos de hemorragias (arterial, venosa, capilar)',
          'Procedimentos para controle de hemorragias externas e internas',
          'Uso correto de torniquetes',
          'Prevenção do choque hipovolêmico'
        ],
        concluido: true
      },
      {
        modulo: 6,
        titulo: 'Queimaduras',
        duracao: '30 min',
        topicos: [
          'Classificação das queimaduras (1º, 2º, 3º grau)',
          'Tratamento para queimaduras térmicas, químicas e elétricas',
          'Prevenção de infecções',
          'Cuidados especializados'
        ],
        concluido: true
      },
      {
        modulo: 7,
        titulo: 'Engasgo e Manobra de Heimlich',
        duracao: '45 min',
        topicos: [
          'Técnicas de desobstrução das vias aéreas',
          'Manobra de Heimlich para adultos',
          'Técnicas específicas para crianças e bebês',
          'Reconhecimento de sinais de engasgo',
          'Prevenção de aspiração'
        ],
        concluido: true
      }
    ],
    competencias: [
      'Conhecimento da Lei 13.722/2018 (Lei Lucas)',
      'Responsabilidades legais dos profissionais da educação',
      'Objetivos e exigências da legislação',
      'Impacto na segurança escolar',
      'Verificação de pulso, respiração e temperatura',
      'Avaliação de cenários e segurança',
      'Protocolo de avaliação inicial',
      'Priorização de atendimento',
      'Reanimação cardiopulmonar (RCP)',
      'Controle de hemorragias',
      'Desobstrução das vias aéreas',
      'Manobra de Heimlich para diferentes idades',
      'Tratamento de queimaduras (1º, 2º, 3º grau)',
      'Uso correto de torniquetes',
      'Prevenção do choque hipovolêmico',
      'Cuidados pós-reanimação'
    ],
    publicoAlvo: ['Educadores', 'Professores', 'Auxiliares de educação'],
    requisitos: ['Atuar em ambiente escolar'],
    certificacao: {
      validade: '2 anos',
      tipo: 'Certificado Lei Lucas',
      requisitos: ['Frequência mínima de 100%', 'Prática supervisionada']
    },
    proximasTurmas: [],
    avaliacoes: { media: 4.9, total: 423, distribuicao: {}, depoimentos: [] },
    modules: generateModules('Lei Lucas', '4 horas')
  },
  {
    id: 7,
    slug: 'combate-incendios',
    title: 'Combate a Incêndios',
    description: 'Aprenda a identificar classes de incêndio e operar extintores com segurança e eficiência.',
    category: 'Segurança',
    duration: '16 horas',
    instructor: 'Carlos Mendes',
    image: '/training-covers/nocoes-combate-incendios.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Básico',
    formato: 'Presencial',
    cargaHoraria: { teoria: '8 horas', pratica: '8 horas' },
    objetivos: [
      'Identificar classes de incêndio',
      'Operar extintores corretamente',
      'Executar evacuação segura',
      'Aplicar primeiros socorros em queimaduras'
    ],
    conteudoProgramatico: [],
    competencias: [],
    publicoAlvo: ['Brigadistas', 'Cipeiros', 'Profissionais de segurança'],
    requisitos: ['Idade mínima de 18 anos'],
    certificacao: {
      validade: '1 ano',
      tipo: 'Certificado de Combate a Incêndios',
      requisitos: ['Frequência mínima de 100%', 'Prática com extintores']
    },
    proximasTurmas: [],
    avaliacoes: { media: 4.7, total: 234, distribuicao: {}, depoimentos: [] },
    modules: generateModules('Combate a Incêndios', '16 horas')
  },
  {
    id: 8,
    slug: 'primeiros-socorros',
    title: 'Primeiros Socorros',
    description: 'Técnicas fundamentais de atendimento emergencial para salvar vidas em situações críticas.',
    category: 'Saúde',
    duration: '20 horas',
    instructor: 'Ana Costa',
    image: '/training-covers/nocoes-primeiros-socorros.png',
    progress: 30,
    status: 'in-progress',
    nextClass: '2025-01-18 10:00',
    nivel: 'Básico',
    formato: 'Presencial',
    cargaHoraria: { teoria: '10 horas', pratica: '10 horas' },
    objetivos: [
      'Avaliar vítimas corretamente',
      'Executar RCP e DEA',
      'Controlar hemorragias',
      'Estabilizar fraturas'
    ],
    conteudoProgramatico: [],
    competencias: [],
    publicoAlvo: ['Profissionais de saúde', 'Brigadistas', 'Público geral'],
    requisitos: ['Nenhum'],
    certificacao: {
      validade: '2 anos',
      tipo: 'Certificado de Primeiros Socorros',
      requisitos: ['Frequência mínima de 100%', 'Avaliação prática']
    },
    proximasTurmas: [],
    avaliacoes: { media: 4.8, total: 567, distribuicao: {}, depoimentos: [] },
    modules: generateModules('Primeiros Socorros', '20 horas')
  },
  // Add Coleta Seletiva with complete data
  {
    id: 80,
    slug: 'coleta-seletiva-gestao-residuos',
    title: 'Coleta Seletiva e Gestão de Resíduos',
    description: 'Capacitação em práticas de coleta seletiva, gestão sustentável de resíduos e economia circular. Aprenda a implementar programas eficazes de reciclagem e redução de impacto ambiental no ambiente corporativo.',
    category: 'Saúde',
    duration: '4 horas',
    instructor: 'Daniela Rocha',
    image: '/training-covers/prevencao-combate-assedio-violencia-trabalho.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Básico',
    formato: 'Online',
    cargaHoraria: { teoria: '3 horas', pratica: '1 hora' },
    objetivos: [
      'Compreender a importância da coleta seletiva para o meio ambiente',
      'Identificar e classificar diferentes tipos de resíduos',
      'Implementar programas de coleta seletiva na empresa',
      'Promover a consciência ambiental entre colaboradores'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'Fundamentos da Coleta Seletiva',
        duracao: '1 hora',
        topicos: [
          'Conceitos básicos de coleta seletiva',
          'Tipos de resíduos (orgânicos, recicláveis, rejeitos)',
          'Cores padronizadas para lixeiras',
          'Legislação ambiental aplicável'
        ],
        concluido: false
      },
      {
        modulo: 2,
        titulo: 'Classificação e Separação de Resíduos',
        duracao: '1 hora',
        topicos: [
          'Identificação de materiais recicláveis',
          'Resíduos perigosos e especiais',
          'Técnicas de separação adequada',
          'Cuidados no manuseio de diferentes materiais'
        ],
        concluido: false
      },
      {
        modulo: 3,
        titulo: 'Implementação de Programas',
        duracao: '1 hora',
        topicos: [
          'Planejamento de programa de coleta seletiva',
          'Definição de pontos de coleta',
          'Treinamento de equipes',
          'Monitoramento e indicadores de sucesso'
        ],
        concluido: false
      },
      {
        modulo: 4,
        titulo: 'Economia Circular e Sustentabilidade',
        duracao: '1 hora',
        topicos: [
          'Conceitos de economia circular',
          'Redução, reutilização e reciclagem (3Rs)',
          'Benefícios econômicos e ambientais',
          'Casos de sucesso empresariais'
        ],
        concluido: false
      }
    ],
    competencias: [
      'Classificação correta de resíduos',
      'Implementação de coleta seletiva',
      'Monitoramento de indicadores ambientais',
      'Redução de impacto ambiental',
      'Desenvolvimento de programas sustentáveis',
      'Engajamento de colaboradores',
      'Comunicação de práticas verdes',
      'Compliance ambiental',
      'Aplicação dos conceitos 3Rs',
      'Identificação de oportunidades de reciclagem',
      'Parcerias com cooperativas',
      'Redução de desperdícios',
      'Conscientização ambiental',
      'Multiplicação de conhecimentos',
      'Mudança de comportamento',
      'Responsabilidade socioambiental'
    ],
    publicoAlvo: [
      'Gestores de facilities',
      'Responsáveis por sustentabilidade',
      'Coordenadores de meio ambiente',
      'Colaboradores em geral',
      'Profissionais de RH'
    ],
    requisitos: [
      'Nenhum pré-requisito específico',
      'Interesse em práticas sustentáveis'
    ],
    certificacao: {
      validade: '2 anos',
      tipo: 'Certificado em Gestão de Resíduos e Coleta Seletiva',
      requisitos: [
        'Frequência mínima de 75%',
        'Aprovação na avaliação final',
        'Participação nas atividades práticas'
      ]
    },
    proximasTurmas: [
      { data: '2025-01-25', vagas: 25, periodo: 'Manhã' },
      { data: '2025-02-10', vagas: 30, periodo: 'Tarde' },
      { data: '2025-02-25', vagas: 20, periodo: 'Noite' }
    ],
    avaliacoes: {
      media: 4.6,
      total: 156,
      distribuicao: { 5: 98, 4: 42, 3: 14, 2: 2, 1: 0 },
      depoimentos: [
        {
          nome: 'Maria Santos',
          cargo: 'Coordenadora de Sustentabilidade',
          avaliacao: 5,
          comentario: 'Curso muito esclarecedor sobre práticas sustentáveis. Aplicamos na empresa!',
          data: '2024-11-28'
        },
        {
          nome: 'Pedro Oliveira',
          cargo: 'Gestor de Facilities',
          avaliacao: 5,
          comentario: 'Conteúdo prático e aplicável. Recomendo para toda equipe.',
          data: '2024-12-05'
        }
      ]
    },
    modules: generateModules('Coleta Seletiva e Gestão de Resíduos', '4 horas')
  },
  // Add APR - Análise Preliminar de Riscos with complete data
  {
    id: 73,
    slug: 'apr-analise-preliminar-riscos',
    title: 'APR - Análise Preliminar de Riscos',
    description: 'Curso sobre Análise Preliminar de Riscos, ferramenta fundamental para identificação, avaliação e controle de riscos no ambiente de trabalho.',
    category: 'Segurança',
    duration: '8 horas',
    instructor: 'Eduardo Nunes',
    image: '/training-covers/analise-risco.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Intermediário',
    formato: 'Presencial/Online',
    cargaHoraria: { teoria: '6 horas', pratica: '2 horas' },
    objetivos: [
      'Dominar a metodologia da APR',
      'Identificar e avaliar riscos sistematicamente',
      'Propor medidas de controle adequadas',
      'Elaborar documentos de APR'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'Introdução à Análise de Riscos',
        duracao: '1h 20min',
        topicos: [
          'Conceitos básicos de risco',
          'Importância da análise preliminar',
          'Quando aplicar a APR',
          'Benefícios para a organização na gestão proativa de segurança'
        ],
        concluido: false
      },
      {
        modulo: 2,
        titulo: 'Metodologia da APR',
        duracao: '1h 30min',
        topicos: [
          'Etapas da análise preliminar',
          'Técnicas de identificação de perigos',
          'Métodos de avaliação de probabilidade',
          'Análise estruturada de consequências'
        ],
        concluido: false
      },
      {
        modulo: 3,
        titulo: 'Ferramentas e Técnicas',
        duracao: '1h 30min',
        topicos: [
          'Brainstorming estruturado',
          'Checklist de verificação',
          'Matriz de probabilidade x consequência',
          'Introdução à árvore de falhas básica'
        ],
        concluido: false
      },
      {
        modulo: 4,
        titulo: 'Classificação de Riscos',
        duracao: '1h 20min',
        topicos: [
          'Critérios de classificação',
          'Níveis de risco (baixo, médio, alto)',
          'Conceitos de tolerabilidade de riscos',
          'Priorização de ações corretivas'
        ],
        concluido: false
      },
      {
        modulo: 5,
        titulo: 'Medidas de Controle',
        duracao: '1h 30min',
        topicos: [
          'Hierarquia de controles',
          'Técnicas de eliminação e substituição',
          'Controles de engenharia',
          'Implementação de controles administrativos e EPIs'
        ],
        concluido: false
      },
      {
        modulo: 6,
        titulo: 'Documentação e Acompanhamento',
        duracao: '50 min',
        topicos: [
          'Estrutura do documento APR',
          'Processos de revisões periódicas',
          'Integração com outros sistemas de gestão',
          'Monitoramento da eficácia'
        ],
        concluido: false
      }
    ],
    competencias: [
      'Conceitos básicos de risco',
      'Identificação sistemática de perigos',
      'Avaliação de probabilidade de ocorrência',
      'Análise estruturada de consequências',
      'Domínio da metodologia APR',
      'Brainstorming estruturado',
      'Uso de checklist de verificação',
      'Aplicação de matriz probabilidade x consequência',
      'Hierarquia de controles',
      'Técnicas de eliminação e substituição',
      'Implementação de controles de engenharia',
      'Controles administrativos e EPIs',
      'Elaboração de documentos APR',
      'Revisões periódicas estruturadas',
      'Integração com sistemas de gestão',
      'Monitoramento da eficácia das medidas'
    ],
    publicoAlvo: [
      'Técnicos de segurança do trabalho',
      'Engenheiros de segurança',
      'Gestores de SST',
      'Profissionais de operação e manutenção',
      'Supervisores e encarregados'
    ],
    requisitos: [
      'Conhecimentos básicos em segurança do trabalho',
      'Ensino médio completo',
      'Experiência na área (desejável)'
    ],
    certificacao: {
      validade: '2 anos',
      tipo: 'Certificado em Análise Preliminar de Riscos',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica (mínimo 80%)',
        'Elaboração de APR prática',
        'Demonstração de competência técnica'
      ]
    },
    proximasTurmas: [
      { data: '2025-02-05', vagas: 15, periodo: 'Manhã' },
      { data: '2025-02-20', vagas: 18, periodo: 'Tarde' },
      { data: '2025-03-10', vagas: 20, periodo: 'Integral' }
    ],
    avaliacoes: {
      media: 4.7,
      total: 89,
      distribuicao: { 5: 58, 4: 22, 3: 7, 2: 2, 1: 0 },
      depoimentos: [
        {
          nome: 'João Mendes',
          cargo: 'Técnico de Segurança',
          avaliacao: 5,
          comentario: 'Curso muito prático e aplicável no dia a dia. Recomendo!',
          data: '2024-12-01'
        },
        {
          nome: 'Carla Silva',
          cargo: 'Engenheira de Segurança',
          avaliacao: 5,
          comentario: 'Excelente metodologia e material didático.',
          data: '2024-11-15'
        }
      ]
    },
    modules: generateModules('APR - Análise Preliminar de Riscos', '8 horas')
  },
  // Add Bombeiro Civil - Classe I with complete data
  {
    id: 79,
    slug: 'bombeiro-civil-classe-i',
    title: 'Bombeiro Civil - Classe I',
    description: 'Formação completa de Bombeiro Civil Classe I conforme normas do Corpo de Bombeiros. Capacitação profissional para atuar na prevenção e combate a incêndios, primeiros socorros e salvamento em edificações residenciais e comerciais.',
    category: 'Segurança',
    duration: '210 horas',
    instructor: 'Carlos Mendes',
    image: '/training-covers/higiene-ocupacional.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Avançado',
    formato: 'Presencial',
    cargaHoraria: { teoria: '150 horas', pratica: '60 horas' },
    objetivos: [
      'Formar profissionais bombeiros civis qualificados',
      'Capacitar em técnicas de prevenção e combate a incêndios',
      'Desenvolver habilidades em primeiros socorros avançados',
      'Treinar técnicas de salvamento e resgate',
      'Preparar para atuação em situações de emergência'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'Fundamentos da Profissão',
        duracao: '20 horas',
        topicos: [
          'História e evolução do bombeiro civil',
          'Legislação e normas aplicáveis',
          'Ética profissional e responsabilidades',
          'Mercado de trabalho e oportunidades'
        ],
        concluido: false
      },
      {
        modulo: 2,
        titulo: 'Prevenção de Incêndios',
        duracao: '25 horas',
        topicos: [
          'Teoria do fogo e classes de incêndio',
          'Métodos de prevenção',
          'Inspeção de equipamentos',
          'Elaboração de relatórios técnicos',
          'Análise de riscos em edificações'
        ],
        concluido: false
      },
      {
        modulo: 3,
        titulo: 'Combate a Incêndios',
        duracao: '30 horas',
        topicos: [
          'Técnicas de combate direto e indireto',
          'Uso de extintores e hidrantes',
          'Operação de mangueiras e esguichos',
          'Ventilação tática',
          'Proteção de salvados'
        ],
        concluido: false
      },
      {
        modulo: 4,
        titulo: 'Equipamentos de Proteção',
        duracao: '20 horas',
        topicos: [
          'EPIs específicos do bombeiro civil',
          'Equipamentos de proteção respiratória (EPR)',
          'Manutenção e conservação de equipamentos',
          'Técnicas de colocação rápida'
        ],
        concluido: false
      },
      {
        modulo: 5,
        titulo: 'Primeiros Socorros Avançados',
        duracao: '35 horas',
        topicos: [
          'Suporte básico de vida (BLS)',
          'Reanimação cardiopulmonar (RCP)',
          'Desobstrução de vias aéreas',
          'Atendimento a traumas e queimaduras',
          'Imobilização e transporte de vítimas'
        ],
        concluido: false
      },
      {
        modulo: 6,
        titulo: 'Salvamento Terrestre',
        duracao: '25 horas',
        topicos: [
          'Técnicas de salvamento em altura',
          'Espaços confinados',
          'Uso de cordas e equipamentos',
          'Salvamento em elevadores',
          'Técnicas de arrombamento'
        ],
        concluido: false
      },
      {
        modulo: 7,
        titulo: 'Produtos Perigosos',
        duracao: '15 horas',
        topicos: [
          'Identificação de produtos perigosos',
          'Procedimentos em vazamentos',
          'Descontaminação básica',
          'Isolamento de áreas',
          'Comunicação com equipes especializadas'
        ],
        concluido: false
      },
      {
        modulo: 8,
        titulo: 'Psicologia das Emergências',
        duracao: '15 horas',
        topicos: [
          'Comportamento humano em emergências',
          'Técnicas de evacuação ordenada',
          'Comunicação em situações de crise',
          'Gerenciamento do estresse',
          'Apoio psicológico básico'
        ],
        concluido: false
      },
      {
        modulo: 9,
        titulo: 'Planos de Emergência',
        duracao: '15 horas',
        topicos: [
          'Elaboração de planos de emergência',
          'Rotas de fuga e pontos de encontro',
          'Brigadas de incêndio',
          'Coordenação com órgãos externos',
          'Simulados e treinamentos'
        ],
        concluido: false
      },
      {
        modulo: 10,
        titulo: 'Estágio Supervisionado',
        duracao: '10 horas',
        topicos: [
          'Prática supervisionada em campo',
          'Acompanhamento de profissionais experientes',
          'Participação em ocorrências reais',
          'Avaliação de desempenho prático'
        ],
        concluido: false
      }
    ],
    competencias: [
      'Inspeção preventiva de segurança',
      'Combate a incêndios estruturais',
      'Operação de equipamentos de combate',
      'Ventilação e proteção de salvados',
      'Suporte básico de vida',
      'RCP e desobstrução de vias',
      'Atendimento a politraumatizados',
      'Transporte seguro de vítimas',
      'Salvamento em altura',
      'Resgate em espaços confinados',
      'Técnicas com cordas',
      'Operações de busca',
      'Coordenação de evacuações',
      'Comunicação de emergência',
      'Interface com autoridades',
      'Elaboração de relatórios'
    ],
    publicoAlvo: [
      'Profissionais que desejam atuar como bombeiros civis',
      'Responsáveis pela segurança em edificações',
      'Membros de brigadas de incêndio',
      'Técnicos de segurança do trabalho',
      'Gestores de facilities e manutenção'
    ],
    requisitos: [
      'Idade mínima de 18 anos',
      'Ensino médio completo',
      'Aptidão física e mental (ASO)',
      'Não possuir antecedentes criminais'
    ],
    certificacao: {
      validade: '1 ano',
      tipo: 'Certificado reconhecido pelo Corpo de Bombeiros',
      requisitos: [
        'Frequência mínima de 90%',
        'Aprovação em todas as avaliações teóricas',
        'Aprovação nas avaliações práticas',
        'Conclusão do estágio supervisionado',
        'Aptidão no exame médico'
      ]
    },
    proximasTurmas: [
      { data: '2025-02-10', vagas: 8, periodo: 'Integral' },
      { data: '2025-03-15', vagas: 12, periodo: 'Integral' },
      { data: '2025-04-20', vagas: 15, periodo: 'Integral' }
    ],
    avaliacoes: {
      media: 4.8,
      total: 124,
      distribuicao: { 5: 85, 4: 30, 3: 8, 2: 1, 1: 0 },
      depoimentos: [
        {
          nome: 'Roberto Silva',
          cargo: 'Bombeiro Civil',
          avaliacao: 5,
          comentario: 'Formação completa e de excelente qualidade. Instrutor muito experiente.',
          data: '2024-11-30'
        },
        {
          nome: 'Ana Santos',
          cargo: 'Técnica de Segurança',
          avaliacao: 5,
          comentario: 'Curso essencial para quem quer trabalhar com prevenção. Recomendo!',
          data: '2024-10-15'
        }
      ]
    },
    modules: generateModules('Bombeiro Civil - Classe I', '210 horas')
  },
  // Continue for remaining courses...
  // I'll add key courses and you can expand as needed
  {
    id: 9,
    slug: 'nr-05-cipa-grau-risco-1',
    title: 'NR-05 CIPA Grau de Risco 1',
    description: 'Formação essencial para membros da CIPA em empresas de grau de risco 1.',
    category: 'Segurança',
    duration: '8 horas',
    instructor: 'Paulo Ferreira',
    image: '/training-covers/cipa.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Básico',
    formato: 'Online',
    cargaHoraria: { teoria: '8 horas', pratica: '0 horas' },
    objetivos: ['Conhecer atribuições da CIPA', 'Identificar riscos', 'Propor melhorias'],
    conteudoProgramatico: [],
    competencias: [],
    publicoAlvo: ['Membros eleitos da CIPA'],
    requisitos: ['Ser membro da CIPA'],
    certificacao: {
      validade: 'Mandato CIPA',
      tipo: 'Certificado CIPA',
      requisitos: ['Frequência mínima de 100%']
    },
    proximasTurmas: [],
    avaliacoes: { media: 4.5, total: 123, distribuicao: {}, depoimentos: [] },
    modules: generateModules('NR-05 CIPA', '8 horas')
  },
  {
    id: 10,
    slug: 'nr-05-cipa-grau-risco-2',
    title: 'NR-05 CIPA Grau de Risco 2',
    description: 'Capacitação completa para integrantes da CIPA em empresas grau de risco 2.',
    category: 'Segurança',
    duration: '12 horas',
    instructor: 'Paulo Ferreira',
    image: '/training-covers/cipa.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Básico',
    formato: 'Online',
    cargaHoraria: { teoria: '12 horas', pratica: '0 horas' },
    objetivos: ['Conhecer atribuições da CIPA', 'Mapear riscos', 'Elaborar mapa de riscos'],
    conteudoProgramatico: [],
    competencias: [],
    publicoAlvo: ['Membros eleitos da CIPA'],
    requisitos: ['Ser membro da CIPA'],
    certificacao: {
      validade: 'Mandato CIPA',
      tipo: 'Certificado CIPA',
      requisitos: ['Frequência mínima de 100%']
    },
    proximasTurmas: [],
    avaliacoes: { media: 4.6, total: 98, distribuicao: {}, depoimentos: [] },
    modules: generateModules('NR-05 CIPA', '12 horas')
  },
  // Adding more key courses with basic data
  {
    id: 14,
    slug: 'nr-10-seguranca-eletricidade',
    title: 'NR-10 Segurança em Eletricidade',
    description: 'Segurança fundamental em instalações elétricas e medidas de controle de riscos elétricos.',
    category: 'Segurança',
    duration: '40 horas',
    instructor: 'Carlos Oliveira',
    image: '/training-covers/nr-10-basico.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    startDate: '2025-02-01',
    nivel: 'Intermediário',
    formato: 'Online com práticas',
    cargaHoraria: { teoria: '30 horas', pratica: '10 horas' },
    objetivos: [
      'Identificar riscos elétricos',
      'Aplicar medidas de controle',
      'Usar EPIs específicos',
      'Executar bloqueio e sinalização'
    ],
    conteudoProgramatico: [],
    competencias: [],
    publicoAlvo: ['Eletricistas', 'Técnicos de manutenção', 'Engenheiros'],
    requisitos: ['Formação em elétrica ou experiência comprovada'],
    certificacao: {
      validade: '2 anos',
      tipo: 'Certificado NR-10 Básico',
      requisitos: ['Frequência mínima de 100%', 'Nota mínima 7.0']
    },
    proximasTurmas: [],
    avaliacoes: { media: 4.7, total: 456, distribuicao: {}, depoimentos: [] },
    modules: generateModules('NR-10 Básico', '40 horas')
  },
  {
    id: 33,
    slug: 'nr-26-sinalizacao-seguranca',
    title: 'NR-26 Sinalização de Segurança',
    description: 'Identificação e aplicação correta de cores e sinais de segurança no ambiente de trabalho.',
    category: 'Segurança',
    duration: '8 horas',
    instructor: 'Gabriel Santos',
    image: '/training-covers/nr-26-sinalizacao-seguranca.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Básico',
    formato: 'Online',
    cargaHoraria: { teoria: '8 horas', pratica: '0 horas' },
    objetivos: [
      'Conhecer padrões de sinalização',
      'Aplicar cores de segurança',
      'Implementar sinalização adequada'
    ],
    conteudoProgramatico: [],
    competencias: [],
    publicoAlvo: ['Técnicos de segurança', 'Cipeiros', 'Gestores'],
    requisitos: ['Nenhum'],
    certificacao: {
      validade: '3 anos',
      tipo: 'Certificado NR-26',
      requisitos: ['Frequência mínima de 100%']
    },
    proximasTurmas: [],
    avaliacoes: { media: 4.4, total: 78, distribuicao: {}, depoimentos: [] },
    modules: generateModules('NR-26 Sinalização', '8 horas')
  },
  {
    id: 34,
    slug: 'nr-33-espacos-confinados',
    title: 'NR-33 Espaços Confinados',
    description: 'Trabalho seguro em espaços confinados com identificação de riscos e medidas de emergência.',
    category: 'Segurança',
    duration: '16 horas',
    instructor: 'Pedro Lima',
    image: '/training-covers/nr-33-espaco-confinado.png',
    progress: 100,
    status: 'completed',
    score: 88,
    completedDate: '2024-11-20',
    certificateAvailable: true,
    nivel: 'Intermediário',
    formato: 'Presencial',
    cargaHoraria: { teoria: '10 horas', pratica: '6 horas' },
    objetivos: [
      'Identificar espaços confinados',
      'Avaliar atmosferas perigosas',
      'Usar equipamentos de proteção',
      'Executar resgate'
    ],
    conteudoProgramatico: [],
    competencias: [],
    publicoAlvo: ['Trabalhadores autorizados', 'Vigias', 'Supervisores'],
    requisitos: ['Aptidão física', 'Idade mínima 18 anos'],
    certificacao: {
      validade: '1 ano',
      tipo: 'Certificado NR-33',
      requisitos: ['Frequência mínima de 100%', 'Aprovação em prática']
    },
    proximasTurmas: [],
    avaliacoes: { media: 4.8, total: 345, distribuicao: {}, depoimentos: [] },
    modules: generateModules('NR-33 Espaços Confinados', '16 horas')
  }
]

// Add remaining courses with minimal data (can be expanded later)
const additionalCourses = [
  { id: 11, title: 'NR-05 CIPA Grau de Risco 3', instructor: 'Paulo Ferreira', duration: '16 horas' },
  { id: 12, title: 'NR-05 CIPA Grau de Risco 4', instructor: 'Paulo Ferreira', duration: '20 horas' },
  { id: 13, title: 'NR-06 Equipamento de Proteção Individual', instructor: 'Marcos Silva', duration: '8 horas' },
  { id: 15, title: 'NR-10 Complementar (SEP)', instructor: 'Carlos Oliveira', duration: '40 horas' },
  { id: 16, title: 'NR-11 Segurança em Transpaleteira', instructor: 'André Costa', duration: '8 horas' },
  { id: 17, title: 'NR-11 Operador de Empilhadeira', instructor: 'André Costa', duration: '16 horas' },
  { id: 18, title: 'NR-11 Operação de Rebocadores', instructor: 'André Costa', duration: '16 horas' },
  { id: 19, title: 'NR-11 Transporte e Movimentação de Materiais', instructor: 'André Costa', duration: '20 horas' },
  { id: 20, title: 'NR-11 Pontes Rolantes', instructor: 'André Costa', duration: '16 horas' },
  { id: 21, title: 'NR-11 Operação de Talhas', instructor: 'André Costa', duration: '12 horas' },
  { id: 22, title: 'NR-12 Máquinas e Equipamentos', instructor: 'Bruno Almeida', duration: '8 horas' },
  { id: 23, title: 'NR-13 Operador de Caldeiras', instructor: 'Renato Souza', duration: '40 horas' },
  { id: 24, title: 'NR-13 Vasos de Pressão', instructor: 'Renato Souza', duration: '40 horas' },
  { id: 25, title: 'NR-17 Ergonomia', instructor: 'Patrícia Lima', duration: '16 horas' },
  { id: 26, title: 'NR-17 Ergonomia Teleatendimento', instructor: 'Patrícia Lima', duration: '4 horas' },
  { id: 27, title: 'NR-18 Sinaleiro e Amarrador de Cargas', instructor: 'Thiago Martins', duration: '8 horas' },
  { id: 28, title: 'NR-18 Plataforma Móvel de Trabalho', instructor: 'Thiago Martins', duration: '16 horas' },
  { id: 29, title: 'NR-20 Integração', instructor: 'Fernando Dias', duration: '4 horas' },
  { id: 30, title: 'NR-20 Segurança com Inflamáveis', instructor: 'Fernando Dias', duration: '8 horas' },
  { id: 31, title: 'NR-20 Instalações Classe III', instructor: 'Fernando Dias', duration: '16 horas' },
  { id: 32, title: 'NR-20 Exposição ao Benzeno', instructor: 'Fernando Dias', duration: '4 horas' },
  { id: 35, title: 'NR-33 Supervisor Espaço Confinado', instructor: 'Pedro Lima', duration: '40 horas' },
  { id: 36, title: 'NR-35 Supervisor Trabalho em Altura', instructor: 'João Silva', duration: '40 horas' },
  { id: 37, title: 'LOTO - Lockout e Tagout', instructor: 'Ricardo Pinto', duration: '16 horas' },
  { id: 38, title: 'PPR - Proteção Respiratória', instructor: 'Daniela Rocha', duration: '16 horas' },
  { id: 39, title: 'PCA - Conservação Auditiva', instructor: 'Daniela Rocha', duration: '8 horas' },
  { id: 40, title: 'Prevenção ao Assédio e Violência', instructor: 'Mariana Campos', duration: '4 horas' },
  { id: 41, title: 'NR-01 - Disposições Gerais e GRO', instructor: 'Eduardo Nunes', duration: '4 horas' },
  { id: 42, title: 'NR-05 - Representante Nomeado', instructor: 'Paulo Ferreira', duration: '8 horas' },
  { id: 43, title: 'NR-10 Complementar - SEP (Duplicado)', instructor: 'Carlos Oliveira', duration: '40 horas' },
  { id: 44, title: 'NR-05 Representante - Grau de Risco 1', instructor: 'Paulo Ferreira', duration: '8 horas' },
  { id: 45, title: 'NR-05 Representante - Grau de Risco 2', instructor: 'Paulo Ferreira', duration: '12 horas' },
  { id: 46, title: 'NR-05 Representante - Grau de Risco 3', instructor: 'Paulo Ferreira', duration: '16 horas' },
  { id: 47, title: 'NR-05 Representante - Grau de Risco 4', instructor: 'Paulo Ferreira', duration: '20 horas' },
  { id: 48, title: 'NR-10 Básico - Reciclagem', instructor: 'Carlos Oliveira', duration: '8 horas' },
  { id: 49, title: 'NR-22 - Segurança na Mineração', instructor: 'Gustavo Ribeiro', duration: '40 horas' },
  { id: 50, title: 'NR-23 - PPCI', instructor: 'Carlos Mendes', duration: '16 horas' },
  { id: 51, title: 'NR-10 - Áreas Classificadas', instructor: 'Carlos Oliveira', duration: '8 horas' },
  { id: 52, title: 'NR-10 - SEP Reciclagem', instructor: 'Carlos Oliveira', duration: '8 horas' },
  { id: 53, title: 'NR-11 - Transporte e Movimentação Geral', instructor: 'André Costa', duration: '16 horas' },
  { id: 54, title: 'NR-11 - Empilhadeira Reciclagem', instructor: 'André Costa', duration: '8 horas' },
  { id: 55, title: 'NR-13 - Vasos Pressão Categoria 1', instructor: 'Renato Souza', duration: '40 horas' },
  { id: 56, title: 'NR-13 - Caldeiras Reciclagem', instructor: 'Renato Souza', duration: '8 horas' },
  { id: 57, title: 'NR-17 - Operador de Checkout', instructor: 'Patrícia Lima', duration: '4 horas' },
  { id: 58, title: 'NR-17 - Levantamento Manual', instructor: 'Patrícia Lima', duration: '4 horas' },
  { id: 59, title: 'NR-18 - Construção Civil', instructor: 'Thiago Martins', duration: '6 horas' },
  { id: 60, title: 'NR-20 - Classe I Básico', instructor: 'Fernando Dias', duration: '8 horas' },
  { id: 61, title: 'NR-20 - Classe II Intermediário', instructor: 'Fernando Dias', duration: '12 horas' },
  { id: 62, title: 'NR-20 - Classe III Avançado', instructor: 'Fernando Dias', duration: '16 horas' },
  { id: 63, title: 'CIPAMIN - NR-22', instructor: 'Gustavo Ribeiro', duration: '20 horas' },
  { id: 64, title: 'Brigada de Incêndio - Básico', instructor: 'Carlos Mendes', duration: '16 horas' },
  { id: 65, title: 'Brigada de Incêndio - Intermediário', instructor: 'Carlos Mendes', duration: '20 horas' },
  { id: 66, title: 'NR-31 - CIPATR', instructor: 'José Ribeiro', duration: '20 horas' },
  { id: 67, title: 'NR-32 - Serviços de Saúde', instructor: 'Ana Costa', duration: '4 horas' },
  { id: 68, title: 'NR-34 - Trabalho a Quente', instructor: 'Marcelo Fonseca', duration: '8 horas' },
  { id: 69, title: 'NR-35 - Trabalho Altura Reciclagem', instructor: 'João Silva', duration: '8 horas' },
  { id: 70, title: 'NR-37 - Plataformas Petróleo', instructor: 'Alexandre Torres', duration: '40 horas' },
  { id: 71, title: 'RCP - Ressuscitação Cardiopulmonar', instructor: 'Ana Costa', duration: '8 horas' },
  { id: 72, title: '5S - Ferramentas da Qualidade', instructor: 'Rafael Monteiro', duration: '8 horas' },
  { id: 73, title: 'APR - Análise Preliminar de Riscos', instructor: 'Eduardo Nunes', duration: '8 horas', detailed: true },
  { id: 74, title: 'Prevenção COVID-19', instructor: 'Daniela Rocha', duration: '2 horas' },
  { id: 75, title: 'Valas e Escavações', instructor: 'Thiago Martins', duration: '8 horas' },
  { id: 76, title: 'LGPD - Lei Geral Proteção Dados', instructor: 'Mariana Campos', duration: '4 horas' },
  { id: 77, title: 'SIPAT - Semana Prevenção', instructor: 'Roberto Alves', duration: '4 horas' },
  { id: 78, title: 'Líder SST', instructor: 'Roberto Alves', duration: '20 horas' },
  { id: 79, title: 'Bombeiro Civil - Classe I', instructor: 'Carlos Mendes', duration: '210 horas', detailed: true },
  { id: 80, title: 'Coleta Seletiva', instructor: 'Daniela Rocha', duration: '4 horas', detailed: true }
]

// Merge additional courses with default data
additionalCourses.forEach(course => {
  if (!coursesData.find(c => c.id === course.id)) {
    const category = course.title.includes('NR-') ? 'Segurança' : 
                    course.title.includes('Primeiros') || course.title.includes('RCP') ? 'Saúde' : 
                    course.title.includes('Líder') || course.title.includes('LGPD') ? 'Liderança' : 'Segurança'
    
    const description = `Curso de ${course.title} com foco em capacitação profissional e conformidade normativa.`
    
    coursesData.push({
      id: course.id,
      slug: generateSlug(course.title),
      title: course.title,
      description,
      category,
      duration: course.duration,
      instructor: course.instructor,
      image: getCourseImage(course.title),
      progress: 0,
      status: 'available',
      enrollmentOpen: true,
      nivel: 'Intermediário',
      formato: 'Online',
      cargaHoraria: { teoria: course.duration, pratica: '0 horas' },
      objetivos: ['Capacitar profissionais', 'Atender requisitos normativos', 'Promover segurança'],
      conteudoProgramatico: [],
      competencias: [],
      publicoAlvo: ['Profissionais da área'],
      requisitos: ['Conforme norma aplicável'],
      certificacao: {
        validade: '2 anos',
        tipo: `Certificado ${course.title}`,
        requisitos: ['Frequência mínima de 100%']
      },
      proximasTurmas: [],
      avaliacoes: { media: 4.5, total: 0, distribuicao: {}, depoimentos: [] },
      modules: generateModules(course.title, course.duration)
    })
  }
})

// Add all additional courses from the extracted trainings
coursesData.push(...additionalCoursesData)

// Add direção defensiva course
coursesData.push(direcaoDefensivaCourse)

// Sort by ID
coursesData.sort((a, b) => a.id - b.id)

export function getCourseById(id: number): CourseData | undefined {
  return coursesData.find(course => course.id === id)
}

export function getCourseBySlug(slug: string): CourseData | undefined {
  return coursesData.find(course => course.slug === slug)
}

export function getAllCourses(): CourseData[] {
  return coursesData
}