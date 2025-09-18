import { cookies } from 'next/headers';
import { auth } from '../(auth)/auth';
import { redirect } from 'next/navigation';
import { ProtectedSidebar } from '@/components/protected-sidebar';
import { ProtectedHeader } from '@/components/protected-header';
import { SidebarProvider } from '@/components/ui/sidebar';

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  
  if (!session?.user) {
    redirect('/login');
  }

  const cookieStore = await cookies();
  const sidebarState = cookieStore.get('sidebar:state')?.value;

  return (
    <SidebarProvider defaultOpen={sidebarState !== 'false'}>
      <div className="flex h-screen w-full">
        <ProtectedSidebar user={session?.user} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <ProtectedHeader user={session?.user} />
          <main className="flex-1 overflow-auto bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}