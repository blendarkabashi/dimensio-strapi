import { NextRequest } from 'next/server';
import { useSelector } from 'react-redux';
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/company')) {
    // This logic is only applied to /about
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /dashboard
  }
}
