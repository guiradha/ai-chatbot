import { cookies } from 'next/headers';
import { AdminSidebar } from '@/components/admin-sidebar';
import { AdminLayoutHeader } from '@/components/admin-layout-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { auth } from '../(auth)/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, cookieStore] = await Promise.all([
    auth(),
    cookies(),
  ]);
  
  // Check if user is authenticated and is admin
  if (!session?.user) {
    redirect('/login');
  }
  
  // You can add admin role checking here
  // if (session.user.role !== 'admin') {
  //   redirect('/inicio');
  // }

  const isCollapsed = cookieStore.get('sidebar:state')?.value !== 'true';

  return (
    <SidebarProvider defaultOpen={!isCollapsed}>
      <div className="flex h-screen w-full">
        {/* Left Admin Sidebar */}
        <AdminSidebar user={session?.user} />
        
        {/* Main Content Area */}
        <SidebarInset>
          <div className="flex h-full flex-col">
            {/* Header with breadcrumb and sidebar toggle */}
            <AdminLayoutHeader />
            {/* Content */}
            <div className="flex-1 overflow-auto">
              {children}
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}