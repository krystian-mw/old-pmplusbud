import { useState, useEffect } from "react";

export default function Cookies() {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    let cookies = {};
    document.cookie.split("; ").forEach((cookie) => {
      const parsedCookie = cookie.split("=");
      cookies[parsedCookie[0]] = parsedCookie[1]
    });
    if (!cookies.cookies_accepted) {
        setTimeout(() => setHide(false), 2000)
    }
  }, [hide]);

  return hide ? null : <div id="Cookies">Cookies</div>;
}
