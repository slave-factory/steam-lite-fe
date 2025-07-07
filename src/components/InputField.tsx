import * as React from "react";

import styled from "styled-components";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

function InputField({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  className,
}: InputFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <Container className={className}>
      <Label>{label}</Label>
      <InputWrapper>
        <InputBackground />
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </InputWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 33px;

  @media (max-width: 640px) {
    margin-bottom: 24px;
  }
`;

const Label = styled.div`
  color: var(--Text-Main, #f3f3f3);
  margin-bottom: 17px;
  font:
    400 20px "Roboto",
    sans-serif;

  @media (max-width: 640px) {
    font-size: 18px;
    text-align: center;
  }
`;

const InputWrapper = styled.div`
  width: 666px;
  height: 44px;
  position: relative;

  @media (max-width: 991px) {
    width: 100%;
    max-width: 500px;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const InputBackground = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius, 3px);
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(33, 43, 69, 0.2);
  border: 1px solid transparent;
  transition: border-color 0.2s ease;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: var(--Text-Main, #f3f3f3);
  font:
    400 14px "Roboto",
    sans-serif;
  padding: 0 19px;
  position: relative;
  z-index: 1;

  &::placeholder {
    color: var(--Color-Secondary, #4b619b);
  }

  &:focus + ${InputBackground} {
    border-color: var(--Color-Secondary, #4b619b);
  }
`;

export default InputField;
