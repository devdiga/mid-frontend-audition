import styled from 'styled-components';

export const MovieDetailCardContainer = styled.section`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  align-items: flex-start;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.main};

  hr {
    width: 100%;
    border-color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const MovieDetailCharactersContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
`;

export const MovieDetailProducerContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
`;
