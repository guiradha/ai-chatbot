'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { PlusIcon } from './icons';
import { History } from 'lucide-react';
import { ChatHistoryDialog } from './chat-history-dialog';
import { useSession } from 'next-auth/react';

export function AssistenteHeaderPortal() {
  const router = useRouter();
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);
  const [historyDialogOpen, setHistoryDialogOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const buttons = (
    <>
      {/* New chat button */}
      <Button
        variant="outline"
        size="sm"
        className="h-8"
        onClick={() => {
          router.push('/assistente');
          router.refresh();
        }}
      >
        <PlusIcon size={16} />
        Nova Conversa
      </Button>
      
      {/* Chat history dialog toggle */}
      <Button
        variant="outline"
        size="sm"
        className="h-8"
        onClick={() => setHistoryDialogOpen(true)}
      >
        <History size={16} />
        Histórico
      </Button>

      {/* History Dialog */}
      <ChatHistoryDialog 
        user={session?.user}
        open={historyDialogOpen}
        onOpenChange={setHistoryDialogOpen}
      />
    </>
  );

  if (!mounted) return null;

  const container = document.getElementById('assistente-header-buttons');
  if (!container) return null;

  return createPortal(buttons, container);
}