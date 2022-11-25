import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'contained',
  ...rest
}) => {
  return (
    <ButtonStyled variant={variant} {...rest}>
      {children}
    </ButtonStyled>
  );
};
