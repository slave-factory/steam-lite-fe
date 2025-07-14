import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
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

export const MainContent = styled.div`
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

export const LeftSection = styled.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 991px) {
    width: 100%;
    min-width: auto;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 991px) {
    align-items: center;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const LogoImage = styled.img`
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

export const SteamLogo = styled.img`
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

export const CopyrightText = styled.div`
  color: var(--Text-Dim, #76808c);
  margin-top: 1.5rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-top: 1rem;
    font-size: 0.9rem;
  }
`;

export const BrandName = styled.div`
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

export const ContributorsSection = styled.div`
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

export const LeftContributors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    gap: 0.8rem;
  }
`;

export const ContributorName = styled.div`
  line-height: 1.4;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const RightContributors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    gap: 0.8rem;
  }
`;
