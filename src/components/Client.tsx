import * as React from "react";

import styled from "styled-components";

// SVG icons from public folder
const MinimizeIcon = "/icons/minimize.svg";
const MaximizeIcon = "/icons/maximize.svg";
const CloseIcon = "/icons/close.svg";
const SteamLogoWithNavIcon = "/icons/steam-logo-with-nav.svg";
const PeopleIcon = "/icons/people.svg";
const DropdownArrowIcon = "/icons/dropdown-arrow.svg";

function Client() {
  return (
    <ClientContainer>
      <BackgroundImage
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/f9cf8902661a56bc4f55e96418c10fcae3b6316c?width=3840"
        altText="Rectangle 68"
        alt="Rectangle 68"
      />
      <WindowControls>
        <ControlButtons>
          <div>
            <img src={MinimizeIcon} alt="Minimize" className="control-icon" />
          </div>
          <div>
            <img src={MaximizeIcon} alt="Maximize" className="control-icon" />
          </div>
          <div>
            <img src={CloseIcon} alt="Close" className="control-icon" />
          </div>
        </ControlButtons>
      </WindowControls>
      <SteamLogo>
        <img
          src={SteamLogoWithNavIcon}
          alt="Steam Lite with Navigation"
          className="steam-logo-nav"
        />
      </SteamLogo>
      <FriendsSection>
        <FriendsBackground />
        <FriendsIcon>
          <img src={PeopleIcon} alt="Friends" className="people-icon" />
        </FriendsIcon>
      </FriendsSection>
      <UserSection>
        <UserBackground />
        <UserContent>
          <UserAvatar
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/364a3c9e005a49d2da2abac61939f62d10ceabe5?width=62"
            altText=""
          />
          <UserName>MiNUuuuuu</UserName>
          <UserBalance>₩1,000</UserBalance>
          <DropdownArrow>
            <img
              src={DropdownArrowIcon}
              alt="Dropdown"
              className="dropdown-arrow"
            />
          </DropdownArrow>
        </UserContent>
      </UserSection>
    </ClientContainer>
  );
}

const ClientContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: var(--Background-Main, #0e141b);
  overflow: hidden;

  @media (min-width: 1920px) {
    width: 1920px;
    height: 1080px;
    margin: 0 auto;
  }

  @media (max-width: 1440px) {
    width: 100%;
    height: 100vh;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 100vh;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
  }
`;

const BackgroundImage = styled.img.attrs<{ image: string; altText: string }>(
  props => ({
    src: props.image,
    alt: props.altText,
  })
)`
  width: 100%;
  height: 59px;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  z-index: 0;

  @media (max-width: 768px) {
    height: 52px;
  }

  @media (max-width: 480px) {
    height: 48px;
  }
`;

const WindowControls = styled.div`
  position: absolute;
  right: 20px;
  top: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  z-index: 10;

  @media (max-width: 1024px) {
    right: 16px;
    top: 14px;
  }

  @media (max-width: 768px) {
    right: 12px;
    top: 12px;
  }

  @media (max-width: 480px) {
    right: 10px;
    top: 10px;
  }
`;

const ControlButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;

  & > div {
    cursor: pointer;
    padding: 4px;
    border-radius: 3px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    .control-icon {
      width: 25px;
      height: 25px;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  @media (max-width: 1024px) {
    gap: 10px;

    & > div {
      padding: 3px;
    }
  }

  @media (max-width: 768px) {
    gap: 8px;

    & > div {
      padding: 2px;
    }

    & svg {
      width: 20px !important;
      height: 20px !important;
    }
  }

  @media (max-width: 480px) {
    gap: 6px;

    & svg {
      width: 18px !important;
      height: 18px !important;
    }
  }
`;

const SteamLogo = styled.div`
  position: absolute;
  left: 21px;
  top: 18px;
  z-index: 5;

  .steam-logo-nav {
    width: 342px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    left: 16px;
    top: 16px;

    .steam-logo-nav {
      width: 280px;
      height: 18px;
    }
  }

  @media (max-width: 768px) {
    left: 12px;
    top: 14px;

    .steam-logo-nav {
      width: 240px;
      height: 16px;
    }
  }

  @media (max-width: 480px) {
    left: 10px;
    top: 12px;

    .steam-logo-nav {
      width: 200px;
      height: 14px;
    }
  }
`;

const FriendsSection = styled.div`
  display: flex;
  width: 56px;
  height: 39px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 430px;
  top: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 5;

  &:hover {
    transform: translateY(-1px);

    ${"" /* Reference to FriendsBackground */}
    > div:first-child {
      background-color: rgba(30, 35, 41, 0.9);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: 1440px) {
    right: 390px;
  }

  @media (max-width: 1024px) {
    right: 340px;
    top: 8px;
    width: 48px;
    height: 34px;
  }

  @media (max-width: 768px) {
    right: 300px;
    top: 7px;
    width: 44px;
    height: 32px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const FriendsBackground = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius, 3px);
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--Background-Highlight, #1e2329);
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FriendsIcon = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .people-icon {
    width: 25px;
    height: 26px;
  }

  @media (max-width: 1024px) {
    .people-icon {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 768px) {
    .people-icon {
      width: 20px;
      height: 20px;
    }
  }
`;

const UserSection = styled.div`
  display: flex;
  height: 39px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  position: absolute;
  right: 400px;
  top: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 5;

  &:hover {
    transform: translateY(-1px);

    ${"" /* Reference to UserBackground */}
    > div:first-child {
      background-color: rgba(30, 35, 41, 0.95);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: 1440px) {
    right: 360px;
  }

  @media (max-width: 1024px) {
    right: 280px;
    top: 8px;
    height: 34px;
  }

  @media (max-width: 768px) {
    right: 240px;
    top: 7px;
    height: 32px;
  }

  @media (max-width: 480px) {
    right: 180px;
    top: 6px;
    height: 30px;
  }
`;

const UserBackground = styled.div`
  width: 210px;
  height: 100%;
  border-radius: var(--border-radius, 3px);
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--Background-Highlight, #1e2329);
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  @media (max-width: 1024px) {
    width: 190px;
  }

  @media (max-width: 768px) {
    width: 170px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const UserContent = styled.div`
  display: flex;
  width: 194px;
  height: calc(100% - 6px);
  align-items: center;
  gap: 10px;
  position: absolute;
  left: 8px;
  top: 3px;

  @media (max-width: 1024px) {
    width: 174px;
    left: 8px;
    gap: 8px;
  }

  @media (max-width: 768px) {
    width: 154px;
    left: 8px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    width: 134px;
    left: 8px;
    gap: 4px;
  }
`;

const UserAvatar = styled.img.attrs<{ image: string; altText: string }>(
  props => ({
    src: props.image,
    alt: props.altText,
  })
)`
  width: 31px;
  height: 31px;
  border-radius: 4px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
  object-fit: cover;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 768px) {
    width: 26px;
    height: 26px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;

const UserName = styled.div`
  color: var(--Text-Main, #f3f3f3);
  font:
    500 14px Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const UserBalance = styled.div`
  color: var(--Text-Dim, #76808c);
  font:
    400 13px Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  white-space: nowrap;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(118, 128, 140, 0.9);
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const DropdownArrow = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 2px;
  transition: all 0.2s ease;

  .dropdown-arrow {
    width: 20px;
    height: 20px;
    transition: transform 0.2s ease;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    .dropdown-arrow {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 480px) {
    .dropdown-arrow {
      width: 16px;
      height: 16px;
    }
  }
`;

export default Client;
