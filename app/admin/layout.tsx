import { cookies } from 'next/headers';
import { AdminSidebar } from '@/components/admin-sidebar';
import { auth } from '../(auth)/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  
  // Check if user is authenticated and is admin
  if (!session?.user) {
    redirect('/login');
  }
  
  // You can add admin role checking here
  // if (session.user.role !== 'admin') {
  //   redirect('/inicio');
  // }

  return (
    <div className="flex h-screen w-full">
      {/* Left Admin Sidebar */}
      <AdminSidebar user={session?.user} />
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-auto bg-background">
        {children}
      </div>
    </div>
  );
}