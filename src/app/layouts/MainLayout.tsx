"use client";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { ReactNode} from "react";
import { useAuth } from "@/components/ui/context/AuthProvider";


const MainLayout = ({ children }: { children: ReactNode }) => {
  const { isLoading } = useAuth(); // Obtener estado de autenticación

  if (isLoading) {
    return <div className="py-10 text-center">Cargando...</div>;
  }
  return (
    <div>
      <Navbar></Navbar>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
