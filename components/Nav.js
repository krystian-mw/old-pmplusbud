import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import "../styles/Nav.c.scss";

import { Menu, ContainerClass } from "../site.info";

export default function Nav() {
  const [show, setShow] = useState(false);
  // prevent the middleBar of the toggler animating after first page load
  const [middleBar, setMiddleBar] = useState(false);
  const router = useRouter();

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
    setMiddleBar(true);
    toggleOverflowHidden(show);
  };

  return (
    <div id="Nav" className={show ? "show" : ""}>
      <div className={ContainerClass}>
        <div className="row">
          <div className="col logo">
            <Link href="/">
              <a>
                <h1>PM+BUD</h1>
              </a>
            </Link>
          </div>
          <div className="col-12 col-md-6 menu">
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
          className={`toggler ${middleBar ? "loaded" : ""}`}
        >
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}
