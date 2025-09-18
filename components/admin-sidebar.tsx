'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { AppUserNav } from './app-user-nav';
import { SaoESalvoLogo } from './sao-e-salvo-logo';
import { 
  LayoutDashboard,
  Users,
  GraduationCap,
  Settings,
  BarChart3,
  Shield,
  FileText,
  AlertTriangle,
  Activity,
  Database,
  Key,
  Megaphone
} from 'lucide-react';

const menuItems = [
  {
    title: 'Painel Admin',
    icon: LayoutDashboard,
    href: '/admin',
  },
  {
    title: 'Usuários',
    icon: Users,
    href: '/admin/users',
  },
  {
    title: 'Cursos',
    icon: GraduationCap,
    href: '/admin/courses',
  },
  {
    title: 'Relatórios',
    icon: BarChart3,
    href: '/admin/reports',
  },
  {
    title: 'Certificados',
    icon: Shield,
    href: '/admin/certificates',
  },
  {
    title: 'Incidentes',
    icon: AlertTriangle,
    href: '/admin/incidents',
  },
  {
    title: 'Documentos',
    icon: FileText,
    href: '/admin/documents',
  },
  {
    title: 'Comunicados',
    icon: Megaphone,
    href: '/admin/announcements',
  },
];

const systemMenuItems = [
  {
    title: 'Monitoramento',
    icon: Activity,
    href: '/admin/monitoring',
  },
  {
    title: 'Banco de Dados',
    icon: Database,
    href: '/admin/database',
  },
  {
    title: 'Permissões',
    icon: Key,
    href: '/admin/permissions',
  },
  {
    title: 'Configurações',
    icon: Settings,
    href: '/admin/settings',
  },
];

import type { User } from 'next-auth';

export function AdminSidebar({ user }: { user: User | undefined }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-[240px] flex-col border-r bg-sidebar">
      {/* Logo */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <SaoESalvoLogo size="sm" />
        </div>
        <p className="mt-2 text-xs text-muted-foreground font-medium">
          Painel Administrativo
        </p>
      </div>
      
      {/* Main Menu */}
      <div className="flex-1 overflow-y-auto px-3 py-2">
        <div className="space-y-1">
          <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            Gestão
          </p>
          {menuItems.map((item) => {
            const isActive = pathname === item.href || 
                           (item.href !== '/admin' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                  isActive && "bg-accent text-accent-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>

        {/* System Menu */}
        <div className="mt-6 space-y-1">
          <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            Sistema
          </p>
          {systemMenuItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                  isActive && "bg-accent text-accent-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* User Menu */}
      <div className="border-t px-3 py-3">
        <AppUserNav user={user} />
      </div>
    </div>
  );
}