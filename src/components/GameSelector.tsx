import styled from "styled-components";

interface GameData {
  id: string;
  title: string;
  image: string;
  overlay: string;
}

const gameData: GameData[] = [
  {
    id: "bioshock2",
    title: "Bioshock 2",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9a8821f3047c6fb8b9b129e885dd93b761ba339d?width=920",
    overlay:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ffff2e3b8170b0a592b7ce68645a13260023246c?width=920",
  },
  {
    id: "doom",
    title: "DOOM",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d95b27d5d2b2cffc5d05208534026f1e11b5ad3c?width=940",
    overlay: "",
  },
  {
    id: "crysis",
    title: "Crysis",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7c76c5f666a542c22ebc49aac469e46630175d8a?width=918",
    overlay:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/07d70fdc1f2730ae4a687d8bd0adbb24c22d8aa8?width=918",
  },
  {
    id: "borderlands",
    title: "Borderlands",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/62765ca4d29f14526036f3ef0f52b4b0a21cb366?width=916",
    overlay:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/874cb7c6954b028535c80bb7b286f882efb71eae?width=916",
  },
];

function GameSelector() {
  return (
    <GameSelectorContainer>
      <BackgroundGradient />
      <ContentContainer>
        <Title>삭제할 작품을 선택하세요.</Title>
        <GameGrid>
          {gameData.map(game => (
            <GameCard key={game.id}>
              <GameImageContainer>
                <GameImage src={game.image} alt={game.title} />
                {game.overlay && (
                  <GameOverlay
                    src={game.overlay}
                    alt={`${game.title} overlay`}
                  />
                )}
                <GameTitle>{game.title}</GameTitle>
              </GameImageContainer>
            </GameCard>
          ))}
        </GameGrid>
      </ContentContainer>
    </GameSelectorContainer>
  );
}

const GameSelectorContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #040011 13.77%,
    #202b3c 27.29%,
    #202b3c 27.29%
  );
  z-index: 0;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 120px 60px 80px;
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    padding: 100px 40px 60px;
  }

  @media (max-width: 1024px) {
    padding: 80px 30px 50px;
  }

  @media (max-width: 768px) {
    padding: 60px 20px 40px;
  }

  @media (max-width: 480px) {
    padding: 40px 15px 30px;
  }
`;

const Title = styled.h1`
  color: var(--Text-Main, #f3f3f3);
  font-family:
    Barlow,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 50px;
  font-weight: 700;
  line-height: normal;
  margin: 0 0 60px 0;

  @media (max-width: 1440px) {
    font-size: 45px;
    margin-bottom: 50px;
  }

  @media (max-width: 1024px) {
    font-size: 40px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 25px;
  }
`;

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  max-width: 1800px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  @media (max-width: 1024px) {
    gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const GameCard = styled.div`
  position: relative;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const GameImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 460/690;
  border-radius: 5px;
  overflow: hidden;
`;

const GameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
`;

const GameOverlay = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
`;

const GameTitle = styled.div`
  position: absolute;
  top: -30px;
  left: 9px;
  color: var(--Text-Main, #f3f3f3);
  font-family:
    Barlow,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 14px;
    top: -25px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    top: -22px;
  }
`;

export default GameSelector;
