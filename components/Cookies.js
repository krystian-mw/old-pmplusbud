import Link from "next/link";

import { useState, useEffect } from "react";

import "../styles/components/Cookies.scss";

export default function Cookies() {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    let cookies = {};
    document.cookie.split("; ").forEach((cookie) => {
      const parsedCookie = cookie.split("=");
      cookies[parsedCookie[0]] = parsedCookie[1];
    });
    if (!cookies.cookies_accepted) {
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
    </div>
  );
}
