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
    <div className="relative min-h-screen bg-white text-black">
      {/* 중앙 콘텐츠 */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow max-w-md w-full text-center">
          <h2 className="text-lg font-semibold mb-4">
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

      {/* 중간 광고: 문제 1, 6번일 때만 노출 */}
      {(current === 0 || current === 5) && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <AdBanner />
        </div>
      )}

      {/* 하단 쿠팡파트너스 */}
      <div className="absolute bottom-0 w-full">
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
                  width: "100%",
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
