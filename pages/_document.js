// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>KBO 응원팀 성향 테스트 | 나와 어울리는 야구팀은?</title>
        <meta name="description" content="10개의 질문으로 나와 성향이 맞는 KBO 프로야구 구단을 찾아보세요! 재미있고 공유하고 싶은 야구 팬 테스트." />
        <meta property="og:title" content="KBO 응원팀 성향 테스트" />
        <meta property="og:description" content="10개의 질문으로 나와 어울리는 프로야구 구단을 추천받아보세요!" />
        <meta property="og:image" content="/images/baseball-banner.png" />
        <meta property="og:url" content="https://kbo-fan-test.vercel.app" />
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
