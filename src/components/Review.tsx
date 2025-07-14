import { useState } from "react";

import styled from "styled-components";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameName?: string;
}

function ReviewModal({
  isOpen,
  onClose,
  gameName = "Elden Ring",
}: ReviewModalProps) {
  const [reviewText, setReviewText] = useState("");
  const [recommendation, setRecommendation] = useState<"yes" | "no" | null>(
    null
  );

  const handleSubmit = () => {
    console.log({ reviewText, recommendation });
    onClose();
  };

  const handleRecommendationClick = (type: "yes" | "no") => {
    setRecommendation(type);
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1075_833)">
              <path
                d="M23.6376 7.37559C23.1338 6.87184 22.3201 6.87184 21.8163 7.37559L15.5001 13.6789L9.1838 7.36268C8.68005 6.85893 7.8663 6.85893 7.36255 7.36268C6.8588 7.86643 6.8588 8.68018 7.36255 9.18393L13.6788 15.5002L7.36255 21.8164C6.8588 22.3202 6.8588 23.1339 7.36255 23.6377C7.8663 24.1414 8.68005 24.1414 9.1838 23.6377L15.5001 17.3214L21.8163 23.6377C22.3201 24.1414 23.1338 24.1414 23.6376 23.6377C24.1413 23.1339 24.1413 22.3202 23.6376 21.8164L17.3213 15.5002L23.6376 9.18393C24.1284 8.69309 24.1284 7.86643 23.6376 7.37559Z"
                fill="#76808C"
              />
            </g>
            <defs>
              <clipPath id="clip0_1075_833">
                <rect width="31" height="31" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </CloseButton>

        <HeaderSection>
          <Title>{gameName}에 대한 리뷰 작성</Title>
          <Subtitle>
            이 게임의 좋았던 점 또는 싫었던 점, 그리고 이를 다른 사람들에게
            추천하는지 여부에 대해 써주세요.
          </Subtitle>
        </HeaderSection>

        <ReviewTextArea
          value={reviewText}
          onChange={e => setReviewText(e.target.value)}
          placeholder="여기에 리뷰를 작성해주세요..."
        />

        <BottomSection>
          <RecommendationSection>
            <RecommendationText>이 게임을 추천하십니까?</RecommendationText>
            <ButtonGroup>
              <RecommendationButton
                $isSelected={recommendation === "yes"}
                onClick={() => handleRecommendationClick("yes")}
              >
                네 👍
              </RecommendationButton>
              <RecommendationButton
                $isSelected={recommendation === "no"}
                onClick={() => handleRecommendationClick("no")}
              >
                아니요 👎
              </RecommendationButton>
            </ButtonGroup>
          </RecommendationSection>
          <SubmitButton onClick={handleSubmit}>리뷰 등록하기</SubmitButton>
        </BottomSection>
      </ModalContainer>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 938px;
  height: 601px;
  background: #333a42;
  border-radius: var(--border-radius, 3px);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 69px 51px 51px;

  @media (max-width: 1024px) {
    max-width: 800px;
    height: 500px;
    padding: 60px 40px 40px;
  }

  @media (max-width: 768px) {
    max-width: 600px;
    height: 450px;
    padding: 50px 30px 30px;
  }

  @media (max-width: 480px) {
    height: 400px;
    padding: 40px 20px 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 30px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: var(--border-radius, 3px);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }

  svg {
    width: 31px;
    height: 31px;
  }

  @media (max-width: 768px) {
    top: 20px;
    right: 20px;
    padding: 6px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 480px) {
    top: 15px;
    right: 15px;
    padding: 4px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const HeaderSection = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  color: #fff;
  font-family:
    Roboto,
    -apple-system,
    Helvetica,
    sans-serif;
  font-size: 30px;
  font-weight: 400;
  line-height: normal;
  margin: 0 0 22px 0;

  @media (max-width: 1024px) {
    font-size: 26px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

const Subtitle = styled.p`
  color: #d3d3d3;
  font-family:
    Roboto,
    -apple-system,
    Helvetica,
    sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ReviewTextArea = styled.textarea`
  width: 100%;
  height: 302px;
  background: #222b35;
  border: none;
  border-radius: var(--border-radius, 3px);
  padding: 20px;
  color: #fff;
  font-family:
    Roboto,
    -apple-system,
    Helvetica,
    sans-serif;
  font-size: 16px;
  resize: none;
  margin-bottom: 40px;

  &::placeholder {
    color: #76808c;
  }

  &:focus {
    outline: 2px solid rgba(102, 192, 244, 0.5);
    background: #242d37;
  }

  @media (max-width: 1024px) {
    height: 250px;
    padding: 16px;
    font-size: 15px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    height: 200px;
    padding: 14px;
    font-size: 14px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    height: 150px;
    padding: 12px;
    font-size: 13px;
    margin-bottom: 16px;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
`;

const RecommendationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const RecommendationText = styled.p`
  color: #fff;
  font-family:
    Roboto,
    -apple-system,
    Helvetica,
    sans-serif;
  font-size: 22px;
  font-weight: 500;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 19px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const RecommendationButton = styled.button<{ $isSelected: boolean }>`
  display: flex;
  padding: 17px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--border-radius, 3px);
  border: 1px solid
    ${props =>
      props.$isSelected
        ? "rgba(102, 192, 244, 0.6)"
        : "rgba(118, 128, 140, 0.40)"};
  background: ${props =>
    props.$isSelected ? "rgba(102, 192, 244, 0.1)" : "transparent"};
  color: #fff;
  font-family:
    Roboto,
    -apple-system,
    Helvetica,
    sans-serif;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(102, 192, 244, 0.6);
    background: rgba(102, 192, 244, 0.15);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    padding: 14px 16px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    padding: 12px 14px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  padding: 17px 56px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--border-radius, 3px);
  background: var(--Background-Highlight, #1e2329);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--Text-Main, #f3f3f3);
  font-family:
    Roboto,
    -apple-system,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(30, 35, 41, 0.9);
    border-color: rgba(102, 192, 244, 0.4);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    padding: 14px 48px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    padding: 12px 40px;
    font-size: 14px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 10px 32px;
    font-size: 13px;
  }
`;

export default ReviewModal;
