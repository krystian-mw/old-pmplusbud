import { FaUserCheck } from "react-icons/fa";

import Breadcrumb from "../../components/Breadcrumb";
import QuickContact from "../../components/QuickContact";
import Seo from "../../components/Seo";

import "../../styles/pages/PodOferta.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;

const imageBaseSrc = process.env.NEXT_PUBLIC_IMAGE_ROOT;

const ColClass = `col-12 col-${Breakpoint}-6 center`;

export default function PodOferta() {
  return (
    <div id="PodOferta" className={ContainerClass}>
      <Breadcrumb
        path={[
          { href: "/", text: "Start" },
          { href: "/oferta", text: "Oferta" },
          { href: "/oferta/wykonczenia", text: "Wykończenia" },
        ]}
      />
      <div className="title" data-aos="flip-down">
        <h1>Wykończenia</h1>
      </div>

      <div className="row">
        <div className={ColClass}>
          <img
            data-aos="fade-up"
            src={`${imageBaseSrc}/oferta/pexels-pixabay-159045_vllx30.jpg`}
          />
        </div>
        <div className={ColClass}>
          <p data-aos="fade-right">
            Firma Budowlana PM+BUD to jest ekipa wieloletnim doświadczeniem z
            remontami. Oferujemy wykańczania wnętrz i przygotowywaniem ich do
            zamieszkania - pod klucz.
          </p>
          <QuickContact />
        </div>
      </div>

      <div className="row desktop-reverse">
        <div className={ColClass}>
          <img
            data-aos="fade-up"
            src={`${imageBaseSrc}/oferta/malarz-wykonczenia.jpg`}
          />
        </div>
        <div className={ColClass}>
          <h6>Szeroka gama prac:</h6>
          Instalatorskich oraz innych usług remontowo-budowlanych pozwala nam z
          surowych ścian i posadzek uczynić wnętrza kompletne, gotowe do
          natychmiastowego wprowadzenia przez lokatorów. Współpracujemy zarówno
          z inwestorami indywidualnymi, jak i deweloperami oraz firmami z branży
          budowlanej. Chętnie podejmujemy się prac wykończeniowych pod klucz
          jako podwykonawca.
        </div>
      </div>
      <div className="row">
        <div className={ColClass}>
          <img
            data-aos="fade-left"
            src={`${imageBaseSrc}/home-page/renovation-interior.jpg`}
          />
        </div>
        <div data-aos="fade-right" className={ColClass}>
          <div className={ColClass}>
            <h6>Zapewniamy:</h6>
            <ul>
              <li>Wysoką jakość wykonania</li>
              <li>Wysoką jakość materiałów</li>
              <li>Ubezpieczenie</li>
              <li>Gwarancję</li>
              <li>Fachowe Porady</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
