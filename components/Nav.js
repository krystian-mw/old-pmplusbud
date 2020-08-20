import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import "../styles/components/Nav.scss";

import { Menu, ContainerClass, Breakpoint } from "../site.config";

export default function Nav() {
  const [show, setShow] = useState(false);
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
                <h1>PM+BUD</h1>
              </a>
            </Link>
          </div>
          <div className={`col-12 col-${Breakpoint}-8 menu ${show ? "show" : ""}`}>
            {Menu.map((item) => (
              <Link key={item.text} href={item.url}>
                <a className={router.pathname === item.url ? "active" : ""}>
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
