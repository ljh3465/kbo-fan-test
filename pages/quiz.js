// pages/quiz.js

import { useState } from "react";
import { useRouter } from "next/router";
import { questions } from "../data/questions";

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState({});
  const router = useRouter();

  const handleAnswer = (teams) => {
    const updatedScore = { ...score };
    teams.forEach((team) => {
      updatedScore[team] = (updatedScore[team] || 0) + 1;
    });
    setScore(updatedScore);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const sorted = Object.entries(updatedScore).sort((a, b) => b[1] - a[1]);
      const topTeam = sorted[0][0];
      router.push(`/result?team=${topTeam}`);
    }
  };

  const question = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      {/* 상단 진행 상태바 */}
      <div className="w-full max-w-md bg-gray-200 h-3 rounded-full mt-6 mb-4">
        <div
          className="bg-purple-500 h-3 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 질문 인덱스 */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {currentIndex + 1} / {questions.length}
      </h2>

      {/* 질문 텍스트 */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        {question.text}
      </h1>

      {/* 선택지 */}
      <div className="grid gap-4 w-full max-w-md">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(option.teams)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg shadow"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
