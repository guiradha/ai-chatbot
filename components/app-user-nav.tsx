'use client';

import { ChevronUp, LogOut, LogIn, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import type { User } from 'next-auth';
import { signOut, useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { guestRegex } from '@/lib/constants';
import { LoaderIcon } from './icons';

export function AppUserNav({ user }: { user: User | undefined }) {
  const router = useRouter();
  const { data, status } = useSession();
  const { setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const isGuest = guestRegex.test(data?.user?.email ?? '');

  if (status === 'loading') {
    return (
      <div className="flex items-center gap-2 rounded-md px-2 py-1.5">
        <div className="size-6 animate-pulse rounded-full bg-zinc-500/30" />
        <span className="animate-pulse rounded-md bg-zinc-500/30 text-transparent text-sm">
          Carregando...
        </span>
        <div className="ml-auto animate-spin text-zinc-500">
          <LoaderIcon />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent"
      >
        <Image
          src={`https://avatar.vercel.sh/${user?.email}`}
          alt={user?.email ?? 'User Avatar'}
          width={24}
          height={24}
          className="rounded-full"
        />
        <span className="truncate">
          {isGuest ? 'Convidado' : user?.email}
        </span>
        <ChevronUp 
          className={cn(
            "ml-auto h-4 w-4 transition-transform",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 right-0 mb-1 rounded-md border bg-popover p-1 shadow-md">
          <button
            onClick={() => {
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
              setIsOpen(false);
            }}
            className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent"
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span>Modo {resolvedTheme === 'light' ? 'escuro' : 'claro'}</span>
          </button>

          <button
            onClick={() => {
              setIsOpen(false);
              if (isGuest) {
                router.push('/login');
              } else {
                signOut({ redirectTo: '/' });
              }
            }}
            className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent"
          >
            {isGuest ? (
              <>
                <LogIn className="h-4 w-4" />
                <span>Fazer login</span>
              </>
            ) : (
              <>
                <LogOut className="h-4 w-4" />
                <span>Sair</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}