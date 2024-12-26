import CardLinks from "@/components/ui/CardLinks";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import WidgetSearchBano from "@/components/ui/WidgetSearchBano";

export default function Home() {
  return (
    <>
      <Hero type="Landing" />
      <section className="bg-primary">
        <Container>
          <WidgetSearchBano></WidgetSearchBano>
        </Container>
      </section>
      <section className="bg-accent py-10">
        <Container>
          <CardLinks></CardLinks>
        </Container>
      </section>
    </>
  );
}
