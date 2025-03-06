import CardProduct from "@/components/ui/CardProduct";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import { createClient } from "@/utils/supabase/server";

interface Producto {
  id_producto: number;
  nombre: string;
  cantidad: number;
}

export default async function Page() {
  const supabase = await createClient();

  const { data: productos, error } = await supabase
    .from("producto")
    .select("*");

  if (error) {
    return <p>Error al cargar productos</p>;
  }
  return (
    <div>
      <Hero type="Articulos"></Hero>
      <section>
        <Container>
          <div className="flex flex-wrap gap-2">
            {productos.map((producto: Producto) => (
              <CardProduct key={producto.id_producto} producto={producto} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
