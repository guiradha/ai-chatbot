'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { MenuIcon } from './icons';
import { cn } from '@/lib/utils';

interface ChatSidebarTriggerProps extends React.ComponentProps<typeof Button> {
  className?: string;
}

export const ChatSidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  ChatSidebarTriggerProps
>(({ className, onClick, ...props }, ref) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Toggle the chat sidebar state in cookie
    const currentState = document.cookie
      .split('; ')
      .find(row => row.startsWith('chat-sidebar:state='))
      ?.split('=')[1];
    
    const newState = currentState === 'true' ? 'false' : 'true';
    document.cookie = `chat-sidebar:state=${newState}; path=/; max-age=31536000`;
    
    // Trigger a custom event that components can listen to
    window.dispatchEvent(new CustomEvent('toggle-chat-sidebar'));
    
    // Call the original onClick if provided
    onClick?.(event);
    
    // Trigger a soft navigation to apply the change
    const event2 = new PopStateEvent('popstate', { state: {} });
    window.dispatchEvent(event2);
  };

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={cn('h-7 w-7', className)}
      onClick={handleClick}
      {...props}
    >
      <MenuIcon size={16} />
      <span className="sr-only">Alternar histórico de conversas</span>
    </Button>
  );
});

ChatSidebarTrigger.displayName = 'ChatSidebarTrigger';