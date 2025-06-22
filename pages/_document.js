// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* 구글 사이트 소유권 확인 */}
        <meta name="google-site-verification" content="oKc8NhzU3GBPPmzBASGFjbVPH7H4Dc4DEHZbPEq4vy8" />
        {/* 네이버 사이트 소유권 확인 */}
        <meta name="naver-site-verification" content="7cbc4fbd24e6d3243551b2d8fb4905dbf8b9fda8" />

        {/* Open Graph 설정 (네이버 & 소셜 미리보기용) */}
        <meta property="og:title" content="KBO 팬 성향 테스트 - 나와 어울리는 팀은?" />
        <meta property="og:description" content="10문제를 통해 당신의 프로야구 성향을 분석해 드립니다!" />
        <meta property="og:image" content="https://kbo-fan-test.vercel.app/og-image.png" />
        <meta property="og:url" content="https://kbo-fan-test.vercel.app" />
        <meta name="description" content="KBO 응원팀 성향 테스트로 당신과 어울리는 야구팀을 찾아보세요!" />

        {/* 애드센스 전역 스크립트 */}
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
