import Document, { Html, Head, Main, NextScript } from "next/document";

import manifest from "../public/manifest.json";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <DocumentHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
