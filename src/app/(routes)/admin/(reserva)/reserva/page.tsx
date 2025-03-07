import CardReservation from "@/components/ui/CardReservation";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import WidgetSearchReservation from "@/components/ui/WidgetSearchReservation";
import { createClient } from "@/utils/supabase/server";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Page = async ({ searchParams }: PageProps) => {
  const supabase = await createClient();

  // Await searchParams because it's a Promise
  const resolvedSearchParams = await searchParams;

  let query = supabase.from("reserva").select("*");

  if (resolvedSearchParams.date) {
    query = query.eq("fecha", resolvedSearchParams.date);
  }
  if (resolvedSearchParams.time) {
    query = query.eq("hora", resolvedSearchParams.time);
  }
  if (resolvedSearchParams.type) {
    query = query.eq("id_baño", resolvedSearchParams.type);
  }

  const { data: reservas, error } = await query;

  if (error) {
    return <p>Error al cargar las reservas</p>;
  }

  return (
    <div>
      <Hero type="adminReservas" />
      <section>
        <Container>
          <WidgetSearchReservation />
          <div className="flex flex-wrap gap-2">
            {reservas.length === 0 ? (
              <p>No se encontraron reservas</p>
            ) : (
              reservas.map((reserva) => (
                <CardReservation key={reserva.id_reserva} reserva={reserva} />
              ))
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Page;
