'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SaoESalvoLogo } from '@/components/sao-e-salvo-logo'
import { usePathname } from 'next/navigation'

export function GlobalHeader() {
  const pathname = usePathname()
  
  // Don't show global header on app pages as they have their own headers/sidebars
  if (pathname.startsWith('/assistente') || 
      pathname.startsWith('/inicio') || 
      (pathname.startsWith('/cursos') && !pathname.startsWith('/cursos-nr')) ||
      pathname.startsWith('/certificados') ||
      pathname.startsWith('/relatorios') ||
      pathname.startsWith('/equipe') ||
      pathname.startsWith('/documentos') ||
      pathname.startsWith('/ajuda') ||
      pathname.startsWith('/configuracoes') ||
      pathname.startsWith('/comunidade') ||
      pathname.startsWith('/admin') ||
      pathname.startsWith('/login') ||
      pathname.startsWith('/register')) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0063F3]/95 backdrop-blur-md border-b border-white/10">
      <div className="container px-4 mx-auto flex h-16 items-center justify-between">
        <Link 
          href="/"
          className="cursor-pointer hover:opacity-90 transition-opacity"
        >
          <SaoESalvoLogo size="md" className="text-white" />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/cursos-nr" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Cursos
          </Link>
          <a href="/#features" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Funcionalidades
          </a>
          <a href="/#benefits" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Benefícios
          </a>
          <a href="/#pricing" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Planos
          </a>
          <a href="/#testimonials" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Depoimentos
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/assistente">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20">Entrar</Button>
          </Link>
          <Button className="bg-white text-[#0063F3] hover:bg-white/90 font-bold">Contato Comercial</Button>
        </div>
      </div>
    </header>
  )
}