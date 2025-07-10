import React from 'react';

const Gamepage = () => {
  return (
    <div>
      {/* 🔧 내부 스타일 정의 */}
      <style>{`
        body {
          margin: 0;
        }

        .container {
          background-color: #1b1f23;
          color: white;
          padding: 2rem;
          font-family: sans-serif;
          min-height: 100vh;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #444;
          padding-bottom: 1rem;
          margin-bottom: 2rem;
        }

        .title {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav {
          display: flex;
          gap: 1.5rem;
          font-size: 0.9rem;
          color: #aaa;
          cursor: pointer;
        }

        .nav span:hover {
          color: white;
        }

        .profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
        }

        .profile img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        .game-section {
          background-color: #2c2f33;
          border-radius: 10px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .game-flex {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .game-images {
          display: flex;
          gap: 1rem;
        }

        .main-image {
          width: 100%;
          max-width: 65%;
          border-radius: 10px;
          object-fit: cover;
        }

        .thumb {
          width: 35%;
          border-radius: 10px;
        }

        .desc {
          font-size: 0.9rem;
          color: #ccc;
          margin-top: 0.5rem;
        }

        .meta {
          margin-top: 0.75rem;
          font-size: 0.85rem;
          color: #bbb;
        }

        .price-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
        }

        .price {
          font-size: 1.1rem;
          font-weight: bold;
        }

        .button {
          background-color: #007bff;
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 6px;
          border: none;
          cursor: pointer;
        }

        .info-image {
          width: 100%;
          margin: 1rem 0;
          border-radius: 10px;
          object-fit: cover;
        }

        .features li {
          margin-bottom: 0.5rem;
        }

        .review-section {
          display: flex;
          gap: 2rem;
          flex-direction: row;
        }

        .review-box, .recent-posts {
          flex: 1;
          background-color: #2c2f33;
          border-radius: 10px;
          padding: 1.5rem;
        }

        .review-item {
          background-color: #3b3f45;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .review-item p {
          margin: 0.5rem 0 0;
        }

        .reviewer-blue {
          color: #3abfff;
          font-weight: bold;
        }

        .reviewer-red {
          color: #ff5c5c;
          font-weight: bold;
        }

        .recent-posts ul {
          padding-left: 1rem;
        }

        .recent-posts li {
          color: #bbb;
          margin-bottom: 0.5rem;
          cursor: pointer;
        }

        .recent-posts li:hover {
          color: white;
        }
      `}</style>

      <div className="container">
        {/* 헤더 */}
        <div className="header">
          <div className="title">
            STEAM Lite
            <div className="nav">
              <span>상점</span>
              <span>라이브러리</span>
            </div>
          </div>
          <div className="profile">
            <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="profile" />
            <span>MMMouse</span>
            <span style={{ color: '#aaa' }}>₩10,000</span>
          </div>
        </div>

        {/* 게임 섹션 */}
        <div className="game-section">
          <h2>공만추</h2>
          <div className="game-images">
            <img src="/src/assets/image.png" alt="main" className="main-image" />
            <img src="/src/assets/image2.png" alt="thumb" className="thumb" />
          </div>
          <p className="desc">
            본 게임은 연애 시뮬레이션임.
          </p>
          <div className="meta">출시일: 2022년 2월 25일</div>
          <div className="meta">개발자: FromSoftware</div>
          <div className="price-bar">
            <span className="price">₩64,800</span>
            <button className="button">카트에 추가</button>
          </div>
        </div>

        {/* 상세 정보 */}
        <div className="game-section">
          <h3>게임 정보</h3>
          <img src="/src/assets/image.png" alt="info" className="info-image" />
          <ul className="features">
            <li>자유로운 탐험이 가능한 오픈월드와 입체적인 지형 구조</li>
            <li>나만의 캐릭터를 생성해 성장 및 전투 가능</li>
            <li>전략적 전투와 스토리 중심의 몰입감 높은 게임성</li>
            <li>다양한 플레이 스타일과 조합 가능한 무기 및 마법</li>
          </ul>
        </div>

        {/* 리뷰 & 최근 게시물 */}
        <div className="review-section">
          <div className="review-box">
            <h3>가장 유용한 평가</h3>
            <div className="review-item">
              <span className="reviewer-blue">고운말</span>
              <p>진짜 혁신입니다</p>
            </div>
            <div className="review-item">
              <span className="reviewer-red">길잃음</span>
              <p>끝판은 다소 아쉬움</p>
            </div>
          </div>
          <div className="recent-posts">
            <h3>최근 게시물</h3>
            <ul>
              <li>교수님 목소리 녹음 누가했냐</li>
              <li>주연이 사진 예쁘다</li>
              <li>경민아, 그건 아니지</li>
              <li>이스터에그 보셨나요?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gamepage;
