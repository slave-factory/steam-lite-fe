import * as React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import FooterSvg from "../assets/icons/footer.svg?react";
import InputField from "./InputField";
import SteamLogo from "./SteamLogo";
import WindowControls from "./WindowControls";

function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleCreateAccount = () => {
    console.log("Creating account with:", { username, password });
    // Add your account creation logic here
  };

  return (
    <Container>
      <Header>
        <HeaderBackground />
        <HeaderContent>
          <WindowControlsWrapper>
            <WindowControls />
          </WindowControlsWrapper>
          <SteamLogo />
        </HeaderContent>
      </Header>

      <MainContent>
        <WelcomeTitle>환영합니다.</WelcomeTitle>
        <Subtitle>계정을 생성해봅시다.</Subtitle>

        <FormSection>
          <InputField
            label="아이디를 입력하세요."
            placeholder="ID"
            value={username}
            onChange={setUsername}
          />
          <InputField
            label="비밀번호를 입력하세요."
            placeholder="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
        </FormSection>

        <CreateAccountButton onClick={handleCreateAccount}>
          계정 생성하기
        </CreateAccountButton>

        <BackButton to="/">← 메인으로 돌아가기</BackButton>
      </MainContent>

      <Footer>
        <FooterSvg />
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  max-width: none;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  background-color: var(--Background-Main, #0e141b);
  margin: 0 auto;

  @media (max-width: 991px) {
    max-width: 991px;
  }

  @media (max-width: 640px) {
    max-width: 640px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 59px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderBackground = styled.div`
  width: 100%;
  height: 59px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--Background-Main, #0e141b);
`;

const HeaderContent = styled.div`
  width: 100%;
  height: 59px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const WindowControlsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: 23px;
  top: 17px;

  @media (max-width: 640px) {
    position: static;
    order: 2;
  }
`;

const MainContent = styled.div`
  padding: 50px 198px 0;
  position: relative;
  z-index: 1;

  @media (max-width: 991px) {
    padding: 30px 40px 0;
  }

  @media (max-width: 640px) {
    padding: 20px 20px 0;
  }
`;

const WelcomeTitle = styled.h1`
  width: 258px;
  color: var(--Text-Main, #f3f3f3);
  margin: 0 0 16px 0;
  font:
    700 50px "Barlow",
    sans-serif;

  @media (max-width: 991px) {
    font-size: 40px;
    width: 100%;
  }

  @media (max-width: 640px) {
    font-size: 32px;
    text-align: center;
  }
`;

const Subtitle = styled.p`
  width: 100%;
  color: var(--Text-Main, #f3f3f3);
  margin: 0 0 50px 0;
  font:
    400 24px "Roboto",
    sans-serif;

  @media (max-width: 991px) {
    font-size: 20px;
    margin-bottom: 35px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
    text-align: center;
    margin-bottom: 25px;
  }
`;

const FormSection = styled.div`
  margin-bottom: 40px;

  @media (max-width: 991px) {
    margin-bottom: 25px;
  }
`;

const CreateAccountButton = styled.button`
  display: flex;
  width: 180px;
  min-width: 180px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius, 3px);
  cursor: pointer;
  position: absolute;
  right: 350px;
  top: 380px;
  background-color: var(--Background-Hover, #313843);
  border: none;
  transition: all 0.2s ease;

  min-width: 150px;
  flex: 1 0 0;
  color: var(--Text-Main, #f3f3f3);
  text-align: center;
  font:
    700 20px "Barlow",
    sans-serif;

  &:hover {
    background-color: #3a4451;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    background-color: #2a3139;
  }

  @media (max-width: 991px) {
    position: static;
    margin-top: 40px;
    width: 200px;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin-top: 30px;
    font-size: 18px;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 325px;
  position: absolute;
  bottom: -100px;
  left: 0;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 640px) {
    height: 250px;
    bottom: -80px;
  }
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 80px;
  right: 198px;
  padding: 10px 20px;
  background-color: rgba(30, 35, 41, 0.8);
  color: var(--Text-Dim, #76808c);
  text-decoration: none;
  border-radius: var(--border-radius, 3px);
  font:
    500 14px "Roboto",
    sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background-color: rgba(30, 35, 41, 0.9);
    color: var(--Text-Main, #f3f3f3);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 991px) {
    right: 40px;
    top: 80px;
  }

  @media (max-width: 640px) {
    right: 20px;
    top: 60px;
    font-size: 12px;
    padding: 8px 16px;
  }
`;

export default LoginPage;
