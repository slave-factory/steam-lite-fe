import React from "react";

import styled from "styled-components";

interface AccountDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  userBalance: string;
  userAvatar: string;
}

const AccountDropdown: React.FC<AccountDropdownProps> = ({
  isOpen,
  onClose,
  userName,
  userBalance,
  userAvatar,
}) => {
  return (
    <DropdownContainer $isOpen={isOpen}>
      <UserButton onClick={onClose}>
        <UserButtonBackground />
        <UserButtonContent>
          <UserAvatar src={userAvatar} alt="" />
          <UserName>{userName}</UserName>
          <UserBalance>{userBalance}</UserBalance>
          <DropdownArrow $isOpen={isOpen}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  d="M12.734 13.7587L9.50072 10.5254L6.26738 13.7587C5.94238 14.0837 5.41738 14.0837 5.09238 13.7587C4.76738 13.4337 4.76738 12.9087 5.09238 12.5837L8.91738 8.75869C9.24238 8.43369 9.76738 8.43369 10.0924 8.75869L13.9174 12.5837C14.2424 12.9087 14.2424 13.4337 13.9174 13.7587C13.5924 14.0754 13.059 14.0837 12.734 13.7587Z"
                  fill="#F3F3F3"
                />
              ) : (
                <path
                  d="M7.26644 8.2418L10.4998 11.4751L13.7331 8.2418C14.0581 7.9168 14.5831 7.9168 14.9081 8.2418C15.2331 8.5668 15.2331 9.0918 14.9081 9.4168L11.0831 13.2418C10.7581 13.5668 10.2331 13.5668 9.90811 13.2418L6.08311 9.4168C5.75811 9.0918 5.75811 8.5668 6.08311 8.2418C6.40811 7.92513 6.94144 7.9168 7.26644 8.2418Z"
                  fill="#F3F3F3"
                />
              )}
            </svg>
          </DropdownArrow>
        </UserButtonContent>
      </UserButton>

      {isOpen && (
        <MenuDropdown>
          <MenuItem>
            <MenuText>카트</MenuText>
          </MenuItem>
          <MenuItem>
            <MenuText>로그아웃</MenuText>
          </MenuItem>
        </MenuDropdown>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 210px;
  z-index: 100;

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

const UserButton = styled.div`
  width: 210px;
  height: 39px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);

    > div:first-child {
      background-color: rgba(30, 35, 41, 0.95);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: 1024px) {
    width: 190px;
    height: 34px;
  }

  @media (max-width: 768px) {
    width: 170px;
    height: 32px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 30px;
  }
`;

const UserButtonBackground = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius, 3px);
  background: var(--Background-Highlight, #1e2329);
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const UserButtonContent = styled.div`
  display: flex;
  height: 33px;
  align-items: center;
  gap: 8px;
  position: absolute;
  left: 6px;
  top: 3px;
  width: 194px;

  @media (max-width: 1024px) {
    width: 174px;
    gap: 6px;
  }

  @media (max-width: 768px) {
    width: 154px;
    gap: 4px;
  }

  @media (max-width: 480px) {
    width: 134px;
    gap: 4px;
  }
`;

const UserAvatar = styled.img`
  width: 31px;
  height: 31px;
  border-radius: 2px;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

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
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
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
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(118, 128, 140, 0.9);
  }

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const DropdownArrow = styled.div<{ $isOpen: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 2px;
  transition: all 0.2s ease;
  transform: ${props => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;

    & svg {
      width: 18px !important;
      height: 18px !important;
    }
  }

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;

    & svg {
      width: 16px !important;
      height: 16px !important;
    }
  }
`;

const MenuDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: var(--border-radius, 3px);
  background: var(--Background-Highlight, #1e2329);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 200;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MenuItem = styled.div`
  display: flex;
  min-width: 180px;
  padding: 16px 20px;
  align-items: center;
  align-self: stretch;
  background: var(--Background-Highlight, #1e2329);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(30, 35, 41, 0.8);
    backdrop-filter: blur(8px);
  }

  &:first-child {
    border-top-left-radius: var(--border-radius, 3px);
    border-top-right-radius: var(--border-radius, 3px);
  }

  &:last-child {
    border-bottom-left-radius: var(--border-radius, 3px);
    border-bottom-right-radius: var(--border-radius, 3px);
  }

  @media (max-width: 1024px) {
    min-width: 160px;
    padding: 14px 18px;
  }

  @media (max-width: 768px) {
    min-width: 140px;
    padding: 12px 16px;
  }

  @media (max-width: 480px) {
    min-width: 120px;
    padding: 10px 14px;
  }
`;

const MenuText = styled.div`
  min-width: 150px;
  flex: 1 0 0;
  color: var(--Text-Main, #f3f3f3);
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 1024px) {
    font-size: 13px;
    min-width: 130px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    min-width: 110px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    min-width: 90px;
  }
`;

export default AccountDropdown;
