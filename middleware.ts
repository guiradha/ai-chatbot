import { NextResponse, type NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { guestRegex, isDevelopmentEnvironment } from './lib/constants';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /*
   * Playwright starts the dev server and requires a 200 status to
   * begin the tests, so this ensures that the tests can start
   */
  if (pathname.startsWith('/ping')) {
    return new Response('pong', { status: 200 });
  }

  // Allow auth API routes
  if (pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // Public routes (landing pages) - no auth required
  const publicRoutes = ['/', '/sobre', '/cursos-nr'];
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith(route + '/')
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
    secureCookie: !isDevelopmentEnvironment,
  });

  // Protected routes - require authentication
  const protectedRoutes = [
    '/inicio',
    '/assistente',
    '/cursos',
    '/certificados',
    '/relatorios',
    '/equipe',
    '/documentos',
    '/ajuda',
    '/configuracoes',
    '/comunidade'
  ];

  const isProtectedRoute = protectedRoutes.some(route =>
    pathname === route || pathname.startsWith(route + '/')
  );

  // Admin routes - require admin role
  const isAdminRoute = pathname.startsWith('/admin');

  // Check authentication for protected and admin routes
  if ((isProtectedRoute || isAdminRoute) && !token) {
    const redirectUrl = encodeURIComponent(request.url);
    return NextResponse.redirect(
      new URL(`/api/auth/guest?redirectUrl=${redirectUrl}`, request.url),
    );
  }

  // Additional admin check (you can enhance this with role checking)
  if (isAdminRoute && token) {
    // Add your admin role check here
    // Example: if (token.role !== 'admin') { redirect to /inicio }
  }

  const isGuest = guestRegex.test(token?.email ?? '');

  // Redirect authenticated users away from auth pages
  if (token && !isGuest && ['/login', '/register'].includes(pathname)) {
    return NextResponse.redirect(new URL('/inicio', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Public routes (landing pages)
    '/',
    '/sobre',
    '/sobre/:path*',
    '/cursos-nr',
    '/cursos-nr/:path*',
    
    // Auth routes
    '/login',
    '/register',
    
    // Protected user routes
    '/inicio',
    '/assistente',
    '/assistente/:path*',
    '/cursos',
    '/cursos/:path*',
    '/certificados',
    '/certificados/:path*',
    '/relatorios',
    '/relatorios/:path*',
    '/equipe',
    '/equipe/:path*',
    '/documentos',
    '/documentos/:path*',
    '/ajuda',
    '/ajuda/:path*',
    '/configuracoes',
    '/configuracoes/:path*',
    '/comunidade',
    '/comunidade/:path*',
    
    // Admin routes (protected)
    '/admin',
    '/admin/:path*',
    
    // API routes
    '/api/:path*',

    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - training-covers (training images)
     * - images (other public images)
     * - .png, .jpg, .jpeg, .gif, .svg, .ico (image files)
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|training-covers|images|.*\\.(?:png|jpg|jpeg|gif|svg|ico)).*)',
  ],
};
