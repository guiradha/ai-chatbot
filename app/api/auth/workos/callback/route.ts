import { WorkOS } from '@workos-inc/node';
import { signIn } from '@/app/(auth)/auth';
import { redirect } from 'next/navigation';

const workos = new WorkOS(process.env.WORKOS_API_KEY!);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state') || '/';

  if (!code) {
    redirect('/login?error=no_code');
  }

  try {
    const { user } = await workos.userManagement.authenticateWithCode({
      clientId: process.env.WORKOS_CLIENT_ID!,
      code: code!,
    });

    // Sign in with NextAuth using the WorkOS user data
    await signIn('workos', {
      email: user.email,
      id: user.id,
      name: user.firstName ? `${user.firstName} ${user.lastName}`.trim() : user.email,
    });

    redirect(state);
  } catch (error) {
    console.error('WorkOS authentication error:', error);
    redirect('/login?error=workos_error');
  }
}