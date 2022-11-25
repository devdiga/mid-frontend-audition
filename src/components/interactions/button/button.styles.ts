import styled from 'styled-components';

interface ButtonStyledProps {
  variant: string;
}
export const ButtonStyled = styled.button<ButtonStyledProps>`
  border-radius: 5px;
  color: var(--white);
  font: 700 14px 'Epilogue', sans-serif;
  height: 40px;
  position: relative;
  transition: background-color 0.4s;
  width: 100%;

  background: ${({ variant, theme }) =>
    variant === 'contained' ? theme.colors.button.main : 'transparent'};

  border: 1px solid ${({ theme }) => theme.colors.button.main};

  &:hover {
    background: ${({ variant, theme }) =>
      variant === 'contained'
        ? theme.colors.button.hover
        : theme.colors.primary.main};
  }
`;
