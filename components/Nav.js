import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import "../styles/Nav.c.scss";

const Menu = [
  { text: "Strona Główna", url: "/" },
  { text: "Kontakt", url: "/kontakt" },
];

export default function Nav() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setShow(false);
    });
  }, []);

  return (
    <div id="Nav" className={`container-fluid ${show ? "show" : ""}`}>
      <div className="container-fluid container-lg">
        <div className="row">
          <div className="col-12 col-md-6 logo">
            <Link href="/">
              <a>
                <h1>PM+BUD</h1>
              </a>
            </Link>
          </div>
          <div className="col menu">
            {Menu.map((item) => (
              <Link key={item.text} href={item.url}>
                <a className={router.pathname === item.url ? "active" : ""}>
                  {item.text}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div onClick={() => setShow(!show)} className="toggler">
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}
