import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  const supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => 
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  const pathname = request.nextUrl.pathname;

  // Definir rutas públicas
  const publicRoutes = ["/signin", "/signup", "/banos", "/articulos", "/guia", "/auth"];

  if (!user && !publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (!user) return supabaseResponse;

  const { data: roleData } = await supabase
    .from("roles")
    .select("rol")
    .eq("id_usuario", user.id)
    .single();

  const userRole = roleData?.rol || "Guest";

  if (pathname.startsWith("/admin") && userRole !== "Admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return supabaseResponse;
}
