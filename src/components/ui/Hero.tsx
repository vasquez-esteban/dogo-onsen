import heroArticlesAdmin from "@/assets/articuloCard.webp";
import heroArticles from "@/assets/articulosCardCliente.webp";
import heroBano from "@/assets/banoCard.webp";
import heroInfo from "@/assets/hero-info.webp";
import heroLanding from "@/assets/hero-landing.webp";
import heroReserva from "@/assets/reserva.webp";
import Image from "next/image";

const pics = {
  landing: {
    id: "Landing",
    src: heroLanding,
    alt: "Landing Image",
    title: "Limpia tu Espíritu en las Mejores Aguas Termales",
  },
  info: {
    id: "Info",
    src: heroInfo,
    alt: "Information Image",
    title: "Conoce más sobre nuestra guía",
  },
  bano: {
    id: "Banos",
    src: heroBano,
    alt: "Imagen de espíritu en baño",
    title: "Relájate en nuestros baños",
  },
  articles: {
    id: "Articulos",
    src: heroArticles,
    alt: "Articles Image",
    title: "Conoce nuestros artículos de amenidad",
  },
  adminBano: {
    id: "adminBano",
    src: heroBano,
    alt: "Imagen de espíritu en baño",
    title: "Gestiona los baños",
  },
  adminArticles: {
    id: "adminArticles",
    src: heroArticlesAdmin,
    alt: "Imagen de espíritu en baño",
    title: "Gestiona los artículos",
  },
  adminReservas: {
    id: "adminReservas",
    src: heroReserva,
    alt: "Imagen de espíritu en baño",
    title: "Gestiona las reservas de baños",
  },
};

const Hero = ({ type }: { type: string }) => {
  const pic = Object.values(pics).find((pic) => pic.id === type);

  if (!pic) {
    return null;
  }

  const { src, alt, title } = pic;

  return (
    <section className="relative h-screen max-h-[1000px] w-full">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 flex items-end justify-center bg-black/50 p-4 md:p-8">
        <div className="mb-10 w-full max-w-[1200px] p-4">
          <h1 className="h1 max-w-[900px] font-bold text-white">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
