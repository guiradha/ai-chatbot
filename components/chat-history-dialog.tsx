'use client';

import React from 'react';
import type { User } from 'next-auth';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { SidebarHistory } from '@/components/sidebar-history';

interface ChatHistoryDialogProps {
  user: User | undefined;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChatHistoryDialog({ user, open, onOpenChange }: ChatHistoryDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Histórico de Conversas</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-auto pr-2">
          <SidebarHistory user={user} />
        </div>
      </DialogContent>
    </Dialog>
  );
}