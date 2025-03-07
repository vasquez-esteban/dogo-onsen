// src/app/admin/articulos/page.tsx

import { getProductos } from "@/actions/amenity";
import CardProduct from "@/components/ui/CardProduct";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import ProtectedRoute from "@/components/ui/ProtectedComponent";

interface Producto {
  id_producto: number;
  nombre: string;
  cantidad: number;
}

export default async function Page() {
  try {
    // Llamada a la Server Action
    const productos = await getProductos();

    // Si no hay productos
    if (!productos || productos.length === 0) {
      return <p>No se encontraron productos.</p>;
    }

    return (
      <ProtectedRoute>
      <div>
        <Hero type="adminArticles" />
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
      </ProtectedRoute>
    );
  } catch (error: unknown) {
    // Verificamos si el error es de tipo Error
    if (error instanceof Error) {
      return <p>Error al cargar productos: {error.message}</p>;
    }
    // Si no es un tipo Error, mostramos un mensaje genérico
    return <p>Error desconocido al cargar productos</p>;
  }
}