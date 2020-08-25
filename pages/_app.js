import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import Nav from "../components/Nav";
import Loader from "../components/Loader";
import Cookies from "../components/Cookies";
import Footer from "../components/Footer";

import manifest from "../public/manifest.json";

import "../styles/bootstrap.scss";
import "../styles/globals.scss";

/**
 * Main App Component
 * @extends {App} Base Component
 * @param {props} any
 */
export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };

    Router.events.on("routeChangeStart", () => {
      this.setState({ loading: true });
    });

    Router.events.on("routeChangeComplete", () => {
      this.setState({ loading: false });
    });

    Router.events.on("routeChangeError", () => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta name="application-name" content="PM+BUD" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="PM+BUD" />
          <meta name="description" content="PM+BUD - Twoi Fachowcy" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://res.cloudinary.com/next-pmplusbud/w_180/logo/logo.png"
          />
          {manifest.icons.map((icon) => (
            <link
              key="src"
              rel="icon"
              sizes={icon.sizes}
              type={icon.type}
              href={icon.src}
            />
          ))}

          <link
            rel="icon"
            href="https://res.cloudinary.com/next-pmplusbud/w_16/logo/logo.ico"
          />

          <link rel="manifest" href="/manifest.json" />
        </Head>
        <Nav />
        {this.state.loading ? <Loader /> : <Component {...pageProps} />}
        <Footer />
        <Cookies />
      </>
    );
  }
}
