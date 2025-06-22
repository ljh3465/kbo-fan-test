// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';



export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="google-site-verification" content="oKc8NhzU3GBPPmzBASGFjbVPH7H4Dc4DEHZbPEq4vy8" />
        
        {/* 애드센스 소유권 확인용 코드 삽입 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8531773061576363"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
