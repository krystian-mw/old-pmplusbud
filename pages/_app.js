import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import Nav from "../components/Nav";
import Loader from "../components/Loader";

import "../styles/bootstrap.scss";
import "../styles/globals.scss";

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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <script src="/pwabuilder-sw-register.js" type="module" async />
        </Head>
        <Nav />
        {this.state.loading ? <Loader /> : <Component {...pageProps} />}
      </>
    );
  }
}
