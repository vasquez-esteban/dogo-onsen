import CardBath3 from "@/components/ui/CardBath3";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = await createClient();

  // Obtener usuario autenticado
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error("Error obteniendo usuario:", userError);
  }

  const userId = user ? user.id : null; // ID correcto del usuario en Supabase

  // Obtener la lista de baños
  const { data: banos, error: banosError } = await supabase.from("baño").select("*");

  if (banosError) {
    console.error("Error al cargar los baños:", banosError);
    return <p>Error al cargar los baños</p>;
  }

  return (
    <div>
      <Hero type="Banos"></Hero>
      <section>
        <Container>
          <h1 className="mb-4 text-3xl font-bold"></h1>
          <div className="flex flex-col gap-10">
            {banos.map((bano) => (
              <CardBath3 key={bano.id_baño} bano={bano} userId={userId} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
