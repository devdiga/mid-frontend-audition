import styled from 'styled-components';

interface IconButtonStyled {
  variant: string;
}
export const IconButtonStyled = styled.button<IconButtonStyled>`
  border-radius: 20px;
  height: 40px;
  width: 40px;
  transition: background-color 0.4s;

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
