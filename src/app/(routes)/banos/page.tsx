import CardBath from "@/components/ui/CardBath";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";

const Page = () => {
  return (
    <div>
      <Hero type="Banos"></Hero>
      <section>
        <Container>
          <div className="flex flex-col gap-10">
            <CardBath></CardBath>
            <CardBath></CardBath>
            <CardBath></CardBath>
            <CardBath></CardBath>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Page;
