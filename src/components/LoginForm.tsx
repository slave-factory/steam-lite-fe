import * as React from "react";

import styled from "styled-components";

function LoginForm() {
  return (
    <LoginFormContainer>
      <LoginTitle>로그인</LoginTitle>
      <UsernameSection>
        <UsernameLabel>아이디를 입력하세요.</UsernameLabel>
        <InputContainer>
          <InputBackground />
          <UsernameInput type="text" placeholder="ID" />
        </InputContainer>
      </UsernameSection>
      <PasswordSection>
        <PasswordLabel>비밀번호를 입력하세요.</PasswordLabel>
        <PasswordInputContainer>
          <PasswordInputBackground />
          <PasswordInput type="password" placeholder="Password" />
        </PasswordInputContainer>
      </PasswordSection>
      <LoginButton>
        <LoginButtonText>로그인</LoginButtonText>
      </LoginButton>
    </LoginFormContainer>
  );
}

const LoginFormContainer = styled.div`
  position: absolute;
  left: 198px;
  top: 153px;
  width: 886px;
  @media (max-width: 991px) {
    left: 50px;
    top: 120px;
    width: calc(100% - 100px);
    max-width: 700px;
  }
  @media (max-width: 640px) {
    left: 20px;
    top: 100px;
    width: calc(100% - 40px);
  }
`;

const LoginTitle = styled.div`
  width: 235px;
  color: #f3f3f3;
  height: 60px;
  margin-bottom: 56px;
  font:
    700 50px Barlow,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
  @media (max-width: 640px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

const UsernameSection = styled.div`
  margin-bottom: 47px;
  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const UsernameLabel = styled.div`
  width: 100%;
  color: #f3f3f3;
  height: 23px;
  margin-bottom: 20px;
  font:
    400 20px Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  @media (max-width: 640px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const InputContainer = styled.div`
  width: 666px;
  height: 44px;
  flex-shrink: 0;
  position: relative;
  background-color: #212b45;
  @media (max-width: 991px) {
    width: 100%;
    max-width: 600px;
  }
`;

const InputBackground = styled.div`
  width: 666px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 3px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(33, 43, 69, 0.2);
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const UsernameInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #f3f3f3;
  position: absolute;
  left: 0;
  top: 0;
  padding: 14px 19px;
  font:
    400 14px Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;

  &::placeholder {
    color: #4b619b;
  }

  &:focus {
    outline: none;
  }
`;

const PasswordSection = styled.div`
  margin-bottom: 47px;
  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const PasswordLabel = styled.div`
  width: 100%;
  color: #f3f3f3;
  height: 23px;
  margin-bottom: 20px;
  font:
    400 20px Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  @media (max-width: 640px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const PasswordInputContainer = styled.div`
  width: 666px;
  height: 44px;
  flex-shrink: 0;
  position: relative;
  background-color: #212b45;
  @media (max-width: 991px) {
    width: 100%;
    max-width: 600px;
  }
`;

const PasswordInputBackground = styled.div`
  width: 666px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 3px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(33, 43, 69, 0.2);
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #f3f3f3;
  position: absolute;
  left: 0;
  top: 0;
  padding: 14px 19px;
  font:
    400 14px Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;

  &::placeholder {
    color: #4b619b;
  }

  &:focus {
    outline: none;
  }
`;

const LoginButton = styled.div`
  display: flex;
  width: 140px;
  min-width: 140px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -15px;
  top: 293px;
  height: 44px;
  cursor: pointer;
  background-color: #313843;
  @media (max-width: 991px) {
    position: relative;
    right: auto;
    top: 20px;
    margin: 20px 0;
  }
  @media (max-width: 640px) {
    width: 100%;
    margin-top: 30px;
  }
`;

const LoginButtonText = styled.div`
  min-width: 120px;
  flex: 1 0 0;
  color: #f3f3f3;
  text-align: center;
  font:
    700 18px Barlow,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
`;

export default LoginForm;
