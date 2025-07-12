import React, { useState } from 'react';

// ✅ Game 타입 정의
type Game = {
  name: string;
  playtime: string;
  description: string;
  image: string;
};

const Librarypage = () => {
  const [games, setGames] = useState<Game[]>([
    {
      name: '공만추',
      playtime: '120시간',
      description: '대학생활을 더욱 풍요롭게 만들 새로운 가이드 미연시',
      image: '/src/assets/image3.png',
    },
    {
      name: '공만추2',
      playtime: '80시간',
      description: '1편은 부족했다는 사람을 위한 신작, 새로운 히로인과 더욱 다양해진 엔딩을 경험하라.',
      image: '/src/assets/image4.png',
    },
  ]);

  const [selectedGame, setSelectedGame] = useState<Game | null>(games[0] || null);

  const removeFromLibrary = () => {
    if (!selectedGame) return;
    const updatedGames = games.filter((game) => game.name !== selectedGame.name);
    setGames(updatedGames);
    setSelectedGame(updatedGames.length > 0 ? updatedGames[0] : null);
  };

  return (
    <div>
      <style>{`
        .library-container {
          display: flex;
          height: 100vh;
          background-color: #1b1f23;
          color: white;
          font-family: sans-serif;
        }

        .sidebar {
          width: 240px;
          background-color: #2c2f33;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #444;
        }

        .sidebar-logo {
          font-size: 1.4rem;
          font-weight: bold;
          color: white;
          margin-bottom: 2rem;
        }

        .nav-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .nav-button {
          font-size: 0.95rem;
          color: #aaa;
          cursor: pointer;
        }

        .nav-button:hover {
          color: white;
        }

        .nav-button.active {
          color: white;
          font-weight: bold;
        }

        .sidebar-title {
          font-size: 1.1rem;
          margin: 1rem 0 0.5rem;
          font-weight: bold;
        }

        .game-item {
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          background-color: #3a3f44;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .game-item:hover {
          background-color: #50565c;
        }

        .game-item.selected {
          background-color: #007bff;
        }

        .detail {
          flex: 1;
          padding: 2rem;
        }

        .detail-image {
          width: 100%;
          max-height: 580px;
          object-fit: cover;
          border-radius: 10px;
        }

        .detail-title {
          font-size: 1.8rem;
          margin-top: 1rem;
          font-weight: bold;
        }

        .detail-playtime {
          font-size: 1rem;
          margin: 0.5rem 0;
          color: #bbb;
        }

        .detail-description {
          font-size: 1rem;
          color: #ddd;
        }

        .remove-button {
          margin-top: 1.5rem;
          background-color: #ff5c5c;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
        }

        .remove-button:hover {
          background-color: #e04444;
        }

        .empty-message {
          color: #aaa;
          font-size: 1rem;
          margin-top: 3rem;
        }
      `}</style>

      <div className="library-container">
        <div className="sidebar">
          {/* ✅ 로고 */}
          <div className="sidebar-logo">STEAM Lite</div>

          {/* ✅ 내비게이션 메뉴 */}
          <div className="nav-buttons">
            <div className="nav-button active">라이브러리</div>
            <div className="nav-button">상점</div>
          </div>

          {/* ✅ 게임 목록 */}
          <div className="sidebar-title">보유한 게임</div>
          {games.map((game) => (
            <div
              key={game.name}
              className={`game-item ${selectedGame?.name === game.name ? 'selected' : ''}`}
              onClick={() => setSelectedGame(game)}
            >
              {game.name}
            </div>
          ))}
        </div>

        <div className="detail">
          {selectedGame ? (
            <>
              <img src={selectedGame.image} alt={selectedGame.name} className="detail-image" />
              <div className="detail-title">{selectedGame.name}</div>
              <div className="detail-playtime">플레이 시간: {selectedGame.playtime}</div>
              <div className="detail-description">{selectedGame.description}</div>
              <button className="remove-button" onClick={removeFromLibrary}>
                라이브러리에서 제거
              </button>
            </>
          ) : (
            <div className="empty-message">보유한 게임이 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Librarypage;
