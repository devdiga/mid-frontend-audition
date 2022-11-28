import styled from 'styled-components';

export const DashboardContainer = styled.main`
  max-width: 1155px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px auto;
  gap: 16px;
`;

export const DashboardContent = styled.section`
  display: grid;
  gap: 32px;
  width: 100%;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 400px);

  @media (max-width: 1155px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }
`;
