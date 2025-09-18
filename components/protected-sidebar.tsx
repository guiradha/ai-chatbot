'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { AppUserNav } from './app-user-nav';
import { SaoESalvoLogo } from './sao-e-salvo-logo';
import { 
  Home,
  Sparkles,
  GraduationCap,
  Settings,
  BarChart3,
  Users,
  FileText,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Shield,
  Calendar,
  Award
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
import type { User } from 'next-auth';

const menuItems = [
  {
    title: 'Início',
    icon: Home,
    href: '/inicio',
  },
  {
    title: 'Assistente IA',
    icon: Sparkles,
    href: '/assistente',
  },
  {
    title: 'Cursos',
    icon: GraduationCap,
    href: '/cursos',
  },
  {
    title: 'Certificados',
    icon: Award,
    href: '/certificados',
  },
];

const adminItems = [
  {
    title: 'Relatórios',
    icon: BarChart3,
    href: '/relatorios',
  },
  {
    title: 'Equipe',
    icon: Users,
    href: '/equipe',
  },
  {
    title: 'Documentos',
    icon: FileText,
    href: '/documentos',
  },
];

const bottomMenuItems = [
  {
    title: 'Ajuda',
    icon: HelpCircle,
    href: '/ajuda',
  },
];

export function ProtectedSidebar({ user }: { user: User | undefined }) {
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
              Menu Principal
            </p>
          )}
          <SidebarMenu className="px-3">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || 
                             (item.href !== '/inicio' && pathname.startsWith(item.href));
              const Icon = item.icon;
              
              if (isCollapsed) {
                return (
                  <TooltipProvider key={item.href}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuItem className="flex justify-center">
                          {item.disabled ? (
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg opacity-40 cursor-not-allowed">
                              <Icon className="h-6 w-6 text-muted-foreground" />
                            </div>
                          ) : (
                            <SidebarMenuButton
                              asChild
                              isActive={isActive}
                              className="h-9 w-9 justify-center"
                            >
                              <Link href={item.href}>
                                <Icon className="h-6 w-6" />
                              </Link>
                            </SidebarMenuButton>
                          )}
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
                  {item.disabled ? (
                    <div className="flex h-9 items-center gap-3 rounded-lg px-2 text-sm opacity-40 cursor-not-allowed">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">{item.title}</span>
                    </div>
                  ) : (
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
                  )}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </div>

        <div className="py-4 border-t">
          {!isCollapsed && (
            <p className="px-6 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Administração
            </p>
          )}
          <SidebarMenu className="px-3">
            {adminItems.map((item) => {
              const isActive = pathname === item.href || 
                             (item.href !== '/inicio' && pathname.startsWith(item.href));
              const Icon = item.icon;
              
              if (isCollapsed) {
                return (
                  <TooltipProvider key={item.href}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuItem className="flex justify-center">
                          {item.disabled ? (
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg opacity-40 cursor-not-allowed">
                              <Icon className="h-6 w-6 text-muted-foreground" />
                            </div>
                          ) : (
                            <SidebarMenuButton
                              asChild
                              isActive={isActive}
                              className="h-9 w-9 justify-center"
                            >
                              <Link href={item.href}>
                                <Icon className="h-6 w-6" />
                              </Link>
                            </SidebarMenuButton>
                          )}
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
                  {item.disabled ? (
                    <div className="flex h-9 items-center gap-3 rounded-lg px-2 text-sm opacity-40 cursor-not-allowed">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">{item.title}</span>
                    </div>
                  ) : (
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
                  )}
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
                             (item.href !== '/inicio' && pathname.startsWith(item.href));
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