'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { AppUserNav } from './app-user-nav';
import { 
  MessageSquare, 
  GraduationCap, 
  Settings,
  BarChart3,
  Users,
  FileText,
  HelpCircle
} from 'lucide-react';

const menuItems = [
  {
    title: 'Início',
    icon: BarChart3,
    href: '/inicio',
  },
  {
    title: 'Assistente',
    icon: MessageSquare,
    href: '/assistente',
  },
  {
    title: 'Cursos',
    icon: GraduationCap,
    href: '/inicio/cursos',
  },
  {
    title: 'Relatórios',
    icon: FileText,
    href: '/inicio/relatorios',
    disabled: true,
  },
  {
    title: 'Equipe',
    icon: Users,
    href: '/inicio/equipe',
    disabled: true,
  },
  {
    title: 'Documentos',
    icon: FileText,
    href: '/inicio/documentos',
    disabled: true,
  },
];

const bottomMenuItems = [
  {
    title: 'Ajuda',
    icon: HelpCircle,
    href: '/inicio/ajuda',
    disabled: true,
  },
  {
    title: 'Configurações',
    icon: Settings,
    href: '/inicio/configuracoes',
    disabled: true,
  },
];

import type { User } from 'next-auth';

export function ApplicationSidebar({ user }: { user: User | undefined }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-[240px] flex-col border-r bg-sidebar">
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <span className="text-sm font-bold">SS</span>
          </div>
          <span className="font-semibold">São & Salvo</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-3 py-2">
        <div className="space-y-1">
          <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">Menu Principal</p>
          {menuItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <div key={item.href}>
                {item.disabled ? (
                  <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm opacity-50 cursor-not-allowed">
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                      isActive && "bg-accent text-accent-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t">
        <div className="px-3 py-4">
          <div className="space-y-1">
            {bottomMenuItems.map((item) => (
              <div key={item.href}>
                {item.disabled ? (
                  <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm opacity-50 cursor-not-allowed">
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t px-3 py-3">
          <AppUserNav user={user} />
        </div>
      </div>
    </div>
  );
}