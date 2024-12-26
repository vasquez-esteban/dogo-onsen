import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import Hero from "@/components/ui/Hero";

const Page = () => {
  return (
    <>
      <Hero type="Info"></Hero>
      <section>
        <Container>
          <div className="flex flex-col gap-10">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h2 className="h2-xl">¿Qué hacer al llegar?</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row justify-between px-7 md:flex-col">
                  <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row md:gap-0">
                    <RecepcionItem></RecepcionItem>
                    <ArrowIcon></ArrowIcon>
                    <RegistroItem></RegistroItem>
                    <ArrowIcon></ArrowIcon>
                    <ServiciosItem></ServiciosItem>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
};

const ArrowIcon = () => {
  return (
    <div className="flex items-center justify-between">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        className="rotate-90 md:rotate-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6665 40H63.3332"
          stroke="#2E2E38"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 16.6665L63.3333 39.9998L40 63.3332"
          stroke="#2E2E38"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const RecepcionItem = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <svg
          width="120"
          height="121"
          viewBox="0 0 120 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 45.5L60 10.5L105 45.5V100.5C105 103.152 103.946 105.696 102.071 107.571C100.196 109.446 97.6522 110.5 95 110.5H25C22.3478 110.5 19.8043 109.446 17.9289 107.571C16.0536 105.696 15 103.152 15 100.5V45.5Z"
            stroke="#2E2E38"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M45 110.5V60.5H75V110.5"
            stroke="#2E2E38"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="h2-sm">Recepción</h3>
    </div>
  );
};

const RegistroItem = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <svg
          width="120"
          height="121"
          viewBox="0 0 120 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70 10.5H30C27.3478 10.5 24.8043 11.5536 22.9289 13.4289C21.0536 15.3043 20 17.8478 20 20.5V100.5C20 103.152 21.0536 105.696 22.9289 107.571C24.8043 109.446 27.3478 110.5 30 110.5H90C92.6522 110.5 95.1957 109.446 97.0711 107.571C98.9464 105.696 100 103.152 100 100.5V40.5L70 10.5Z"
            stroke="#2E2E38"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M70 10.5V40.5H100"
            stroke="#2E2E38"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M80 65.5H40"
            stroke="#2E2E38"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M80 85.5H40"
            stroke="#2E2E38"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M50 45.5H45H40"
            stroke="#2E2E38"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="h2-sm">Validación</h3>
    </div>
  );
};

const ServiciosItem = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 105V95C80 89.6957 77.8929 84.6086 74.1421 80.8579C70.3914 77.1071 65.3043 75 60 75H25C19.6957 75 14.6086 77.1071 10.8579 80.8579C7.10714 84.6086 5 89.6957 5 95V105"
            stroke="#2E2E38"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42.5 55C53.5457 55 62.5 46.0457 62.5 35C62.5 23.9543 53.5457 15 42.5 15C31.4543 15 22.5 23.9543 22.5 35C22.5 46.0457 31.4543 55 42.5 55Z"
            stroke="#2E2E38"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M85 55L95 65L115 45"
            stroke="#2E2E38"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="h2-sm">Disfruta</h3>
    </div>
  );
};

export default Page;
