// pages/result.js

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const teamInfo = {
  LG: {
    name: "LG 트윈스",
    description: "⚾ 균형 잡힌 전통파 야구를 선호하는 당신, LG 트윈스와 닮았습니다!",
    extra: `서울 대표팀의 자부심 LG! 응원석에는 질서 정연한 함성과 통일된 응원도구가 눈에 띄지만,
그 안에서는 "올해는 진짜 된다"는 낙천주의 팬심이 흐르고 있어요. 
당신도 그런 타입! 겉으로는 침착하지만, 결정적인 순간엔 불같은 열정 폭발형입니다.`,
    logo: "/logos/LG.png",
    color: "#C60000",
  },
  두산: {
    name: "두산 베어스",
    description: "⚾ 꾸준함과 끈기의 상징, 당신은 두산 베어스 스타일!",
    extra: `탄탄한 원투 펀치와 탄력 있는 수비가 특징인 두산처럼, 당신도 '언제 터질지 모르는 잠재력'을 가진 타입이죠.
늘 묵묵히 기본을 지키지만, 한 번 터지면 분위기를 단숨에 바꿀 수 있는 핵심 존재입니다.`,
    logo: "/logos/두산.png",
    color: "#001A57",
  },
  롯데: {
    name: "롯데 자이언츠",
    description: "⚾ 열정과 낭만을 지닌 당신, 롯데 자이언츠 팬으로 제격입니다!",
    extra: `부산의 바다처럼 크고 따뜻한 에너지는 롯데의 강점이죠. 당신도 감정 표현이 솔직하고 즉흥적일 때가 많아요.
가끔은 드라마 같은 역전극을 꿈꾸며, 응원 도중 눈물이 핑 돌 정도로 감성적인 면도 있어요.`,
    logo: "/logos/롯데.png",
    color: "#C30D23",
  },
  한화: {
    name: "한화 이글스",
    description: "⚾ 끝까지 포기하지 않는 인내심, 한화 이글스와 닮은꼴!",
    extra: `포기하지 않는 근성은 한화의 트레이드마크. 당신도 도전 앞에서 쉽게 물러서지 않죠.
한 번 기대를 걸면 끝까지 지켜보는 끈기파! 가끔은 "오늘도 다 잡았다"고 스스로 응원하며 덤비는 그런 스타일입니다.`,
    logo: "/logos/한화.png",
    color: "#FF6600",
  },
  삼성: {
    name: "삼성 라이온즈",
    description: "⚾ 강팀의 품격과 자존심, 삼성 라이온즈처럼 자신감 있는 스타일입니다!",
    extra: `대구의 전통 강호 삼성! 당신도 남의 시선을 많이 의식하는 편이지만, 막상 무대에 서면 누구보다 씩씩해요.
자존심이 강한 반면, 가끔 "내가 못하겠나!" 싶은 마음으로 돌파합니다. 그런 멋이 있어요.`,
    logo: "/logos/삼성.png",
    color: "#005BAC",
  },
  SSG: {
    name: "SSG 랜더스",
    description: "⚾ 새로운 시대의 흐름을 주도하는 당신, SSG 랜더스와 닮았습니다!",
    extra: `스타일리시하고 트렌디한 SSG처럼, 당신도 새로운 시도나 깔끔한 디자인을 좋아하죠.
SNS 감성 충만 타입! 팬심에도 '멋과 감성'이 숨어있고, 결과보다 과정 속 재미를 중시하는 경향이 있습니다.`,
    logo: "/logos/SSG.png",
    color: "#EF1C2E",
  },
  NC: {
    name: "NC 다이노스",
    description: "⚾ 신흥강자다운 패기, NC 다이노스 스타일의 당신!",
    extra: `젊고 역동적인 NC처럼, 당신도 성장 가능성이 큰 타입. 작지만 매서운 공격력을 가진 조용한 터프가이에요.
늘 준비하고, 숨 고른 뒤 한 방 터뜨리는 스타일. 주변 사람들을 놀라게 할 '잠재력 고수'입니다.`,
    logo: "/logos/NC.png",
    color: "#003B87",
  },
  키움: {
    name: "키움 히어로즈",
    description: "⚾ 도전 정신과 성장 가능성을 지닌 당신은 키움 히어로즈 스타일!",
    extra: `소형 구단이지만 불가능에 도전하는 키움처럼, 당신도 '저평가받아도 해낸다'가 좌우명!
작지만 강하게, 성실히 준비한 결과를 터뜨리는 스타일이라 주변에 롤모델로 보일 수 있습니다.`,
    logo: "/logos/키움.png",
    color: "#7A0026",
  },
  기아: {
    name: "기아 타이거즈",
    description: "⚾ 역사와 전통을 중시하는 당신, 기아 타이거즈와 궁합이 잘 맞습니다!",
    extra: `전통에 자부심 강한 호랑이처럼, 당신도 역사와 전통이 있는 것들을 특히 좋아하네요.
한 번 빠지면 깊게 빠지는 타입이라, 마음 속에 올드스쿨 감성도 숨겨져 있어요. 가끔 향수에 젖기도.`,
    logo: "/logos/기아.png",
    color: "#E6002D",
  },
  KT: {
    name: "KT 위즈",
    description: "⚾ 새로움과 혁신을 추구하는 스타일, KT 위즈와 닮았어요!",
    extra: `신생 구단답게 실험적이고 도전적인 KT! 당신도 변화와 혁신 앞에서 망설이지 않죠.
트렌드에 민감하면서도 '빠르게 배우고, 바로 적용하는' 순발력 있는 타입입니다.`,
    logo: "/logos/KT.png",
    color: "#1C1C1C",
  },
};

export default function ResultPage() {
  const router = useRouter();
  const { team } = router.query;
  const info = teamInfo[team];
  if (!info) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <p>결과를 불러오는 중입니다...</p>
    </div>
  );

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

        <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-[#ff416c] via-[#ff4b2b] to-[#ff416c] text-transparent bg-clip-text">
          {info.name}
        </h2>

        <p
          className="text-lg font-medium mb-4"
          style={{ color: info.color }}
        >
          {info.description}
        </p>
        <p className="text-md text-gray-700 max-w-md mb-8 whitespace-pre-wrap">
          {info.extra}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded shadow">
              다시 테스트하기
            </button>
          </Link>
          <button
            onClick={() => {
              const shareText = `나는 ${info.name} 스타일의 야구팬이래요! ⚾\n${info.extra.slice(0, 50)}\nhttps://kbo-fan-test.vercel.app`;
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

      {/* 쿠팡 광고 하단 */}
      <div className="w-full">
        <Script src="https://ads-partners.coupang.com/g.js" strategy="afterInteractive" />
        <Script id="coupang-result" strategy="afterInteractive">
          {`
            window.addEventListener("load", function () {
              if (window.PartnersCoupang?.G) {
                new PartnersCoupang.G({
                  id: 880319, template: "carousel", trackingCode: "AF1664640",
                  width: "100%", height: "140", tsource: ""
                });
              }
            });
          `}
        </Script>
      </div>
    </>
  );
}
