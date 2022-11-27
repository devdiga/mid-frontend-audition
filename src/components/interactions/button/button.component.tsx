import { ButtonHTMLAttributes } from 'react';

import { ButtonStyled } from './button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'text';
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'contained',
  loading,
  disabled,
  ...rest
}) => {
  return (
    <ButtonStyled variant={variant} {...rest} disabled={disabled || loading}>
      {loading ? (
        <i className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
      ) : (
        children
      )}
    </ButtonStyled>
  );
};
