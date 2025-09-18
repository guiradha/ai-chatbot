'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { MenuIcon } from './icons';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/components/ui/sidebar';

interface ChatSidebarContextTriggerProps extends React.ComponentProps<typeof Button> {
  className?: string;
}

export const ChatSidebarContextTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  ChatSidebarContextTriggerProps
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={cn('h-7 w-7', className)}
      onClick={(e) => {
        toggleSidebar();
        onClick?.(e);
      }}
      title="Alternar histórico de conversas"
      {...props}
    >
      <MenuIcon size={16} />
      <span className="sr-only">Alternar histórico de conversas</span>
    </Button>
  );
});

ChatSidebarContextTrigger.displayName = 'ChatSidebarContextTrigger';