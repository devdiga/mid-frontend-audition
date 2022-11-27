import styled from 'styled-components';

interface ButtonStyledProps {
  variant: string;
}
export const ButtonStyled = styled.button<ButtonStyledProps>`
  border-radius: 5px;
  font-weight: 700;
  height: 40px;
  position: relative;
  transition: background-color 0.4s;
  width: 100%;

  background: ${({ variant, theme }) =>
    variant === 'contained' ? theme.colors.button.main : 'transparent'};

  border: 1px solid
    ${({ theme, variant }) =>
      variant === 'contained' ? theme.colors.button.main : 'transparent'};

  color: ${({ variant, theme }) =>
    variant === 'contained' ? 'unset' : theme.colors.button.main};

  &:hover {
    background: ${({ variant, theme }) =>
      variant === 'contained' ? theme.colors.button.hover : 'transparent'};

    color: ${({ variant, theme }) =>
      variant === 'contained' ? 'unset' : theme.colors.button.hover};
  }
`;
