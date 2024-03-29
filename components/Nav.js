import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { useAmp } from "next/amp";

import "../styles/components/Nav.scss";

const Menu = [
  { text: "Strona Główna", url: "/" },
  { text: "Oferta", url: "/oferta" },
  { text: "Blog", url: "/blog" },
  { text: "Kontakt", url: "/kontakt" },
];

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;

export default function Nav() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const isAmp = useAmp();
  const LogoURI =
    "https://res.cloudinary.com/next-pmplusbud/w_80/logo/logo.png";

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setShow(false);
      toggleOverflowHidden(true);
    });
  }, []);

  const toggleOverflowHidden = (show) => {
    // hackish but works rather than passing refs
    document.body.style.overflow = !show ? "hidden" : "unset";
  };

  const toggler = () => {
    toggleOverflowHidden(show);
    setShow(!show);
  };

  return (
    <div id="Nav">
      <div className={ContainerClass}>
        <div className="row">
          <div className="col logo">
            <Link href="/">
              <a>
                {isAmp ? (
                  <amp-img
                    layout="fixed"
                    width="80"
                    height="80"
                    alt="PM+BUD Logo"
                    src={LogoURI}
                  />
                ) : (
                  <img src={LogoURI} alt="PM+BUD Logo" />
                )}
              </a>
            </Link>
          </div>
          <div
            className={`col-12 col-${Breakpoint}-8 menu ${show ? "show" : ""}`}
          >
            {Menu.map((item, index) => (
              <Link key={item.text} href={item.url}>
                <a
                  data-aos="fade-right"
                  data-aos-delay={500 + (250 * index)}
                  className={router.pathname === item.url ? "active" : ""}
                >
                  {item.text}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div onClick={toggler} className={`toggler ${show ? "toggled" : ""}`}>
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}
