import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.navBar};
`;

export const HeaderContent = styled.div`
  padding: 0 ${({ theme }) => theme.space[4]};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  max-width: 1155px;
  margin: 0 auto;
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
`;
