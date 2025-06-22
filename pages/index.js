import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        나랑 잘 맞는 프로야구 구단은?
      </h1>

      <div className="my-6">
        <Image
          src="/images/baseball-banner.png"
          alt="야구장 배경"
          width={500}
          height={400}
          className="rounded-xl shadow"
        />
      </div>

      <p className="text-gray-600 mb-8">
        10문제를 통해 당신의 프로야구 구단을 찾으세요
      </p>

      <Link href="/quiz">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          테스트 시작
        </button>
      </Link>
    </div>
  );
}
