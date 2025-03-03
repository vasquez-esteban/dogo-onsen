import CardReservation from "@/components/ui/CardReservation";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";
import WidgetSearchReservation from "@/components/ui/WidgetSearchReservation";

const Page = () => {
  return (
    <div>
      <Hero type="adminReservas"></Hero>
      <section>
        <Container>
          <div className="text-6xl text-red-500">Listar Reservas Admin</div>
          <WidgetSearchReservation></WidgetSearchReservation>
          <div className="flex flex-wrap gap-2">
            <CardReservation></CardReservation>
            <CardReservation></CardReservation>
            <CardReservation></CardReservation>
            <CardReservation></CardReservation>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Page;
