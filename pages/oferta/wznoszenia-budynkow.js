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
          { href: "/oferta/wznoszenia-bydunkow", text: "Wznoszenia Budynków" },
        ]}
      />
      <div className="title" data-aos="flip-down">
        <h1>Wznoszenia Budynków</h1>
      </div>

      <div className="row">
        <div className={ColClass}>
          <img
            data-aos="fade-up"
            src={`${imageBaseSrc}/oferta/budowa-domu.jpg`}
          />
        </div>
        <div className={ColClass}>
          <p  data-aos="fade-right">
            Firma Budowlana PM+BUD zajmuje się budową różnego rodzaju budynków,
            w tym budynki mieszkalne oraz inne obiekty publiczne.
          </p>
          <QuickContact />
        </div>
      </div>

      <div className="row desktop-reverse">
        <div className={ColClass}>
          <img
            data-aos="fade-up"
            src={
              `${imageBaseSrc}/q_70/carousel/` +
              `murarz-muruje-pustakami-ceramicznymi.jpg`
            }
          />
        </div>
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
  );
}
