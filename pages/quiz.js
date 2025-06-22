import { useState } from "react";
import { useRouter } from "next/router";
import { questions } from "../data/questions";
import AdBanner from "../components/AdBanner";
import Script from "next/script";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const router = useRouter();

  const handleAnswer = (teams) => {
    const updated = [...answers, teams];
    setAnswers(updated);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      const score = {};
      updated.flat().forEach((team) => {
        score[team] = (score[team] || 0) + 1;
      });

      const topTeam = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
      router.push(`/result?team=${topTeam}`);
    }
  };

  const question = questions[current];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-black">
      {/* 질문 박스 (가운데 고정) */}
      <div className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md max-w-md w-full text-center">
          <h2 className="text-lg font-bold mb-4">
            Q{current + 1}. {question.text}
          </h2>
          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.teams)}
                className="w-full bg-blue-500 text-white rounded-xl py-2 hover:bg-blue-600"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 구글 애드센스 (선택적으로 노출) */}
      {(current === 0 || current === 5) && (
        <div className="my-4">
          <AdBanner />
        </div>
      )}

      {/* 쿠팡 파트너스 */}
     {/* 쿠팡파트너스 광고 */}
    <div className="w-full bg-white flex justify-center items-center min-h-[160px]">
        <Script
            src="https://ads-partners.coupang.com/g.js"
            strategy="afterInteractive"
        />
        <Script id="coupang-bottom" strategy="afterInteractive">
            {`
            window.addEventListener("load", function () {
                if (window.PartnersCoupang?.G) {
                new window.PartnersCoupang.G({
                    id: 880319,
                    template: "carousel",
                    trackingCode: "AF1664640",
                    width: "680",
                    height: "140",
                    tsource: ""
                });
                }
            });
            `}
        </Script>
    </div>

    </div>
  );
}
