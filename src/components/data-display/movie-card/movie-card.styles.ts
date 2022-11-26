import styled from 'styled-components';

export const MovieCardContainer = styled.button`
  min-width: 212px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  align-items: flex-start;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.main};

  &:hover {
    border-color: ${({ theme }) => theme.colors.button.main};
  }
`;

export const MovieCardInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
  }
`;
