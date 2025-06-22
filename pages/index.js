import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>KBO 팬 성향 테스트</title>
        <meta
          name="description"
          content="당신의 야구 성향을 테스트하고 어울리는 KBO 구단을 찾아보세요!"
        />
        <meta property="og:title" content="KBO 팬 성향 테스트" />
        <meta
          property="og:description"
          content="당신과 찰떡궁합인 KBO 팀은 어디일까요?"
        />
        <meta property="og:url" content="https://kbo-fan-test.vercel.app" />
        <meta property="og:image" content="/og-image.png" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-white">
        {/* ✅ 배너 이미지 복구 */}
        <div className="w-full max-w-md mb-6">
          <Image
            src="/images/baseball-banner.png"
            alt="야구장 배경"
            width={600}
            height={300}
            layout="responsive"
          />
        </div>

        <h1 className="text-2xl font-bold mb-2">KBO 팬 성향 테스트</h1>
        <p className="mb-6 text-gray-700">10문제를 통해 당신의 프로야구 구단을 찾아보세요</p>
        <Link href="/quiz">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow">
            테스트 시작
          </button>
        </Link>
      </div>

      {/* ✅ 쿠팡파트너스 광고 (하단 안정 삽입) */}
      <div className="w-full overflow-hidden mt-8">
        <Script
          src="https://ads-partners.coupang.com/g.js"
          strategy="afterInteractive"
        />
        <Script id="coupang-init" strategy="afterInteractive">
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
