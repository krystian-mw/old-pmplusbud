import Head from "next/head";

export default function Seo(props) {
  return (
    <Head>
      {props.title ? (
        <>
          <title children={props.title} />
          <meta name="title" content={props.title} />
        </>
      ) : null}
      {props.description ? (
        <meta name="description" content={props.description} />
      ) : null}
      {props.children ? props.children : null}
      {props.og ? (
        <>
          <meta property="og:title" content={props.og.title} />
          <meta property="og:type" content={props.og.type} />
          <meta property="og:url" content={props.og.url} />
          <meta property="og:image" content={props.og.image} />
        </>
      ) : null}

      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: `
            import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';
            const el = document.createElement('pwa-update');
            document.body.appendChild(el);`,
        }}
      ></script>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
}
