import * as React from "react";

import styled from "styled-components";

import CloseIcon from "../assets/icons/close.svg?react";
import CopyIcon from "../assets/icons/copy.svg?react";
import MinimizeIcon from "../assets/icons/minimize.svg?react";

interface WindowControlsProps {
  className?: string;
}

function WindowControls({ className }: WindowControlsProps) {
  return (
    <Container className={className}>
      <ControlButton>
        <MinimizeIcon />
      </ControlButton>
      <ControlButton>
        <CopyIcon />
      </ControlButton>
      <ControlButton>
        <CloseIcon />
      </ControlButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 50px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: 2px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;

export default WindowControls;
