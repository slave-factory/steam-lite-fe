import React from 'react';

const GameDetailPage: React.FC = () => {
  return (
    <div className="bg-[#1b2838] text-white font-sans min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-[#171a21]">
        <div className="text-xl font-bold">STEAM Lite</div>
        <nav className="space-x-4">
          <button className="hover:underline">상점</button>
          <button className="hover:underline">라이브러리</button>
        </nav>
      </header>

      {/* Game Title and Banner */}
      <section className="px-8 py-6">
        <h1 className="text-2xl font-bold mb-4">게임 제목 {/* 🔁 교체 가능 */}</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <img
            src="/assets/eldenring-banner.jpg" // 🔁 대표 이미지 교체 가능
            alt="게임 대표 이미지"
            className="w-full md:w-3/4 rounded"
          />
          <div className="flex-1 space-y-2 text-sm">
            <img
              src="/assets/eldenring-thumb.jpg" // 🔁 썸네일 이미지 교체 가능
              alt="게임 커버"
              className="w-full rounded"
            />
            <p className="mt-2">
              이 게임은 무엇인가에 대한 설명이 들어갈 자리입니다. {/* 🔁 설명 */}
            </p>
            <p><strong>출시일:</strong> 2025년 7월 7일 {/* 🔁 출시일 */}</p>
            <p><strong>개발자:</strong> YourStudio {/* 🔁 개발자 */}</p>
            <p className="font-semibold text-lg">₩64,800 {/* 🔁 가격 */}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">카트에 추가</button>
          </div>
        </div>
      </section>

      {/* Game Information */}
      <section className="px-8 py-6">
        <h2 className="text-xl font-semibold mb-2">게임 정보</h2>
        <img
          src="/assets/eldenring-gameplay.jpg" // 🔁 플레이 이미지 교체 가능
          alt="게임 플레이 이미지"
          className="w-full rounded mb-4"
        />
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
          <li>광활한 오픈월드를 탐험하세요</li> {/* 🔁 설명 리스트 */}
          <li>수많은 장비와 마법 시스템</li>
          <li>몰입감 있는 전투 시스템</li>
        </ul>
      </section>

      {/* Review Section */}
      <section className="px-8 py-6">
        <h2 className="text-xl font-semibold mb-2">가장 유용한 평가</h2>
        <div className="bg-gray-800 p-4 rounded space-y-2 text-sm">
          <p className="text-green-400 font-bold">긍정적</p> {/* 🔁 리뷰 반응 */}
          <p>이 게임은 정말 재미있습니다!</p> {/* 🔁 리뷰 내용 */}
          <p className="text-gray-400">작성자: user123 {/* 🔁 작성자 */}</p>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="px-8 py-6">
        <h2 className="text-xl font-semibold mb-2">최근 게시물</h2>
        <ul className="space-y-2 text-sm text-blue-300">
          <li>이 게임 너무 어려워요</li> {/* 🔁 게시물 제목 */}
          <li>패턴 언제 다 외움</li>
          <li>다크소울보다 쉽나요?</li>
        </ul>
        <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">
          리뷰 작성하기
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#171a21] text-gray-400 text-xs text-center py-6 mt-8">
        <div className="mb-2">VALVE ⓒ STEAM Lite</div>
        <div>© 2025 Valve Corporation. All rights reserved.</div>
        <div>Reproduction by YourName's Slave</div>
      </footer>
    </div>
  );
};

export default GameDetailPage;
