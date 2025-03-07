import CardBath2 from "@/components/ui/CardBath2"; // Cambio aquí
import CardLinks from "@/components/ui/CardLinks";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import WidgetSearchBaths from "@/components/ui/WidgetSearchBaths";
import { createClient } from "@/utils/supabase/server";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Home = async ({ searchParams }: PageProps) => {
  const supabase = await createClient();
  const resolvedSearchParams = await searchParams;

  const hasFilters =
    resolvedSearchParams.date &&
    resolvedSearchParams.time &&
    resolvedSearchParams.spirits;

  let bañosDisponibles = [];
  let mensaje = "";

  if (hasFilters) {
    const { date, time, spirits } = resolvedSearchParams;
    const cantidadEspiritus = parseInt(spirits as string, 10);

    try {
      const { data: reservas, error: reservaError } = await supabase
        .from("reserva")
        .select("id_bano")
        .eq("fecha", date)
        .eq("hora", time);

      if (reservaError) {
        console.error("❌ Error al obtener reservas:", reservaError);
      }

      const bañosReservados = reservas
        ? reservas.map((reserva) => reserva.id_bano)
        : [];

      const { data: baños, error: bañoError } = await supabase
        .from("baño")
        .select("*")
        .gte("capacidad", cantidadEspiritus);

      if (bañoError) {
        console.error(
          "❌ Error al obtener la información de los baños:",
          bañoError
        );
      }

      if (!baños || baños.length === 0) {
        mensaje = "No hay baños con capacidad suficiente.";
      } else {
        bañosDisponibles = baños.filter(
          (baño) => !bañosReservados.includes(baño.id_baño)
        );

        if (bañosDisponibles.length === 0) {
          mensaje =
            "No hay baños disponibles para esta fecha, hora y cantidad de espíritus.";
        }
      }
    } catch (error) {
      console.error("❌ Error inesperado:", error);
      mensaje = "Ocurrió un error inesperado.";
    }
  }

  return (
    <>
      <Hero type="Landing" />
      <section className="bg-accent py-10">
        <Container>
          <WidgetSearchBaths />

          {hasFilters && (
            <div className="mt-5">
              {mensaje ? (
                <p className="font-bold text-red-600">{mensaje}</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {bañosDisponibles.map((baño) => (
                    <CardBath2 key={baño.id_baño} bano={baño} /> // Cambio aquí
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="mt-10">
            <CardLinks />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
