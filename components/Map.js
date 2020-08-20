import { useRef, useEffect, useState } from "react";

import Loader from "./Loader";

import { GOOGLE_PUBLIC_API_KEY } from "../site.config";

export default function Map() {
  const iframeRef = useRef();
  const [loading, setLoading] = useState(true);

  const src =
    "https://www.google.com/maps/embed/v1/place" +
    `?key=${GOOGLE_PUBLIC_API_KEY}` +
    `&q=Lesser+Poland+Voivodeship,+Poland`;

  useEffect(() => {
    if (loading) iframeRef.current.src = src;
  }, []);

  return (
    <>
      {loading ? <Loader /> : null}
      <iframe
        ref={iframeRef}
        width="100%"
        height="100%"
        frameBorder="0"
        onLoad={() => setLoading(false)}
      />
    </>
  );
}
