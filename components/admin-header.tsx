'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function AdminHeader({ title, description, children }: AdminHeaderProps) {
  const pathname = usePathname();
  
  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = () => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs = [];
    
    // Always include home
    breadcrumbs.push({
      label: 'Início',
      href: '/',
      icon: Home,
      isActive: false,
    });
    
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
    <div className="border-b bg-background">
      {/* Breadcrumb */}
      <div className="px-6 py-3 border-b">
        <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-1" />
              )}
              {crumb.isActive ? (
                <span className="font-medium text-foreground">
                  {crumb.icon && <crumb.icon className="inline h-4 w-4 mr-1" />}
                  {crumb.label}
                </span>
              ) : (
                <Link 
                  href={crumb.href}
                  className="hover:text-foreground transition-colors"
                >
                  {crumb.icon && <crumb.icon className="inline h-4 w-4 mr-1" />}
                  {crumb.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
      
      {/* Header Content */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            {description && (
              <p className="text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
          {children && (
            <div className="flex items-center gap-2">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}