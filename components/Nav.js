import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import "../styles/components/Nav.scss";

import { Menu, ContainerClass, Breakpoint } from "../site.config";

export default function Nav() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  // prevent the middle bar of the toggler animating after first page load
  // prevent menuFlash after first page load
  const [notFirstPage, setNotFirstPage] = useState(false);


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
    setShow(!show);
    setNotFirstPage(true);
    toggleOverflowHidden(show);
  };

  return (
    <div id="Nav" className={`${show ? "show" : ""} ${notFirstPage ? "not-first-page" : ""}`}>
      <div className={ContainerClass}>
        <div className="row">
          <div className="col logo">
            <Link href="/">
              <a>
                <h1>PM+BUD</h1>
              </a>
            </Link>
          </div>
          <div className={`col-12 col-${Breakpoint}-8 menu`}>
            {Menu.map((item) => (
              <Link key={item.text} href={item.url}>
                <a className={router.pathname === item.url ? "active" : ""}>
                  {item.text}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div
          onClick={toggler}
          className={`toggler ${notFirstPage ? "not-first-page" : ""}`}
        >
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}
