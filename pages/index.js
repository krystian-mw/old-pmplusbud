import { useAmp } from "next/amp";

import { FaUser, FaExchangeAlt, FaTruck, FaFileContract } from "react-icons/fa";

import Seo from "../components/Seo";

import "../styles/pages/Home.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;

const imageBaseSrc = process.env.NEXT_PUBLIC_IMAGE_ROOT;

const ColClass = `col-12 col-${Breakpoint}-6`;

const isEven = (n) => n % 2 == 0;

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

const Presentation = [
  {
    image: `/carousel/murarz-muruje-pustakami-ceramicznymi`,
    headline: `Wznoszenia Budynków`,
  },
];

const AmpContent = () => (
  <div className="row">
    <div className={`title ${ColClass}`}>
      <h1>PM+BUD</h1>
      <h2>Twoi Fachowcy</h2>
    </div>
    <div className={ColClass}>
      <amp-img
        width="1024"
        height="836"
        alt="Budowlańcy pracują na rusztowani"
        layout="responsive"
        src={`${imageBaseSrc}/w_1200/carousel/budowlancy-zakladaja-izolacje-i-maluja.webp`}
      />
    </div>
  </div>
);

const HtmlContent = () => (
  <div className="front row">
    <div data-aos="flip-right" className="description">
      <h1>PM+BUD</h1>
      <h2>Twoi Fachowcy</h2>
    </div>
    <img
      data-aos="flip-left"
      src={`${imageBaseSrc}/q_70/home-page/building-house-project.jpg`}
      crossOrigin="anonymous"
      alt="skaczacy budowlaniec"
    />
  </div>
);

/**
 * Home Page Component
 * @component Home
 */
export default function Home() {
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
      <div id="Home" className={ContainerClass}>
        {isAmp ? <AmpContent /> : <HtmlContent />}
        <div className="about">
          {About.map((about, index) => (
            <div
              data-aos={isEven(index) ? "fade-right" : "fade-left"}
              key={index}
              className="segment"
            >
              <div className="icon">{about.icon}</div>
              <div className="content">{about.text}</div>
            </div>
          ))}
        </div>

        <div className="presentation">
          {/* {Presentation.map((slide, index) => (
            <div className="slide" key={index}>
              <img
                data-aos="flip-right"
                src={`${imageBaseSrc}${slide.image}`}
              />
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}

export const config = {
  amp: "hybrid",
};
