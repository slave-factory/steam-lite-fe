import React from "react";

import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <ContentWrapper>
        <MainContent>
          <LeftSection>
            <CompanyInfo>
              <LogoSection>
                <LogoImage
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/46f132690c839b5ebf2d877927db239f73614baf?placeholderIfAbsent=true"
                  alt="Company Logo"
                />
                <SteamLogo
                  src="https://cdn.builder.io/api/v1/image/assets%2F3fac9c3ed910433e8d91e042cfb1e127%2F97bc73102bc6432e8353c81e07b6b669?format=webp&width=800"
                  alt="Steam Logo"
                />
                <BrandName>Lite</BrandName>
              </LogoSection>
              <CopyrightText>
                © 2025 Valve Corporation. All rights reserved.
                <br />
                Reproduction by Yumin's Slave
              </CopyrightText>
            </CompanyInfo>
          </LeftSection>
          <ContributorsSection>
            <LeftContributors>
              <div>Seo Yumin</div>
              <ContributorName>Jang Giwon</ContributorName>
              <ContributorName>Kim Minwoo</ContributorName>
              <ContributorName>Park Jooyoung</ContributorName>
              <ContributorName>Kim Hyunseo</ContributorName>
            </LeftContributors>
            <RightContributors>
              <div>Kwon Youngjun</div>
              <ContributorName>Kim Minjun</ContributorName>
              <ContributorName>Ko Kyungmin</ContributorName>
              <ContributorName>Kim Sunwoo</ContributorName>
              <ContributorName>Park Woohyun</ContributorName>
            </RightContributors>
          </ContributorsSection>
        </MainContent>
      </ContentWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  background-color: var(--Background-Highlight, #1e2329);
  padding: 53px 70px 83px;
  box-sizing: border-box;

  @media (max-width: 1400px) {
    padding: 53px 60px 83px;
  }

  @media (max-width: 1200px) {
    padding: 53px 50px 83px;
  }

  @media (max-width: 991px) {
    padding: 40px 20px 60px;
  }

  @media (max-width: 768px) {
    padding: 30px 15px 45px;
  }

  @media (max-width: 480px) {
    padding: 25px 10px 40px;
  }
`;

const MainContent = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  flex-grow: 1;

  @media (max-width: 1200px) {
    gap: 1.5rem;
    justify-content: space-around;
  }

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 991px) {
    width: 100%;
    min-width: auto;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 991px) {
    align-items: center;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const LogoImage = styled.img`
  aspect-ratio: 3.52;
  object-fit: contain;
  object-position: center;
  width: 176px;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 140px;
  }

  @media (max-width: 480px) {
    width: 120px;
  }
`;

const SteamLogo = styled.img`
  object-fit: contain;
  object-position: center;
  width: 213px;
  max-width: 100%;
  margin-right: -1px;

  @media (max-width: 768px) {
    width: 170px;
  }

  @media (max-width: 480px) {
    width: 145px;
  }
`;

const CopyrightText = styled.div`
  color: var(--Text-Dim, #76808c);
  margin-top: 1.5rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-top: 1rem;
    font-size: 0.9rem;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 991px) {
    align-items: center;
  }
`;

const BrandName = styled.div`
  color: rgba(118, 128, 140, 1);
  margin: 3px 0 2px -3px;
  font:
    700 2.3rem Barlow,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;

  @media (max-width: 991px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const ContributorsSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  color: #747c86;
  font:
    400 1rem Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;

  @media (max-width: 991px) {
    justify-content: center;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const LeftContributors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    gap: 0.8rem;
  }
`;

const ContributorName = styled.div`
  line-height: 1.4;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const RightContributors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    gap: 0.8rem;
  }
`;

export default Footer;
