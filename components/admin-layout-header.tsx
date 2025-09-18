'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';

export function AdminLayoutHeader() {
  const pathname = usePathname();
  
  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = () => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: Array<{ label: string; href: string; isActive: boolean }> = [];
    
    // Build breadcrumb path
    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Format segment label
      let label = segment.charAt(0).toUpperCase() + segment.slice(1);
      
      // Special cases for better labels
      const labelMap: Record<string, string> = {
        'admin': 'Painel Admin',
        'users': 'Usuários',
        'courses': 'Cursos',
        'reports': 'Relatórios',
        'certificates': 'Certificados',
        'incidents': 'Incidentes',
        'documents': 'Documentos',
        'announcements': 'Comunicados',
        'monitoring': 'Monitoramento',
        'database': 'Banco de Dados',
        'permissions': 'Permissões',
        'settings': 'Configurações',
      };
      
      if (labelMap[segment]) {
        label = labelMap[segment];
      }
      
      breadcrumbs.push({
        label,
        href: currentPath,
        isActive: index === segments.length - 1,
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs();
  
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
      <SidebarTrigger className="-ml-2" />
      <Separator orientation="vertical" className="h-6" />
      <nav className="flex items-center space-x-1 text-sm">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Início
        </Link>
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.href} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            {crumb.isActive ? (
              <span className="font-medium text-foreground">
                {crumb.label}
              </span>
            ) : (
              <Link 
                href={crumb.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}