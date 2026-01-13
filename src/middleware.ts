import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect checkout route
  if (pathname.startsWith('/checkout')) {
    const sessionCookie = request.cookies.get('auth_session'); // Better Auth standard or configured name
    
    // Note: To be fully secure with Better Auth, we should verify the session via API/DB
    // But for middleware perf, checking cookie existence is a common first step.
    // Real session validation can happen in the Server Component/Action of the checkout page.
    
    if (!sessionCookie) {
      const signInUrl = new URL('/sign-in', request.url);
      signInUrl.searchParams.set('callbackUrl', pathname); // Redirect back after login
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout/:path*'],
};
