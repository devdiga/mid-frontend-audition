import styled from 'styled-components';

export const CharactersContainer = styled.main`
  max-width: 1155px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px auto;
  gap: 16px;

  & > button {
    max-width: 200px;
    margin: 16px;
  }
`;

export const CharactersContent = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;

  @media (max-width: 1155px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
