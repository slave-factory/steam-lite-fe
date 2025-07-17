import * as React from "react";
import { useEffect, useRef, useState } from "react";

import styled from "styled-components";

import AccountDropdown from "./AccountDropdown";

function Client() {
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsAccountDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

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
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="333:2384" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="minimize-icon" style="width: 25px; height: 25px"> <g clip-path="url(#clip0_333_2384)"> <path d="M7.29167 11.6265H17.7083C18.2812 11.6265 18.75 12.0952 18.75 12.6681C18.75 13.241 18.2812 13.7098 17.7083 13.7098H7.29167C6.71875 13.7098 6.25 13.241 6.25 12.6681C6.25 12.0952 6.71875 11.6265 7.29167 11.6265Z" fill="#76808C"></path> </g> <defs> <clipPath id="clip0_333_2384"> <rect width="25" height="25" fill="white"></rect> </clipPath> </defs> </svg>',
              }}
            />
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="333:2387" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="copy-icon" style="width: 25px; height: 25px"> <g clip-path="url(#clip0_333_2387)"> <path d="M8.31931 5.05615H19.9344C21.0959 5.05615 21.3423 5.68289 21.3423 6.4489V15.5018C21.3423 15.8848 21.2191 16.3496 20.6383 16.3496C20.0576 16.3496 19.9344 15.8848 19.9344 15.5018V7.14528C19.9344 6.76227 19.4593 6.4489 18.8785 6.4489H8.31931C7.73856 6.4489 7.2634 6.13554 7.2634 5.75253C7.2634 5.36952 7.73856 5.05615 8.31931 5.05615ZM5.15158 7.84169H16.7667C17.9282 7.84169 18.5265 8.46843 18.5265 9.23444V18.9837C18.5265 19.7497 17.9282 20.3765 16.7667 20.3765H5.15158C3.99006 20.3765 3.74364 19.7497 3.74364 18.9837V9.23444C3.74364 8.46843 3.99006 7.84169 5.15158 7.84169ZM6.20749 18.9837H15.7108C16.2915 18.9837 16.7667 18.6703 16.7667 18.2873V9.93082C16.7667 9.54781 16.2915 9.23444 15.7108 9.23444H6.20749C5.62674 9.23444 5.15158 9.54781 5.15158 9.93082V18.2873C5.15158 18.6703 5.62674 18.9837 6.20749 18.9837Z" fill="#76808C"></path> </g> <defs> <clipPath id="clip0_333_2387"> <rect width="25" height="25" fill="white" transform="matrix(-1 0 0 1 25 0)"></rect> </clipPath> </defs> </svg>',
              }}
            />
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="333:2390" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="close-icon" style="width: 25px; height: 25px"> <g clip-path="url(#clip0_333_2390)"> <path d="M19.0625 5.94792C18.6562 5.54167 18 5.54167 17.5937 5.94792L12.5 11.0312L7.40625 5.9375C7 5.53125 6.34375 5.53125 5.9375 5.9375C5.53125 6.34375 5.53125 7 5.9375 7.40625L11.0312 12.5L5.9375 17.5937C5.53125 18 5.53125 18.6562 5.9375 19.0625C6.34375 19.4687 7 19.4687 7.40625 19.0625L12.5 13.9687L17.5937 19.0625C18 19.4687 18.6562 19.4687 19.0625 19.0625C19.4687 18.6562 19.4687 18 19.0625 17.5937L13.9687 12.5L19.0625 7.40625C19.4583 7.01042 19.4583 6.34375 19.0625 5.94792Z" fill="#76808C"></path> </g> <defs> <clipPath id="clip0_333_2390"> <rect width="25" height="25" fill="white"></rect> </clipPath> </defs> </svg>',
              }}
            />
          </div>
        </ControlButtons>
      </WindowControls>
      <SteamLogo>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="333:2404" width="343" height="22" viewBox="0 0 343 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="steam-logo" style="position: absolute; left: 21px; top: 18px; width: 342px; height: 22px"> <path d="M10.4581 0C4.9453 0 0.429149 4.25069 0 9.65266L5.62473 11.9782C6.10132 11.6523 6.67708 11.4613 7.29649 11.4613C7.352 11.4613 7.40727 11.4632 7.46207 11.4663L9.96343 7.84069C9.96343 7.82337 9.96319 7.80653 9.96319 7.78945C9.96319 5.60717 11.7384 3.83174 13.9209 3.83174C16.1032 3.83174 17.8784 5.60717 17.8784 7.78945C17.8784 9.97173 16.1032 11.7474 13.9209 11.7474C13.8908 11.7474 13.8609 11.7467 13.831 11.746L10.2635 14.2915C10.2654 14.3377 10.2671 14.3849 10.2671 14.4319C10.2671 16.0702 8.93456 17.4025 7.29649 17.4025C5.85863 17.4025 4.65635 16.3762 4.38401 15.0171L0.361539 13.3542C1.607 17.759 5.65391 20.9885 10.4581 20.9885C16.2541 20.9885 20.9524 16.2899 20.9524 10.4946C20.9524 4.69834 16.2538 0 10.4581 0Z" fill="#F3F3F3"></path> <path d="M6.57622 15.9237L5.28711 15.3911C5.51556 15.8668 5.91079 16.2651 6.43554 16.4838C7.56997 16.9564 8.87782 16.4181 9.35062 15.2827C9.57955 14.7337 9.58097 14.1276 9.35394 13.5772C9.12739 13.0266 8.6999 12.5973 8.15024 12.3681C7.60485 12.1411 7.02055 12.1494 6.50718 12.3432L7.83876 12.8938C8.67547 13.2425 9.07117 14.2033 8.72244 15.04C8.37442 15.877 7.41293 16.2727 6.57622 15.9237Z" fill="#F3F3F3"></path> <path d="M16.5578 7.78939C16.5578 6.33541 15.375 5.15234 13.9207 5.15234C12.4668 5.15234 11.2837 6.33541 11.2837 7.78939C11.2837 9.24361 12.4668 10.4262 13.9207 10.4262C15.375 10.426 16.5578 9.24338 16.5578 7.78939ZM11.9441 7.78489C11.9441 6.69078 12.8311 5.80401 13.9252 5.80401C15.0194 5.80401 15.9064 6.69078 15.9064 7.78489C15.9064 8.87899 15.0194 9.76576 13.9252 9.76576C12.8311 9.76576 11.9441 8.87875 11.9441 7.78489Z" fill="#F3F3F3"></path> <path d="M37.2703 6.28698L36.318 7.96092C35.5844 7.44846 34.5904 7.14002 33.7225 7.14002C32.7307 7.14002 32.117 7.55063 32.117 8.28607C32.117 9.17959 33.2072 9.38746 34.8275 9.96901C36.5692 10.5849 37.5704 11.3088 37.5704 12.904C37.5704 15.0866 35.854 16.3123 33.3871 16.3123C32.1848 16.3123 30.7345 16.0019 29.6196 15.3237L30.3143 13.4679C31.22 13.9463 32.3034 14.23 33.2692 14.23C34.5711 14.23 35.1899 13.7497 35.1899 13.0396C35.1899 12.2271 34.2463 11.9829 32.723 11.4784C30.9871 10.8988 29.7841 10.1383 29.7841 8.37282C29.7841 6.38176 31.3787 5.23828 33.6731 5.23828C35.2721 5.23828 36.5573 5.74496 37.2703 6.28698Z" fill="#F3F3F3"></path> <path d="M44.7143 7.16154V15.9454H42.472V7.16154H39.2173V5.23828H47.9594V7.16154H44.7143Z" fill="#F3F3F3"></path> <path d="M52.6865 7.15576V9.56835H56.9777V11.4916H52.6865V14.0045H57.6652V15.9454H50.4448V5.23828H57.6652V7.15576H52.6865Z" fill="#F3F3F3"></path> <path d="M62.6697 13.8663L61.9609 15.9454H59.6104L63.6249 5.23828H65.882L70.01 15.9451H67.58L66.8558 13.866L62.6697 13.8663ZM64.7408 7.79224L63.2786 12.0793H66.2332L64.7408 7.79224Z" fill="#F3F3F3"></path> <text fill="white" xml:space="preserve" style="white-space: pre" font-family="Barlow" font-size="15.4" font-weight="bold" letter-spacing="0em"><tspan x="90" y="16.16">Lite</tspan></text> <path d="M81.5178 9.37686L78.5876 15.6334H77.3223L74.4397 9.43277V15.9454H72.2925V5.23828H74.4349L78.0334 12.9673L81.504 5.23828H83.665V15.9454H81.5181L81.5178 9.37686Z" fill="#F3F3F3"></path> <path d="M87.9999 5.98366C87.9999 6.90384 87.3104 7.47735 86.519 7.47735C85.7248 7.47735 85.0337 6.90384 85.0337 5.98366C85.0337 5.06379 85.7248 4.49414 86.519 4.49414C87.3107 4.49414 87.9999 5.06379 87.9999 5.98366ZM85.2827 5.98366C85.2827 6.75348 85.8373 7.23702 86.519 7.23702C87.1983 7.23702 87.7505 6.75348 87.7505 5.98366C87.7505 5.21159 87.1983 4.73543 86.519 4.73543C85.8392 4.73543 85.2827 5.21737 85.2827 5.98366ZM86.5396 5.22251C86.9235 5.22251 87.0527 5.42557 87.0527 5.64501C87.0527 5.84614 86.9335 5.98109 86.7883 6.04984L87.1324 6.69468H86.8506L86.5605 6.1231H86.2614V6.69468H86.0268V5.22251H86.5396ZM86.2636 5.90751H86.5251C86.6945 5.90751 86.7944 5.80116 86.7944 5.6675C86.7944 5.53256 86.7227 5.44581 86.5245 5.44581H86.2633V5.90751H86.2636Z" fill="#F3F3F3"></path> <text fill="#66C0F4" xml:space="preserve" style="white-space: pre" font-family="Barlow" font-size="18" font-weight="bold" letter-spacing="0em"><tspan x="160" y="18.2">상점</tspan></text> <text fill="#F3F3F3" xml:space="preserve" style="white-space: pre" font-family="Barlow" font-size="18" font-weight="bold" letter-spacing="0em"><tspan x="257" y="18.2">라이브러리</tspan></text> </svg>',
          }}
        />
      </SteamLogo>
      <FriendsSection>
        <FriendsBackground />
        <FriendsIcon>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="I447:7373;447:3842" width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="people-icon" style="width: 25px; height: 26px; position: absolute; left: 15px; top: 6px"> <g clip-path="url(#clip0_1152_4)"> <path d="M16.6667 12.4018C18.3959 12.4018 19.7813 10.9305 19.7813 9.10788C19.7813 7.28525 18.3959 5.81396 16.6667 5.81396C14.9376 5.81396 13.5417 7.28525 13.5417 9.10788C13.5417 10.9305 14.9376 12.4018 16.6667 12.4018ZM8.33341 12.4018C10.0626 12.4018 11.448 10.9305 11.448 9.10788C11.448 7.28525 10.0626 5.81396 8.33341 5.81396C6.60425 5.81396 5.20841 7.28525 5.20841 9.10788C5.20841 10.9305 6.60425 12.4018 8.33341 12.4018ZM8.33341 14.5977C5.90633 14.5977 1.04175 15.8824 1.04175 18.4407V20.0876C1.04175 20.6915 1.5105 21.1856 2.08341 21.1856H14.5834C15.1563 21.1856 15.6251 20.6915 15.6251 20.0876V18.4407C15.6251 15.8824 10.7605 14.5977 8.33341 14.5977ZM16.6667 14.5977C16.3647 14.5977 16.0209 14.6197 15.6563 14.6526C15.6772 14.6636 15.6876 14.6856 15.698 14.6966C16.8855 15.6079 17.7084 16.8266 17.7084 18.4407V20.0876C17.7084 20.4719 17.6355 20.8452 17.5209 21.1856H22.9167C23.4897 21.1856 23.9584 20.6915 23.9584 20.0876V18.4407C23.9584 15.8824 19.0938 14.5977 16.6667 14.5977Z" fill="#76808C"></path> </g> <defs> <clipPath id="clip0_1152_4"> <rect width="25" height="26.3514" fill="white" transform="translate(0 0.324219)"></rect> </clipPath> </defs> </svg>',
            }}
          />
        </FriendsIcon>
      </FriendsSection>
      <UserSection ref={dropdownRef}>
        <AccountDropdown
          isOpen={isAccountDropdownOpen}
          onClose={toggleAccountDropdown}
          userName="MiNUuuuuu"
          userBalance="₩1,000"
          userAvatar="https://cdn.builder.io/api/v1/image/assets/TEMP/364a3c9e005a49d2da2abac61939f62d10ceabe5?width=62"
        />
      </UserSection>
      {children}
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
  left: 0;
  top: 0;
  z-index: 5;

  & svg {
    @media (max-width: 1024px) {
      width: 280px !important;
      height: 18px !important;
      left: 16px !important;
      top: 16px !important;
    }

    @media (max-width: 768px) {
      width: 240px !important;
      height: 16px !important;
      left: 12px !important;
      top: 14px !important;
    }

    @media (max-width: 480px) {
      width: 200px !important;
      height: 14px !important;
      left: 10px !important;
      top: 12px !important;
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

  & svg {
    @media (max-width: 1024px) {
      width: 22px !important;
      height: 22px !important;
    }

    @media (max-width: 768px) {
      width: 20px !important;
      height: 20px !important;
    }
  }
`;

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  right: 205px;
  top: 10px;
  z-index: 50;

  @media (max-width: 1440px) {
    right: 175px;
  }

  @media (max-width: 1024px) {
    right: 135px;
    top: 8px;
  }

  @media (max-width: 768px) {
    right: 105px;
    top: 7px;
  }

  @media (max-width: 480px) {
    right: 65px;
    top: 6px;
  }
`;

export default Client;
