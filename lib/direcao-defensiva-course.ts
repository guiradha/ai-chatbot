// Additional course: Direção Defensiva
import { CourseData } from './courses-data';

export const direcaoDefensivaCourse: CourseData = {
  id: 200,
  slug: 'direcao-defensiva',
  title: 'Direção Defensiva',
  description: 'Curso completo de direção defensiva para motoristas profissionais e colaboradores que utilizam veículos. Aprenda técnicas de prevenção de acidentes, condução econômica e segura.',
  category: 'Segurança',
  duration: '8 horas',
  instructor: 'Equipe Viver Seguro',
  image: '/training-covers/direcao-defensiva.png',
  progress: 0,
  status: 'available',
  nivel: 'Básico',
  formato: 'Online/Presencial',
  cargaHoraria: {
    teoria: '6 horas',
    pratica: '2 horas'
  },
  objetivos: [
    'Desenvolver habilidades de direção preventiva',
    'Reduzir riscos de acidentes no trânsito',
    'Promover economia de combustível',
    'Conhecer legislação de trânsito atualizada'
  ],
  conteudoProgramatico: [
    {
      modulo: 1,
      titulo: 'Fundamentos da Direção Defensiva',
      duracao: '2 horas',
      topicos: [
        'Conceitos de direção defensiva',
        'Estatísticas de acidentes',
        'Responsabilidades do motorista'
      ],
      concluido: false
    },
    {
      modulo: 2,
      titulo: 'Condições Adversas',
      duracao: '2 horas',
      topicos: [
        'Condições climáticas',
        'Condições da via',
        'Condições do veículo'
      ],
      concluido: false
    },
    {
      modulo: 3,
      titulo: 'Técnicas de Prevenção',
      duracao: '2 horas',
      topicos: [
        'Distância de segurança',
        'Velocidade adequada',
        'Ultrapassagens seguras'
      ],
      concluido: false
    },
    {
      modulo: 4,
      titulo: 'Prática Supervisionada',
      duracao: '2 horas',
      topicos: [
        'Simulações práticas',
        'Manobras defensivas',
        'Avaliação de desempenho'
      ],
      concluido: false
    }
  ],
  modules: [
    {
      id: 1,
      title: 'Fundamentos da Direção Defensiva',
      duration: '2 horas',
      status: 'available',
      lessons: [
        {
          id: 1,
          title: 'Introdução à Direção Defensiva',
          type: 'video',
          duration: '30 min',
          completed: false,
          videoUrl: '/sample-video.mp4'
        },
        {
          id: 2,
          title: 'Quiz - Fundamentos',
          type: 'quiz',
          duration: '15 min',
          completed: false,
          questions: 10
        }
      ]
    },
    {
      id: 2,
      title: 'Condições Adversas',
      duration: '2 horas',
      status: 'available',
      lessons: [
        {
          id: 1,
          title: 'Dirigindo em Condições Adversas',
          type: 'video',
          duration: '45 min',
          completed: false,
          videoUrl: '/sample-video.mp4'
        },
        {
          id: 2,
          title: 'Exercícios Práticos',
          type: 'assignment',
          duration: '30 min',
          completed: false
        }
      ]
    }
  ],
  competencias: [
    'Técnicas de direção preventiva',
    'Identificação de riscos no trânsito',
    'Condução econômica e sustentável',
    'Primeiros socorros em acidentes'
  ],
  publicoAlvo: [
    'Motoristas profissionais',
    'Colaboradores que dirigem veículos da empresa',
    'Gestores de frota',
    'Profissionais de segurança'
  ],
  requisitos: [
    'Carteira Nacional de Habilitação (CNH) válida',
    'Idade mínima de 18 anos',
    'Experiência mínima de 1 ano de direção'
  ],
  certificacao: {
    validade: '2 anos',
    tipo: 'Certificado de Direção Defensiva',
    requisitos: [
      'Frequência mínima de 100%',
      'Aprovação na avaliação teórica (mínimo 70%)',
      'Aprovação na avaliação prática'
    ]
  },
  avaliacoes: {
    media: 4.8,
    total: 156,
    distribuicao: { 5: 120, 4: 30, 3: 6, 2: 0, 1: 0 },
    depoimentos: [
      {
        nome: 'Carlos Santos',
        cargo: 'Motorista Profissional',
        avaliacao: 5,
        data: '2024-01-15',
        comentario: 'Excelente curso! As técnicas aprendidas já me ajudaram a evitar vários acidentes.'
      },
      {
        nome: 'Maria Silva',
        cargo: 'Gestora de Frota',
        avaliacao: 5,
        data: '2024-01-10',
        comentario: 'Curso essencial para toda nossa equipe. Reduziu significativamente nossos índices de acidentes.'
      }
    ]
  },
  proximasTurmas: [
    {
      data: '2024-02-15',
      periodo: 'Manhã',
      vagas: 20
    },
    {
      data: '2024-02-20',
      periodo: 'Tarde',
      vagas: 15
    }
  ]
};