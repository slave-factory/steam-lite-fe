import * as React from "react";

import styled from "styled-components";

import SteamLogoSvg from "../assets/icons/steam-logo.svg?react";

interface SteamLogoProps {
  className?: string;
}

function SteamLogo({ className }: SteamLogoProps) {
  return (
    <Container className={className}>
      <SteamLogoSvg />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  left: 21px;
  top: 18px;

  svg {
    width: 342px;
    height: 21px;
  }

  @media (max-width: 991px) {
    left: 16px;
    top: 16px;

    svg {
      width: 280px;
      height: 17px;
    }
  }

  @media (max-width: 640px) {
    left: 12px;
    top: 14px;

    svg {
      width: 240px;
      height: 15px;
    }
  }
`;

export default SteamLogo;
