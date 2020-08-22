import Link from "next/link";

import { ContainerClass, Breakpoint } from "../site.config";

import "../styles/components/Footer.scss";

const Sitemap = [
  {
    url: "/",
    text: "Strona Glowna",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/kontakt",
    text: "Kontakt",
  },
];

const Oferta = [{ url: "/oferta/ogrodzenia", text: "Ogrodzenia" }];

export default function Footer() {
  const ColClass = `col-12 col-${Breakpoint}-4 footer-col`;

  return (
    <div id="Footer">
      <div className={ContainerClass}>
        <div className="row">
          <div className={ColClass}>
            <h4>Mapa Witryny</h4>
            {Sitemap.map((page) => (
              <Link key={page.url} href={page.url}>
                <a>{page.text}</a>
              </Link>
            ))}
          </div>
          <div className={ColClass}>
            <h4>Oferty</h4>
            {Oferta.map((page) => (
              <Link key={page.url} href={page.url}>
                <a>{page.text}</a>
              </Link>
            ))}
          </div>
          <div className={ColClass}>
            <h5>Firma</h5>
            <p>NIP: 000000</p>
            <a href="mailto:kontakt@pmplusbud.pl">kontakt@pmplusbud.pl</a>
            <a href="tel:123133412">123 213 23</a>
            <p>&copy; PM+BUD 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}
