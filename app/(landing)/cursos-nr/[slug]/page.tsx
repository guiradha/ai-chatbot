import { notFound } from 'next/navigation'
import { getCourseBySlug } from '@/lib/courses-data'
import { TrainingPageTemplate } from '@/components/training-page-template'

export default async function TrainingPage({ params }: { params: Promise<{ slug: string }> }) {
  // Get course data from centralized data source
  const { slug } = await params
  const course = getCourseBySlug(slug)
  
  if (!course) {
    notFound()
  }

  // Transform CourseData to TrainingData format for the template
  const trainingData = {
    title: course.title,
    description: course.description,
    duration: course.duration,
    category: course.category,
    format: course.formato,
    location: 'Disponível em todo Brasil',
    nivel: course.nivel,
    objetivos: course.objetivos,
    modules: course.conteudoProgramatico.map(mod => ({
      title: mod.titulo,
      description: `${mod.topicos.join('. ')}.`
    })),
    competencias: course.competencias.map((comp, index) => ({
      title: comp,
      icon: null, // Icons will be handled by the template
      skills: ['Competência desenvolvida neste módulo']
    })),
    certificacao: {
      validade: course.certificacao.validade,
      orgao: course.certificacao.tipo,
      requisitos: course.certificacao.requisitos
    },
    theme: {
      primaryColor: course.category === 'Segurança' ? 'blue' : 
                    course.category === 'Saúde' ? 'green' : 'purple',
      gradientFrom: course.category === 'Segurança' ? 'from-blue-50' : 
                    course.category === 'Saúde' ? 'from-green-50' : 'from-purple-50',
      gradientTo: course.category === 'Segurança' ? 'to-indigo-50' : 
                  course.category === 'Saúde' ? 'to-emerald-50' : 'to-indigo-50',
      bgColor: course.category === 'Segurança' ? 'bg-blue-100' : 
               course.category === 'Saúde' ? 'bg-green-100' : 'bg-purple-100',
      textColor: course.category === 'Segurança' ? 'text-blue-600' : 
                 course.category === 'Saúde' ? 'text-green-600' : 'text-purple-600',
      iconBg: course.category === 'Segurança' ? 'bg-blue-100' : 
              course.category === 'Saúde' ? 'bg-green-100' : 'bg-purple-100',
      iconColor: course.category === 'Segurança' ? 'text-blue-600' : 
                 course.category === 'Saúde' ? 'text-green-600' : 'text-purple-600',
      ctaColor: course.category === 'Segurança' ? 'bg-blue-600' : 
                course.category === 'Saúde' ? 'bg-green-600' : 'bg-purple-600'
    },
    heroIcon: null, // Will use default icon in template
    heroImage: course.image,
    ctaTitle: `Capacitação em ${course.title}`,
    ctaSubtitle: `${course.duration} de treinamento especializado`
  }

  return <TrainingPageTemplate data={trainingData} />
}

// Generate static params for all courses
export async function generateStaticParams() {
  const { getAllCourses } = await import('@/lib/courses-data')
  const courses = getAllCourses()
  
  return courses.map((course) => ({
    slug: course.slug,
  }))
}