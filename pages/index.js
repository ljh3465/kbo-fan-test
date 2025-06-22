// pages/index.js

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>KBO 팬 성향 테스트</title>
        <meta name="description" content="당신의 야구 성향을 테스트하고 어울리는 KBO 구단을 찾아보세요!" />
        <meta property="og:title" content="KBO 팬 성향 테스트" />
        <meta property="og:description" content="당신과 찰떡궁합인 KBO 팀은 어디일까요?" />
        <meta property="og:url" content="https://kbo-fan-test.vercel.app" />
        <meta property="og:image" content="/og-image.png" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4 py-12">
        {/* 헤더 문구 */}
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 text-transparent bg-clip-text mb-6">
          나랑 잘 맞는 프로야구 구단은?
        </h1>

        {/* 이미지 */}
        <div className="max-w-md w-full mb-6">
          <Image
            src="/images/baseball-banner.png"
            alt="야구장 배경"
            width={600}
            height={300}
            layout="responsive"
          />
        </div>

        {/* 설명 문구 */}
        <p className="text-lg font-bold text-gray-800 mb-8">
          10문제로 당신의 프로야구 구단을 찾아보세요
        </p>

        {/* CTA 버튼 */}
        <Link href="/quiz">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow text-lg">
            테스트 시작
          </button>
        </Link>
      </div>

      {/* 쿠팡 파트너스 광고 */}
      <div className="bg-white w-full flex justify-center items-center min-h-[160px]">
        <Script src="https://ads-partners.coupang.com/g.js" strategy="afterInteractive" />
        <Script id="coupang-home" strategy="afterInteractive">
          {`
            window.addEventListener("load", function () {
              if (window.PartnersCoupang?.G) {
                new window.PartnersCoupang.G({
                  id: 880319,
                  template: "carousel",
                  trackingCode: "AF1664640",
                  width: "100%",
                  height: "140",
                  tsource: ""
                });
              }
            });
          `}
        </Script>
      </div>
    </>
  );
}
