import styled from 'styled-components';

import { Link } from 'components/interactions/link/link.component';

interface NavItemContainerProps {
  first: number;
  selected: number;
}

export const NavItemContainer = styled(Link)<NavItemContainerProps>`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[4] + ' ' + theme.space[8]};
  border-right: ${({ theme }) => `1px solid ${theme.colors.primary.light}`};
  border-left: ${({ first, theme }) =>
    first ? `1px solid ${theme.colors.primary.light}` : 0};
  transition: background-color 1s;

  img {
    width: 30px !important;
    object-fit: contain;
    margin-bottom: ${({ theme }) => theme.space[6]};
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.text.link};
    opacity: ${({ selected }) => (selected ? 1 : 0)};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
  }

  @media (max-width: 1155px) {
    font-size: 10px;
    padding: ${({ theme }) => theme.space[2]} 0;
  }
`;
