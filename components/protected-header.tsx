'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getCourseBySlug } from '@/lib/courses-data';
import type { User } from 'next-auth';

interface ProtectedHeaderProps {
  user: User | undefined;
}

const pathNames: Record<string, string> = {
  'inicio': 'Início',
  'assistente': 'Assistente IA',
  'cursos': 'Cursos',
  'certificados': 'Certificados',
  'comunidade': 'Comunidade',
  'relatorios': 'Relatórios',
  'equipe': 'Equipe',
  'documentos': 'Documentos',
  'ajuda': 'Ajuda',
  'configuracoes': 'Configurações',
  'learn': 'Estudo',
};

export function ProtectedHeader({ user }: ProtectedHeaderProps) {
  const pathname = usePathname();
  const isAssistentePage = pathname.startsWith('/assistente');
  
  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs = [];
    
    // Always start with São e Salvo (but not if we're already on /inicio)
    if (pathname !== '/inicio') {
      breadcrumbs.push({
        href: '/inicio',
        label: 'São e Salvo',
        isLast: paths.length === 0
      });
    }

    // Add path segments
    paths.forEach((path, index) => {
      const href = '/' + paths.slice(0, index + 1).join('/');
      let label = pathNames[path] || path.charAt(0).toUpperCase() + path.slice(1);
      const isLast = index === paths.length - 1;
      
      // Special handling for course slugs (when the previous path is 'cursos')
      if (index > 0 && paths[index - 1] === 'cursos' && path !== 'learn') {
        const course = getCourseBySlug(path);
        if (course) {
          label = course.title;
        }
      }
      
      // For inicio, use "São e Salvo" as the label
      if (path === 'inicio' && index === 0) {
        breadcrumbs.push({
          href,
          label: 'São e Salvo',
          isLast
        });
      } else {
        breadcrumbs.push({
          href,
          label,
          isLast
        });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-background transition-all relative z-50">
      <div className="flex items-center gap-2 px-4 flex-1">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-4" />
        
        <Breadcrumb className="flex-1">
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <div key={`breadcrumb-${index}`} className="flex items-center gap-2">
                {index > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {crumb.isLast ? (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={crumb.href}>{crumb.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        
        {/* Portal target for assistente header buttons */}
        {isAssistentePage && (
          <div id="assistente-header-buttons" className="flex items-center gap-2 ml-auto" />
        )}
      </div>
    </header>
  );
}