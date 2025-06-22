import { useState } from "react";
import { questions } from "../data/questions";
import { useRouter } from "next/router";
import AdBanner from "../components/AdBanner";

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
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <div className="max-w-md w-full text-center py-8">
        <h2 className="text-xl font-semibold mb-4">Q{current + 1}. {question.text}</h2>

        {/* ✅ 상단 광고 */}
        {current === 0 && (
          <div className="my-4">
            <AdBanner />
          </div>
        )}

        <div className="space-y-4 mb-6">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option.teams)}
              className="w-full bg-blue-500 text-white rounded-xl py-2 hover:bg-blue-600 transition"
            >
              {option.text}
            </button>
          ))}
        </div>

        {/* ✅ 중간 광고 */}
        {current === 5 && (
          <div className="my-4">
            <AdBanner />
          </div>
        )}
      </div>

      {/* ✅ 하단 쿠팡파트너스 광고 */}
      <div className="mt-10">
        <AdBanner />
      </div>
    </div>
  );
}
