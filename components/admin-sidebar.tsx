'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { AppUserNav } from './app-user-nav';
import type { User } from 'next-auth';
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
  Megaphone,
  HelpCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from '@/components/ui/button';

const menuItems = [
  {
    title: 'Início',
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
    title: 'Configurações',
    icon: Settings,
    href: '/admin/settings',
  },
];

const bottomMenuItems = [
  {
    title: 'Ajuda',
    icon: HelpCircle,
    href: '/admin/help',
  },
];

export function AdminSidebar({ user }: { user: User | undefined }) {
  const pathname = usePathname();
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-14 border-b bg-[#0063F3] p-0">
        <div className={cn(
          "flex items-center transition-all h-full",
          isCollapsed ? "justify-center" : "px-6"
        )}>
          {!isCollapsed ? (
            <div className="flex items-center gap-2">
              <span 
                className="text-white font-bold leading-none select-none"
                style={{ 
                  fontFamily: 'var(--font-work-sans)', 
                  letterSpacing: '-0.03em',
                  textTransform: 'lowercase',
                  fontSize: '24px'
                }}
              >
                são e salvo
              </span>
              <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded uppercase">
                Admin
              </span>
            </div>
          ) : (
            <div 
              className="text-white font-bold select-none text-center"
              style={{ 
                fontFamily: 'var(--font-work-sans)', 
                letterSpacing: '-0.03em',
                textTransform: 'lowercase',
                fontSize: '18px',
                lineHeight: '0.85'
              }}
            >
              <div>são e</div>
              <div>salvo</div>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="py-4">
          {!isCollapsed && (
            <p className="px-6 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Gestão
            </p>
          )}
          <SidebarMenu className="px-3">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || 
                             (item.href !== '/admin' && pathname.startsWith(item.href));
              const Icon = item.icon;
              
              if (isCollapsed) {
                return (
                  <TooltipProvider key={item.href}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuItem className="flex justify-center">
                          <SidebarMenuButton
                            asChild
                            isActive={isActive}
                            className="h-9 w-9 justify-center"
                          >
                            <Link href={item.href}>
                              <Icon className="h-6 w-6" />
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        {item.title}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              }

              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className="h-9"
                  >
                    <Link href={item.href}>
                      <Icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </div>

        <div className="py-4 border-t">
          {!isCollapsed && (
            <p className="px-6 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Sistema
            </p>
          )}
          <SidebarMenu className="px-3">
            {systemMenuItems.map((item) => {
              const isActive = pathname === item.href || 
                             (item.href !== '/admin' && pathname.startsWith(item.href));
              const Icon = item.icon;
              
              if (isCollapsed) {
                return (
                  <TooltipProvider key={item.href}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuItem className="flex justify-center">
                          <SidebarMenuButton
                            asChild
                            isActive={isActive}
                            className="h-9 w-9 justify-center"
                          >
                            <Link href={item.href}>
                              <Icon className="h-6 w-6" />
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        {item.title}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              }

              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className="h-9"
                  >
                    <Link href={item.href}>
                      <Icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </div>

        <div className="mt-auto border-t py-4">
          {!isCollapsed && (
            <p className="px-6 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Suporte
            </p>
          )}
          <SidebarMenu className="px-3">
            {bottomMenuItems.map((item) => {
              const isActive = pathname === item.href || 
                             (item.href !== '/admin' && pathname.startsWith(item.href));
              const Icon = item.icon;
              
              if (isCollapsed) {
                return (
                  <TooltipProvider key={item.href}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuItem className="flex justify-center">
                          <SidebarMenuButton
                            asChild
                            isActive={isActive}
                            className="h-9 w-9 justify-center"
                          >
                            <Link href={item.href}>
                              <Icon className="h-6 w-6" />
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        {item.title}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              }

              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className="h-9"
                  >
                    <Link href={item.href}>
                      <Icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </div>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <div className={cn(
          "transition-all",
          isCollapsed ? "py-3 flex justify-center" : "px-3 py-3"
        )}>
          {isCollapsed ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors cursor-pointer">
                    <span className="text-sm font-semibold">
                      {user?.email?.[0]?.toUpperCase() || 'U'}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{user?.email || 'Usuário'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <AppUserNav user={user} />
          )}
        </div>
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  );
}