const fs = require('fs');
const path = require('path');

// Read the extracted trainings
const extractedTrainings = require('./extracted-trainings.json');

// Read the landing page file to get the actual structure
const landingPageContent = fs.readFileSync('./app/cursos-nr/[slug]/page.tsx', 'utf-8');

// Function to convert training data to CourseData format
function convertTrainingToCourseData(slug, trainingStr) {
  // Parse the training data (it's stored as a string in extracted-trainings.json)
  // We need to extract the actual properties
  const titleMatch = trainingStr.match(/title:\s*['"]([^'"]+)['"]/);
  const descriptionMatch = trainingStr.match(/description:\s*['"]([^'"]+)['"]/);
  const durationMatch = trainingStr.match(/duration:\s*['"]([^'"]+)['"]/);
  const categoryMatch = trainingStr.match(/category:\s*['"]([^'"]+)['"]/);
  const formatMatch = trainingStr.match(/format:\s*['"]([^'"]+)['"]/);
  const locationMatch = trainingStr.match(/location:\s*['"]([^'"]+)['"]/);
  const nivelMatch = trainingStr.match(/nivel:\s*['"]([^'"]+)['"]/);
  
  if (!titleMatch) {
    console.warn(`Skipping ${slug}: No title found`);
    return null;
  }

  // Extract objectives array
  const objetivosMatch = trainingStr.match(/objetivos:\s*\[([\s\S]*?)\]/);
  let objetivos = [];
  if (objetivosMatch) {
    objetivos = objetivosMatch[1]
      .split(',')
      .map(obj => obj.trim().replace(/['"]/g, ''))
      .filter(obj => obj.length > 0);
  }

  // Extract modules array
  const modulesMatch = trainingStr.match(/modules:\s*\[([\s\S]*?)\],\s*competencias/);
  let modules = [];
  if (modulesMatch) {
    // Parse individual modules
    const modulesStr = modulesMatch[1];
    const moduleRegex = /\{\s*title:\s*["']([^"']+)["'],\s*description:\s*["']([^"']+)["']\s*\}/g;
    let moduleMatch;
    let moduleIndex = 1;
    while ((moduleMatch = moduleRegex.exec(modulesStr)) !== null) {
      modules.push({
        id: moduleIndex,
        title: moduleMatch[1],
        duration: '2 horas', // Default duration
        status: 'available',
        lessons: [
          {
            id: 1,
            title: moduleMatch[1],
            type: 'video',
            duration: '30 min',
            completed: false,
            videoUrl: '/sample-video.mp4'
          },
          {
            id: 2,
            title: `Quiz - ${moduleMatch[1]}`,
            type: 'quiz',
            duration: '15 min',
            completed: false,
            questions: 10
          }
        ]
      });
      moduleIndex++;
    }
  }

  // Extract certification
  const certificacaoMatch = trainingStr.match(/certificacao:\s*\{([^}]+)\}/);
  let certificacao = {
    tipo: 'Certificado de Conclusão',
    validade: '2 anos',
    requisitos: ['Frequência mínima de 75%', 'Aprovação na avaliação final']
  };
  
  if (certificacaoMatch) {
    const validadeMatch = certificacaoMatch[1].match(/validade:\s*['"]([^'"]+)['"]/);
    const orgaoMatch = certificacaoMatch[1].match(/orgao:\s*['"]([^'"]+)['"]/);
    if (validadeMatch) certificacao.validade = validadeMatch[1];
    if (orgaoMatch) certificacao.tipo = orgaoMatch[1];
  }

  // Map slug to appropriate image
  const getCourseImage = (slug, title) => {
    const lowerTitle = title.toLowerCase();
    
    if (slug.includes('nr-35')) return '/training-covers/nr-35-trabalho-em-altura.png';
    if (slug.includes('nr-33')) return '/training-covers/nr-33-espaco-confinado.png';
    if (slug.includes('nr-10')) return '/training-covers/nr-10-basico.png';
    if (slug.includes('nr-11')) return '/training-covers/nr-11-empilhadeira.png';
    if (slug.includes('nr-12')) return '/training-covers/nr-12-seguranca-maquinas.png';
    if (slug.includes('nr-13')) return '/training-covers/nr-13-caldeiras.png';
    if (slug.includes('nr-17')) return '/training-covers/nr-17-ergonomia.png';
    if (slug.includes('nr-18')) return '/training-covers/nr-18-sinaleiro-amarrador-cargas.png';
    if (slug.includes('nr-20')) return '/training-covers/nr-20-intermediario.png';
    if (slug.includes('nr-23')) return '/training-covers/nr-23-brigada-incendio.png';
    if (slug.includes('nr-26')) return '/training-covers/nr-26-sinalizacao-seguranca.png';
    if (slug.includes('nr-31')) return '/training-covers/nr-31-defensivos-agricolas.png';
    if (slug.includes('nr-34')) return '/training-covers/nr-34-industria-naval.png';
    if (slug.includes('nr-37')) return '/training-covers/nr-37-plataformas-petroleo.png';
    if (slug.includes('nr-05')) return '/training-covers/nr-05-representante.png';
    if (slug.includes('nr-01')) return '/training-covers/nr-01-disposicoes-gerais.png';
    if (slug.includes('cipa')) return '/training-covers/cipa.png';
    if (slug.includes('direcao-defensiva')) return '/training-covers/direcao-defensiva.png';
    if (slug.includes('lei-lucas')) return '/training-covers/lei-lucas.png';
    if (slug.includes('primeiros-socorros') || slug.includes('rcp')) return '/training-covers/primeiros-socorros.png';
    if (slug.includes('combate') && slug.includes('incendio')) return '/training-covers/nocoes-combate-incendios.png';
    if (slug.includes('epi')) return '/training-covers/uso-epi.png';
    if (slug.includes('loto')) return '/training-covers/loto-lockout-tagout.png';
    if (slug.includes('assedio')) return '/training-covers/prevencao-combate-assedio-violencia-trabalho.png';
    if (slug.includes('gestao') || slug.includes('cultura') || slug.includes('lider')) return '/training-covers/gestao-cultura-seguranca.png';
    if (slug.includes('sipat')) return '/training-covers/sipat.png';
    if (slug.includes('apr') || slug.includes('analise-risco')) return '/training-covers/analise-risco.png';
    if (slug.includes('bombeiro')) return '/training-covers/bombeiro-civil.png';
    if (slug.includes('coleta')) return '/training-covers/coleta-seletiva.png';
    
    return '/training-covers/integracao-seguranca.png'; // Default
  };

  return {
    slug: slug,
    title: titleMatch[1],
    description: descriptionMatch ? descriptionMatch[1] : '',
    category: categoryMatch ? categoryMatch[1] : 'Segurança',
    duration: durationMatch ? durationMatch[1] : '8 horas',
    instructor: 'Equipe Viver Seguro',
    image: getCourseImage(slug, titleMatch[1]),
    progress: 0,
    status: 'available',
    nivel: nivelMatch ? nivelMatch[1] : 'Intermediário',
    formato: formatMatch ? formatMatch[1] : 'Online',
    cargaHoraria: { 
      teoria: durationMatch ? durationMatch[1] : '8 horas', 
      pratica: '0 horas' 
    },
    objetivos: objetivos.length > 0 ? objetivos : [
      'Desenvolver competências específicas do curso',
      'Aplicar conhecimentos na prática profissional',
      'Atender requisitos normativos e legais'
    ],
    conteudoProgramatico: modules.map((mod, idx) => ({
      modulo: idx + 1,
      titulo: mod.title,
      duracao: mod.duration,
      topicos: [
        'Conceitos fundamentais',
        'Aplicações práticas',
        'Exercícios e avaliações'
      ],
      concluido: false
    })),
    modules: modules,
    competencias: [
      'Conhecimento técnico especializado',
      'Habilidades práticas de aplicação',
      'Competências regulamentares',
      'Capacidade de gestão de riscos'
    ],
    publicoAlvo: [
      'Profissionais da área',
      'Gestores e supervisores',
      'Técnicos de segurança',
      'Interessados na área'
    ],
    requisitos: [
      'Ensino fundamental completo',
      'Idade mínima de 18 anos',
      'Disponibilidade para o curso'
    ],
    certificacao: certificacao,
    avaliacoes: {
      media: 4.8,
      total: 0,
      distribuicao: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
      depoimentos: []
    },
    proximasTurmas: []
  };
}

// Convert all trainings
const convertedCourses = [];
let courseId = 100; // Start from 100 to avoid conflicts

Object.keys(extractedTrainings).forEach(slug => {
  const courseData = convertTrainingToCourseData(slug, extractedTrainings[slug]);
  if (courseData) {
    courseData.id = courseId++;
    convertedCourses.push(courseData);
  }
});

// Generate the TypeScript code
const tsCode = `// Additional training courses data
// Auto-generated from extracted trainings

import { CourseData } from './courses-data';

export const additionalCoursesData: CourseData[] = ${JSON.stringify(convertedCourses, null, 2)
  .replace(/"([^"]+)":/g, '$1:') // Remove quotes from keys
  .replace(/"/g, "'") // Replace double quotes with single quotes
};
`;

// Write to file
fs.writeFileSync('./lib/additional-courses-data.ts', tsCode);

console.log(`✅ Converted ${convertedCourses.length} training courses`);
console.log('📁 Output saved to lib/additional-courses-data.ts');