import * as React from "react";

import styled from "styled-components";

function SignupPromotion() {
  return (
    <PromotionContainer>
      <PromotionBackground />
      <PromotionTitle>Steam Lite에 처음 오셨나요?</PromotionTitle>
      <SignupButton>
        <SignupButtonText>무료로 가입</SignupButtonText>
      </SignupButton>
      <PromotionDescription>
        무료로 쉽게 가입할 수 있습니다. 수천 종류의 게임을 전 세계 새로운
        친구들과 함께 즐겨보세요.
      </PromotionDescription>
    </PromotionContainer>
  );
}

const PromotionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 166px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: absolute;
  left: 0;
  top: 593px;
  @media (max-width: 991px) {
    position: relative;
    top: auto;
    margin-top: 50px;
    height: auto;
    padding: 40px 20px;
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 640px) {
    padding: 30px 15px;
  }
`;

const PromotionBackground = styled.div`
  width: 100%;
  height: 210px;
  flex-shrink: 0;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #1e2329;
`;

const PromotionTitle = styled.div`
  width: 487px;
  height: 38px;
  flex-shrink: 0;
  color: #f3f3f3;
  position: absolute;
  left: 50%;
  top: 63px;
  transform: translateX(-50%);
  text-align: center;
  font:
    700 36px Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    font-size: 28px;
    width: 100%;
    margin-bottom: 20px;
  }
  @media (max-width: 640px) {
    font-size: 24px;
    line-height: 1.2;
    margin-bottom: 15px;
  }
`;

const SignupButton = styled.div`
  display: flex;
  width: 250px;
  height: 44px;
  padding: 16px 66px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 3px;
  background: linear-gradient(90deg, #6bbcf9 0%, #4c86dd 100%);
  position: absolute;
  left: 1063px;
  top: 60px;
  cursor: pointer;
  @media (max-width: 991px) {
    position: relative;
    left: auto;
    top: auto;
    margin-bottom: 20px;
  }
  @media (max-width: 640px) {
    width: 100%;
    max-width: 250px;
    margin-bottom: 15px;
  }
`;

const SignupButtonText = styled.div`
  color: #fff;
  font:
    700 22px Barlow,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
`;

const PromotionDescription = styled.div`
  color: #767676;
  position: absolute;
  left: 50%;
  top: 125px;
  width: 700px;
  height: 20px;
  transform: translateX(-50%);
  text-align: center;
  font:
    400 17px Barlow,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    width: 100%;
    max-width: 600px;
    font-size: 16px;
  }
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;

export default SignupPromotion;
