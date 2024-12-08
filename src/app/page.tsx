import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-black"></div>
      <div className="flex h-screen w-screen items-center justify-center bg-red-500">
        <Button>Hola desde Shadcn</Button>
      </div>
    </>
  );
}
