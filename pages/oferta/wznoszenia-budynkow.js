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
      <div className="title">
        <h1>Wznoszenia Budynków</h1>
      </div>

      <div className="row">
        <div className={ColClass}>
          <img src={`${imageBaseSrc}/oferta/budowa-domu.jpg`} />
        </div>
        <div className={ColClass}>
          <p>
            Firma Budowlana PM+BUD zajmuje się budową różnego rodzaju budynków,
            w tym budynki mieszkalne oraz inne obiekty publiczne.
          </p>
          <QuickContact />
        </div>
      </div>

      <div className="row">
        <div className={ColClass}>
          <img src={`${imageBaseSrc}/q_70/carousel/murarz-muruje-pustakami-ceramicznymi.webp`} />
        </div>
        <div className={ColClass}>
          <h6>Gwarantujemy:</h6>
          <ul>
            <li>Wysoką jakość materiałów</li>
            <li>Wysoką jakość wykończenia</li>
            <li>Lokatę zaliczki ujemnej od kosztów materiałów</li>
            <li>Ubezpieczenie</li>
            <li>Gwarancję</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
