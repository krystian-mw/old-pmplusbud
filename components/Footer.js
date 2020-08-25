import Link from "next/link";

import "../styles/components/Footer.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;

const Sitemap = [
  { url: "/", text: "Strona Główna" },
  { url: "/polityka-prywatnosci", text: "Polityka Prywatności" },
  { url: "/kontakt", text: "Kontakt" },
];

const Oferta = [
  { url: "/oferta/wznoszenia-budynkow", text: "Wznoszenia Budynków" },
  { url: "/oferta/wykonczenia", text: "Wykończenia" },
  { url: "/oferta/ogrodzenia", text: "Ogrodzenia" },
  { url: "/oferta/remonty", text: "Remonty" },
];

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
            <h4>Firma</h4>
            <a href="mailto:kontakt@pmplusbud.pl">kontakt@pmplusbud.pl</a>
            <a href="tel:123133412">123 213 23</a>
            <p>&copy; PM+BUD 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}
