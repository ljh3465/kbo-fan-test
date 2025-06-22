// pages/index.js

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      {/* 브랜딩 이름 */}
      <div className="absolute top-4 left-4 text-lg font-bold cursor-pointer" onClick={() => router.push("/")}>음파대파쪽파</div>

      {/* 테스트 이름 */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">KBO 성향 테스트</h1>
      <p className="text-gray-700 mb-6">10문제를 통해 당신의 KBO 응원팀을 찾아보세요</p>

      <button
        onClick={() => router.push("/quiz")}
        className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow"
      >
        테스트 시작
      </button>
    </div>
  );
}
