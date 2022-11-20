import {Head, Html, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className="scroll-smooth text-slate-900 bg-white font-sans text-base max-h-screen antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
