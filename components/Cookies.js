import Link from "next/link";

import { useState, useLayoutEffect, useEffect } from "react";

import "../styles/components/Cookies.scss";

import colors from "../styles/colors.scss";

import { version } from "../package.json";

const cookieName = `cookies_accepted_v${version}`;

export default function Cookies() {
  const [hide, setHide] = useState(true);

  const accept = () => {
    setHide(true);
    const cookie_expires = `expires=${new Date(
      new Date().getTime() + 30 * 24 * 60 * 60 * 1000
    ).toUTCString()}`;
    document.cookie = `${cookieName}=true;${cookie_expires};path=/`;
  };

  const Timer = ({ on, setHide }) => {
    const limit = 10000;
    const [time, setTime] = useState(limit);
    const increment = 250;
    useEffect(() => {
      if (time > 0 && on) {
        setTimeout(() => setTime(time - increment), increment);
      } else if (on) accept();
    }, [time]);
    return (
      <div
        className="icon timer"
        style={{
          background: `conic-gradient(#fca311ff ${parseFloat(
            (time / limit) * 100
          )}%, #14213dff 0%)`,
        }}
      >
        <p>{Math.round(time / 1000)}</p>
      </div>
    );
  };

  useEffect(() => {
    let cookies = {};
    document.cookie.split("; ").forEach((cookie) => {
      const parsedCookie = cookie.split("=");
      cookies[parsedCookie[0]] = parsedCookie[1];
    });
    if (!cookies[cookieName]) {
      setTimeout(() => setHide(false), 2000);
    }
  }, [hide]);

  return hide ? null : (
    <div id="Cookies">
      <p>Ta strona uzywa pliki cookies!</p>
      <p>
        Uzywajac naszych serwisow godzisz sie na przetwarzanie danych osobowych
        wedlug naszej{" "}
        <Link href={"/privacy-policy"}>
          <a>polityki prywatnosci</a>
        </Link>{" "}
        zgodnie z przepisami z ustawy RODO cos tam cos tam bylo
      </p>
      <Timer on={!hide} setHide={setHide} />
      <div className="icon close" onClick={accept}>
        <p>X</p>
      </div>
    </div>
  );
}
