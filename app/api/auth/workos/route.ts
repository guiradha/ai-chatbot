import { WorkOS } from '@workos-inc/node';
import { redirect } from 'next/navigation';

const workos = new WorkOS(process.env.WORKOS_API_KEY!);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const returnTo = searchParams.get('returnTo') || '/';

  const authorizationUrl = workos.userManagement.getAuthorizationUrl({
    clientId: process.env.WORKOS_CLIENT_ID!,
    redirectUri: `${process.env.NEXTAUTH_URL || 'http://localhost:3006'}/api/auth/workos/callback`,
    provider: 'authkit',
    state: returnTo,
  });

  redirect(authorizationUrl);
}