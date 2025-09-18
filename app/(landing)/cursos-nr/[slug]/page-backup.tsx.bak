import { notFound } from 'next/navigation'
import { TrainingPageTemplate, TrainingData } from '@/components/training-page-template'
import { Car, Shield, Eye, AlertTriangle, HardHat, Zap, Heart, MessageSquare, Users, Award, BookOpen, Lock, FileText, Home, UserCheck, Activity, Monitor, Dumbbell, Flame, Leaf, Recycle, Droplets, TreePine, Search, ChartBar, ClipboardCheck, Trash2, Target, TrendingUp, FlaskConical, RefreshCw, CheckCircle, Gauge, Sparkles, Wind, GraduationCap, Forklift, Wheat, Tractor, Settings, Wrench, Building, Siren, Syringe } from "lucide-react"

// Training data for each course
const trainingData: Record<string, TrainingData> = {
  'direcao-defensiva': {
    title: 'Direção Defensiva',
    description: 'Aprenda os princípios da direção defensiva e como prevenir acidentes com atitudes seguras ao volante. Este curso capacita condutores para reconhecer e agir diante de situações de risco, reduzindo infrações e promovendo a segurança no trânsito.',
    duration: '20 horas',
    category: 'Segurança',
    format: 'Online',
    location: 'EAD - Ensino à Distância',
    nivel: 'Básico',
    objetivos: [
      'Capacitar condutores para reconhecer situações de risco no trânsito',
      'Desenvolver atitudes seguras e defensivas ao volante',
      'Reduzir infrações de trânsito e prevenir acidentes',
      'Promover a segurança no trânsito através de práticas responsáveis'
    ],
    modules: [
      {
        title: "Importância da direção defensiva",
        description: "Compreensão da relevância da direção defensiva na prevenção de acidentes, responsabilidade do condutor pela segurança no trânsito, estatísticas de acidentes no Brasil e conceitos fundamentais."
      },
      {
        title: "Condições adversas",
        description: "Condução em condições de chuva e pista molhada, direção em situações de neblina e baixa visibilidade, condições precárias da via e adaptação da condução conforme as condições climáticas."
      },
      {
        title: "Fatores que contribuem para acidentes",
        description: "Fatores humanos (distração, fadiga e imprudência), fatores mecânicos (manutenção preventiva), fatores ambientais (condições da via e clima) e hábitos preventivos."
      },
      {
        title: "Comportamento seguro",
        description: "Postura e atitudes responsáveis do condutor, atenção constante e foco na condução, empatia com os demais usuários da via e técnicas de comunicação no trânsito."
      },
      {
        title: "Equipamentos de segurança",
        description: "Dispositivos obrigatórios e recomendados, identificação e uso correto dos equipamentos de segurança, uso correto do cinto de segurança e inspeção e manutenção."
      },
      {
        title: "Técnicas de direção preventiva",
        description: "Posicionamento adequado no veículo, ajuste de espelhos e banco, técnicas de frenagem e aceleração seguras, manutenção de distância de segurança."
      },
      {
        title: "Situações de emergência",
        description: "Procedimentos em caso de pane no veículo, técnicas de direção em situações de emergência, primeiros socorros básicos no trânsito e acionamento de serviços de emergência."
      }
    ],
    competencias: [
      {
        title: 'Reconhecimento de Riscos',
        icon: <Eye className="h-5 w-5 text-green-600" />,
        skills: [
          'Identificação de situações de risco no trânsito',
          'Reconhecimento de condições adversas',
          'Análise de fatores que contribuem para acidentes',
          'Avaliação de comportamentos perigosos'
        ]
      },
      {
        title: 'Condução Defensiva',
        icon: <Car className="h-5 w-5 text-green-600" />,
        skills: [
          'Técnicas de direção preventiva',
          'Condução em condições adversas',
          'Posicionamento adequado no veículo',
          'Manutenção de distância de segurança'
        ]
      },
      {
        title: 'Comportamento Seguro',
        icon: <Shield className="h-5 w-5 text-green-600" />,
        skills: [
          'Postura responsável ao volante',
          'Atenção constante durante a condução',
          'Empatia com outros usuários da via',
          'Comunicação eficaz no trânsito'
        ]
      },
      {
        title: 'Situações de Emergência',
        icon: <AlertTriangle className="h-5 w-5 text-green-600" />,
        skills: [
          'Procedimentos em situações de emergência',
          'Uso correto de equipamentos de segurança',
          'Primeiros socorros básicos',
          'Acionamento de serviços de emergência'
        ]
      }
    ],
    certificacao: {
      validade: 'Indefinida',
      orgao: 'Certificado de conclusão do curso',
      requisitos: [
        'Frequência mínima de 75%',
        'Aprovação na avaliação final',
        'Conclusão de todos os módulos'
      ]
    },
    theme: {
      primaryColor: 'green',
      gradientFrom: 'from-green-50',
      gradientTo: 'to-emerald-50',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      ctaColor: 'bg-green-600'
    },
    heroIcon: <Car className="h-6 w-6 text-green-600" />,
    heroImage: "/training-covers/direcao-defensiva.png",
    ctaTitle: "Dirija com Segurança",
    ctaSubtitle: "Curso completo de direção defensiva - 20 horas de capacitação online"
  },
  
  'nr-35-trabalho-em-altura': {
    title: 'NR 35 - Trabalho em Altura',
    description: 'Curso obrigatório para trabalhadores que executam atividades em altura superior a 2 metros. Aborda técnicas de segurança, uso correto de EPIs específicos e procedimentos para prevenção de acidentes em trabalhos em altura.',
    duration: '8 horas',
    category: 'Norma Regulamentadora',
    format: 'Presencial',
    location: 'Centro de Treinamento',
    nivel: 'Básico',
    objetivos: [
      'Capacitar trabalhadores para executar atividades em altura com segurança',
      'Ensinar o uso correto de EPIs para trabalho em altura',
      'Desenvolver competências para identificar e controlar riscos',
      'Promover a cultura de segurança em trabalhos em altura'
    ],
    modules: [
      {
        title: "Conceitos básicos sobre trabalho em altura",
        description: "Definições fundamentais da NR 35, caracterização de trabalho em altura, responsabilidades do empregador e do trabalhador, e análise preliminar de riscos."
      },
      {
        title: "Riscos e medidas de proteção",
        description: "Identificação de riscos em trabalho em altura, medidas de proteção coletiva e individual, sistemas de proteção contra quedas e procedimentos de emergência."
      },
      {
        title: "Equipamentos de Proteção Individual (EPIs)",
        description: "Cinturão de segurança tipo paraquedista, conectores e talabartes, capacetes de segurança, inspeção e conservação de EPIs."
      },
      {
        title: "Equipamentos de Proteção Coletiva (EPCs)",
        description: "Guarda-corpo e sistema de proteção de beiradas, redes de segurança, linha de vida temporária e permanente, e plataformas elevatórias."
      },
      {
        title: "Procedimentos operacionais",
        description: "Análise de risco da atividade, autorização para trabalho em altura, comunicação e sinalização, e supervisão dos trabalhos."
      },
      {
        title: "Primeiros socorros e resgate",
        description: "Procedimentos de emergência e resgate, técnicas básicas de primeiros socorros, trauma em altura e acionamento do serviço de emergência."
      }
    ],
    competencias: [
      {
        title: 'Identificação de Riscos',
        icon: <Eye className="h-5 w-5 text-orange-600" />,
        skills: [
          'Reconhecimento de situações de risco em altura',
          'Análise de condições do ambiente de trabalho',
          'Identificação de equipamentos inadequados',
          'Avaliação de procedimentos de segurança'
        ]
      },
      {
        title: 'Uso de EPIs',
        icon: <HardHat className="h-5 w-5 text-orange-600" />,
        skills: [
          'Seleção adequada de EPIs para altura',
          'Inspeção e conservação de equipamentos',
          'Técnicas corretas de vestimentas',
          'Procedimentos de ancoragem'
        ]
      },
      {
        title: 'Procedimentos Seguros',
        icon: <Shield className="h-5 w-5 text-orange-600" />,
        skills: [
          'Aplicação de medidas preventivas',
          'Execução de análise preliminar de riscos',
          'Implementação de procedimentos operacionais',
          'Comunicação eficaz de segurança'
        ]
      },
      {
        title: 'Situações de Emergência',
        icon: <AlertTriangle className="h-5 w-5 text-orange-600" />,
        skills: [
          'Procedimentos de resgate em altura',
          'Técnicas de primeiros socorros',
          'Acionamento de equipes de emergência',
          'Autoresgate e resgate de terceiros'
        ]
      }
    ],
    certificacao: {
      validade: '2 anos',
      orgao: 'Certificado conforme NR 35 do Ministério do Trabalho',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica (70%)',
        'Aprovação na avaliação prática',
        'Atestado de saúde ocupacional'
      ]
    },
    theme: {
      primaryColor: 'orange',
      gradientFrom: 'from-orange-50',
      gradientTo: 'to-amber-50',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      ctaColor: 'bg-orange-600'
    },
    heroIcon: <HardHat className="h-6 w-6 text-orange-600" />,
    heroImage: "/training-covers/nr-35-trabalho-em-altura.png",
    ctaTitle: "Trabalhe em Altura com Segurança",
    ctaSubtitle: "Treinamento obrigatório conforme NR 35 - 8 horas presenciais"
  },

  'nr-10-basico': {
    title: 'NR 10 - Segurança em Instalações e Serviços de Eletricidade - Básico',
    description: 'Curso básico obrigatório para trabalhadores que interagem com instalações elétricas. Aborda os fundamentos da segurança elétrica, medidas de proteção, procedimentos seguros e primeiros socorros em acidentes com eletricidade.',
    duration: '40 horas',
    category: 'Norma Regulamentadora',
    format: 'Presencial',
    location: 'Centro de Treinamento',
    nivel: 'Básico',
    objetivos: [
      'Capacitar trabalhadores em segurança elétrica básica',
      'Desenvolver competências para trabalhar com segurança próximo à eletricidade',
      'Ensinar medidas de proteção e prevenção de acidentes elétricos',
      'Promover a cultura de segurança em atividades com eletricidade'
    ],
    modules: [
      {
        title: "Introdução à segurança com eletricidade",
        description: "Conceitos básicos de eletricidade, histórico de acidentes elétricos no Brasil, legislação e normas aplicáveis, responsabilidades legais e técnicas."
      },
      {
        title: "Riscos em instalações e serviços com eletricidade",
        description: "Choque elétrico e seus efeitos, arco elétrico e explosão, queimaduras e outros riscos adicionais, fatores que influenciam na gravidade dos acidentes."
      },
      {
        title: "Técnicas de análise de risco",
        description: "Metodologias de análise de risco, identificação de perigos elétricos, avaliação e classificação de riscos, medidas de controle e prevenção."
      },
      {
        title: "Medidas de controle do risco elétrico",
        description: "Desenergização e suas etapas, aterramento funcional e de proteção, equipotencialização, seccionamento automático da alimentação, dispositivos de proteção."
      },
      {
        title: "Normas técnicas brasileiras",
        description: "NBR 5410 - Instalações elétricas de baixa tensão, NBR 14039 - Instalações elétricas de média tensão, outras normas aplicáveis e interpretação técnica."
      },
      {
        title: "Equipamentos de proteção coletiva e individual",
        description: "EPCs aplicáveis em serviços elétricos, EPIs para trabalhos elétricos, inspeção e teste de equipamentos, armazenamento e conservação."
      },
      {
        title: "Rotinas de trabalho - Procedimentos",
        description: "Planejamento e organização do trabalho, procedimentos operacionais padronizados, autorização e responsabilidades, comunicação e coordenação."
      },
      {
        title: "Documentação de instalações elétricas",
        description: "Esquemas unifilares e multifilares, plantas e desenhos técnicos, manuais de operação, registros de manutenção e ensaios."
      },
      {
        title: "Proteção e combate a incêndios",
        description: "Causas de incêndios em instalações elétricas, métodos de extinção adequados, equipamentos de combate a incêndio, procedimentos de emergência."
      },
      {
        title: "Acidentes de origem elétrica",
        description: "Causas determinantes e contribuintes, análise de acidentes, medidas preventivas, investigação e registro de acidentes."
      },
      {
        title: "Primeiros socorros",
        description: "Avaliação inicial da vítima, parada cardiorrespiratória, queimaduras elétricas, transporte de acidentados, acionamento do socorro especializado."
      },
      {
        title: "Responsabilidades",
        description: "Responsabilidades administrativas, civis e criminais, responsabilidades técnicas e profissionais, fiscalização e penalidades."
      }
    ],
    competencias: [
      {
        title: 'Análise de Riscos Elétricos',
        icon: <Eye className="h-5 w-5 text-blue-600" />,
        skills: [
          'Identificação de perigos elétricos',
          'Avaliação de riscos em instalações',
          'Aplicação de técnicas de análise',
          'Implementação de medidas preventivas'
        ]
      },
      {
        title: 'Medidas de Proteção',
        icon: <Shield className="h-5 w-5 text-blue-600" />,
        skills: [
          'Aplicação de medidas de controle',
          'Uso correto de EPIs e EPCs',
          'Procedimentos de desenergização',
          'Implementação de proteções coletivas'
        ]
      },
      {
        title: 'Procedimentos Operacionais',
        icon: <Zap className="h-5 w-5 text-blue-600" />,
        skills: [
          'Execução de procedimentos seguros',
          'Interpretação de documentação técnica',
          'Coordenação de atividades elétricas',
          'Aplicação de normas técnicas'
        ]
      },
      {
        title: 'Emergências Elétricas',
        icon: <AlertTriangle className="h-5 w-5 text-blue-600" />,
        skills: [
          'Primeiros socorros em acidentes elétricos',
          'Combate a incêndios elétricos',
          'Procedimentos de emergência',
          'Acionamento de socorro especializado'
        ]
      }
    ],
    certificacao: {
      validade: '2 anos',
      orgao: 'Certificado conforme NR 10 do Ministério do Trabalho',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica (70%)',
        'Aprovação na avaliação prática',
        'Reciclagem bienal obrigatória'
      ]
    },
    theme: {
      primaryColor: 'blue',
      gradientFrom: 'from-blue-50',
      gradientTo: 'to-cyan-50',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      ctaColor: 'bg-blue-600'
    },
    heroIcon: <Zap className="h-6 w-6 text-blue-600" />,
    heroImage: "/training-covers/nr-10-basico.png",
    ctaTitle: "Segurança Elétrica Garantida",
    ctaSubtitle: "Treinamento obrigatório conforme NR 10 - 40 horas presenciais"
  },

  'primeiros-socorros': {
    title: 'Primeiros Socorros',
    description: 'Curso essencial para capacitar pessoas a prestarem os primeiros atendimentos em situações de emergência. Aborda técnicas básicas de primeiros socorros, suporte básico de vida e procedimentos de emergência para diversos tipos de acidentes.',
    duration: '16 horas',
    category: 'Segurança',
    format: 'Presencial',
    location: 'Centro de Treinamento',
    nivel: 'Básico',
    objetivos: [
      'Capacitar participantes a prestarem primeiros socorros eficazes',
      'Desenvolver habilidades de avaliação inicial de vítimas',
      'Ensinar técnicas de suporte básico de vida',
      'Promover atitudes seguras em situações de emergência'
    ],
    modules: [
      {
        title: "Conceitos fundamentais de primeiros socorros",
        description: "Definições e princípios básicos, cadeia de sobrevivência, aspectos legais e éticos, organização do local do acidente e proteção do socorrista."
      },
      {
        title: "Avaliação inicial da vítima",
        description: "Avaliação primária e secundária, sinais vitais, estado de consciência, posicionamento adequado da vítima e priorização de atendimento."
      },
      {
        title: "Suporte básico de vida",
        description: "Desobstrução de vias aéreas, respiração de resgate, compressões torácicas, uso do DEA (Desfibrilador Externo Automático) e RCP em adultos e crianças."
      },
      {
        title: "Controle de hemorragias",
        description: "Tipos de hemorragias, técnicas de controle e contenção, uso de bandagens e curativos, posicionamento adequado e prevenção de choque."
      },
      {
        title: "Trauma e fraturas",
        description: "Identificação de fraturas e luxações, imobilização básica, trauma de coluna, trauma craniano e transporte seguro de vítimas."
      },
      {
        title: "Queimaduras e lesões térmicas",
        description: "Classificação de queimaduras, tratamento inicial, queimaduras químicas e elétricas, hipotermia e hipertermia."
      },
      {
        title: "Emergências clínicas",
        description: "Infarto e angina, AVC (derrame), convulsões, diabetes e hipoglicemia, reações alérgicas graves e envenenamentos."
      },
      {
        title: "Situações especiais de emergência",
        description: "Afogamento e quase afogamento, engasgamento em adultos e crianças, acidentes com animais peçonhentos e emergências psiquiátricas."
      }
    ],
    competencias: [
      {
        title: 'Avaliação de Emergências',
        icon: <Eye className="h-5 w-5 text-red-600" />,
        skills: [
          'Reconhecimento de situações de emergência',
          'Avaliação rápida e sistemática de vítimas',
          'Identificação de prioridades de atendimento',
          'Análise de segurança do ambiente'
        ]
      },
      {
        title: 'Suporte Básico de Vida',
        icon: <Heart className="h-5 w-5 text-red-600" />,
        skills: [
          'Técnicas de RCP (adultos e crianças)',
          'Desobstrução de vias aéreas',
          'Uso de DEA',
          'Posicionamento adequado de vítimas'
        ]
      },
      {
        title: 'Controle de Traumas',
        icon: <Shield className="h-5 w-5 text-red-600" />,
        skills: [
          'Controle de hemorragias',
          'Imobilização básica',
          'Tratamento de queimaduras',
          'Prevenção de complicações'
        ]
      },
      {
        title: 'Emergências Especiais',
        icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
        skills: [
          'Atendimento a engasgamento',
          'Emergências clínicas',
          'Situações de afogamento',
          'Acionamento adequado do socorro'
        ]
      }
    ],
    certificacao: {
      validade: '2 anos',
      orgao: 'Certificado reconhecido pelo Corpo de Bombeiros',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica (70%)',
        'Aprovação na avaliação prática',
        'Demonstração de técnicas básicas'
      ]
    },
    theme: {
      primaryColor: 'red',
      gradientFrom: 'from-red-50',
      gradientTo: 'to-rose-50',
      bgColor: 'bg-red-100',
      textColor: 'text-red-600',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      ctaColor: 'bg-red-600'
    },
    heroIcon: <Heart className="h-6 w-6 text-red-600" />,
    heroImage: "/training-covers/nocoes-primeiros-socorros.png",
    ctaTitle: "Salve Vidas",
    ctaSubtitle: "Curso completo de primeiros socorros - 16 horas presenciais"
  },

  'dds-dialogo-seguranca': {
    title: 'DDS - Diálogo Diário de Segurança',
    description: 'Curso para líderes e supervisores sobre como conduzir Diálogos Diários de Segurança, ferramenta fundamental para manter a conscientização e prevenir acidentes.',
    duration: '4 horas',
    category: 'Liderança',
    format: 'Presencial/Online',
    location: 'São Paulo, SP',
    nivel: 'Básico',
    objetivos: [
      'Conduzir DDS eficazes',
      'Engajar equipes em segurança',
      'Identificar temas relevantes',
      'Avaliar efetividade dos diálogos'
    ],
    modules: [
      {
        title: "Fundamentos do DDS",
        description: "Conceito e importância do DDS, benefícios para a segurança, frequência e duração ideal, responsabilidades do condutor."
      },
      {
        title: "Planejamento do DDS",
        description: "Seleção de temas apropriados, preparação do material, definição de objetivos, cronograma de temas."
      },
      {
        title: "Condução Eficaz",
        description: "Técnicas de comunicação, envolvimento da equipe, uso de casos práticos, gestão do tempo."
      },
      {
        title: "Temas Essenciais",
        description: "Prevenção de acidentes típicos, uso correto de EPIs, ergonomia no trabalho, comportamento seguro."
      },
      {
        title: "Avaliação e Melhoria",
        description: "Feedback da equipe, registro e documentação, indicadores de eficácia, melhoria contínua do processo."
      }
    ],
    competencias: [
      {
        title: 'Comunicação e Liderança',
        icon: <MessageSquare className="h-5 w-5 text-indigo-600" />,
        skills: [
          'Técnicas de comunicação eficaz',
          'Envolvimento e engajamento de equipes',
          'Liderança em segurança',
          'Gestão de tempo em reuniões'
        ]
      },
      {
        title: 'Planejamento e Estruturação',
        icon: <BookOpen className="h-5 w-5 text-indigo-600" />,
        skills: [
          'Seleção de temas relevantes',
          'Preparação de material didático',
          'Definição de objetivos claros',
          'Cronograma estruturado de temas'
        ]
      },
      {
        title: 'Condução de Reuniões',
        icon: <Users className="h-5 w-5 text-indigo-600" />,
        skills: [
          'Facilitação de discussões',
          'Uso de casos práticos',
          'Manutenção do foco no tema',
          'Estímulo à participação'
        ]
      },
      {
        title: 'Avaliação e Melhoria',
        icon: <Award className="h-5 w-5 text-indigo-600" />,
        skills: [
          'Coleta de feedback da equipe',
          'Registro e documentação',
          'Análise de indicadores',
          'Implementação de melhorias'
        ]
      }
    ],
    certificacao: {
      validade: '2 anos',
      orgao: 'Certificado de Condutor de DDS',
      requisitos: [
        'Frequência mínima de 100%',
        'Participação em simulações práticas',
        'Elaboração de plano de DDS',
        'Demonstração de habilidades de comunicação'
      ]
    },
    theme: {
      primaryColor: 'indigo',
      gradientFrom: 'from-indigo-50',
      gradientTo: 'to-blue-50',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      ctaColor: 'bg-indigo-600'
    },
    heroIcon: <MessageSquare className="h-6 w-6 text-indigo-600" />,
    heroImage: "/training-covers/dds-dialogo-seguranca.png",
    ctaTitle: "Desenvolva Lideranças em Segurança",
    ctaSubtitle: "Capacitação para condução eficaz de Diálogos Diários de Segurança"
  },

  'seguranca-trabalho-geral': {
    title: 'Segurança do Trabalho - Geral',
    description: 'Curso abrangente sobre fundamentos de segurança do trabalho, abordando conceitos básicos, prevenção de acidentes e cultura de segurança para todos os trabalhadores.',
    duration: '8 horas',
    category: 'Segurança',
    format: 'Presencial/Online',
    location: 'Disponível em todo Brasil',
    nivel: 'Básico',
    objetivos: [
      'Compreender fundamentos de segurança',
      'Identificar riscos no ambiente de trabalho',
      'Aplicar medidas preventivas básicas',
      'Desenvolver cultura de segurança'
    ],
    modules: [
      {
        title: "Introdução à Segurança do Trabalho",
        description: "História da segurança do trabalho, conceitos fundamentais, legislação trabalhista básica e importância da prevenção no ambiente organizacional."
      },
      {
        title: "Identificação de Riscos",
        description: "Tipos de riscos ocupacionais, elaboração de mapas de riscos, técnicas de análise do ambiente de trabalho e comunicação eficaz de riscos."
      },
      {
        title: "Equipamentos de Proteção",
        description: "EPIs (Equipamentos de Proteção Individual), EPCs (Equipamentos de Proteção Coletiva), uso correto e manutenção adequada, responsabilidades legais."
      },
      {
        title: "Prevenção de Acidentes",
        description: "Principais causas de acidentes de trabalho, comportamento seguro, importância da ordem e limpeza, procedimentos básicos de segurança."
      },
      {
        title: "Emergências e Primeiros Socorros",
        description: "Plano de emergência básico, procedimentos de evacuação de áreas, primeiros socorros fundamentais e comunicação em situações de emergência."
      },
      {
        title: "Cultura de Segurança",
        description: "Responsabilidade individual na segurança, trabalho em equipe seguro, comunicação eficaz sobre segurança e processos de melhoria contínua."
      }
    ],
    competencias: [
      {
        title: 'Fundamentos e Conceitos',
        icon: <Shield className="h-5 w-5 text-cyan-600" />,
        skills: [
          'História e conceitos de segurança do trabalho',
          'Legislação trabalhista básica',
          'Importância da prevenção',
          'Responsabilidade individual'
        ]
      },
      {
        title: 'Identificação de Riscos',
        icon: <Eye className="h-5 w-5 text-cyan-600" />,
        skills: [
          'Reconhecimento de tipos de riscos ocupacionais',
          'Elaboração de mapas de riscos',
          'Análise do ambiente de trabalho',
          'Comunicação de riscos identificados'
        ]
      },
      {
        title: 'Prevenção e Proteção',
        icon: <HardHat className="h-5 w-5 text-cyan-600" />,
        skills: [
          'Uso correto de EPIs e EPCs',
          'Prevenção de acidentes',
          'Comportamento seguro no trabalho',
          'Ordem e limpeza preventivas'
        ]
      },
      {
        title: 'Emergências e Cultura',
        icon: <Users className="h-5 w-5 text-cyan-600" />,
        skills: [
          'Procedimentos de emergência básicos',
          'Primeiros socorros fundamentais',
          'Desenvolvimento de cultura de segurança',
          'Trabalho em equipe seguro'
        ]
      }
    ],
    certificacao: {
      validade: '2 anos',
      orgao: 'Certificado de Segurança do Trabalho',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica (mínimo 70%)',
        'Participação em atividades práticas',
        'Comprometimento com segurança'
      ]
    },
    theme: {
      primaryColor: 'cyan',
      gradientFrom: 'from-cyan-50',
      gradientTo: 'to-blue-50',
      bgColor: 'bg-cyan-100',
      textColor: 'text-cyan-600',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      ctaColor: 'bg-cyan-600'
    },
    heroIcon: <Shield className="h-6 w-6 text-cyan-600" />,
    heroImage: "/training-covers/seguranca-trabalho-geral.png",
    ctaTitle: "Construa uma Base Sólida",
    ctaSubtitle: "Fundamentos essenciais de segurança do trabalho - 8 horas de capacitação abrangente"
  },

  'lgpd-protecao-dados': {
    title: 'LGPD - Lei Geral de Proteção de Dados',
    description: 'Curso sobre a Lei Geral de Proteção de Dados Pessoais, abordando direitos dos titulares, obrigações das empresas e boas práticas de proteção de dados. Capacitação essencial para compliance organizacional.',
    duration: '6 horas',
    category: 'Compliance',
    format: 'Online/Presencial',
    location: 'São Paulo, SP',
    nivel: 'Básico',
    objetivos: [
      'Compreender os fundamentos da LGPD',
      'Identificar dados pessoais e sensíveis',
      'Aplicar princípios de proteção de dados',
      'Implementar medidas de compliance'
    ],
    modules: [
      {
        title: "Introdução à LGPD",
        description: "Contexto e objetivo da lei, âmbito de aplicação, conceitos fundamentais, e comparação com GDPR para compreensão global da proteção de dados."
      },
      {
        title: "Dados Pessoais e Sensíveis",
        description: "Definição de dados pessoais, dados pessoais sensíveis, dados anonimizados e pseudonimizados, titulares e controladores, e suas implicações legais."
      },
      {
        title: "Princípios e Bases Legais",
        description: "Princípios da proteção de dados, bases legais para tratamento, consentimento e suas características, e interesse legítimo como fundamento."
      },
      {
        title: "Direitos dos Titulares",
        description: "Direito de acesso e confirmação, correção e atualização, eliminação e portabilidade, e revogação do consentimento pelos titulares."
      },
      {
        title: "Obrigações das Organizações",
        description: "Medidas de segurança técnicas, governança e políticas, registro de atividades, e comunicação de incidentes às autoridades competentes."
      },
      {
        title: "Implementação e Compliance",
        description: "Programa de compliance, avaliação de impacto, encarregado de dados (DPO), sanções e multas, e estratégias de implementação prática."
      }
    ],
    competencias: [
      {
        title: 'Fundamentos da LGPD',
        icon: <Shield className="h-5 w-5 text-indigo-600" />,
        skills: [
          'Compreensão dos fundamentos da LGPD',
          'Âmbito de aplicação da lei',
          'Conceitos e definições fundamentais',
          'Comparação com regulamentações internacionais'
        ]
      },
      {
        title: 'Classificação de Dados',
        icon: <FileText className="h-5 w-5 text-indigo-600" />,
        skills: [
          'Identificação de dados pessoais',
          'Reconhecimento de dados sensíveis',
          'Técnicas de anonimização',
          'Papeis de titulares e controladores'
        ]
      },
      {
        title: 'Direitos e Princípios',
        icon: <Lock className="h-5 w-5 text-indigo-600" />,
        skills: [
          'Princípios da proteção de dados',
          'Bases legais para tratamento',
          'Gestão de consentimento',
          'Garantia dos direitos dos titulares'
        ]
      },
      {
        title: 'Compliance e Implementação',
        icon: <AlertTriangle className="h-5 w-5 text-indigo-600" />,
        skills: [
          'Programa de compliance organizacional',
          'Medidas de segurança técnicas',
          'Gestão de incidentes',
          'Papel do encarregado de dados (DPO)'
        ]
      }
    ],
    certificacao: {
      validade: '2 anos',
      orgao: 'Certificado em LGPD e Proteção de Dados',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica (mínimo 80%)',
        'Elaboração de plano de compliance',
        'Demonstração de conhecimento prático'
      ]
    },
    theme: {
      primaryColor: 'indigo',
      gradientFrom: 'from-indigo-50',
      gradientTo: 'to-purple-50',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      ctaColor: 'bg-indigo-600'
    },
    heroIcon: <Shield className="h-6 w-6 text-indigo-600" />,
    heroImage: "/training-covers/lgpd-protecao-dados.png",
    ctaTitle: "Compliance em Proteção de Dados",
    ctaSubtitle: "Capacitação completa sobre a LGPD - 6 horas de treinamento"
  },

  'covid-19-prevencao': {
    title: 'COVID-19 - Prevenção no Trabalho',
    description: 'Curso sobre medidas de prevenção e controle da COVID-19 no ambiente de trabalho, incluindo protocolos de segurança, uso correto de EPIs, organização do trabalho e adaptação ao trabalho remoto e híbrido.',
    duration: '4 horas',
    category: 'Saúde',
    format: 'Online/Presencial',
    location: 'São Paulo, SP',
    nivel: 'Básico',
    objetivos: [
      'Conhecer o vírus SARS-CoV-2',
      'Aplicar protocolos de prevenção',
      'Usar EPIs adequadamente',
      'Organizar ambiente de trabalho seguro'
    ],
    modules: [
      {
        title: "Conhecendo a COVID-19",
        description: "Características do vírus SARS-CoV-2, formas de transmissão, sintomas e evolução da doença, identificação de grupos de risco e compreensão dos impactos na saúde ocupacional."
      },
      {
        title: "Medidas de Prevenção Individual",
        description: "Higienização das mãos, uso correto de máscaras, etiqueta respiratória, distanciamento social e práticas individuais de proteção no ambiente de trabalho."
      },
      {
        title: "Organização do Ambiente de Trabalho",
        description: "Layout e distanciamento, ventilação adequada, limpeza e desinfecção, controle de acesso e adaptações necessárias para ambientes seguros."
      },
      {
        title: "Protocolo para Casos Suspeitos",
        description: "Identificação de sintomas, afastamento e isolamento, comunicação às autoridades competentes e procedimentos para retorno seguro ao trabalho."
      },
      {
        title: "Trabalho Remoto e Híbrido",
        description: "Organização do home office, ferramentas de comunicação, saúde mental no trabalho remoto, ergonomia em casa e adaptação a novos modelos de trabalho."
      }
    ],
    competencias: [
      {
        title: 'Conhecimento sobre COVID-19',
        icon: <Heart className="h-5 w-5 text-teal-600" />,
        skills: [
          'Características do vírus SARS-CoV-2',
          'Formas de transmissão e prevenção',
          'Identificação de sintomas',
          'Reconhecimento de grupos de risco'
        ]
      },
      {
        title: 'Medidas Preventivas',
        icon: <Shield className="h-5 w-5 text-teal-600" />,
        skills: [
          'Higienização correta das mãos',
          'Uso adequado de máscaras e EPIs',
          'Etiqueta respiratória',
          'Distanciamento social efetivo'
        ]
      },
      {
        title: 'Organização do Ambiente',
        icon: <Users className="h-5 w-5 text-teal-600" />,
        skills: [
          'Layout com distanciamento adequado',
          'Ventilação e qualidade do ar',
          'Protocolos de limpeza e desinfecção',
          'Controle de acesso e fluxo'
        ]
      },
      {
        title: 'Trabalho Remoto e Protocolos',
        icon: <Home className="h-5 w-5 text-teal-600" />,
        skills: [
          'Organização do home office',
          'Ferramentas de comunicação digital',
          'Protocolos para casos suspeitos',
          'Saúde mental e ergonomia'
        ]
      }
    ],
    certificacao: {
      validade: '1 ano',
      orgao: 'Certificado de Prevenção COVID-19',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica (mínimo 70%)',
        'Comprometimento com aplicação das medidas',
        'Atualização conforme protocolos sanitários'
      ]
    },
    theme: {
      primaryColor: 'teal',
      gradientFrom: 'from-teal-50',
      gradientTo: 'to-cyan-50',
      bgColor: 'bg-teal-100',
      textColor: 'text-teal-600',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      ctaColor: 'bg-teal-600'
    },
    heroIcon: <Shield className="h-6 w-6 text-teal-600" />,
    heroImage: "/training-covers/covid-19-prevencao.png",
    ctaTitle: "Proteja sua Equipe",
    ctaSubtitle: "Treinamento essencial em prevenção COVID-19 - 4 horas de capacitação em saúde ocupacional"
  },

  'ergonomia-postural': {
    title: 'Ergonomia e Postura no Trabalho',
    description: 'Curso sobre princípios ergonômicos e postura correta no trabalho, visando prevenir lesões musculoesqueléticas e promover bem-estar dos trabalhadores. Abordagem prática para melhorar qualidade de vida no ambiente laboral.',
    duration: '6 horas',
    category: 'Ergonomia',
    format: 'Presencial/Online',
    location: 'São Paulo, SP',
    nivel: 'Básico',
    objetivos: [
      'Compreender princípios ergonômicos',
      'Adotar posturas corretas no trabalho',
      'Prevenir LER/DORT',
      'Organizar ambiente de trabalho ergonômico'
    ],
    modules: [
      {
        title: "Fundamentos da Ergonomia",
        description: "Conceitos básicos de ergonomia, biomecânica do corpo humano, fatores de risco ergonômicos, impactos na saúde e produtividade, e introdução à ciência da adaptação do trabalho ao ser humano."
      },
      {
        title: "Postura e Coluna Vertebral",
        description: "Anatomia da coluna vertebral, posturas corretas sentado e em pé, curvaturas naturais da coluna, exercícios de fortalecimento, e prevenção de problemas posturais comuns."
      },
      {
        title: "Ambiente de Trabalho Ergonômico",
        description: "Ajuste de cadeira e mesa, posicionamento de monitor, apoio para pés e braços, iluminação adequada, e configuração ideal do posto de trabalho para máximo conforto."
      },
      {
        title: "Movimentos e Gestos",
        description: "Movimentos repetitivos, levantamento de cargas, alcance e pegada, variação de posturas, e técnicas para executar atividades laborais com menor risco de lesão."
      },
      {
        title: "Prevenção de LER/DORT",
        description: "Lesões mais comuns, sinais de alerta, pausas e alongamentos, ginástica laboral, e estratégias eficazes para prevenir lesões por esforços repetitivos."
      },
      {
        title: "Aplicação Prática",
        description: "Avaliação do posto de trabalho, exercícios práticos, plano de melhoria ergonômica, manutenção de bons hábitos, e implementação de mudanças sustentáveis no dia a dia."
      }
    ],
    competencias: [
      {
        title: 'Princípios Ergonômicos',
        icon: <UserCheck className="h-5 w-5 text-lime-600" />,
        skills: [
          'Conceitos básicos de ergonomia',
          'Biomecânica do corpo humano',
          'Fatores de risco ergonômicos',
          'Relação ergonomia-produtividade'
        ]
      },
      {
        title: 'Postura e Biomecânica',
        icon: <Activity className="h-5 w-5 text-lime-600" />,
        skills: [
          'Anatomia da coluna vertebral',
          'Posturas corretas sentado e em pé',
          'Curvaturas naturais da coluna',
          'Exercícios de fortalecimento'
        ]
      },
      {
        title: 'Configuração do Ambiente',
        icon: <Monitor className="h-5 w-5 text-lime-600" />,
        skills: [
          'Ajuste de cadeira e mesa',
          'Posicionamento correto de monitor',
          'Apoios para pés e braços',
          'Iluminação e organização do espaço'
        ]
      },
      {
        title: 'Prevenção e Exercícios',
        icon: <Dumbbell className="h-5 w-5 text-lime-600" />,
        skills: [
          'Prevenção de LER/DORT',
          'Pausas e alongamentos',
          'Ginástica laboral',
          'Manutenção de bons hábitos'
        ]
      }
    ],
    certificacao: {
      validade: '2 anos',
      orgao: 'Certificado em Ergonomia e Postura',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica (mínimo 70%)',
        'Demonstração prática de posturas',
        'Elaboração de plano ergonômico'
      ]
    },
    theme: {
      primaryColor: 'lime',
      gradientFrom: 'from-lime-50',
      gradientTo: 'to-green-50',
      bgColor: 'bg-lime-100',
      textColor: 'text-lime-600',
      iconBg: 'bg-lime-100',
      iconColor: 'text-lime-600',
      ctaColor: 'bg-lime-600'
    },
    heroIcon: <UserCheck className="h-6 w-6 text-lime-600" />,
    heroImage: "/training-covers/ergonomia-postural.png",
    ctaTitle: "Trabalhe com Conforto",
    ctaSubtitle: "Treinamento completo em ergonomia - 6 horas de capacitação em bem-estar no trabalho"
  },

  'brigada-incendio': {
    title: 'Brigada de Incêndio',
    description: 'Curso para formação de brigadistas, capacitando profissionais para prevenção, combate a princípios de incêndio e atendimento a emergências.',
    duration: '16 horas',
    category: 'Emergência',
    format: 'Presencial',
    location: 'Disponível em todo Brasil',
    nivel: 'Intermediário',
    objetivos: [
      'Formar brigadistas competentes',
      'Prevenir e combater incêndios',
      'Coordenar evacuações de emergência',
      'Prestar primeiros socorros'
    ],
    modules: [
      {
        title: "Fundamentos da Brigada",
        description: "Conceito e importância da brigada, responsabilidades do brigadista, organização da brigada e legislação aplicável para formação de equipes de emergência."
      },
      {
        title: "Teoria do Fogo",
        description: "Triângulo e tetraedro do fogo, classificação das classes de incêndio, métodos de extinção disponíveis e compreensão dos processos de propagação do fogo."
      },
      {
        title: "Equipamentos de Combate",
        description: "Conhecimento sobre extintores portáteis, mangueiras e hidrantes, equipamentos de proteção individual e coletiva, inspeção e manutenção preventiva."
      },
      {
        title: "Técnicas de Combate",
        description: "Técnicas de aproximação e ataque ao fogo, métodos de aplicação de agentes extintores, trabalho em equipe coordenado e segurança do brigadista."
      },
      {
        title: "Abandono e Evacuação",
        description: "Elaboração e execução de planos de evacuação, definição de rotas de fuga seguras, estabelecimento de pontos de encontro e controle de pânico."
      },
      {
        title: "Primeiros Socorros",
        description: "Avaliação inicial da vítima, tratamento de queimaduras, atendimento a intoxicação por fumaça e técnicas adequadas de transporte de feridos."
      }
    ],
    competencias: [
      {
        title: 'Fundamentos e Teoria',
        icon: <Flame className="h-5 w-5 text-red-600" />,
        skills: [
          'Conceito e importância da brigada',
          'Responsabilidades do brigadista',
          'Triângulo e tetraedro do fogo',
          'Classes de incêndio e métodos de extinção'
        ]
      },
      {
        title: 'Equipamentos e Combate',
        icon: <Shield className="h-5 w-5 text-red-600" />,
        skills: [
          'Uso de extintores portáteis',
          'Operação de mangueiras e hidrantes',
          'Técnicas de aproximação e ataque',
          'Inspeção e manutenção de equipamentos'
        ]
      },
      {
        title: 'Evacuação e Coordenação',
        icon: <Users className="h-5 w-5 text-red-600" />,
        skills: [
          'Elaboração de planos de evacuação',
          'Definição de rotas de fuga',
          'Controle de pânico em emergências',
          'Coordenação de equipes'
        ]
      },
      {
        title: 'Primeiros Socorros',
        icon: <Activity className="h-5 w-5 text-red-600" />,
        skills: [
          'Avaliação inicial da vítima',
          'Tratamento de queimaduras',
          'Atendimento a intoxicação por fumaça',
          'Transporte seguro de feridos'
        ]
      }
    ],
    certificacao: {
      validade: '1 ano',
      orgao: 'Certificado de Brigadista',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica (mínimo 70%)',
        'Aprovação na avaliação prática',
        'Aptidão física e mental'
      ]
    },
    theme: {
      primaryColor: 'red',
      gradientFrom: 'from-red-50',
      gradientTo: 'to-orange-50',
      bgColor: 'bg-red-100',
      textColor: 'text-red-600',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      ctaColor: 'bg-red-600'
    },
    heroIcon: <Flame className="h-6 w-6 text-red-600" />,
    heroImage: "/training-covers/brigada-incendio.png",
    ctaTitle: "Torne-se um Brigadista",
    ctaSubtitle: "Formação completa para prevenção e combate a incêndios - 16 horas de treinamento intensivo"
  },

  'nr-06-epi': {
    title: 'NR-06 - Equipamento de Proteção Individual - EPI',
    description: 'Aprenda tudo sobre Equipamentos de Proteção Individual (EPI) com base na NR-6. Este curso capacita o trabalhador para identificar, utilizar e conservar corretamente os EPIs, promovendo a segurança e prevenindo acidentes no ambiente de trabalho.',
    duration: '8 horas',
    category: 'Segurança',
    format: 'Presencial/Online',
    location: 'Disponível em todo Brasil',
    nivel: 'Básico',
    objetivos: [
      'Identificar e selecionar corretamente os EPIs adequados para cada atividade',
      'Utilizar adequadamente os equipamentos de proteção individual',
      'Conservar e manter os EPIs em boas condições de uso',
      'Compreender as responsabilidades legais no uso de EPIs'
    ],
    modules: [
      {
        title: "Objetivos, conceitos, tipos e função dos EPIs",
        description: "Introdução aos conceitos fundamentais dos EPIs, seu papel na prevenção de acidentes e a importância no contexto da segurança do trabalho. Classificação e tipos de equipamentos de proteção individual."
      },
      {
        title: "Estudo da Norma NR-6",
        description: "Análise detalhada da NR-6, obrigatoriedade do uso dos EPIs, Certificado de Aprovação (CA) e requisitos legais e normativos que regulamentam os equipamentos de proteção."
      },
      {
        title: "Responsabilidades do empregado e empregador",
        description: "Deveres e obrigações do empregador e responsabilidades do empregado. Fornecimento e substituição de EPIs, treinamento e conscientização dos trabalhadores."
      },
      {
        title: "Vantagens e benefícios do uso correto dos EPIs",
        description: "Proteção para cabeça, olhos, face, audição, respiração, membros superiores e inferiores, tronco e corpo inteiro. Aplicação prática nas diversas atividades laborais."
      },
      {
        title: "Limpeza e manutenção de EPIs de uso pessoal",
        description: "Boas práticas para limpeza de EPIs, procedimentos de higienização, armazenamento adequado dos equipamentos e manutenção preventiva com inspeção periódica."
      }
    ],
    competencias: [
      {
        title: 'Seleção e Identificação',
        icon: <Shield className="h-5 w-5 text-emerald-600" />,
        skills: [
          'Identificação dos EPIs adequados para cada atividade',
          'Seleção baseada na análise de riscos',
          'Verificação do Certificado de Aprovação (CA)',
          'Classificação de equipamentos por tipo de proteção'
        ]
      },
      {
        title: 'Uso e Aplicação',
        icon: <HardHat className="h-5 w-5 text-emerald-600" />,
        skills: [
          'Utilização adequada dos equipamentos',
          'Técnicas corretas de colocação e ajuste',
          'Inspeção visual antes do uso',
          'Aplicação prática nas atividades laborais'
        ]
      },
      {
        title: 'Manutenção e Conservação',
        icon: <Shield className="h-5 w-5 text-emerald-600" />,
        skills: [
          'Procedimentos de limpeza e higienização',
          'Armazenamento adequado dos equipamentos',
          'Manutenção preventiva e inspeção periódica',
          'Identificação de sinais de desgaste'
        ]
      },
      {
        title: 'Responsabilidades Legais',
        icon: <BookOpen className="h-5 w-5 text-emerald-600" />,
        skills: [
          'Conhecimento da legislação NR-6',
          'Obrigações do empregador e empregado',
          'Procedimentos em caso de não conformidade',
          'Importância do treinamento e conscientização'
        ]
      }
    ],
    certificacao: {
      validade: '2 anos',
      orgao: 'Certificado conforme NR-06 do MTE',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica',
        'Demonstração prática do uso correto dos EPIs'
      ]
    },
    theme: {
      primaryColor: 'emerald',
      gradientFrom: 'from-emerald-50',
      gradientTo: 'to-green-50',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-600',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      ctaColor: 'bg-emerald-600'
    },
    heroIcon: <Shield className="h-6 w-6 text-emerald-600" />,
    heroImage: "/training-covers/nr-06-epi.png",
    ctaTitle: "Proteja-se com Conhecimento",
    ctaSubtitle: "Treinamento completo em EPIs conforme NR-06 - 8 horas de curso básico"
  },

  'nr-33-espaco-confinado': {
    title: 'NR-33 Trabalhadores Autorizados e Vigias em Espaço Confinado',
    description: 'Capacita profissionais para atuar com segurança em espaços confinados, conforme a NR-33, abordando identificação e controle de riscos, uso correto de equipamentos, procedimentos de entrada e trabalho, além de noções de resgate e primeiros socorros.',
    duration: '16 horas',
    category: 'Segurança',
    format: 'Presencial + Online',
    location: 'Disponível em todo Brasil',
    nivel: 'Intermediário',
    objetivos: [
      'Identificar e avaliar espaços confinados',
      'Controlar riscos específicos desses ambientes',
      'Executar procedimentos seguros de entrada e trabalho',
      'Atuar como vigia de segurança',
      'Aplicar noções básicas de resgate e primeiros socorros'
    ],
    modules: [
      {
        title: "Definições da NR-33",
        description: "Apresentação da Norma Regulamentadora NR-33, definição legal de espaço confinado, exigências para trabalho seguro, responsabilidades de trabalhadores e empregadores, e documentação obrigatória."
      },
      {
        title: "Reconhecimento, avaliação e controle de riscos",
        description: "Métodos de identificação de riscos, avaliação de atmosferas perigosas, controle de riscos físicos e químicos, estratégias de mitigação e medidas de segurança preventivas."
      },
      {
        title: "Funcionamento de equipamentos utilizados",
        description: "Equipamentos de monitoramento atmosférico, sistemas de ventilação e exaustão, equipamentos de comunicação, dispositivos de resgate, manutenção e inspeção de equipamentos."
      },
      {
        title: "Procedimentos e utilização da PET",
        description: "Permissão de Entrada e Trabalho (PET), preenchimento correto da documentação, procedimentos de liberação de entrada, checklist de segurança, validade e renovação da PET."
      },
      {
        title: "Noções de resgate e primeiros socorros",
        description: "Técnicas básicas de resgate, uso de equipamentos de salvamento, primeiros socorros específicos, procedimentos em caso de emergência, comunicação com equipes externas e simulação prática de resgate."
      }
    ],
    competencias: [
      {
        title: "Identificação e Avaliação",
        icon: <AlertTriangle className="h-5 w-5 text-purple-600" />,
        skills: [
          'Identificação de espaços confinados',
          'Avaliação de atmosferas perigosas',
          'Análise de riscos químicos e físicos',
          'Métodos de monitoramento contínuo'
        ]
      },
      {
        title: "Controle e Prevenção",
        icon: <Shield className="h-5 w-5 text-purple-600" />,
        skills: [
          'Medidas de controle de riscos',
          'Procedimentos seguros de entrada',
          'Uso correto de EPIs e EPCs',
          'Sistemas de ventilação forçada'
        ]
      },
      {
        title: "Documentação e PET",
        icon: <BookOpen className="h-5 w-5 text-purple-600" />,
        skills: [
          'Preenchimento da PET',
          'Procedimentos de liberação',
          'Checklist de segurança',
          'Controle de validade da PET'
        ]
      },
      {
        title: "Resgate e Emergência",
        icon: <Users className="h-5 w-5 text-purple-600" />,
        skills: [
          'Técnicas de resgate em espaços confinados',
          'Primeiros socorros específicos',
          'Comunicação de emergência',
          'Simulações práticas'
        ]
      }
    ],
    certificacao: {
      validade: '1 ano',
      orgao: 'Certificado reconhecido conforme NR-33',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica (mínimo 70%)',
        'Aprovação na avaliação prática',
        'Participação em simulados de resgate',
        'Aptidão médica comprovada'
      ]
    },
    theme: {
      primaryColor: 'purple',
      gradientFrom: 'from-purple-50',
      gradientTo: 'to-indigo-50',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      ctaColor: 'bg-purple-600'
    },
    heroIcon: <AlertTriangle className="h-6 w-6 text-purple-600" />,
    heroImage: "/training-covers/nr-33-espaco-confinado.png",
    ctaTitle: "Capacite sua equipe para trabalho seguro em espaços confinados",
    ctaSubtitle: "Treinamento completo conforme NR-33 com foco na segurança e prevenção de acidentes"
  },

  'nr-05-cipa-grau-risco-1': {
    title: 'NR-05 CIPA Grau de Risco 1',
    description: 'Capacita os integrantes da CIPA no grau de risco 1 para identificar riscos, propor medidas preventivas, promover a saúde e a segurança no ambiente de trabalho, e agir de forma eficiente em situações de emergência, conforme a NR-05.',
    duration: '8 horas',
    category: 'Segurança',
    format: 'Presencial/Online',
    location: 'Disponível em todo Brasil',
    nivel: 'Básico',
    objetivos: [
      'Identificar riscos no ambiente de trabalho e processos produtivos',
      'Propor medidas preventivas eficazes para segurança ocupacional',
      'Promover a saúde e segurança no ambiente de trabalho',
      'Agir de forma eficiente em situações de emergência'
    ],
    modules: [
      {
        title: "Estudo do ambiente, das condições de trabalho, bem como dos riscos originados do processo produtivo",
        description: "Análise aprofundada do ambiente de trabalho, identificação de riscos no processo produtivo, compreensão das condições que influenciam a segurança e fatores que afetam a saúde dos trabalhadores."
      },
      {
        title: "Noções sobre acidentes e doenças relacionadas ao trabalho",
        description: "Principais acidentes e doenças ocupacionais, causas e fatores de risco, estratégias de prevenção e condições específicas de cada ambiente laboral."
      },
      {
        title: "Metodologia de investigação e análise de acidentes e doenças relacionadas ao trabalho",
        description: "Métodos de investigação de acidentes de trabalho, análise de doenças ocupacionais, identificação de causas raiz e implementação de ações corretivas e preventivas."
      },
      {
        title: "Princípios gerais de higiene do trabalho e de medidas de prevenção dos riscos",
        description: "Conceitos fundamentais de higiene ocupacional, práticas essenciais para controle de riscos, medidas de prevenção de riscos à saúde e controle ambiental no trabalho."
      },
      {
        title: "Noções sobre as legislações trabalhista e previdenciária",
        description: "Principais normas de segurança do trabalho, leis que regulamentam a saúde ocupacional, direitos trabalhistas no Brasil e aspectos previdenciários relacionados."
      },
      {
        title: "Noções sobre a inclusão de pessoas com deficiência e reabilitados",
        description: "Práticas de inclusão no ambiente de trabalho, integração de pessoas com deficiência, adaptação de postos de trabalho e promoção de ambientes acessíveis e igualitários."
      },
      {
        title: "Violência, assédio, igualdade e diversidade no âmbito do trabalho",
        description: "Estratégias de prevenção ao assédio, promoção da igualdade no ambiente corporativo, valorização da diversidade no trabalho e criação de ambientes respeitosos e inclusivos."
      },
      {
        title: "Organização da CIPA e outros assuntos necessários",
        description: "Estruturação e funcionamento da CIPA, atribuições dos membros da comissão, processos eleitorais e mandatos, aspectos complementares para prevenção de acidentes."
      }
    ],
    competencias: [
      {
        title: 'Identificação e Análise de Riscos',
        icon: <Shield className="h-5 w-5 text-blue-600" />,
        skills: [
          'Análise aprofundada do ambiente de trabalho',
          'Identificação de riscos no processo produtivo',
          'Avaliação de condições de segurança',
          'Reconhecimento de fatores de risco ocupacional'
        ]
      },
      {
        title: 'Prevenção e Controle',
        icon: <HardHat className="h-5 w-5 text-blue-600" />,
        skills: [
          'Proposição de medidas preventivas eficazes',
          'Aplicação de princípios de higiene ocupacional',
          'Controle ambiental no trabalho',
          'Implementação de ações corretivas'
        ]
      },
      {
        title: 'Gestão CIPA e Legislação',
        icon: <BookOpen className="h-5 w-5 text-blue-600" />,
        skills: [
          'Estruturação e funcionamento da CIPA',
          'Conhecimento da legislação trabalhista',
          'Processos eleitorais e mandatos',
          'Aspectos previdenciários relacionados'
        ]
      },
      {
        title: 'Inclusão e Diversidade',
        icon: <Users className="h-5 w-5 text-blue-600" />,
        skills: [
          'Práticas de inclusão no trabalho',
          'Prevenção ao assédio e violência',
          'Promoção da igualdade e diversidade',
          'Criação de ambientes respeitosos'
        ]
      }
    ],
    certificacao: {
      validade: '1 ano',
      orgao: 'Certificado conforme NR-05 do MTE',
      requisitos: [
        'Frequência mínima de 100%',
        'Participação ativa nas discussões',
        'Conclusão de todos os módulos'
      ]
    },
    theme: {
      primaryColor: 'blue',
      gradientFrom: 'from-blue-50',
      gradientTo: 'to-sky-50',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      ctaColor: 'bg-blue-600'
    },
    heroIcon: <HardHat className="h-6 w-6 text-blue-600" />,
    heroImage: "/training-covers/nr-05-cipa.png",
    ctaTitle: "Forme uma CIPA Eficiente",
    ctaSubtitle: "Capacitação essencial para integrantes da CIPA - 8 horas de treinamento especializado"
  },

  'ginastica-laboral': {
    title: 'Ginástica Laboral e Exercícios no Trabalho',
    description: 'Curso prático sobre ginástica laboral, exercícios de alongamento e fortalecimento para prevenção de lesões e melhoria da qualidade de vida no trabalho. Capacitação completa para implementar programas de bem-estar corporativo.',
    duration: '4 horas',
    category: 'Bem-estar',
    format: 'Presencial/Online',
    location: 'São Paulo, SP',
    nivel: 'Básico',
    objetivos: [
      'Implementar programa de ginástica laboral',
      'Orientar exercícios preventivos',
      'Promover bem-estar dos trabalhadores',
      'Reduzir absenteísmo por lesões'
    ],
    modules: [
      {
        title: "Fundamentos da Ginástica Laboral",
        description: "Conceito e benefícios, tipos de ginástica laboral, momento ideal para aplicação, planejamento de programa e introdução aos princípios do bem-estar no ambiente de trabalho."
      },
      {
        title: "Exercícios Preparatórios",
        description: "Aquecimento muscular, mobilização articular, exercícios respiratórios, preparação para o trabalho e técnicas para começar o dia com energia e disposição."
      },
      {
        title: "Exercícios Compensatórios",
        description: "Alongamento muscular, exercícios de fortalecimento, correção postural, relaxamento e práticas para compensar as tensões acumuladas durante o trabalho."
      },
      {
        title: "Exercícios por Atividade",
        description: "Trabalho de escritório, atividades repetitivas, trabalho em pé, levantamento de cargas e exercícios específicos para diferentes tipos de ocupações profissionais."
      },
      {
        title: "Implementação do Programa",
        description: "Engajamento da equipe, cronograma de atividades, monitoramento de resultados, ajustes e melhorias para garantir o sucesso e sustentabilidade do programa."
      }
    ],
    competencias: [
      {
        title: 'Fundamentos e Planejamento',
        icon: <Heart className="h-5 w-5 text-emerald-600" />,
        skills: [
          'Conceitos básicos da ginástica laboral',
          'Benefícios para saúde ocupacional',
          'Tipos e momentos de aplicação',
          'Planejamento de programa estruturado'
        ]
      },
      {
        title: 'Exercícios Preparatórios',
        icon: <Activity className="h-5 w-5 text-emerald-600" />,
        skills: [
          'Técnicas de aquecimento muscular',
          'Mobilização articular eficaz',
          'Exercícios respiratórios',
          'Preparação corporal para o trabalho'
        ]
      },
      {
        title: 'Exercícios Compensatórios',
        icon: <Dumbbell className="h-5 w-5 text-emerald-600" />,
        skills: [
          'Alongamento muscular direcionado',
          'Exercícios de fortalecimento',
          'Correção postural',
          'Técnicas de relaxamento'
        ]
      },
      {
        title: 'Implementação e Gestão',
        icon: <Users className="h-5 w-5 text-emerald-600" />,
        skills: [
          'Engajamento de equipes',
          'Cronograma de atividades',
          'Monitoramento de resultados',
          'Adaptação para diferentes atividades'
        ]
      }
    ],
    certificacao: {
      validade: '1 ano',
      orgao: 'Certificado de Instrutor de Ginástica Laboral',
      requisitos: [
        'Frequência mínima de 100%',
        'Demonstração prática de exercícios',
        'Elaboração de programa personalizado',
        'Comprometimento com bem-estar'
      ]
    },
    theme: {
      primaryColor: 'emerald',
      gradientFrom: 'from-emerald-50',
      gradientTo: 'to-teal-50',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-600',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      ctaColor: 'bg-emerald-600'
    },
    heroIcon: <Activity className="h-6 w-6 text-emerald-600" />,
    heroImage: "/training-covers/ginastica-laboral.png",
    ctaTitle: "Promova Bem-estar",
    ctaSubtitle: "Capacitação prática em ginástica laboral - 4 horas de treinamento em qualidade de vida no trabalho"
  },

  'meio-ambiente-sustentabilidade': {
    title: 'Meio Ambiente e Sustentabilidade',
    description: 'Curso sobre consciência ambiental e práticas sustentáveis no ambiente de trabalho, abordando gestão de resíduos, eficiência energética e responsabilidade socioambiental. Capacitação completa para implementar ações sustentáveis na organização.',
    duration: '8 horas',
    category: 'Sustentabilidade',
    format: 'Online/Presencial',
    location: 'São Paulo, SP',
    nivel: 'Básico',
    objetivos: [
      'Desenvolver consciência ambiental',
      'Implementar práticas sustentáveis',
      'Gerenciar resíduos adequadamente',
      'Promover eficiência energética'
    ],
    modules: [
      {
        title: "Fundamentos da Sustentabilidade",
        description: "Conceitos de sustentabilidade, desenvolvimento sustentável, impactos ambientais das atividades, responsabilidade socioambiental e introdução aos princípios do desenvolvimento sustentável empresarial."
      },
      {
        title: "Gestão de Resíduos",
        description: "Classificação de resíduos, política dos 5Rs (Recusar, Reduzir, Reutilizar, Reciclar, Repensar), coleta seletiva, destinação adequada e estratégias para minimização de resíduos organizacionais."
      },
      {
        title: "Eficiência Energética",
        description: "Consumo consciente de energia, fontes renováveis de energia, tecnologias eficientes, monitoramento do consumo e implementação de práticas de economia energética no ambiente corporativo."
      },
      {
        title: "Recursos Hídricos",
        description: "Uso racional da água, tratamento de efluentes, captação de água da chuva, prevenção da poluição hídrica e gestão sustentável dos recursos hídricos organizacionais."
      },
      {
        title: "Práticas Sustentáveis no Trabalho",
        description: "Redução do uso de papel, transporte sustentável, compras responsáveis, educação ambiental e implementação de iniciativas verdes no dia a dia corporativo."
      },
      {
        title: "Certificações Ambientais",
        description: "ISO 14001, selo verde, carbono neutro, relatórios de sustentabilidade e processos para obtenção de certificações ambientais empresariais reconhecidas."
      }
    ],
    competencias: [
      {
        title: 'Fundamentos Ambientais',
        icon: <Leaf className="h-5 w-5 text-green-600" />,
        skills: [
          'Conceitos de sustentabilidade empresarial',
          'Desenvolvimento sustentável',
          'Impactos ambientais das atividades',
          'Responsabilidade socioambiental'
        ]
      },
      {
        title: 'Gestão de Resíduos',
        icon: <Recycle className="h-5 w-5 text-green-600" />,
        skills: [
          'Classificação e destinação de resíduos',
          'Política dos 5Rs na prática',
          'Implementação de coleta seletiva',
          'Minimização de resíduos organizacionais'
        ]
      },
      {
        title: 'Eficiência de Recursos',
        icon: <Zap className="h-5 w-5 text-green-600" />,
        skills: [
          'Consumo consciente de energia',
          'Tecnologias eficientes e renováveis',
          'Monitoramento e controle energético',
          'Otimização do uso de recursos'
        ]
      },
      {
        title: 'Gestão Hídrica e Certificações',
        icon: <Droplets className="h-5 w-5 text-green-600" />,
        skills: [
          'Uso racional de recursos hídricos',
          'Tratamento e reuso de efluentes',
          'Obtenção de certificações ambientais',
          'Relatórios de sustentabilidade'
        ]
      }
    ],
    certificacao: {
      validade: '2 anos',
      orgao: 'Certificado em Sustentabilidade Empresarial',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica (mínimo 70%)',
        'Elaboração de plano de ação ambiental',
        'Comprometimento com práticas sustentáveis'
      ]
    },
    theme: {
      primaryColor: 'green',
      gradientFrom: 'from-green-50',
      gradientTo: 'to-emerald-50',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      ctaColor: 'bg-green-600'
    },
    heroIcon: <Leaf className="h-6 w-6 text-green-600" />,
    heroImage: "/training-covers/meio-ambiente-sustentabilidade.png",
    ctaTitle: "Construa um Futuro Sustentável",
    ctaSubtitle: "Capacitação completa em sustentabilidade - 8 horas de treinamento em responsabilidade ambiental"
  },

  'investigacao-acidentes': {
    title: 'Investigação e Análise de Acidentes',
    description: 'Curso técnico para profissionais de segurança sobre metodologias de investigação de acidentes, análise de causas raiz e elaboração de planos de ação preventivos. Capacitação avançada com técnicas científicas de investigação.',
    duration: '12 horas',
    category: 'Técnico',
    format: 'Presencial',
    location: 'São Paulo, SP',
    nivel: 'Avançado',
    objetivos: [
      'Dominar técnicas de investigação',
      'Identificar causas raiz de acidentes',
      'Elaborar relatórios técnicos',
      'Desenvolver planos de ação preventivos'
    ],
    modules: [
      {
        title: "Fundamentos da Investigação",
        description: "Objetivos da investigação de acidentes, princípios básicos de investigação, tipos de acidentes e incidentes, aspectos legais e normativos, e introdução às metodologias investigativas."
      },
      {
        title: "Coleta de Evidências",
        description: "Preservação do local, técnicas de coleta de dados, entrevistas com envolvidos, documentação fotográfica, e métodos sistemáticos para garantir a integridade das evidências."
      },
      {
        title: "Metodologias de Análise",
        description: "Árvore de Causas, Diagrama de Ishikawa, Análise de Barreiras, Método TRIPOD, e outras ferramentas científicas para investigação sistemática de acidentes."
      },
      {
        title: "Análise de Causas Raiz",
        description: "Identificação de causas imediatas, causas básicas ou fundamentais, fatores organizacionais, análise sistêmica, e compreensão profunda dos fatores contribuintes."
      },
      {
        title: "Relatório de Investigação",
        description: "Estrutura do relatório, cronologia dos fatos, conclusões e recomendações, comunicação dos resultados, e técnicas para elaboração de documentos técnicos eficazes."
      },
      {
        title: "Planos de Ação",
        description: "Hierarquia de controles, elaboração de medidas preventivas, cronograma de implementação, monitoramento da eficácia, e garantia de melhorias contínuas na segurança."
      }
    ],
    competencias: [
      {
        title: 'Técnicas de Investigação',
        icon: <Search className="h-5 w-5 text-slate-600" />,
        skills: [
          'Fundamentos da investigação científica',
          'Preservação e coleta de evidências',
          'Técnicas de entrevista investigativa',
          'Documentação fotográfica forense'
        ]
      },
      {
        title: 'Metodologias de Análise',
        icon: <ChartBar className="h-5 w-5 text-slate-600" />,
        skills: [
          'Árvore de Causas e Ishikawa',
          'Análise de Barreiras e TRIPOD',
          'Identificação de causas raiz',
          'Análise sistêmica de fatores'
        ]
      },
      {
        title: 'Documentação Técnica',
        icon: <FileText className="h-5 w-5 text-slate-600" />,
        skills: [
          'Elaboração de relatórios técnicos',
          'Cronologia e sequenciamento de fatos',
          'Conclusões e recomendações',
          'Comunicação eficaz de resultados'
        ]
      },
      {
        title: 'Ações Preventivas',
        icon: <ClipboardCheck className="h-5 w-5 text-slate-600" />,
        skills: [
          'Hierarquia de controles de risco',
          'Elaboração de medidas preventivas',
          'Cronograma de implementação',
          'Monitoramento de eficácia'
        ]
      }
    ],
    certificacao: {
      validade: '3 anos',
      orgao: 'Certificado de Especialista em Investigação de Acidentes',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica (mínimo 85%)',
        'Estudo de caso prático',
        'Formação técnica em segurança'
      ]
    },
    theme: {
      primaryColor: 'slate',
      gradientFrom: 'from-slate-50',
      gradientTo: 'to-gray-50',
      bgColor: 'bg-slate-100',
      textColor: 'text-slate-600',
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-600',
      ctaColor: 'bg-slate-600'
    },
    heroIcon: <Search className="h-6 w-6 text-slate-600" />,
    heroImage: "/training-covers/investigacao-acidentes.png",
    ctaTitle: "Domine a Investigação Técnica",
    ctaSubtitle: "Capacitação avançada em análise de acidentes - 12 horas de treinamento especializado"
  },

  'apr-analise-risco': {
    title: 'APR - Análise Preliminar de Riscos',
    description: 'Curso sobre Análise Preliminar de Riscos, ferramenta fundamental para identificação, avaliação e controle de riscos no ambiente de trabalho.',
    duration: '8 horas',
    category: 'Segurança',
    format: 'Presencial/Online',
    location: 'Disponível em todo Brasil',
    nivel: 'Intermediário',
    objetivos: [
      'Dominar a metodologia da APR',
      'Identificar e avaliar riscos sistematicamente',
      'Propor medidas de controle adequadas',
      'Elaborar documentos de APR'
    ],
    modules: [
      {
        title: "Introdução à Análise de Riscos",
        description: "Conceitos básicos de risco, importância da análise preliminar, quando aplicar a APR e benefícios para a organização na gestão proativa de segurança."
      },
      {
        title: "Metodologia da APR",
        description: "Etapas da análise preliminar, técnicas de identificação de perigos, métodos de avaliação de probabilidade e análise estruturada de consequências."
      },
      {
        title: "Ferramentas e Técnicas",
        description: "Brainstorming estruturado, checklist de verificação, matriz de probabilidade x consequência e introdução à árvore de falhas básica."
      },
      {
        title: "Classificação de Riscos",
        description: "Critérios de classificação, níveis de risco (baixo, médio, alto), conceitos de tolerabilidade de riscos e priorização de ações corretivas."
      },
      {
        title: "Medidas de Controle",
        description: "Hierarquia de controles, técnicas de eliminação e substituição, controles de engenharia e implementação de controles administrativos e EPIs."
      },
      {
        title: "Documentação e Acompanhamento",
        description: "Estrutura do documento APR, processos de revisões periódicas, integração com outros sistemas de gestão e monitoramento da eficácia."
      }
    ],
    competencias: [
      {
        title: 'Identificação e Avaliação',
        icon: <Search className="h-5 w-5 text-amber-600" />,
        skills: [
          'Conceitos básicos de risco',
          'Identificação sistemática de perigos',
          'Avaliação de probabilidade de ocorrência',
          'Análise estruturada de consequências'
        ]
      },
      {
        title: 'Metodologia e Ferramentas',
        icon: <Target className="h-5 w-5 text-amber-600" />,
        skills: [
          'Domínio da metodologia APR',
          'Brainstorming estruturado',
          'Uso de checklist de verificação',
          'Aplicação de matriz probabilidade x consequência'
        ]
      },
      {
        title: 'Controle e Prevenção',
        icon: <Shield className="h-5 w-5 text-amber-600" />,
        skills: [
          'Hierarquia de controles',
          'Técnicas de eliminação e substituição',
          'Implementação de controles de engenharia',
          'Controles administrativos e EPIs'
        ]
      },
      {
        title: 'Documentação e Gestão',
        icon: <BookOpen className="h-5 w-5 text-amber-600" />,
        skills: [
          'Elaboração de documentos APR',
          'Revisões periódicas estruturadas',
          'Integração com sistemas de gestão',
          'Monitoramento da eficácia das medidas'
        ]
      }
    ],
    certificacao: {
      validade: '2 anos',
      orgao: 'Certificado em Análise Preliminar de Riscos',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica (mínimo 80%)',
        'Elaboração de APR prática',
        'Demonstração de competência técnica'
      ]
    },
    theme: {
      primaryColor: 'amber',
      gradientFrom: 'from-amber-50',
      gradientTo: 'to-yellow-50',
      bgColor: 'bg-amber-100',
      textColor: 'text-amber-600',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      ctaColor: 'bg-amber-600'
    },
    heroIcon: <Search className="h-6 w-6 text-amber-600" />,
    heroImage: "/training-covers/analise-risco.png",
    ctaTitle: "Domine a Análise de Riscos",
    ctaSubtitle: "Capacitação especializada em APR para gestão proativa de segurança - 8 horas de treinamento"
  },

  'bombeiro-civil-classe1': {
    title: 'Bombeiro Civil - Classe I',
    description: 'Formação completa de Bombeiro Civil Classe I conforme normas do Corpo de Bombeiros. Capacitação profissional para atuar na prevenção e combate a incêndios, primeiros socorros e salvamento em edificações residenciais e comerciais.',
    duration: '210 horas',
    category: 'Segurança',
    format: 'Presencial',
    location: 'Disponível em todo Brasil',
    nivel: 'Avançado',
    objetivos: [
      'Formar profissionais bombeiros civis qualificados',
      'Capacitar em técnicas de prevenção e combate a incêndios',
      'Desenvolver habilidades em primeiros socorros avançados',
      'Treinar técnicas de salvamento e resgate',
      'Preparar para atuação em situações de emergência'
    ],
    modules: [
      {
        title: "Fundamentos da Profissão",
        description: "História e evolução do bombeiro civil, legislação e normas aplicáveis, ética profissional e responsabilidades, mercado de trabalho e oportunidades."
      },
      {
        title: "Prevenção de Incêndios",
        description: "Teoria do fogo e classes de incêndio, métodos de prevenção, inspeção de equipamentos, elaboração de relatórios técnicos, análise de riscos em edificações."
      },
      {
        title: "Combate a Incêndios",
        description: "Técnicas de combate direto e indireto, uso de extintores e hidrantes, operação de mangueiras e esguichos, ventilação tática, proteção de salvados."
      },
      {
        title: "Equipamentos de Proteção",
        description: "EPIs específicos do bombeiro civil, equipamentos de proteção respiratória (EPR), manutenção e conservação de equipamentos, técnicas de colocação rápida."
      },
      {
        title: "Primeiros Socorros Avançados",
        description: "Suporte básico de vida (BLS), reanimação cardiopulmonar (RCP), desobstrução de vias aéreas, atendimento a traumas e queimaduras, imobilização e transporte de vítimas."
      },
      {
        title: "Salvamento Terrestre",
        description: "Técnicas de salvamento em altura, espaços confinados, uso de cordas e equipamentos, salvamento em elevadores, técnicas de arrombamento."
      },
      {
        title: "Produtos Perigosos",
        description: "Identificação de produtos perigosos, procedimentos em vazamentos, descontaminação básica, isolamento de áreas, comunicação com equipes especializadas."
      },
      {
        title: "Psicologia das Emergências",
        description: "Comportamento humano em emergências, técnicas de evacuação ordenada, comunicação em situações de crise, gerenciamento do estresse, apoio psicológico básico."
      },
      {
        title: "Planos de Emergência",
        description: "Elaboração de planos de emergência, rotas de fuga e pontos de encontro, brigadas de incêndio, coordenação com órgãos externos, simulados e treinamentos."
      },
      {
        title: "Estágio Supervisionado",
        description: "Prática supervisionada em campo, acompanhamento de profissionais experientes, participação em ocorrências reais, avaliação de desempenho prático."
      }
    ],
    competencias: [
      {
        title: 'Prevenção e Combate',
        icon: <Flame className="h-5 w-5 text-red-600" />,
        skills: [
          'Inspeção preventiva de segurança',
          'Combate a incêndios estruturais',
          'Operação de equipamentos de combate',
          'Ventilação e proteção de salvados'
        ]
      },
      {
        title: 'Atendimento Médico',
        icon: <Heart className="h-5 w-5 text-red-600" />,
        skills: [
          'Suporte básico de vida',
          'RCP e desobstrução de vias',
          'Atendimento a politraumatizados',
          'Transporte seguro de vítimas'
        ]
      },
      {
        title: 'Salvamento e Resgate',
        icon: <Shield className="h-5 w-5 text-red-600" />,
        skills: [
          'Salvamento em altura',
          'Resgate em espaços confinados',
          'Técnicas com cordas',
          'Operações de busca'
        ]
      },
      {
        title: 'Gestão de Emergências',
        icon: <Siren className="h-5 w-5 text-red-600" />,
        skills: [
          'Coordenação de evacuações',
          'Comunicação de emergência',
          'Interface com autoridades',
          'Elaboração de relatórios'
        ]
      }
    ],
    certificacao: {
      validade: '1 ano',
      orgao: 'Certificado reconhecido pelo Corpo de Bombeiros',
      requisitos: [
        'Frequência mínima de 90%',
        'Aprovação em todas as avaliações teóricas',
        'Aprovação nas avaliações práticas',
        'Conclusão do estágio supervisionado',
        'Aptidão no exame médico'
      ]
    },
    theme: {
      primaryColor: 'red',
      gradientFrom: 'from-red-50',
      gradientTo: 'to-orange-50',
      bgColor: 'bg-red-100',
      textColor: 'text-red-600',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      ctaColor: 'bg-red-600'
    },
    heroIcon: <Flame className="h-6 w-6 text-red-600" />,
    heroImage: "/training-covers/bombeiro-civil.png",
    ctaTitle: "Torne-se um Bombeiro Civil Profissional",
    ctaSubtitle: "Formação completa de 210 horas com certificação oficial"
  },

  'coleta-seletiva': {
    title: 'Coleta Seletiva e Gestão de Resíduos',
    description: 'Capacitação em práticas de coleta seletiva, gestão sustentável de resíduos e economia circular. Aprenda a implementar programas eficazes de reciclagem e redução de impacto ambiental no ambiente corporativo.',
    duration: '4 horas',
    category: 'Saúde',
    format: 'Online',
    location: 'EAD - Ensino à Distância',
    nivel: 'Básico',
    objetivos: [
      'Compreender a importância da coleta seletiva para o meio ambiente',
      'Identificar e classificar diferentes tipos de resíduos',
      'Implementar programas de coleta seletiva na empresa',
      'Promover a consciência ambiental entre colaboradores'
    ],
    modules: [
      {
        title: "Fundamentos da Coleta Seletiva",
        description: "Conceitos básicos de coleta seletiva, tipos de resíduos (orgânicos, recicláveis, rejeitos), cores padronizadas para lixeiras, legislação ambiental aplicável."
      },
      {
        title: "Classificação e Separação de Resíduos",
        description: "Identificação de materiais recicláveis, resíduos perigosos e especiais, técnicas de separação adequada, cuidados no manuseio de diferentes materiais."
      },
      {
        title: "Implementação de Programas",
        description: "Planejamento de programa de coleta seletiva, definição de pontos de coleta, treinamento de equipes, monitoramento e indicadores de sucesso."
      },
      {
        title: "Economia Circular e Sustentabilidade",
        description: "Conceitos de economia circular, redução, reutilização e reciclagem (3Rs), benefícios econômicos e ambientais, casos de sucesso empresariais."
      }
    ],
    competencias: [
      {
        title: 'Gestão Ambiental',
        icon: <Leaf className="h-5 w-5 text-green-600" />,
        skills: [
          'Classificação correta de resíduos',
          'Implementação de coleta seletiva',
          'Monitoramento de indicadores ambientais',
          'Redução de impacto ambiental'
        ]
      },
      {
        title: 'Sustentabilidade Corporativa',
        icon: <TreePine className="h-5 w-5 text-green-600" />,
        skills: [
          'Desenvolvimento de programas sustentáveis',
          'Engajamento de colaboradores',
          'Comunicação de práticas verdes',
          'Compliance ambiental'
        ]
      },
      {
        title: 'Economia Circular',
        icon: <Recycle className="h-5 w-5 text-green-600" />,
        skills: [
          'Aplicação dos conceitos 3Rs',
          'Identificação de oportunidades de reciclagem',
          'Parcerias com cooperativas',
          'Redução de desperdícios'
        ]
      },
      {
        title: 'Educação Ambiental',
        icon: <Trash2 className="h-5 w-5 text-green-600" />,
        skills: [
          'Conscientização ambiental',
          'Multiplicação de conhecimentos',
          'Mudança de comportamento',
          'Responsabilidade socioambiental'
        ]
      }
    ],
    certificacao: {
      validade: '2 anos',
      orgao: 'Certificado em Gestão de Resíduos e Coleta Seletiva',
      requisitos: [
        'Frequência mínima de 75%',
        'Aprovação na avaliação final',
        'Participação nas atividades práticas'
      ]
    },
    theme: {
      primaryColor: 'green',
      gradientFrom: 'from-green-50',
      gradientTo: 'to-emerald-50',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      ctaColor: 'bg-green-600'
    },
    heroIcon: <Recycle className="h-6 w-6 text-green-600" />,
    heroImage: "/training-covers/coleta-seletiva.png",
    ctaTitle: "Transforme sua Empresa em um Modelo Sustentável",
    ctaSubtitle: "Implementação eficaz de coleta seletiva e gestão de resíduos"
  },

  'cultura-seguranca-organizacional': {
    title: 'Cultura de Segurança Organizacional',
    description: 'Curso estratégico para líderes e gestores sobre como desenvolver e implementar uma cultura de segurança sólida, engajando todos os níveis organizacionais na prevenção de acidentes.',
    duration: '16 horas',
    category: 'Liderança',
    format: 'Presencial/Online',
    location: 'São Paulo, SP',
    nivel: 'Avançado',
    objetivos: [
      'Desenvolver cultura de segurança organizacional',
      'Engajar liderança em segurança',
      'Implementar programas comportamentais',
      'Medir e monitorar indicadores culturais'
    ],
    modules: [
      {
        title: "Fundamentos da Cultura de Segurança",
        description: "Conceitos e definições, níveis de maturidade cultural, fatores organizacionais, impacto nos resultados de segurança. Base teórica para transformação cultural em segurança."
      },
      {
        title: "Liderança em Segurança",
        description: "Papel da liderança na segurança, comportamentos de líderes seguros, comunicação eficaz, influência e engajamento. Desenvolvimento de liderança transformacional em SST."
      },
      {
        title: "Diagnóstico Cultural",
        description: "Avaliação do clima de segurança, pesquisas e questionários, indicadores comportamentais, análise de gaps culturais. Ferramentas para mapear o estado atual da cultura."
      },
      {
        title: "Estratégias de Transformação",
        description: "Planejamento da mudança cultural, programas de engajamento, sistemas de reconhecimento, gestão da resistência. Roadmap para evolução cultural sustentável."
      },
      {
        title: "Segurança Comportamental",
        description: "Observação comportamental, feedback construtivo, programas de incentivo, modificação de comportamentos. Técnicas práticas para mudança comportamental efetiva."
      },
      {
        title: "Sustentabilidade Cultural",
        description: "Indicadores de desempenho, monitoramento contínuo, melhoria contínua, perpetuação da cultura. Garantia de resultados duradouros e evolução constante."
      }
    ],
    competencias: [
      {
        title: 'Liderança Transformacional',
        icon: <Target className="h-5 w-5 text-indigo-600" />,
        skills: [
          'Visão estratégica de segurança',
          'Influência e engajamento',
          'Comunicação inspiradora',
          'Coaching em segurança'
        ]
      },
      {
        title: 'Gestão de Mudanças',
        icon: <Users className="h-5 w-5 text-indigo-600" />,
        skills: [
          'Diagnóstico organizacional',
          'Planejamento de transformação',
          'Gestão de resistências',
          'Engajamento de stakeholders'
        ]
      },
      {
        title: 'Programas Comportamentais',
        icon: <TrendingUp className="h-5 w-5 text-indigo-600" />,
        skills: [
          'Observação comportamental',
          'Análise de comportamentos',
          'Sistemas de incentivo',
          'Feedback eficaz'
        ]
      },
      {
        title: 'Métricas e Indicadores',
        icon: <Award className="h-5 w-5 text-indigo-600" />,
        skills: [
          'KPIs de cultura de segurança',
          'Pesquisas de clima',
          'Análise de tendências',
          'Reporting executivo'
        ]
      }
    ],
    certificacao: {
      validade: '3 anos',
      orgao: 'Certificado de Especialista em Cultura de Segurança',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica (mínimo 85%)',
        'Projeto prático de implementação',
        'Experiência em liderança'
      ]
    },
    theme: {
      primaryColor: 'indigo',
      gradientFrom: 'from-indigo-50',
      gradientTo: 'to-purple-50',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      ctaColor: 'bg-indigo-600'
    },
    heroIcon: <Target className="h-6 w-6 text-indigo-600" />,
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center",
    ctaTitle: "Transforme a Cultura de Segurança",
    ctaSubtitle: "Lidere a mudança para um ambiente de trabalho mais seguro"
  },

  'gestao-cultura-seguranca': {
    title: 'Gestão da Cultura de Segurança',
    description: 'Curso avançado com 37 vídeo aulas sobre implementação de cultura de segurança organizacional. Aborda conceitos, processos e liderança na segurança do trabalho, com casos reais de implementação bem-sucedida para capacitar gestores e profissionais da área.',
    duration: '30 horas',
    category: 'Liderança',
    format: 'Online',
    location: 'EAD - Ensino à Distância',
    nivel: 'Avançado',
    objetivos: [
      'Desenvolver competências para implementar uma cultura de segurança eficaz',
      'Compreender os estágios de maturidade da cultura de segurança',
      'Capacitar líderes para promover ambientes de trabalho seguros',
      'Aplicar métodos de avaliação e desenvolvimento cultural',
      'Analisar casos reais de implementação bem-sucedida'
    ],
    modules: [
      {
        title: "Conceitos e Fundamentos",
        description: "Introdução à cultura de segurança e seus conceitos fundamentais, estágios de maturidade organizacional em segurança, benefícios práticos para prevenção de acidentes, promoção de ambientes de trabalho mais seguros, e indicadores de uma cultura de segurança madura."
      },
      {
        title: "Elementos e Avaliação",
        description: "Principais elementos que compõem a cultura de segurança, métodos para avaliação cultural nas organizações, estratégias para desenvolvimento de cultura sólida e eficaz, ferramentas de diagnóstico organizacional, e planejamento de intervenções culturais."
      },
      {
        title: "Liderança em Segurança",
        description: "Influência da liderança na consolidação da cultura de segurança, atitudes e comportamentos que inspiram ambientes seguros, comunicação eficaz em segurança do trabalho, técnicas de engajamento e motivação de equipes, e casos reais de liderança transformadora."
      }
    ],
    competencias: [
      {
        title: 'Fundamentos Culturais',
        icon: <Shield className="h-5 w-5 text-purple-600" />,
        skills: [
          'Conceitos fundamentais de cultura de segurança',
          'Estágios de maturidade organizacional',
          'Indicadores de cultura madura',
          'Benefícios práticos para prevenção'
        ]
      },
      {
        title: 'Avaliação e Diagnóstico',
        icon: <Target className="h-5 w-5 text-purple-600" />,
        skills: [
          'Métodos de avaliação cultural',
          'Ferramentas de diagnóstico organizacional',
          'Planejamento de intervenções culturais',
          'Estratégias de desenvolvimento'
        ]
      },
      {
        title: 'Liderança Transformadora',
        icon: <Users className="h-5 w-5 text-purple-600" />,
        skills: [
          'Influência da liderança na segurança',
          'Comunicação eficaz em segurança',
          'Técnicas de engajamento de equipes',
          'Motivação para ambientes seguros'
        ]
      },
      {
        title: 'Implementação Prática',
        icon: <TrendingUp className="h-5 w-5 text-purple-600" />,
        skills: [
          'Casos reais de implementação',
          'Estratégias de consolidação cultural',
          'Desenvolvimento de cultura sólida',
          'Liderança transformadora em segurança'
        ]
      }
    ],
    certificacao: {
      validade: 'Permanente',
      orgao: 'Certificado de participação',
      requisitos: [
        'Assistir todas as 37 vídeo aulas',
        'Frequência mínima de 100%',
        'Aprovação na avaliação final (nota mínima 7,0)',
        'Participação em atividades práticas'
      ]
    },
    theme: {
      primaryColor: 'purple',
      gradientFrom: 'from-purple-50',
      gradientTo: 'to-indigo-50',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      ctaColor: 'bg-purple-600'
    },
    heroIcon: <TrendingUp className="h-6 w-6 text-purple-600" />,
    heroImage: "/training-covers/gestao-cultura-seguranca.png",
    ctaTitle: "Lidere com Cultura de Segurança",
    ctaSubtitle: "Curso avançado com 37 vídeo aulas - 30 horas de capacitação em gestão cultural"
  },

  'lei-lucas': {
    title: 'Lei Lucas',
    description: 'Capacitação obrigatória em primeiros socorros para profissionais da educação, conforme a Lei 13.722/2018, abordando técnicas essenciais como RCP, controle de hemorragias e desobstrução das vias aéreas.',
    duration: '4 horas',
    category: 'Saúde',
    format: 'Online',
    location: 'EAD - Ensino à Distância',
    nivel: 'Obrigatório',
    objetivos: [
      'Capacitar profissionais da educação conforme a Lei Lucas',
      'Desenvolver habilidades essenciais de primeiros socorros',
      'Treinar técnicas de RCP e reanimação cardiopulmonar',
      'Ensinar controle de hemorragias e estabilização de vítimas',
      'Preparar para situações de emergência no ambiente escolar'
    ],
    modules: [
      {
        title: "Introdução à Lei Lucas",
        description: "Contexto histórico da criação da lei, objetivos da legislação, exigências para instituições de ensino, responsabilidades legais dos profissionais e impacto na segurança escolar."
      },
      {
        title: "Aspectos gerais dos primeiros socorros",
        description: "Definição e importância dos primeiros socorros, conceitos de urgência e emergência, objetivos dos primeiros socorros, princípios éticos e legais, equipamentos básicos."
      },
      {
        title: "Sinais vitais e avaliação primária",
        description: "Verificação de pulso, respiração e temperatura, avaliação de cenários e segurança, identificação de problemas vitais, protocolo de avaliação inicial e priorização de atendimento."
      },
      {
        title: "Parada cardiorrespiratória (PCR)",
        description: "Causas da PCR em crianças e adultos, procedimentos de reanimação cardiopulmonar (RCP), técnicas específicas para crianças e adultos, uso do DEA e cuidados pós-reanimação."
      },
      {
        title: "Hemorragias e controle",
        description: "Tipos de hemorragias (arterial, venosa, capilar), procedimentos para controle de hemorragias externas e internas, uso correto de torniquetes e prevenção do choque hipovolêmico."
      },
      {
        title: "Queimaduras",
        description: "Classificação das queimaduras (1º, 2º, 3º grau), tratamento para queimaduras térmicas, químicas e elétricas, prevenção de infecções e cuidados especializados."
      },
      {
        title: "Engasgo e Manobra de Heimlich",
        description: "Técnicas de desobstrução das vias aéreas, Manobra de Heimlich para adultos, técnicas específicas para crianças e bebês, reconhecimento de sinais de engasgo e prevenção de aspiração."
      }
    ],
    competencias: [
      {
        title: 'Aspectos Legais e Educacionais',
        icon: <GraduationCap className="h-5 w-5 text-orange-600" />,
        skills: [
          'Conhecimento da Lei 13.722/2018 (Lei Lucas)',
          'Responsabilidades legais dos profissionais da educação',
          'Objetivos e exigências da legislação',
          'Impacto na segurança escolar'
        ]
      },
      {
        title: 'Avaliação e Sinais Vitais',
        icon: <Activity className="h-5 w-5 text-orange-600" />,
        skills: [
          'Verificação de pulso, respiração e temperatura',
          'Avaliação de cenários e segurança',
          'Protocolo de avaliação inicial',
          'Priorização de atendimento'
        ]
      },
      {
        title: 'Técnicas de Emergência',
        icon: <Heart className="h-5 w-5 text-orange-600" />,
        skills: [
          'Reanimação cardiopulmonar (RCP)',
          'Controle de hemorragias',
          'Desobstrução das vias aéreas',
          'Manobra de Heimlich para diferentes idades'
        ]
      },
      {
        title: 'Tratamento de Lesões',
        icon: <Shield className="h-5 w-5 text-orange-600" />,
        skills: [
          'Tratamento de queimaduras (1º, 2º, 3º grau)',
          'Uso correto de torniquetes',
          'Prevenção do choque hipovolêmico',
          'Cuidados pós-reanimação'
        ]
      }
    ],
    certificacao: {
      validade: '1 ano',
      orgao: 'Certificado reconhecido conforme Lei 13.722/2018',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica (nota mínima 7,0)',
        'Aprovação na avaliação prática',
        'Profissional da educação em exercício'
      ]
    },
    theme: {
      primaryColor: 'orange',
      gradientFrom: 'from-orange-50',
      gradientTo: 'to-red-50',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      ctaColor: 'bg-orange-600'
    },
    heroIcon: <Heart className="h-6 w-6 text-orange-600" />,
    heroImage: "/training-covers/lei-lucas.png",
    warningMessage: (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-amber-800 mb-1">Capacitação Obrigatória</p>
            <p className="text-sm text-amber-700">
              Conforme a Lei 13.722/2018 (Lei Lucas), profissionais da educação devem ser capacitados em primeiros socorros.
            </p>
          </div>
        </div>
      </div>
    ),
    ctaTitle: "Cumpra a Lei Lucas",
    ctaSubtitle: "Capacitação obrigatória para profissionais da educação - 4 horas de treinamento especializado"
  },

  'lider-sst': {
    title: 'Líder em SST - Segurança e Saúde no Trabalho',
    description: 'Formação de líderes em Segurança e Saúde no Trabalho. Desenvolva competências para liderar equipes, implementar cultura de segurança e gerenciar programas de SST com excelência.',
    duration: '20 horas',
    category: 'Liderança',
    format: 'Presencial/Online',
    location: 'Disponível em todo Brasil',
    nivel: 'Avançado',
    objetivos: [
      'Formar líderes multiplicadores em SST',
      'Desenvolver competências de gestão de segurança',
      'Implementar cultura de segurança organizacional',
      'Liderar programas de prevenção de acidentes',
      'Engajar equipes em práticas seguras'
    ],
    modules: [
      {
        title: "Liderança em Segurança",
        description: "Papel do líder na segurança do trabalho, estilos de liderança e sua influência, comunicação assertiva em SST, motivação e engajamento de equipes."
      },
      {
        title: "Gestão de Programas de SST",
        description: "Planejamento estratégico em SST, definição de metas e indicadores, gestão de recursos e orçamento, avaliação de desempenho em segurança."
      },
      {
        title: "Cultura de Segurança",
        description: "Desenvolvimento de cultura preventiva, comportamento seguro e observação comportamental, programas de reconhecimento, gestão de mudança cultural."
      },
      {
        title: "Análise e Gestão de Riscos",
        description: "Metodologias de análise de riscos, hierarquia de controles, gestão de mudanças (MOC), priorização de ações preventivas."
      },
      {
        title: "Investigação e Aprendizado",
        description: "Liderança em investigação de incidentes, análise de causa raiz, disseminação de lições aprendidas, cultura justa (Just Culture)."
      },
      {
        title: "Comunicação e Treinamento",
        description: "Técnicas de comunicação em SST, desenvolvimento de treinamentos eficazes, diálogos de segurança (DDS), campanhas de conscientização."
      },
      {
        title: "Legislação e Compliance",
        description: "Responsabilidades legais do líder, interface com órgãos reguladores, auditorias e fiscalizações, gestão de documentação legal."
      },
      {
        title: "Indicadores e Melhoria Contínua",
        description: "KPIs de segurança, análise de tendências, benchmarking em SST, ciclo PDCA aplicado à segurança."
      }
    ],
    competencias: [
      {
        title: 'Liderança Transformadora',
        icon: <Users className="h-5 w-5 text-blue-600" />,
        skills: [
          'Influência positiva em segurança',
          'Desenvolvimento de equipes',
          'Comunicação inspiradora',
          'Tomada de decisão assertiva'
        ]
      },
      {
        title: 'Gestão Estratégica',
        icon: <Target className="h-5 w-5 text-blue-600" />,
        skills: [
          'Planejamento de programas SST',
          'Gestão de recursos e orçamento',
          'Análise de indicadores',
          'Implementação de melhorias'
        ]
      },
      {
        title: 'Cultura de Prevenção',
        icon: <Shield className="h-5 w-5 text-blue-600" />,
        skills: [
          'Desenvolvimento cultural',
          'Engajamento comportamental',
          'Gestão de mudanças',
          'Multiplicação de conhecimento'
        ]
      },
      {
        title: 'Excelência Operacional',
        icon: <Award className="h-5 w-5 text-blue-600" />,
        skills: [
          'Gestão de riscos avançada',
          'Investigação de incidentes',
          'Compliance regulatório',
          'Melhoria contínua'
        ]
      }
    ],
    certificacao: {
      validade: '3 anos',
      orgao: 'Certificado de Líder em SST',
      requisitos: [
        'Frequência mínima de 85%',
        'Aprovação nas avaliações (mínimo 80%)',
        'Desenvolvimento de projeto prático',
        'Apresentação de case de sucesso'
      ]
    },
    theme: {
      primaryColor: 'blue',
      gradientFrom: 'from-blue-50',
      gradientTo: 'to-indigo-50',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      ctaColor: 'bg-blue-600'
    },
    heroIcon: <Users className="h-6 w-6 text-blue-600" />,
    heroImage: "/training-covers/lider-sst.png",
    ctaTitle: "Seja um Líder de Excelência em SST",
    ctaSubtitle: "Transforme a cultura de segurança da sua organização"
  },

  'loto-lockout-tagout': {
    title: 'LOTO - Lockout e Tagout',
    description: 'Conheça os princípios do bloqueio e etiquetagem de fontes de energia com o curso de LOTO. Aprenda como aplicar procedimentos seguros durante manutenções e intervenções em máquinas e equipamentos, reduzindo riscos de acidentes graves no ambiente de trabalho.',
    duration: '16 horas',
    category: 'Segurança',
    format: 'Presencial + Online',
    location: 'Disponível em todo Brasil',
    nivel: 'Intermediário',
    objetivos: [
      'Compreender os fundamentos do sistema LOTO e sua importância',
      'Aplicar procedimentos seguros de bloqueio e etiquetagem',
      'Identificar diferentes tipos de energia e seus riscos',
      'Reduzir acidentes graves durante manutenções e intervenções'
    ],
    modules: [
      {
        title: "Introdução ao Bloqueio e Etiquetagem – LOTO",
        description: "Compreensão dos fundamentos do sistema LOTO, importância na prevenção de acidentes, impactos do bloqueio inadequado de fontes de energia e estatísticas de acidentes em ambientes industriais."
      },
      {
        title: "Fundamentos legais e normativos",
        description: "Legislações nacionais aplicáveis ao LOTO, diretrizes técnicas para implementação, NR-10 (segurança em instalações elétricas) e NR-12 (segurança em máquinas e equipamentos)."
      },
      {
        title: "Tipos de energia e riscos envolvidos",
        description: "Energia elétrica e seus riscos, energia pneumática (pressão e vazamentos), energia hidráulica (alta pressão e fluidos), energia térmica (temperatura e vapor) e outras fontes de energia perigosas."
      },
      {
        title: "Procedimentos de bloqueio e etiquetagem",
        description: "Passo a passo para aplicação correta do LOTO, bloqueio de equipamentos e sistemas, etiquetagem adequada e identificação, garantia de segurança durante intervenções e verificação dos procedimentos."
      },
      {
        title: "Equipamentos e dispositivos utilizados no LOTO",
        description: "Dispositivos de bloqueio, cadeados e travas específicas, etiquetas e sistemas de identificação, ferramentas auxiliares para LOTO e critérios de seleção de equipamentos."
      },
      {
        title: "Implementação e Gestão do Programa LOTO",
        description: "Desenvolvimento de programa LOTO organizacional, treinamento de equipes, auditoria e melhoria contínua, documentação e registros obrigatórios."
      },
      {
        title: "Casos Práticos e Simulações",
        description: "Exercícios práticos de bloqueio, simulações de situações reais, análise de casos de acidentes, identificação de não conformidades e correções."
      }
    ],
    competencias: [
      {
        title: 'Fundamentos e Legislação',
        icon: <Lock className="h-5 w-5 text-orange-600" />,
        skills: [
          'Compreensão dos fundamentos do LOTO',
          'Conhecimento das legislações aplicáveis',
          'Diretrizes técnicas de implementação',
          'NR-10 e NR-12 relacionadas ao LOTO'
        ]
      },
      {
        title: 'Identificação de Energias',
        icon: <Zap className="h-5 w-5 text-orange-600" />,
        skills: [
          'Reconhecimento de energia elétrica',
          'Identificação de energia pneumática e hidráulica',
          'Avaliação de energia térmica',
          'Outras fontes de energia perigosas'
        ]
      },
      {
        title: 'Procedimentos de Bloqueio',
        icon: <Shield className="h-5 w-5 text-orange-600" />,
        skills: [
          'Aplicação correta de procedimentos LOTO',
          'Bloqueio adequado de equipamentos',
          'Etiquetagem e identificação',
          'Verificação e teste de segurança'
        ]
      },
      {
        title: 'Equipamentos e Implementação',
        icon: <Wrench className="h-5 w-5 text-orange-600" />,
        skills: [
          'Seleção de dispositivos de bloqueio',
          'Uso de cadeados e travas específicas',
          'Sistemas de etiquetas e identificação',
          'Implementação de programa LOTO'
        ]
      }
    ],
    certificacao: {
      validade: '2 anos',
      orgao: 'Certificado reconhecido conforme NR-10 e NR-12',
      requisitos: [
        'Frequência mínima de 100%',
        'Aprovação na avaliação teórica',
        'Aprovação na avaliação prática',
        'Demonstração de competência em procedimentos LOTO'
      ]
    },
    theme: {
      primaryColor: 'orange',
      gradientFrom: 'from-orange-50',
      gradientTo: 'to-red-50',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      ctaColor: 'bg-orange-600'
    },
    heroIcon: <Lock className="h-6 w-6 text-orange-600" />,
    heroImage: "/training-covers/loto-lockout-tagout.png",
    warningMessage: (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-amber-800 mb-1">Segurança Crítica</p>
            <p className="text-sm text-amber-700">
              O LOTO é fundamental para prevenir acidentes graves durante manutenção de equipamentos energizados.
            </p>
          </div>
        </div>
      </div>
    ),
    ctaTitle: "Domine o LOTO",
    ctaSubtitle: "Capacitação especializada em bloqueio e etiquetagem - 16 horas de treinamento crítico"
  }
}

interface PageProps {
  params: { slug: string }
}

export default function TrainingPage({ params }: PageProps) {
  const training = trainingData[params.slug]
  
  if (!training) {
    notFound()
  }

  return <TrainingPageTemplate data={training} />
}

export function generateStaticParams() {
  return Object.keys(trainingData).map((slug) => ({
    slug: slug,
  }))
}