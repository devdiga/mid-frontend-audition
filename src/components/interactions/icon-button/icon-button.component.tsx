import { ButtonHTMLAttributes } from 'react';

import { IconButtonStyled } from './icon-button.styles';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined';
  loading?: boolean;
  icon: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant = 'contained',
  loading,
  icon,
  ...rest
}) => {
  return (
    <IconButtonStyled variant={variant} {...rest}>
      {loading ? (
        <i className="fa fa-spinner fa-pulse fa-fw"></i>
      ) : (
        <i className={`fa ${icon}`}></i>
      )}
    </IconButtonStyled>
  );
};
