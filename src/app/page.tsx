import CardBath from "@/components/ui/CardBath";
import CardLinks from "@/components/ui/CardLinks";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import WidgetSearchBaths from "@/components/ui/WidgetSearchBaths"; // Cambio aquí
import { createClient } from "@/utils/supabase/server";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Home = async ({ searchParams }: PageProps) => {
  const supabase = await createClient();
  const resolvedSearchParams = await searchParams;

  // Verificar si hay filtros activos
  const hasFilters =
    resolvedSearchParams.date &&
    resolvedSearchParams.time &&
    resolvedSearchParams.type;

  let bañoDisponible = null;
  let mensaje = "";

  if (hasFilters) {
    const { date, time, type } = resolvedSearchParams;

    try {
      // Verificar si ya existe una reserva con la fecha, hora y tipo de baño
      const { data: reservaExistente, error: reservaError } = await supabase
        .from("reserva")
        .select("id_bano")
        .eq("fecha", date)
        .eq("hora", time)
        .eq("id_bano", type)
        .maybeSingle();

      if (reservaError) {
        console.error("❌ Error al obtener reservas:", reservaError);
      }

      if (reservaExistente) {
        // Si ya hay una reserva, el baño NO está disponible
        mensaje = "Baño no disponible para esta fecha y hora.";
      } else {
        // Si NO hay una reserva, buscar la información del baño
        const { data: baño, error: bañoError } = await supabase
          .from("baño")
          .select("*")
          .eq("id_baño", type)
          .maybeSingle();

        if (bañoError) {
          console.error(
            "❌ Error al obtener la información del baño:",
            bañoError
          );
        }

        if (baño) {
          bañoDisponible = baño;
        } else {
          mensaje = "No se encontró información del baño.";
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
          {/* Widget de búsqueda cambiado */}
          <WidgetSearchBaths />

          {/* Mostrar resultado de la búsqueda */}
          {hasFilters && (
            <div className="mt-5">
              {mensaje ? (
                <p className="font-bold text-red-600">{mensaje}</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {bañoDisponible && <CardBath bano={bañoDisponible} />}
                </div>
              )}
            </div>
          )}

          {/* Mantener CardLinks al final, sin modificar su posición */}
          <div className="mt-10">
            <CardLinks />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
