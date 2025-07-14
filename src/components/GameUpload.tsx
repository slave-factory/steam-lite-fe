import { useState } from "react";

import styled from "styled-components";

const GameUpload = () => {
  const [gameName, setGameName] = useState("");
  const [gameDescription, setGameDescription] = useState("");

  const handleSubmit = () => {
    console.log("Game submission:", { gameName, gameDescription });
  };

  return (
    <GameUploadContainer>
      <MainTitle>새로운 작품을 만들어봅시다.</MainTitle>

      <FormSection>
        <Label>게임의 이름을 알려주세요.</Label>
        <InputField
          type="text"
          placeholder="Game Name"
          value={gameName}
          onChange={e => setGameName(e.target.value)}
        />
      </FormSection>

      <FormSection>
        <Label>게임에 대한 설명을 작성해주세요.</Label>
        <InputField
          type="text"
          placeholder="Explanation about this Game"
          value={gameDescription}
          onChange={e => setGameDescription(e.target.value)}
        />
      </FormSection>

      <FormSection>
        <Label>게임의 썸네일을 업로드해주세요.</Label>
        <UploadButton type="button">
          <DownloadIcon>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1277_503)">
                <path
                  d="M15.7077 8.75H14.2502V4.16667C14.2502 3.6625 13.8377 3.25 13.3335 3.25H9.66683C9.16266 3.25 8.75016 3.6625 8.75016 4.16667V8.75H7.29266C6.47683 8.75 6.06433 9.74 6.64183 10.3175L10.8493 14.525C11.2068 14.8825 11.7843 14.8825 12.1418 14.525L16.3493 10.3175C16.9268 9.74 16.5235 8.75 15.7077 8.75ZM5.0835 17.9167C5.0835 18.4208 5.496 18.8333 6.00016 18.8333H17.0002C17.5043 18.8333 17.9168 18.4208 17.9168 17.9167C17.9168 17.4125 17.5043 17 17.0002 17H6.00016C5.496 17 5.0835 17.4125 5.0835 17.9167Z"
                  fill="#0E141B"
                />
              </g>
              <defs>
                <clipPath id="clip0_1277_503">
                  <rect
                    width="22"
                    height="22"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </DownloadIcon>
          파일 추가
        </UploadButton>
      </FormSection>

      <FormSection>
        <Label>게임의 파일을 업로드해주세요.</Label>
        <UploadButton type="button">
          <DownloadIcon>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1277_671)">
                <path
                  d="M15.7077 8.75H14.2502V4.16667C14.2502 3.6625 13.8377 3.25 13.3335 3.25H9.66683C9.16266 3.25 8.75016 3.6625 8.75016 4.16667V8.75H7.29266C6.47683 8.75 6.06433 9.74 6.64183 10.3175L10.8493 14.525C11.2068 14.8825 11.7843 14.8825 12.1418 14.525L16.3493 10.3175C16.9268 9.74 16.5235 8.75 15.7077 8.75ZM5.0835 17.9167C5.0835 18.4208 5.496 18.8333 6.00016 18.8333H17.0002C17.5043 18.8333 17.9168 18.4208 17.9168 17.9167C17.9168 17.4125 17.5043 17 17.0002 17H6.00016C5.496 17 5.0835 17.4125 5.0835 17.9167Z"
                  fill="#0E141B"
                />
              </g>
              <defs>
                <clipPath id="clip0_1277_671">
                  <rect
                    width="22"
                    height="22"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </DownloadIcon>
          파일 추가
        </UploadButton>
      </FormSection>

      <SubmitSection>
        <SubmitButton onClick={handleSubmit}>작품 등록하기</SubmitButton>
        <LegalText>
          '작품 등록하기'를 클릭하면 Steam 이용 약관 및 자료 이용에 동의한
          것으로 간주합니다.
        </LegalText>
      </SubmitSection>
    </GameUploadContainer>
  );
};

const GameUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 127px 300px 127px;
  background: linear-gradient(
    180deg,
    #040011 13.77%,
    #202b3c 27.29%,
    #202b3c 27.29%
  );
  min-height: calc(100vh - 59px);
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1440px) {
    padding: 200px 100px 280px 100px;
  }

  @media (max-width: 1024px) {
    padding: 150px 60px 250px 60px;
  }

  @media (max-width: 768px) {
    padding: 120px 40px 220px 40px;
  }

  @media (max-width: 480px) {
    padding: 100px 20px 200px 20px;
  }
`;

const MainTitle = styled.h1`
  color: var(--Text-Main, #f3f3f3);
  font-family:
    "Barlow",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 50px;
  font-weight: 700;
  line-height: normal;
  margin: 0 0 176px 0;
  max-width: 776px;

  @media (max-width: 1024px) {
    font-size: 42px;
    margin-bottom: 140px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 100px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 80px;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  max-width: 666px;

  @media (max-width: 768px) {
    margin-bottom: 100px;
  }

  @media (max-width: 480px) {
    margin-bottom: 80px;
  }
`;

const Label = styled.label`
  color: var(--Text-Main, #f3f3f3);
  font-family:
    "Roboto",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 38px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const InputField = styled.input`
  width: 100%;
  max-width: 666px;
  height: 44px;
  padding: 14px 19px;
  border-radius: var(--border-radius, 3px);
  background: rgba(21, 27, 43, 0.2);
  border: none;
  color: var(--Text-Main, #f3f3f3);
  font-family:
    "Roboto",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: var(--Color-Secondary, #4b619b);
  }

  &:focus {
    background: rgba(33, 43, 69, 0.35);
    box-shadow: 0 0 0 2px rgba(75, 97, 155, 0.5);
  }

  &:hover {
    background: rgba(33, 43, 69, 0.3);
  }

  @media (max-width: 768px) {
    height: 40px;
    padding: 12px 16px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    height: 36px;
    padding: 10px 14px;
    font-size: 12px;
  }
`;

const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 214px;
  height: 53px;
  padding: 16px 53px 16px 57px;
  border-radius: var(--border-radius, 3px);
  background: var(--Color-Secondary, #4b619b);
  border: none;
  color: var(--Background-Main, #0e141b);
  font-family:
    "Barlow",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #5a6fac;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(75, 97, 155, 0.3);
  }

  &:active {
    transform: translateY(0);
    background: #3f5489;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 48px;
    font-size: 16px;
    padding: 14px 45px 14px 48px;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 44px;
    font-size: 14px;
    padding: 12px 40px 12px 42px;
    gap: 8px;
  }
`;

const DownloadIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const SubmitSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: auto;
  padding-top: 40px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  padding: 17px 56px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--border-radius, 3px);
  background: var(--Background-Hover, #313843);
  border: none;
  color: var(--Text-Main, #f3f3f3);
  font-family:
    "Roboto",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 205px;
  height: 53px;
  margin-bottom: 17px;

  &:hover {
    background: #3d4451;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(49, 56, 67, 0.3);
  }

  &:active {
    transform: translateY(0);
    background: #2a2f38;
  }

  @media (max-width: 768px) {
    padding: 15px 48px;
    font-size: 15px;
    min-width: 180px;
    height: 48px;
  }

  @media (max-width: 480px) {
    padding: 13px 40px;
    font-size: 14px;
    min-width: 160px;
    height: 44px;
  }
`;

const LegalText = styled.p`
  color: #7b7b7b;
  font-family:
    "Roboto",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  max-width: 536px;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    max-width: 300px;
  }
`;

export default GameUpload;