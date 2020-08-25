import Head from "next/head";
import PropTypes from "prop-types";

/**
 * SEO Component
 * @param {object} props
 * @returns {Head} Appends SEO content to the head tag during on SSR
 */
function Seo(props) {
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
          <meta property="og:site_name" content="PM+BUD" />
          <meta property="og:title" content={props.og.title} />
          <meta property="og:type" content={props.og.type || "website"} />
          <meta property="og:url" content={props.og.url} />
          <meta property="og:image" content={props.og.image} />
          <meta property="og:locale" content="pl_PL" />
        </>
      ) : null}
    </Head>
  );
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  og: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default Seo;
