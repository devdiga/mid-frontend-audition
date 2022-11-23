import Link from 'next/link';
import styled from 'styled-components';

interface NavItemContainerProps {
  first: number;
}

export const NavItemContainer = styled(Link)<NavItemContainerProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[4] + ' ' + theme.space[8]};
  border-left: ${({ first, theme }) =>
    first ? 0 : `1px solid ${theme.colors.primary.light}`};
  transition: background-color 1s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
