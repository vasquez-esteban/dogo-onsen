import CardProduct from "@/components/ui/CardProduct";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";

const Page = () => {
  return (
    <div>
      <Hero type="Articulos"></Hero>
      <section>
        <Container>
          <div className="flex flex-wrap gap-2">
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Page;
