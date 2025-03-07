import CardReservation from "@/components/ui/CardReservation";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import WidgetSearchReservation from "@/components/ui/WidgetSearchReservation";
import { createClient } from "@/utils/supabase/server";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const supabase = await createClient();

  let query = supabase.from("reserva").select("*");

  if (searchParams.date) {
    query = query.eq("fecha", searchParams.date);
  }
  if (searchParams.time) {
    query = query.eq("hora", searchParams.time);
  }
  if (searchParams.type) {
    query = query.eq("id_baño", searchParams.type);
  }

  const { data: reservas, error } = await query;

  if (error) {
    return <p>Error al cargar las reservas</p>;
  }

  return (
    <div>
      <Hero type="adminReservas"></Hero>
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
