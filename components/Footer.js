import Link from "next/link";

import { ContainerClass, Breakpoint } from "../site.config";

import "../styles/components/Footer.scss";

export default function Footer() {
  const ColClass = `col-12 col-${Breakpoint}-4`;
  return (
    <div id="Footer">
      <div className={ContainerClass}>
        <div className="row">
          <div className={ColClass}>
            <p>Sitemap</p>
          </div>
          <div className={ColClass}>
            <h5>Oferty</h5>
          </div>
          <div className={ColClass}>
            <p>Copyright</p>
          </div>
        </div>
      </div>
    </div>
  );
}
