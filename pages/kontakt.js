import Form from "../components/Form";
import Map from "../components/Map";
import QuickContact from "../components/QuickContact";

import "../styles/pages/Kontakt.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;

const ColClass = `col-12 col-${Breakpoint}-6 center`;

/**
 * Contact Page Component
 * @type {function}
 * @returns {Component}
 */
export default function Contact() {
  return (
    <div id="Kontakt" className={ContainerClass}>
      <div className="row">
        <div className={ColClass}>
          <Form />
        </div>
        <div className={ColClass}>
          <div className="row">
            <div className="col-12 map">
              <h1>Działamy na całym Województwie Małopolskim!</h1>
              {typeof window !== undefined ? <Map /> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className={ColClass}>
          <h4>Skontaktuj się rownież za pomocą:</h4>
          <QuickContact />
        </div>
        <div className={ColClass}>
          <h4>Oni nam już nam zaufali.</h4>
          <div className="reviews">
            <div className="review">
              <p>Fachowo mi wyremontowali mieszkanie.</p>
              <p className="author">- Marian P.</p>
            </div>
          </div>
          <h3 className="and-you">A Ty?</h3>
        </div>
      </div>
    </div>
  );
}
