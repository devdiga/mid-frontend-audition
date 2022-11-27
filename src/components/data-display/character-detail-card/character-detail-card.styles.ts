import styled from 'styled-components';

export const CharacterDetailCardContainer = styled.section`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  align-items: flex-start;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.main};
  width: 100%;

  hr {
    width: 100%;
    border-color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const CharacterDetailMoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  button {
    width: auto;
  }
`;

export const CharacterDetailCardInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
  }
`;

export const CharacterDetailCardInfoContainer = styled.div`
  display: flex;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
