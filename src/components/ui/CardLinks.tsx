import cardBano from "@/assets/card1.webp";
import cardArt from "@/assets/card2.webp";
import cardGuia from "@/assets/card3.webp";
import Image from "next/image";
import Link from "next/link";

const CardLinks = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-10 sm:flex-row">
        <CardLinkWide
          href="/banos"
          title="Baños"
          img={cardBano.src}
          alt="Carta de Baños"
        />
        <CardLinkWide
          href="/articulos"
          title="Artículos"
          img={cardArt.src}
          alt="Carta Artículos"
        />
      </div>
      <div>
        <CardLinkTall />
      </div>
    </div>
  );
};

const CardLinkWide = ({
  href,
  title,
  img,
  alt,
}: {
  href: string;
  title: string;
  img: string;
  alt: string;
}) => {
  return (
    <Link href={href} className="block w-full">
      <div className="relative h-96 w-full">
        <Image
          src={img}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-[44px]"
        />
        <div className="absolute inset-0 flex items-end justify-center rounded-[44px] bg-black/50 pb-10">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

const CardLinkTall = () => {
  return (
    <Link href="/banos" className="block w-full">
      <div className="relative h-96 w-full">
        <Image
          src={cardGuia.src}
          alt="Carta Guía"
          layout="fill"
          objectFit="cover"
          className="rounded-[44px]"
        />
        <div className="absolute inset-0 flex items-end justify-center rounded-[44px] bg-black/50 pb-10">
          <h2 className="text-2xl font-bold text-white">Guía</h2>
        </div>
      </div>
    </Link>
  );
};

export default CardLinks;
