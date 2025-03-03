import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import FormEditarArticulo from "../editar-articulo/FormEditarArticulo";

const Page = () => {
  return (
    <div>
      <Hero type="adminArticles"></Hero>
      <section>
        <Container>
          <div className="text-6xl text-red-500">Listar Artículos Admin</div>
          <FormEditarArticulo></FormEditarArticulo>
        </Container>
      </section>
    </div>
  );
};

export default Page;
