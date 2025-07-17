<<<<<<< HEAD
import React from "react";

import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterBackground />
      <FooterContent>
        <SteamLogoSection>
          <SteamLogo
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="176" height="50" viewBox="0 0 176 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4581 0C4.9453 0 0.429149 4.25069 0 9.65266L5.62473 11.9782C6.10132 11.6523 6.67708 11.4613 7.29649 11.4613C7.352 11.4613 7.40727 11.4632 7.46207 11.4663L9.96343 7.84069C9.96343 7.82337 9.96319 7.80653 9.96319 7.78945C9.96319 5.60717 11.7384 3.83174 13.9209 3.83174C16.1032 3.83174 17.8784 5.60717 17.8784 7.78945C17.8784 9.97173 16.1032 11.7474 13.9209 11.7474C13.8908 11.7474 13.8609 11.7467 13.831 11.746L10.2635 14.2915C10.2654 14.3377 10.2671 14.3849 10.2671 14.4319C10.2671 16.0702 8.93456 17.4025 7.29649 17.4025C5.85863 17.4025 4.65635 16.3762 4.38401 15.0171L0.361539 13.3542C1.607 17.759 5.65391 20.9885 10.4581 20.9885C16.2541 20.9885 20.9524 16.2899 20.9524 10.4946C20.9524 4.69834 16.2538 0 10.4581 0Z" fill="#76808C"></path><path d="M6.57622 15.9237L5.28711 15.3911C5.51556 15.8668 5.91079 16.2651 6.43554 16.4838C7.56997 16.9564 8.87782 16.4181 9.35062 15.2827C9.57955 14.7337 9.58097 14.1276 9.35394 13.5772C9.12739 13.0266 8.6999 12.5973 8.15024 12.3681C7.60485 12.1411 7.02055 12.1494 6.50718 12.3432L7.83876 12.8938C8.67547 13.2425 9.07117 14.2033 8.72244 15.04C8.37442 15.877 7.41293 16.2727 6.57622 15.9237Z" fill="#76808C"></path><text fill="#76808C" x="90" y="35" font-family="Barlow" font-size="36.5" font-weight="bold">Lite</text></svg>',
            }}
          />
        </SteamLogoSection>

        <FooterInfo>
          <CopyrightText>
            © 2025 Valve Corporation. All rights reserved.
            <br />
            Reproduction by Yumin's Slave
          </CopyrightText>
        </FooterInfo>

        <TeamSection>
          <TeamColumn>
            <TeamMember>Seo Yumin</TeamMember>
            <TeamMember>Jang Giwon</TeamMember>
            <TeamMember>Kim Minwoo</TeamMember>
            <TeamMember>Park Jooyoung</TeamMember>
            <TeamMember>Kim Hyunseo</TeamMember>
          </TeamColumn>
          <TeamColumn>
            <TeamMember>Kwon Youngjun</TeamMember>
            <TeamMember>Kim Minjun</TeamMember>
            <TeamMember>Ko Kyungmin</TeamMember>
            <TeamMember>Kim Sunwoo</TeamMember>
            <TeamMember>Park Woohyun</TeamMember>
          </TeamColumn>
        </TeamSection>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  height: 325px;
  position: relative;
  margin-top: 60px;

  @media (max-width: 768px) {
    height: auto;
    min-height: 250px;
    margin-top: 40px;
  }
`;

const FooterBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1e2329;
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 53px 266px;
  gap: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    text-align: center;
    padding: 40px 20px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 30px 15px;
    gap: 20px;
  }
`;

const SteamLogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SteamLogo = styled.div`
  opacity: 0.72;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  svg {
    @media (max-width: 768px) {
      width: 140px;
      height: 40px;
    }

    @media (max-width: 480px) {
      width: 120px;
      height: 32px;
    }
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (max-width: 1200px) {
    order: 3;
  }
`;

const CopyrightText = styled.p`
  color: #76808c;
  font:
    400 16px "Roboto",
    sans-serif;
  text-align: center;
  line-height: 1.4;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TeamSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (max-width: 1200px) {
    order: 2;
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const TeamColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    align-items: center;
    gap: 10px;
  }
`;

const TeamMember = styled.div`
  color: #747c86;
  font:
    400 16px "Roboto",
    sans-serif;
  transition: color 0.2s ease;

  &:hover {
    color: #66c0f4;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Footer;
=======
import * as S from './Footer.styles';

function Footer() {
  return (
    <S.FooterContainer>
      <S.ContentWrapper>
        <S.MainContent>
          <S.LeftSection>
            <S.CompanyInfo>
              <S.LogoSection>
                <S.LogoImage
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/46f132690c839b5ebf2d877927db239f73614baf?placeholderIfAbsent=true"
                  alt="Company Logo"
                />
                <S.SteamLogo
                  src="https://cdn.builder.io/api/v1/image/assets%2F3fac9c3ed910433e8d91e042cfb1e127%2F97bc73102bc6432e8353c81e07b6b669?format=webp&width=800"
                  alt="Steam Logo"
                />
                <S.BrandName>Lite</S.BrandName>
              </S.LogoSection>
              <S.CopyrightText>
                © 2025 Valve Corporation. All rights reserved.
                <br />
                Reproduction by Yumin's Slave
              </S.CopyrightText>
            </S.CompanyInfo>
          </S.LeftSection>
          <S.ContributorsSection>
            <S.LeftContributors>
              <div>Seo Yumin</div>
              <S.ContributorName>Jang Giwon</S.ContributorName>
              <S.ContributorName>Kim Minwoo</S.ContributorName>
              <S.ContributorName>Park Jooyoung</S.ContributorName>
              <S.ContributorName>Kim Hyunseo</S.ContributorName>
            </S.LeftContributors>
            <S.RightContributors>
              <div>Kwon Youngjun</div>
              <S.ContributorName>Kim Minjun</S.ContributorName>
              <S.ContributorName>Ko Kyungmin</S.ContributorName>
              <S.ContributorName>Kim Sunwoo</S.ContributorName>
              <S.ContributorName>Park Woohyun</S.ContributorName>
            </S.RightContributors>
          </S.ContributorsSection>
        </S.MainContent>
      </S.ContentWrapper>
    </S.FooterContainer>
  );
}

export default Footer;
>>>>>>> d4464114aaef94cc1479042a359fe3cc4f86945f
