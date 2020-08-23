import Form from "../components/Form";
import Map from "../components/Map";

import "../styles/pages/Kontakt.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;

export default function Contact() {
  return (
    <div id="Kontakt" className={ContainerClass}>
      <div className="row">
        <div className="col-12 col-lg-6">
          <Form />
        </div>
        <div className="col">
          <div className="row">
            <div className="col-12 map">
              <h1>Działamy na całym Województwie Małopolskim!</h1>
              {typeof window !== undefined ? <Map /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
