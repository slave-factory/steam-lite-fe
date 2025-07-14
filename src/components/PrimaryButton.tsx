import styled from "styled-components";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

function PrimaryButton({
  children,
  onClick,
  variant = "primary",
}: PrimaryButtonProps) {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ variant: "primary" | "secondary" }>`
  display: flex;
  padding: 16px 66px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--border-radius);
  background: ${props =>
    props.variant === "primary"
      ? "var(--Color-Secondary)"
      : "var(--Background-Highlight)"};
  color: var(--Text-Main);
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 122px;
  height: 44px;

  &:hover {
    background: ${props =>
      props.variant === "primary"
        ? "rgba(75, 97, 155, 0.8)"
        : "rgba(30, 35, 41, 0.8)"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 14px 48px;
    font-size: 14px;
    min-width: 100px;
    height: 40px;
  }
`;

export default PrimaryButton;
