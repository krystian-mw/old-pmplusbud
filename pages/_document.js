import Document, { Html, Head, Main, NextScript } from "next/document";

import manifest from "../public/manifest.json";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
