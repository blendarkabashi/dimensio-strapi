import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
  ],
};

export function middleware(req) {
  let jwt = req.cookies.get('jwt')?.value;
  console.log('here');
  if (!jwt) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url, req.url);
  }
  return NextResponse.next();
}
