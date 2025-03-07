import CardBath from "@/components/ui/CardBath";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import { supabase } from '@/utils/supabase/client';

export default async function Page() {
  //const supabase = await createClient();
  const { data: banos, error } = await supabase.from("baño").select("*");

  if (error) {
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
              <CardBath key={bano.id_baño} bano={bano} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
