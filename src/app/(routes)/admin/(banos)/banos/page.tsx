import CardBathEdit from "@/components/ui/admin/CardBathroomEdit";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  const { data: banos, error } = await supabase.from("baño").select("*");

  if (error) {
    return <p>Error al cargar los baños</p>;
  }

  return (
    <div>
      <Hero type="adminBano"></Hero>
      <section>
        <Container>
          <h1 className="mb-4 text-3xl font-bold">Listar Baños Admin</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {banos.map((bano) => (
              <CardBathEdit key={bano.id_baño} bano={bano} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
