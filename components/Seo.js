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
    </Head>
  );
}
