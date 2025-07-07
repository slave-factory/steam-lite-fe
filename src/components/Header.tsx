import * as React from "react";

import styled from "styled-components";

// SVG icons from public folder
const MinimizeIcon = "/icons/minimize.svg";
const MaximizeIcon = "/icons/maximize.svg";
const CloseIcon = "/icons/close.svg";
const SteamLogoIcon = "/icons/steam-logo.svg";

function Header() {
  const handleMinimize = () => {
    console.log("최소화 버튼 클릭됨");
    // 실제 최소화 기능은 Electron 등의 환경에서 구현 가능
  };

  const handleMaximize = () => {
    console.log("창 크기 변경 ��튼 클릭됨");
    // 실제 창 크기 변경 기능은 Electron 등의 환경에서 구현 가능
  };

  const handleClose = () => {
    console.log("창 끄기 버튼 클릭됨");
    // 실제 창 닫기 기능은 Electron 등의 환경에서 구현 가능
    window.close();
  };

  return (
    <HeaderContainer>
      <HeaderBackground />
      <WindowControls>
        <ControlButtons>
          <MinimizeButton onClick={handleMinimize}>
            <img src={MinimizeIcon} alt="Minimize" className="control-icon" />
          </MinimizeButton>
          <MaximizeButton onClick={handleMaximize}>
            <img src={MaximizeIcon} alt="Maximize" className="control-icon" />
          </MaximizeButton>
          <CloseButton onClick={handleClose}>
            <img src={CloseIcon} alt="Close" className="control-icon" />
          </CloseButton>
        </ControlButtons>
      </WindowControls>
      <SteamLogo>
        <img src={SteamLogoIcon} alt="Steam Lite" className="steam-logo" />
      </SteamLogo>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 59px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: absolute;
  left: 0;
  top: 0;
`;

const HeaderBackground = styled.div`
  width: 100%;
  height: 59px;
  flex-shrink: 0;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #0e141b;
`;

const WindowControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  right: 23px;
  top: 17px;
  @media (max-width: 991px) {
    right: 20px;
  }
  @media (max-width: 640px) {
    right: 15px;
  }
`;

const ControlButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
  @media (max-width: 640px) {
    gap: 12px;
  }
`;

const SteamLogo = styled.div`
  position: absolute;
  left: 21px;
  top: 18px;

  .steam-logo {
    width: 342px;
    height: 21px;
  }

  @media (max-width: 991px) {
    left: 20px;
  }
  @media (max-width: 640px) {
    left: 15px;
  }
`;

const MinimizeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  .control-icon {
    width: 25px;
    height: 25px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const MaximizeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  .control-icon {
    width: 25px;
    height: 25px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  .control-icon {
    width: 25px;
    height: 25px;
  }

  &:hover {
    background-color: rgba(220, 53, 69, 0.8);
  }

  &:active {
    background-color: rgba(220, 53, 69, 1);
  }
`;

export default Header;
