import styled from 'styled-components';

export const MovieDetailContainer = styled.main`
  max-width: 1155px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 16px;
  margin: 32px auto;
  gap: 32px;

  & > button {
    max-width: 200px;
    margin: 16px;
  }
`;

export const MovieDetailHeader = styled.header`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  width: 100%;
  gap: 16px;
`;
