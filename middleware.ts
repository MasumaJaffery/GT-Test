import { createMiddlewareClient } from 'gt-next/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();
  
  // Skip API routes and static files
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.')
  ) {
    return response;
  }

  // Initialize GT client
  const client = createMiddlewareClient(request);
  
  // Extract locale from URL (e.g., /en/about -> 'en')
  const pathLocale = pathname.split('/')[1];
  const supportedLocales = ['en', 'ar', 'ur', 'fa', 'es'];
  
  // Use URL locale if valid, otherwise use cookie or default to 'en'
  const locale = supportedLocales.includes(pathLocale) 
    ? pathLocale 
    : client.getLocale() || 'en';

  // Set locale in GT client and headers
  client.setLocale(locale);
  response.headers.set('x-locale', locale);

  // Redirect if locale is in URL but not supported
  if (pathLocale && !supportedLocales.includes(pathLocale)) {
    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  // If no locale in URL, prepend it
  if (!pathLocale || !supportedLocales.includes(pathLocale)) {
    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};