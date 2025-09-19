// ESG (Environmental, Social, and Governance) Training Courses
// Based on Sistema Escudo ESG and modern sustainability requirements for 2025

import { CourseData } from './courses-data';

// Helper function to generate modules for ESG courses
const generateESGModules = (courseTitle: string, modules: any[]) => {
  return modules.map((module, index) => ({
    id: index + 1,
    title: module.titulo,
    duration: module.duracao,
    status: index === 0 ? 'available' : 'locked' as const,
    lessons: module.topicos.map((topic: string, lessonIndex: number) => ({
      id: lessonIndex + 1,
      title: topic,
      type: lessonIndex % 3 === 0 ? 'video' : lessonIndex % 3 === 1 ? 'document' : 'quiz' as const,
      duration: '30 min',
      completed: false,
      locked: index > 0
    }))
  }));
};

export const esgCoursesData: CourseData[] = [
  {
    id: 201,
    slug: 'esg-fundamentos-sustentabilidade',
    title: 'ESG - Fundamentos de Sustentabilidade Corporativa',
    description: 'Curso completo sobre os princípios ESG (Environmental, Social, Governance) e sua aplicação prática nas organizações modernas, alinhado aos ODS da ONU.',
    category: 'Liderança',
    duration: '20 horas',
    instructor: 'Dra. Marina Sustentável',
    image: '/training-covers/gestao-cultura-seguranca.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Intermediário',
    formato: 'Online',
    cargaHoraria: { teoria: '18 horas', pratica: '2 horas' },
    objetivos: [
      'Compreender os pilares ESG e sua importância estratégica',
      'Implementar práticas sustentáveis na organização',
      'Desenvolver métricas e indicadores ESG',
      'Criar relatórios de sustentabilidade',
      'Alinhar estratégias aos ODS (Objetivos de Desenvolvimento Sustentável)'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'Introdução ao ESG e Sustentabilidade',
        duracao: '4 horas',
        topicos: [
          'História e evolução do conceito ESG',
          'Os três pilares: Environmental, Social e Governance',
          'Relação entre ESG e os ODS da ONU',
          'Tendências globais e regulamentações',
          'Impacto do ESG no valor das empresas'
        ],
        concluido: false
      },
      {
        modulo: 2,
        titulo: 'Pilar Ambiental (Environmental)',
        duracao: '5 horas',
        topicos: [
          'Gestão de recursos naturais e eficiência energética',
          'Economia circular e gestão de resíduos',
          'Pegada de carbono e neutralidade climática',
          'Biodiversidade e proteção de ecossistemas',
          'Tecnologias verdes e inovação sustentável'
        ],
        concluido: false
      },
      {
        modulo: 3,
        titulo: 'Pilar Social',
        duracao: '5 horas',
        topicos: [
          'Diversidade, equidade e inclusão (DEI)',
          'Saúde e segurança ocupacional integrada ao ESG',
          'Desenvolvimento da comunidade local',
          'Direitos humanos na cadeia de valor',
          'Engajamento de stakeholders'
        ],
        concluido: false
      },
      {
        modulo: 4,
        titulo: 'Pilar Governança',
        duracao: '4 horas',
        topicos: [
          'Ética empresarial e compliance',
          'Transparência e prestação de contas',
          'Estruturas de governança corporativa',
          'Gestão de riscos ESG',
          'Políticas anticorrupção e integridade'
        ],
        concluido: false
      },
      {
        modulo: 5,
        titulo: 'Implementação e Métricas ESG',
        duracao: '2 horas',
        topicos: [
          'Frameworks de reporte (GRI, SASB, TCFD)',
          'KPIs e indicadores de desempenho ESG',
          'Certificações e selos sustentáveis',
          'Comunicação e marketing verde',
          'Casos de sucesso e melhores práticas'
        ],
        concluido: false
      }
    ],
    competencias: [
      'Análise de materialidade ESG',
      'Desenvolvimento de estratégias sustentáveis',
      'Gestão de riscos ambientais e sociais',
      'Elaboração de relatórios de sustentabilidade',
      'Engajamento com investidores e stakeholders',
      'Implementação de políticas de governança',
      'Medição de impacto socioambiental',
      'Liderança para sustentabilidade'
    ],
    publicoAlvo: [
      'Gestores e executivos',
      'Profissionais de sustentabilidade',
      'Analistas ESG',
      'Profissionais de compliance e governança',
      'Consultores empresariais'
    ],
    requisitos: [
      'Ensino superior em andamento ou completo',
      'Interesse em sustentabilidade corporativa'
    ],
    certificacao: {
      validade: '3 anos',
      tipo: 'Certificado ESG - Sustentabilidade Corporativa',
      requisitos: [
        'Frequência mínima de 85%',
        'Aprovação na avaliação final (mínimo 70%)',
        'Elaboração de projeto ESG aplicado'
      ]
    },
    proximasTurmas: [
      { data: '2025-02-05', vagas: 30, periodo: 'Noite' },
      { data: '2025-03-10', vagas: 25, periodo: 'Manhã' },
      { data: '2025-04-15', vagas: 35, periodo: 'Online Flexível' }
    ],
    avaliacoes: {
      media: 4.9,
      total: 342,
      distribuicao: { 5: 280, 4: 50, 3: 10, 2: 2, 1: 0 },
      depoimentos: [
        {
          nome: 'Ricardo Mendes',
          cargo: 'Diretor de Sustentabilidade',
          avaliacao: 5,
          comentario: 'Curso fundamental para entender e implementar ESG na prática empresarial.',
          data: '2024-12-10'
        },
        {
          nome: 'Juliana Costa',
          cargo: 'Analista ESG',
          avaliacao: 5,
          comentario: 'Conteúdo atualizado e alinhado com as melhores práticas globais.',
          data: '2024-11-25'
        }
      ]
    },
    modules: generateESGModules('ESG - Fundamentos', [])
  },
  {
    id: 202,
    slug: 'esg-relatorios-sustentabilidade-gri',
    title: 'Relatórios de Sustentabilidade - Padrão GRI',
    description: 'Aprenda a elaborar relatórios de sustentabilidade seguindo os padrões GRI (Global Reporting Initiative), incluindo materialidade e engajamento de stakeholders.',
    category: 'Liderança',
    duration: '16 horas',
    instructor: 'Carlos Eduardo GRI',
    image: '/training-covers/integracao-seguranca.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Avançado',
    formato: 'Online',
    cargaHoraria: { teoria: '14 horas', pratica: '2 horas' },
    objetivos: [
      'Dominar os padrões GRI Standards',
      'Realizar análise de materialidade',
      'Estruturar relatórios de sustentabilidade',
      'Coletar e validar dados ESG',
      'Comunicar desempenho sustentável'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'Fundamentos do GRI Standards',
        duracao: '3 horas',
        topicos: [
          'História e evolução do GRI',
          'Estrutura dos GRI Standards',
          'Princípios de reporte',
          'Requisitos universais'
        ],
        concluido: false
      },
      {
        modulo: 2,
        titulo: 'Análise de Materialidade',
        duracao: '4 horas',
        topicos: [
          'Conceito de materialidade dupla',
          'Engajamento de stakeholders',
          'Priorização de temas materiais',
          'Matriz de materialidade'
        ],
        concluido: false
      },
      {
        modulo: 3,
        titulo: 'Indicadores e Métricas',
        duracao: '5 horas',
        topicos: [
          'Indicadores econômicos (GRI 200)',
          'Indicadores ambientais (GRI 300)',
          'Indicadores sociais (GRI 400)',
          'Coleta e validação de dados'
        ],
        concluido: false
      },
      {
        modulo: 4,
        titulo: 'Elaboração e Comunicação',
        duracao: '4 horas',
        topicos: [
          'Estrutura do relatório',
          'Narrativa e storytelling',
          'Design e visualização de dados',
          'Verificação externa e asseguração'
        ],
        concluido: false
      }
    ],
    competencias: [
      'Aplicação dos GRI Standards',
      'Análise de materialidade',
      'Coleta de dados ESG',
      'Redação técnica de relatórios',
      'Engajamento de stakeholders',
      'Verificação de dados',
      'Comunicação corporativa sustentável'
    ],
    publicoAlvo: [
      'Profissionais de sustentabilidade',
      'Analistas de relatórios corporativos',
      'Gestores de comunicação',
      'Consultores ESG'
    ],
    requisitos: [
      'Conhecimento básico em ESG',
      'Experiência em relatórios corporativos (desejável)'
    ],
    certificacao: {
      validade: '2 anos',
      tipo: 'Certificado GRI Standards Reporter',
      requisitos: [
        'Frequência mínima de 90%',
        'Elaboração de relatório modelo',
        'Aprovação na avaliação final'
      ]
    },
    proximasTurmas: [
      { data: '2025-02-15', vagas: 20, periodo: 'Tarde' },
      { data: '2025-04-01', vagas: 25, periodo: 'Online' }
    ],
    avaliacoes: {
      media: 4.8,
      total: 156,
      distribuicao: { 5: 120, 4: 30, 3: 5, 2: 1, 1: 0 },
      depoimentos: []
    },
    modules: generateESGModules('Relatórios GRI', [])
  },
  {
    id: 203,
    slug: 'esg-gestao-carbono-net-zero',
    title: 'Gestão de Carbono e Estratégias Net Zero',
    description: 'Curso especializado em gestão de emissões de GEE (Gases de Efeito Estufa), inventário de carbono e desenvolvimento de estratégias para neutralidade climática.',
    category: 'Saúde',
    duration: '24 horas',
    instructor: 'Eng. Paulo Carbono Zero',
    image: '/training-covers/higiene-ocupacional.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Avançado',
    formato: 'Híbrido',
    cargaHoraria: { teoria: '20 horas', pratica: '4 horas' },
    objetivos: [
      'Calcular pegada de carbono organizacional',
      'Elaborar inventários de GEE (GHG Protocol)',
      'Desenvolver estratégias de redução de emissões',
      'Implementar projetos de compensação',
      'Criar roadmap para Net Zero'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'Ciência do Clima e GEE',
        duracao: '4 horas',
        topicos: [
          'Mudanças climáticas e impactos',
          'Gases de efeito estufa',
          'Acordo de Paris e NDCs',
          'Science Based Targets (SBTi)'
        ],
        concluido: false
      },
      {
        modulo: 2,
        titulo: 'Inventário de Carbono - GHG Protocol',
        duracao: '8 horas',
        topicos: [
          'Escopos 1, 2 e 3 de emissões',
          'Metodologias de cálculo',
          'Fatores de emissão',
          'Ferramentas e softwares',
          'Verificação e certificação'
        ],
        concluido: false
      },
      {
        modulo: 3,
        titulo: 'Estratégias de Mitigação',
        duracao: '6 horas',
        topicos: [
          'Eficiência energética',
          'Energias renováveis',
          'Economia circular',
          'Tecnologias de captura de carbono',
          'Soluções baseadas na natureza'
        ],
        concluido: false
      },
      {
        modulo: 4,
        titulo: 'Compensação e Mercado de Carbono',
        duracao: '4 horas',
        topicos: [
          'Créditos de carbono',
          'Projetos REDD+',
          'Mercado voluntário vs regulado',
          'Blockchain e rastreabilidade'
        ],
        concluido: false
      },
      {
        modulo: 5,
        titulo: 'Roadmap Net Zero',
        duracao: '2 horas',
        topicos: [
          'Planejamento de longo prazo',
          'Metas intermediárias',
          'Governança climática',
          'Comunicação e reporte TCFD'
        ],
        concluido: false
      }
    ],
    competencias: [
      'Cálculo de pegada de carbono',
      'Elaboração de inventários GHG Protocol',
      'Análise de ciclo de vida (ACV)',
      'Gestão de projetos de redução',
      'Negociação de créditos de carbono',
      'Implementação de SBTi',
      'Reporte TCFD',
      'Auditoria de carbono'
    ],
    publicoAlvo: [
      'Gestores ambientais',
      'Engenheiros de sustentabilidade',
      'Consultores de carbono',
      'Profissionais de energia',
      'Analistas ESG'
    ],
    requisitos: [
      'Formação em engenharia, ciências ambientais ou áreas afins',
      'Conhecimento básico em Excel',
      'Inglês técnico (desejável)'
    ],
    certificacao: {
      validade: '2 anos',
      tipo: 'Certificado Especialista em Gestão de Carbono',
      requisitos: [
        'Frequência mínima de 85%',
        'Elaboração de inventário de GEE',
        'Aprovação no exame final (mínimo 75%)'
      ]
    },
    proximasTurmas: [
      { data: '2025-02-20', vagas: 15, periodo: 'Integral' },
      { data: '2025-05-10', vagas: 20, periodo: 'Noite' }
    ],
    avaliacoes: {
      media: 4.9,
      total: 89,
      distribuicao: { 5: 75, 4: 12, 3: 2, 2: 0, 1: 0 },
      depoimentos: []
    },
    modules: generateESGModules('Gestão de Carbono', [])
  },
  {
    id: 204,
    slug: 'esg-economia-circular-residuos',
    title: 'Economia Circular e Gestão Avançada de Resíduos',
    description: 'Transforme a gestão de resíduos em oportunidade de negócio através dos princípios da economia circular, logística reversa e simbiose industrial.',
    category: 'Saúde',
    duration: '12 horas',
    instructor: 'Dra. Ana Circular',
    image: '/training-covers/prevencao-combate-assedio-violencia-trabalho.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Intermediário',
    formato: 'Online',
    cargaHoraria: { teoria: '10 horas', pratica: '2 horas' },
    objetivos: [
      'Aplicar princípios de economia circular',
      'Implementar sistemas de logística reversa',
      'Desenvolver parcerias de simbiose industrial',
      'Criar valor a partir de resíduos',
      'Atender à Política Nacional de Resíduos Sólidos'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'Fundamentos da Economia Circular',
        duracao: '3 horas',
        topicos: [
          'Do linear ao circular',
          'Princípios dos 9Rs',
          'Design circular e ecodesign',
          'Modelos de negócio circulares'
        ],
        concluido: false
      },
      {
        modulo: 2,
        titulo: 'Gestão Estratégica de Resíduos',
        duracao: '3 horas',
        topicos: [
          'Hierarquia de gestão de resíduos',
          'Caracterização e classificação',
          'Tecnologias de tratamento',
          'Valorização energética'
        ],
        concluido: false
      },
      {
        modulo: 3,
        titulo: 'Logística Reversa e PNRS',
        duracao: '3 horas',
        topicos: [
          'Sistemas de logística reversa',
          'Responsabilidade compartilhada',
          'Acordos setoriais',
          'Compliance com PNRS'
        ],
        concluido: false
      },
      {
        modulo: 4,
        titulo: 'Simbiose Industrial e Inovação',
        duracao: '3 horas',
        topicos: [
          'Conceito de simbiose industrial',
          'Mapeamento de fluxos de materiais',
          'Casos de sucesso',
          'Plataformas de economia circular'
        ],
        concluido: false
      }
    ],
    competencias: [
      'Design de produtos circulares',
      'Gestão de cadeias reversas',
      'Análise de fluxo de materiais',
      'Desenvolvimento de parcerias',
      'Inovação em modelos de negócio',
      'Compliance ambiental',
      'Valorização de resíduos'
    ],
    publicoAlvo: [
      'Gestores ambientais',
      'Profissionais de supply chain',
      'Designers de produto',
      'Empreendedores sustentáveis',
      'Consultores ambientais'
    ],
    requisitos: [
      'Ensino médio completo',
      'Interesse em sustentabilidade'
    ],
    certificacao: {
      validade: '3 anos',
      tipo: 'Certificado em Economia Circular',
      requisitos: [
        'Frequência mínima de 80%',
        'Projeto de economia circular',
        'Aprovação na avaliação'
      ]
    },
    proximasTurmas: [
      { data: '2025-03-05', vagas: 25, periodo: 'Manhã' },
      { data: '2025-04-20', vagas: 30, periodo: 'Noite' }
    ],
    avaliacoes: {
      media: 4.7,
      total: 234,
      distribuicao: { 5: 180, 4: 40, 3: 12, 2: 2, 1: 0 },
      depoimentos: []
    },
    modules: generateESGModules('Economia Circular', [])
  },
  {
    id: 205,
    slug: 'esg-diversidade-inclusao-dei',
    title: 'Diversidade, Equidade e Inclusão (DEI) no ESG',
    description: 'Desenvolva competências para criar ambientes de trabalho inclusivos, promover diversidade e garantir equidade como parte fundamental da estratégia ESG.',
    category: 'Liderança',
    duration: '16 horas',
    instructor: 'Profa. Diversa Incluir',
    image: '/training-covers/gestao-cultura-seguranca.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Intermediário',
    formato: 'Online',
    cargaHoraria: { teoria: '14 horas', pratica: '2 horas' },
    objetivos: [
      'Compreender a importância de DEI no contexto ESG',
      'Identificar e mitigar vieses inconscientes',
      'Desenvolver políticas de inclusão',
      'Criar métricas de diversidade',
      'Promover cultura organizacional inclusiva'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'DEI como Pilar Social do ESG',
        duracao: '4 horas',
        topicos: [
          'Conceitos de diversidade, equidade e inclusão',
          'Impacto de DEI no desempenho empresarial',
          'Legislação e compliance',
          'Benchmarks globais'
        ],
        concluido: false
      },
      {
        modulo: 2,
        titulo: 'Vieses e Barreiras',
        duracao: '4 horas',
        topicos: [
          'Vieses inconscientes',
          'Microagressões no ambiente de trabalho',
          'Barreiras sistêmicas',
          'Interseccionalidade'
        ],
        concluido: false
      },
      {
        modulo: 3,
        titulo: 'Estratégias e Práticas Inclusivas',
        duracao: '4 horas',
        topicos: [
          'Recrutamento inclusivo',
          'Desenvolvimento de talentos diversos',
          'Grupos de afinidade (ERGs)',
          'Acessibilidade e adaptações'
        ],
        concluido: false
      },
      {
        modulo: 4,
        titulo: 'Métricas e Governança',
        duracao: '4 horas',
        topicos: [
          'KPIs de diversidade',
          'Censo de diversidade',
          'Reporte e transparência',
          'Comitês de diversidade'
        ],
        concluido: false
      }
    ],
    competencias: [
      'Gestão da diversidade',
      'Comunicação inclusiva',
      'Desenvolvimento de políticas DEI',
      'Facilitação de diálogos difíceis',
      'Análise de dados de diversidade',
      'Liderança inclusiva',
      'Mediação de conflitos'
    ],
    publicoAlvo: [
      'Profissionais de RH',
      'Líderes e gestores',
      'Profissionais de ESG',
      'Comitês de diversidade',
      'Consultores organizacionais'
    ],
    requisitos: [
      'Nenhum pré-requisito específico',
      'Abertura para aprendizado e reflexão'
    ],
    certificacao: {
      validade: '2 anos',
      tipo: 'Certificado DEI Practitioner',
      requisitos: [
        'Frequência mínima de 85%',
        'Participação ativa nas discussões',
        'Elaboração de plano de ação DEI'
      ]
    },
    proximasTurmas: [
      { data: '2025-02-12', vagas: 35, periodo: 'Tarde' },
      { data: '2025-03-25', vagas: 40, periodo: 'Online Flexível' }
    ],
    avaliacoes: {
      media: 4.8,
      total: 567,
      distribuicao: { 5: 450, 4: 90, 3: 25, 2: 2, 1: 0 },
      depoimentos: [
        {
          nome: 'Fernanda Silva',
          cargo: 'Gerente de RH',
          avaliacao: 5,
          comentario: 'Curso transformador! Mudou completamente nossa abordagem sobre diversidade.',
          data: '2024-12-05'
        }
      ]
    },
    modules: generateESGModules('DEI no ESG', [])
  },
  {
    id: 206,
    slug: 'esg-cadeia-fornecimento-sustentavel',
    title: 'Gestão Sustentável da Cadeia de Suprimentos',
    description: 'Integre critérios ESG na gestão de fornecedores, desenvolvendo cadeias de suprimentos responsáveis, éticas e resilientes.',
    category: 'Segurança',
    duration: '20 horas',
    instructor: 'Eng. Supply Verde',
    image: '/training-covers/integracao-seguranca.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Avançado',
    formato: 'Híbrido',
    cargaHoraria: { teoria: '16 horas', pratica: '4 horas' },
    objetivos: [
      'Mapear riscos ESG na cadeia de fornecimento',
      'Desenvolver critérios de seleção sustentável',
      'Implementar due diligence de fornecedores',
      'Criar programas de desenvolvimento de fornecedores',
      'Garantir rastreabilidade e transparência'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'ESG na Cadeia de Valor',
        duracao: '4 horas',
        topicos: [
          'Riscos e oportunidades ESG',
          'Regulamentações e compliance',
          'Tendências globais',
          'Pressões de stakeholders'
        ],
        concluido: false
      },
      {
        modulo: 2,
        titulo: 'Due Diligence e Avaliação',
        duracao: '6 horas',
        topicos: [
          'Mapeamento de fornecedores críticos',
          'Critérios ESG de avaliação',
          'Auditorias e verificações',
          'Ferramentas de assessment'
        ],
        concluido: false
      },
      {
        modulo: 3,
        titulo: 'Desenvolvimento de Fornecedores',
        duracao: '5 horas',
        topicos: [
          'Capacitação em ESG',
          'Programas de melhoria contínua',
          'Colaboração e inovação',
          'Reconhecimento e incentivos'
        ],
        concluido: false
      },
      {
        modulo: 4,
        titulo: 'Rastreabilidade e Blockchain',
        duracao: '3 horas',
        topicos: [
          'Tecnologias de rastreamento',
          'Blockchain para transparência',
          'Certificações e selos',
          'Comunicação com stakeholders'
        ],
        concluido: false
      },
      {
        modulo: 5,
        titulo: 'Gestão de Crises e Resiliência',
        duracao: '2 horas',
        topicos: [
          'Planos de contingência',
          'Diversificação de fornecedores',
          'Resposta a incidentes ESG',
          'Recuperação e aprendizado'
        ],
        concluido: false
      }
    ],
    competencias: [
      'Avaliação de riscos ESG',
      'Auditoria de fornecedores',
      'Desenvolvimento de políticas',
      'Gestão de relacionamento',
      'Análise de dados',
      'Negociação sustentável',
      'Gestão de crises',
      'Implementação de tecnologia'
    ],
    publicoAlvo: [
      'Profissionais de compras',
      'Gestores de supply chain',
      'Analistas de sustentabilidade',
      'Auditores',
      'Consultores de cadeia'
    ],
    requisitos: [
      'Experiência em gestão de fornecedores',
      'Conhecimento básico de ESG'
    ],
    certificacao: {
      validade: '3 anos',
      tipo: 'Certificado Supply Chain ESG',
      requisitos: [
        'Frequência mínima de 90%',
        'Case study aprovado',
        'Exame final (mínimo 75%)'
      ]
    },
    proximasTurmas: [
      { data: '2025-03-15', vagas: 18, periodo: 'Integral' },
      { data: '2025-05-20', vagas: 22, periodo: 'Noite' }
    ],
    avaliacoes: {
      media: 4.7,
      total: 123,
      distribuicao: { 5: 90, 4: 25, 3: 7, 2: 1, 1: 0 },
      depoimentos: []
    },
    modules: generateESGModules('Cadeia Sustentável', [])
  },
  {
    id: 207,
    slug: 'esg-financas-sustentaveis-investimento',
    title: 'Finanças Sustentáveis e Investimento ESG',
    description: 'Compreenda o mercado de finanças sustentáveis, títulos verdes, análise de riscos climáticos e critérios ESG para investimentos responsáveis.',
    category: 'Liderança',
    duration: '24 horas',
    instructor: 'Dr. Finance Verde',
    image: '/training-covers/gestao-cultura-seguranca.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Avançado',
    formato: 'Online',
    cargaHoraria: { teoria: '22 horas', pratica: '2 horas' },
    objetivos: [
      'Entender o ecossistema de finanças sustentáveis',
      'Analisar riscos e oportunidades ESG',
      'Estruturar produtos financeiros verdes',
      'Aplicar TCFD e taxonomias verdes',
      'Avaliar impacto de investimentos'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'Mercado de Finanças Sustentáveis',
        duracao: '6 horas',
        topicos: [
          'Evolução das finanças sustentáveis',
          'Princípios do Equador e PRI',
          'Regulamentações globais',
          'Taxonomias verdes (EU, Brasil)'
        ],
        concluido: false
      },
      {
        modulo: 2,
        titulo: 'Instrumentos Financeiros Verdes',
        duracao: '6 horas',
        topicos: [
          'Green bonds e social bonds',
          'Sustainability-linked loans',
          'Fundos ESG e ETFs',
          'Blended finance'
        ],
        concluido: false
      },
      {
        modulo: 3,
        titulo: 'Análise de Riscos Climáticos',
        duracao: '6 horas',
        topicos: [
          'TCFD framework',
          'Riscos físicos e de transição',
          'Cenários climáticos',
          'Stress testing'
        ],
        concluido: false
      },
      {
        modulo: 4,
        titulo: 'Integração ESG em Investimentos',
        duracao: '4 horas',
        topicos: [
          'Screening ESG',
          'Integração na análise fundamental',
          'Engagement e proxy voting',
          'Impact investing'
        ],
        concluido: false
      },
      {
        modulo: 5,
        titulo: 'Mensuração de Impacto',
        duracao: '2 horas',
        topicos: [
          'Teoria da mudança',
          'IRIS+ metrics',
          'SDG impact standards',
          'Relatórios de impacto'
        ],
        concluido: false
      }
    ],
    competencias: [
      'Análise ESG de investimentos',
      'Estruturação de green bonds',
      'Avaliação de riscos climáticos',
      'Due diligence ESG',
      'Modelagem financeira sustentável',
      'Reporte TCFD',
      'Gestão de portfólio ESG',
      'Mensuração de impacto'
    ],
    publicoAlvo: [
      'Profissionais do mercado financeiro',
      'Gestores de fundos',
      'Analistas de investimento',
      'Profissionais de relações com investidores',
      'Consultores financeiros'
    ],
    requisitos: [
      'Conhecimento em finanças',
      'Experiência no mercado financeiro (desejável)',
      'Inglês avançado'
    ],
    certificacao: {
      validade: '2 anos',
      tipo: 'Certificado em Finanças Sustentáveis',
      requisitos: [
        'Frequência mínima de 85%',
        'Análise de case real',
        'Aprovação no exame CFA-ESG prep'
      ]
    },
    proximasTurmas: [
      { data: '2025-02-25', vagas: 20, periodo: 'Noite' },
      { data: '2025-04-10', vagas: 25, periodo: 'Online' }
    ],
    avaliacoes: {
      media: 4.9,
      total: 278,
      distribuicao: { 5: 230, 4: 40, 3: 7, 2: 1, 1: 0 },
      depoimentos: []
    },
    modules: generateESGModules('Finanças Sustentáveis', [])
  },
  {
    id: 208,
    slug: 'esg-transformacao-digital-sustentavel',
    title: 'Transformação Digital Sustentável e ESG Tech',
    description: 'Explore como a tecnologia pode acelerar a agenda ESG através de IA, IoT, blockchain e outras inovações para sustentabilidade.',
    category: 'Liderança',
    duration: '16 horas',
    instructor: 'Tech Sustentável',
    image: '/training-covers/integracao-seguranca.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Intermediário',
    formato: 'Online',
    cargaHoraria: { teoria: '14 horas', pratica: '2 horas' },
    objetivos: [
      'Identificar tecnologias para ESG',
      'Implementar soluções digitais sustentáveis',
      'Usar dados para decisões ESG',
      'Reduzir pegada digital',
      'Criar roadmap de ESG tech'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'Tecnologia como Habilitadora ESG',
        duracao: '3 horas',
        topicos: [
          'Panorama ESG Tech',
          'IA para sustentabilidade',
          'IoT e monitoramento ambiental',
          'Digital twins'
        ],
        concluido: false
      },
      {
        modulo: 2,
        titulo: 'Data Analytics para ESG',
        duracao: '4 horas',
        topicos: [
          'Big data ESG',
          'Dashboards e visualização',
          'Predictive analytics',
          'Automação de relatórios'
        ],
        concluido: false
      },
      {
        modulo: 3,
        titulo: 'Blockchain e Transparência',
        duracao: '3 horas',
        topicos: [
          'Rastreabilidade na cadeia',
          'Smart contracts verdes',
          'Tokenização de ativos ambientais',
          'Verificação descentralizada'
        ],
        concluido: false
      },
      {
        modulo: 4,
        titulo: 'Green IT e Pegada Digital',
        duracao: '3 horas',
        topicos: [
          'Data centers sustentáveis',
          'Cloud computing verde',
          'Eficiência energética em TI',
          'Economia circular em eletrônicos'
        ],
        concluido: false
      },
      {
        modulo: 5,
        titulo: 'Inovação e Startups ESG',
        duracao: '3 horas',
        topicos: [
          'Ecossistema de inovação',
          'Cleantech e climatetech',
          'Corporate venture em ESG',
          'Casos de sucesso'
        ],
        concluido: false
      }
    ],
    competencias: [
      'Implementação de ESG tech',
      'Análise de dados ESG',
      'Gestão de projetos digitais',
      'Avaliação de tecnologias',
      'Inovação sustentável',
      'Green IT',
      'Transformação digital'
    ],
    publicoAlvo: [
      'Profissionais de TI',
      'Gestores de inovação',
      'Analistas ESG',
      'CTOs e CIOs',
      'Consultores de transformação'
    ],
    requisitos: [
      'Conhecimento básico em tecnologia',
      'Interesse em sustentabilidade'
    ],
    certificacao: {
      validade: '2 anos',
      tipo: 'Certificado ESG Tech Professional',
      requisitos: [
        'Frequência mínima de 80%',
        'Projeto de implementação',
        'Avaliação final'
      ]
    },
    proximasTurmas: [
      { data: '2025-03-01', vagas: 30, periodo: 'Manhã' },
      { data: '2025-04-15', vagas: 35, periodo: 'Online' }
    ],
    avaliacoes: {
      media: 4.8,
      total: 145,
      distribuicao: { 5: 110, 4: 28, 3: 6, 2: 1, 1: 0 },
      depoimentos: []
    },
    modules: generateESGModules('Transformação Digital ESG', [])
  },
  {
    id: 209,
    slug: 'esg-compliance-anticorrupcao',
    title: 'Compliance ESG e Programa de Integridade',
    description: 'Desenvolva programas robustos de compliance alinhados aos critérios ESG, incluindo anticorrupção, ética empresarial e governança corporativa.',
    category: 'Liderança',
    duration: '20 horas',
    instructor: 'Dr. Compliance Ético',
    image: '/training-covers/gestao-cultura-seguranca.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Avançado',
    formato: 'Online',
    cargaHoraria: { teoria: '18 horas', pratica: '2 horas' },
    objetivos: [
      'Estruturar programa de compliance ESG',
      'Implementar políticas anticorrupção',
      'Desenvolver código de ética',
      'Criar canais de denúncia',
      'Garantir governança transparente'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'Governança e Compliance ESG',
        duracao: '5 horas',
        topicos: [
          'Estruturas de governança corporativa',
          'Lei Anticorrupção e FCPA',
          'ISO 37001 e 37301',
          'Programa de integridade'
        ],
        concluido: false
      },
      {
        modulo: 2,
        titulo: 'Gestão de Riscos de Compliance',
        duracao: '5 horas',
        topicos: [
          'Risk assessment de compliance',
          'Due diligence de terceiros',
          'Conflitos de interesse',
          'Prevenção à lavagem de dinheiro'
        ],
        concluido: false
      },
      {
        modulo: 3,
        titulo: 'Políticas e Procedimentos',
        duracao: '4 horas',
        topicos: [
          'Código de conduta',
          'Políticas de brindes e hospitalidade',
          'Doações e patrocínios',
          'Relacionamento com poder público'
        ],
        concluido: false
      },
      {
        modulo: 4,
        titulo: 'Canal de Denúncias e Investigações',
        duracao: '3 horas',
        topicos: [
          'Estruturação de canal de denúncias',
          'Proteção ao denunciante',
          'Investigações internas',
          'Medidas disciplinares'
        ],
        concluido: false
      },
      {
        modulo: 5,
        titulo: 'Monitoramento e Melhoria',
        duracao: '3 horas',
        topicos: [
          'KPIs de compliance',
          'Auditorias de conformidade',
          'Treinamento e comunicação',
          'Melhoria contínua'
        ],
        concluido: false
      }
    ],
    competencias: [
      'Estruturação de compliance',
      'Gestão de riscos éticos',
      'Investigações corporativas',
      'Desenvolvimento de políticas',
      'Auditoria de conformidade',
      'Treinamento em ética',
      'Comunicação corporativa',
      'Governança corporativa'
    ],
    publicoAlvo: [
      'Profissionais de compliance',
      'Auditores internos',
      'Advogados corporativos',
      'Gestores de risco',
      'Executivos C-level'
    ],
    requisitos: [
      'Formação superior',
      'Experiência em compliance ou áreas afins',
      'Conhecimento de legislação empresarial'
    ],
    certificacao: {
      validade: '3 anos',
      tipo: 'Certificado Compliance Officer ESG',
      requisitos: [
        'Frequência mínima de 90%',
        'Elaboração de programa de compliance',
        'Exame de certificação (mínimo 80%)'
      ]
    },
    proximasTurmas: [
      { data: '2025-02-18', vagas: 22, periodo: 'Noite' },
      { data: '2025-05-05', vagas: 25, periodo: 'Manhã' }
    ],
    avaliacoes: {
      media: 4.8,
      total: 198,
      distribuicao: { 5: 160, 4: 30, 3: 7, 2: 1, 1: 0 },
      depoimentos: []
    },
    modules: generateESGModules('Compliance ESG', [])
  },
  {
    id: 210,
    slug: 'esg-agua-recursos-hidricos',
    title: 'Gestão Sustentável de Água e Recursos Hídricos',
    description: 'Aprenda a gerenciar recursos hídricos de forma sustentável, implementar sistemas de reuso de água e garantir segurança hídrica alinhada aos ODS.',
    category: 'Saúde',
    duration: '12 horas',
    instructor: 'Eng. Água Limpa',
    image: '/training-covers/higiene-ocupacional.png',
    progress: 0,
    status: 'available',
    enrollmentOpen: true,
    nivel: 'Intermediário',
    formato: 'Híbrido',
    cargaHoraria: { teoria: '10 horas', pratica: '2 horas' },
    objetivos: [
      'Implementar gestão hídrica sustentável',
      'Calcular pegada hídrica',
      'Desenvolver sistemas de reuso',
      'Garantir segurança hídrica',
      'Atender ODS 6 - Água limpa'
    ],
    conteudoProgramatico: [
      {
        modulo: 1,
        titulo: 'Recursos Hídricos e Sustentabilidade',
        duracao: '3 horas',
        topicos: [
          'Ciclo hidrológico e disponibilidade',
          'Crise hídrica global',
          'ODS 6 e metas',
          'Legislação de recursos hídricos'
        ],
        concluido: false
      },
      {
        modulo: 2,
        titulo: 'Pegada Hídrica e Water Stewardship',
        duracao: '3 horas',
        topicos: [
          'Metodologia de pegada hídrica',
          'Water risk assessment',
          'Alliance for Water Stewardship',
          'Certificação e standards'
        ],
        concluido: false
      },
      {
        modulo: 3,
        titulo: 'Tecnologias de Tratamento e Reuso',
        duracao: '3 horas',
        topicos: [
          'Sistemas de tratamento',
          'Reuso de água industrial',
          'Captação de água de chuva',
          'Tecnologias de dessalinização'
        ],
        concluido: false
      },
      {
        modulo: 4,
        titulo: 'Gestão Integrada e Economia',
        duracao: '3 horas',
        topicos: [
          'Plano de gestão hídrica',
          'Redução de perdas',
          'Economia de água',
          'Engajamento de stakeholders'
        ],
        concluido: false
      }
    ],
    competencias: [
      'Cálculo de pegada hídrica',
      'Gestão de recursos hídricos',
      'Implementação de reuso',
      'Avaliação de riscos hídricos',
      'Tecnologias de tratamento',
      'Compliance hídrico',
      'Engajamento comunitário'
    ],
    publicoAlvo: [
      'Engenheiros ambientais',
      'Gestores de utilities',
      'Profissionais de sustentabilidade',
      'Técnicos em saneamento',
      'Consultores ambientais'
    ],
    requisitos: [
      'Formação técnica ou superior',
      'Conhecimento básico em processos industriais'
    ],
    certificacao: {
      validade: '3 anos',
      tipo: 'Certificado em Gestão Hídrica Sustentável',
      requisitos: [
        'Frequência mínima de 85%',
        'Projeto de gestão hídrica',
        'Avaliação prática'
      ]
    },
    proximasTurmas: [
      { data: '2025-03-20', vagas: 20, periodo: 'Tarde' },
      { data: '2025-05-15', vagas: 25, periodo: 'Manhã' }
    ],
    avaliacoes: {
      media: 4.7,
      total: 167,
      distribuicao: { 5: 125, 4: 32, 3: 9, 2: 1, 1: 0 },
      depoimentos: []
    },
    modules: generateESGModules('Gestão Hídrica', [])
  }
];