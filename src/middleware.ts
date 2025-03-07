import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { supabase } from '@/utils/supabase/client';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Excluir rutas públicas
  const publicPaths = ['/signin', '/signup', '/auth'];
  if (publicPaths.some((path) => url.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Obtener sesión del usuario
  const { data: { session }, error } = await supabase.auth.getSession();

  if (!session && req.nextUrl.pathname !== "/signin") {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
