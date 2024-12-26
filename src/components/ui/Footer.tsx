import footerLogo from "@/assets/footerlogo.webp";
import Image from "next/image";
import Container from "./Container";

const socialLinks = [
  { href: "#" },
  { href: "#" },
  { href: "#" },
  { href: "#" },
];

const Footer = () => {
  return (
    <footer className="flex justify-center bg-secondary py-10">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8 px-4">
          <h2 className="h2-xl text-center">Somos Dogo Onsen</h2>
          <p className="w-3/4 text-center">
            Hemos aceptado el desafío de ser el mejor balneario para espíritus,
            disponemos de una gran variedad de baños y productos de amenidad
            para tu limpieza y relajación.
          </p>
          <Image
            src={footerLogo}
            className="w-1/2 max-w-60"
            alt="Dogo Onsen Logo"
          ></Image>
          <div>
            <p className="text-center font-bold">Creado por</p>
            <ul className="flex gap-1.5">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_295_1725)">
                        <path
                          d="M26.9793 0.941162H3.01683C3.00933 0.941162 3.00089 0.941162 2.99151 0.941162C1.86745 0.941162 0.955264 1.84491 0.942139 2.96522V27.0327C0.955264 28.154 1.86745 29.0587 2.99151 29.0587C3.00089 29.0587 3.00933 29.0587 3.0187 29.0587H26.9765C26.984 29.0587 26.9934 29.0587 27.0028 29.0587C28.1278 29.0587 29.0418 28.1558 29.0596 27.0346V27.0327V2.9671C29.0418 1.84491 28.1278 0.941162 27.0018 0.941162C26.9925 0.941162 26.984 0.941162 26.9746 0.941162H26.9793ZM9.2812 24.9018H5.10558V11.4852H9.2812V24.9018ZM7.19433 9.6496C5.85839 9.6496 4.77651 8.56679 4.77651 7.23179C4.77651 5.89679 5.85933 4.81398 7.19433 4.81398C8.52933 4.81398 9.61214 5.89585 9.61214 7.23085C9.61214 7.23179 9.61214 7.23272 9.61214 7.2346C9.61214 8.56866 8.53026 9.65054 7.1962 9.65054C7.19526 9.65054 7.19433 9.65054 7.19339 9.65054L7.19433 9.6496ZM24.8962 24.9018H20.7328V18.3777C20.7328 16.8215 20.7009 14.8199 18.5634 14.8199C16.3921 14.8199 16.0612 16.513 16.0612 18.2634V24.9027H11.8978V11.4862H15.8971V13.3152H15.9515C16.7278 12.0074 18.1321 11.1449 19.7381 11.1449C19.7953 11.1449 19.8515 11.1458 19.9078 11.1477H19.8993C24.1181 11.1477 24.8981 13.9246 24.8981 17.5387V24.9027L24.8962 24.9018Z"
                          fill="#2E2E38"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_295_1725">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center">©Dogo Onsen 2025. All right reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
