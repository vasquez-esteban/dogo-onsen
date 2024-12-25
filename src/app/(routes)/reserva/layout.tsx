import authImg from "@/assets/img-auth.webp";
import Image from "next/image";
import { ReactNode } from "react";

const ReservationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-screen items-center justify-center">
      <div className="mx-auto w-full max-w-[400px]">
        <div className="flex flex-col gap-6 px-5">
          <Image
            className="h-[400px] rounded-[40px] object-cover object-top"
            src={authImg}
            width={400}
            height={400}
            alt="Imagen de una máscara de Ghibli"
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default ReservationLayout;
