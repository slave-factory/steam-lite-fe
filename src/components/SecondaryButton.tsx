import styled from "styled-components";

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function SecondaryButton({ children, onClick }: SecondaryButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  display: flex;
  width: 457px;
  padding: 17px 56px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--border-radius);
  background: var(--Background-Highlight);
  color: var(--Text-Main);
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 57px;

  &:hover {
    background: var(--Background-Hover);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    padding: 15px 40px;
    font-size: 18px;
    height: 50px;
  }

  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 16px;
    height: 44px;
  }
`;

export default SecondaryButton;
