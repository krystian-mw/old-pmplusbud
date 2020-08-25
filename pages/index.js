import { useAmp } from "next/amp";

import { FaUser, FaExchangeAlt, FaTruck, FaFileContract } from "react-icons/fa";

import Carousel from "../components/Carousel";
import Seo from "../components/Seo";

import Oferta from "./oferta";

import "../styles/pages/Home.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;

const imageBaseSrc = process.env.NEXT_PUBLIC_IMAGE_ROOT;

const About = [
  {
    icon: <FaUser />,
    text:
      "Jesteśmy zespołem rzetelnych fachowców posiadajacych niezbędne kwalifikacje zawodowe.",
  },
  {
    icon: <FaExchangeAlt />,
    text:
      "Korzystamy z materiałów wysokiej jakości, współpracujemy z wieloma producentami artykułów budowlanych.",
  },
  {
    icon: <FaTruck />,
    text:
      "Zapewniamy zakup i transport materiałów budowlanych, korzystamy z upustów na niektóre produkty.",
  },
  {
    icon: <FaFileContract />,
    text:
      "Przed przystąpieniem od prac sporządzana jest umowa która określa termin rozpoczęcia i zakończenia prac, zakres oraz gwarancję.",
  },
];

/**
 * Home Page Component
 * @component Home
 */
export default function Home() {
  const ColClass = `col-12 col-${Breakpoint}-6`;
  const isAmp = useAmp();

  return (
    <>
      <Seo
        title="PM Plus Bud - Twoi fachowcy"
        description="Profesjonalna firma Budowlana"
        og={{
          title: "PM Plus Bud - Twoi fachowcy",
          type: "website",
          url: "https://pmplusbud.pl/",
          image:
            "https://res.cloudinary.com/next-pmplusbud/w_300/logo/logo.png",
        }}
      />
      <div id="Home" className="container-fluid">
        <div className="row">
          <div className={`title ${ColClass}`}>
            <h1>PM+BUD</h1>
            <h2>Twoi Fachowcy</h2>
          </div>
          <div className={ColClass}>
            {isAmp ? (
              <amp-img
                src={`${imageBaseSrc}/w_1200/carousel/budowlancy-zakladaja-izolacje-i-maluja.webp`}
              />
            ) : (
              <Carousel />
            )}
          </div>
        </div>
        <div className="about">
          {About.map((about, index) => (
            <div key={index} className="segment">
              <div className="icon">{about.icon}</div>
              <div className="content">{about.text}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const config = {
  amp: "hybrid",
};
