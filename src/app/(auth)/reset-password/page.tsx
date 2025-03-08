import ResetPassword from "@/components/ui/ResetPassword";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <>
      <div className="mt-20 flex w-full justify-center">
        <section className="flex w-[400px] flex-col">
          <h1 className="mb-6 w-full text-center text-3xl font-bold">
            Restablecer contraseña
          </h1>
          <ResetPassword />
        </section>
      </div>
    </>
  );
}
