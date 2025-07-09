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