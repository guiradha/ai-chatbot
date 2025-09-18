'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SaoESalvoLogo } from '@/components/sao-e-salvo-logo'
import { usePathname } from 'next/navigation'

export function GlobalHeader() {
  const pathname = usePathname()
  
  // Don't show global header on assistente pages as they have their own headers
  if (pathname.startsWith('/assistente')) {
    return null
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0063F3]/95 backdrop-blur-md border-b border-white/10">
      <div className="container px-4 mx-auto flex h-16 items-center justify-between">
        <button 
          onClick={scrollToTop}
          className="cursor-pointer"
        >
          <SaoESalvoLogo size="md" className="text-white" />
        </button>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/treinamentos" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Treinamentos
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