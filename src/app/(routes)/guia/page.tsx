import CardInfo from "@/components/ui/CardInfo";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";

const Page = () => {
  return (
    <>
      <Hero type="Info"></Hero>
      <section>
        <Container>
          <div className="flex flex-col gap-10">
            <CardInfo></CardInfo>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page;
