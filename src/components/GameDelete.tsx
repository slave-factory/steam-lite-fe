import styled from "styled-components";

interface GameDeletionModalProps {
  isVisible?: boolean;
  onDelete?: () => void;
  onCancel?: () => void;
}

function GameDeletionModal({
  isVisible = true,
  onDelete,
  onCancel,
}: GameDeletionModalProps) {
  if (!isVisible) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ContentWrapper>
          <HeaderSection>
            <DeleteQuestion>해당 작품을 삭제할까요?</DeleteQuestion>
          </HeaderSection>

          <GameImageSection>
            <GameImage
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/948961be5378d585827aae8a73927416d2ad7422?width=966"
              alt="DOOM Game Cover"
            />
          </GameImageSection>

          <GameDetails>
            <GameTitle>DOOM</GameTitle>
            <ReleaseDate>2025년 7월 1일 등록</ReleaseDate>
          </GameDetails>

          <ActionSection>
            <WarningText>
              '게임 삭제하기' 버튼을 클릭하면 게임이{" "}
              <WarningBold>영구적으로 삭제</WarningBold>되고,{" "}
              <WarningBold>복구가 불가능</WarningBold>한 것을 인지한 것으로
              간주합니다.
            </WarningText>
            <DeleteButton onClick={onDelete}>게임 삭제하기</DeleteButton>
          </ActionSection>
        </ContentWrapper>
      </ModalContainer>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  background: linear-gradient(
    180deg,
    #040011 13.77%,
    #202b3c 27.29%,
    #202b3c 27.29%
  );
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 32px 16px;
  }

  @media (max-width: 480px) {
    padding: 24px 12px;
  }
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 40px;
  align-items: center;
  min-height: 600px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    gap: 32px;
    text-align: center;
  }

  @media (max-width: 768px) {
    gap: 24px;
    min-height: auto;
  }
`;

const HeaderSection = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  text-align: center;

  @media (max-width: 1024px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

const DeleteQuestion = styled.h1`
  color: #f3f3f3;
  font-family:
    "Barlow",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 50px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 42px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const GameImageSection = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-self: start;

  @media (max-width: 1024px) {
    grid-column: 1;
    grid-row: 2;
    justify-content: center;
  }
`;

const GameImage = styled.img`
  width: 100%;
  max-width: 483px;
  height: auto;
  aspect-ratio: 483 / 711;
  border-radius: 3px;
  object-fit: cover;

  @media (max-width: 1024px) {
    max-width: 350px;
  }

  @media (max-width: 768px) {
    max-width: 280px;
  }

  @media (max-width: 480px) {
    max-width: 200px;
  }
`;

const GameDetails = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: start;
  justify-self: start;

  @media (max-width: 1024px) {
    grid-column: 1;
    grid-row: 3;
    text-align: center;
    align-items: center;
    align-self: center;
    justify-self: center;
  }
`;

const GameTitle = styled.h2`
  color: #f3f3f3;
  font-family:
    "Barlow",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 128px;
  font-weight: 900;
  line-height: 1;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 96px;
  }

  @media (max-width: 768px) {
    font-size: 72px;
  }

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

const ReleaseDate = styled.p`
  color: #f3f3f3;
  font-family:
    "Barlow",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ActionSection = styled.div`
  grid-column: 2;
  grid-row: 3;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    grid-column: 1;
    grid-row: 4;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const WarningText = styled.p`
  color: #bababa;
  font-family:
    "Barlow",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  text-align: right;
  max-width: 500px;

  @media (max-width: 1024px) {
    text-align: center;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const WarningBold = styled.span`
  font-weight: 700;
`;

const DeleteButton = styled.button`
  display: flex;
  padding: 16px 66px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  background: #c41700;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  color: #f3f3f3;
  font-family:
    "Roboto",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 1;

  &:hover {
    background: #a81400;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(196, 23, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    background: #901100;
  }

  @media (max-width: 768px) {
    padding: 14px 48px;
    font-size: 26px;
  }

  @media (max-width: 480px) {
    padding: 12px 32px;
    font-size: 22px;
  }
`;

export default GameDeletionModal;
