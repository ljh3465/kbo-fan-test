// pages/result.js

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const teamInfo = {
  LG: {
    name: "LG 트윈스",
    description: "⚾ 균형 잡힌 전통파 야구를 선호하는 당신, LG 트윈스와 닮았습니다!",
    logo: "/logos/LG.png",
    color: "#C60000",
  },
  두산: {
    name: "두산 베어스",
    description: "⚾ 꾸준함과 끈기의 상징, 당신은 두산 베어스 스타일!",
    logo: "/logos/두산.png",
    color: "#001A57",
  },
  롯데: {
    name: "롯데 자이언츠",
    description: "⚾ 열정과 낭만을 지닌 당신, 롯데 자이언츠 팬으로 제격입니다!",
    logo: "/logos/롯데.png",
    color: "#C30D23",
  },
  한화: {
    name: "한화 이글스",
    description: "⚾ 끝까지 포기하지 않는 인내심, 한화 이글스와 닮은꼴!",
    logo: "/logos/한화.png",
    color: "#FF6600",
  },
  삼성: {
    name: "삼성 라이온즈",
    description: "⚾ 강팀의 품격과 자존심, 삼성 라이온즈처럼 자신감 있는 스타일입니다!",
    logo: "/logos/삼성.png",
    color: "#005BAC",
  },
  SSG: {
    name: "SSG 랜더스",
    description: "⚾ 새로운 시대의 흐름을 주도하는 당신, SSG 랜더스와 닮았습니다!",
    logo: "/logos/SSG.png",
    color: "#EF1C2E",
  },
  NC: {
    name: "NC 다이노스",
    description: "⚾ 신흥강자다운 패기, NC 다이노스 스타일의 당신!",
    logo: "/logos/NC.png",
    color: "#003B87",
  },
  키움: {
    name: "키움 히어로즈",
    description: "⚾ 도전 정신과 성장 가능성을 지닌 당신은 키움 히어로즈 스타일!",
    logo: "/logos/키움.png",
    color: "#7A0026",
  },
  기아: {
    name: "기아 타이거즈",
    description: "⚾ 역사와 전통을 중시하는 당신, 기아 타이거즈와 궁합이 잘 맞습니다!",
    logo: "/logos/기아.png",
    color: "#E6002D",
  },
  KT: {
    name: "KT 위즈",
    description: "⚾ 새로움과 혁신을 추구하는 스타일, KT 위즈와 닮았어요!",
    logo: "/logos/KT.png",
    color: "#1C1C1C",
  },
};

export default function ResultPage() {
  const router = useRouter();
  const { team } = router.query;

  const info = teamInfo[team];

  if (!info) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-700">결과를 불러오는 중입니다...</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">당신과 어울리는 팀은</h1>

        <Image
          src={info.logo}
          alt={`${info.name} 로고`}
          width={400}
          height={400}
          className="mb-6"
        />

        <h2
            className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-[#ff416c] via-[#ff4b2b] to-[#ff416c] text-transparent bg-clip-text"
            >
            {info.name}
            </h2>
        <p
          className="text-lg font-medium mb-8"
          style={{ color: info.color }}
        >
          {info.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded shadow">
              다시 테스트하기
            </button>
          </Link>
          <button
            onClick={() => {
              const shareText = `나는 ${info.name} 스타일의 야구팬이래요! ⚾\n당신도 KBO 팬 테스트 해보세요!\nhttps://kbo-fan-test.vercel.app`;
              if (navigator.share) {
                navigator.share({
                  title: "KBO 팬 성향 테스트",
                  text: shareText,
                  url: "https://kbo-fan-test.vercel.app",
                });
              } else {
                navigator.clipboard.writeText(shareText);
                alert("공유 문구가 복사되었습니다.");
              }
            }}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded shadow"
          >
            공유하기
          </button>
        </div>
      </div>

      {/* 쿠팡 광고 하단 고정 */}
      <div className="w-full">
        <Script src="https://ads-partners.coupang.com/g.js" strategy="afterInteractive" />
        <Script id="coupang-result" strategy="afterInteractive">
          {`
            window.addEventListener("load", function () {
              if (window.PartnersCoupang && window.PartnersCoupang.G) {
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
