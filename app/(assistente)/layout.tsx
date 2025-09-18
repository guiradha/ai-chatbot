import { cookies } from 'next/headers';

import { ApplicationSidebar } from '@/components/application-sidebar';
import { ChatSidebar } from '@/components/chat-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { auth } from '../(auth)/auth';
import Script from 'next/script';
import { DataStreamProvider } from '@/components/data-stream-provider';

export const experimental_ppr = true;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, cookieStore] = await Promise.all([auth(), cookies()]);
  const isChatSidebarOpen = cookieStore.get('chat-sidebar:state')?.value === 'true';

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js"
        strategy="beforeInteractive"
      />
      <DataStreamProvider>
        <div className="flex h-screen w-full">
          {/* Left Application Sidebar */}
          <ApplicationSidebar user={session?.user} />
          
          {/* Main Content Area */}
          <div className="flex-1 flex">
            {/* Right Chat Sidebar with its own provider - closed by default */}
            <SidebarProvider defaultOpen={isChatSidebarOpen}>
              <div className="flex-1">
                {children}
              </div>
              <ChatSidebar user={session?.user} />
            </SidebarProvider>
          </div>
        </div>
      </DataStreamProvider>
    </>
  );
}
