import * as React from "react";

import styled from "styled-components";

import FooterSection from "./FooterSection";
import Header from "./Header";
import LoginForm from "./LoginForm";
import SignupPromotion from "./SignupPromotion";

function LoginPage() {
  return (
    <LoginPageContainer>
      <Header />
      <LoginForm />
      <SignupPromotion />
      <FooterSection />
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  background-color: #0e141b;
  @media (max-width: 991px) {
    height: auto;
    min-height: 100vh;
  }
`;

export default LoginPage;
