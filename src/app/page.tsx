import CardLinks from "@/components/ui/CardLinks";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import ReservationWidget from "@/components/ui/ReservationWidget";

export default function Home() {
  return (
    <>
      <Hero type="Landing" />
      <section className="bg-primary">
        <Container>
          <ReservationWidget></ReservationWidget>
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
