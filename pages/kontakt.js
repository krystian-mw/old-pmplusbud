import Form from "../components/Form";
import Map from "../components/Map";
import ClientOnly from "../components/ClientOnly";

import "../styles/pages/Kontakt.scss";

import { ContainerClass } from "../site.config";

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
              <ClientOnly>
                <Map />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
