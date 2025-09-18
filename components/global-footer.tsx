import Link from 'next/link'
import { SaoESalvoLogo } from '@/components/sao-e-salvo-logo'

export function GlobalFooter() {
  return (
    <footer className="text-white py-8" style={{backgroundColor: '#26262A'}}>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <SaoESalvoLogo size="md" />
            </div>
            <p className="text-sm text-white/80">
              Tecnologia a favor da vida
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">Produto</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/cursos-nr" className="hover:text-white transition-colors">Cursos</Link></li>
              <li><a href="/#features" className="hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Planos</a></li>
              <li><a href="/#" className="hover:text-white transition-colors">Segurança</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">Empresa</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/carreiras" className="hover:text-white transition-colors">Carreiras</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">Suporte</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/central-de-ajuda" className="hover:text-white transition-colors">Central de Ajuda</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
              <li><Link href="/status" className="hover:text-white transition-colors">Status</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mt-6 pt-3 pb-2">
        <div className="text-center text-sm text-white/80">
          © 2025 São e Salvo. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}