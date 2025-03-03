import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import FormEditarBano from "./../editar-bano/FormEditarBano";

const Page = () => {
  return (
    <div>
      <Hero type="adminBano"></Hero>
      <section>
        <Container>
          <div className="text-6xl text-red-500">Listar Baños Admin</div>
          <FormEditarBano></FormEditarBano>
        </Container>
      </section>
    </div>
  );
};

export default Page;
