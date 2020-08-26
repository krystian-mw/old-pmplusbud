import { useAmp } from "next/amp";

import { FaUser, FaExchangeAlt, FaTruck, FaFileContract } from "react-icons/fa";

import Seo from "../components/Seo";

import "../styles/pages/Home.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;

const imageBaseSrc = process.env.NEXT_PUBLIC_IMAGE_ROOT;

const ColClass = `col-12 col-${Breakpoint}-6`;

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
    <div class="description">
      <h1>PM+BUD</h1>
      <h2>Twoi Fachowcy</h2>
    </div>
    <img
      src={`${imageBaseSrc}/w_1200/skaczacy-budowlaniec.jpg`}
      srcSet={`
        ${imageBaseSrc}/w_400/skaczacy-budowlaniec.webp 400w,
        ${imageBaseSrc}/w_750/skaczacy-budowlaniec.webp 750w,
        ${imageBaseSrc}/w_1200/skaczacy-budowlaniec.webp 1200w
        `}
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
      <div id="Home" className="container-fluid">
        {isAmp ? <AmpContent /> : <HtmlContent />}
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
