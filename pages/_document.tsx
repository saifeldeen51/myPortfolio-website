import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="/favicon.ico" />
      <body className="font-primary scrollbar">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
