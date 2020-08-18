import { useRef, useEffect, useState } from "react";

import Loader from "./Loader";

export default function Map() {
  const iframeRef = useRef();
  const [loading, setLoading] = useState(true);

  const src =
    "https://www.google.com/maps/embed/v1/place" +
    `?key=AIzaSyAXMb2bZvOTRJ3XQ1-4GS5ePTRDbyGTfsU` +
    `&q=Lesser+Poland+Voivodeship,+Poland`;

  useEffect(() => {
    if (loading) iframeRef.current.src = src;
  }, []);

  return (
    <>
      {loading ? (
        <Loader
          style={{
            margin: "auto",
          }}
        />
      ) : null}
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
