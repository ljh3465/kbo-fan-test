// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* ✅ 사이트 소유권 확인 메타 태그 */}
        <meta name="google-site-verification" content="oKc8NhzU3GBPPmzBASGFjbVPH7H4Dc4DEHZbPEq4vy8" />
        <meta name="naver-site-verification" content="7cbc4fbd24e6d3243551b2d8fb4905dbf8b9fda8" />

        {/* ✅ Google 애드센스 자동 광고 스크립트 */}
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
