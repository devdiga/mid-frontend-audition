import styled from 'styled-components';

export const CharacterCardContainer = styled.button`
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

export const CharacterCardInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
  }
`;

export const CharacterCardGroupContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 8px;
`;

export const CharacterCardHeightGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 14px;

  div {
    background-color: ${({ theme }) => theme.colors.button.main};
    display: flex;
    width: 100%;
    padding: 8px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
  }
`;

export const CharacterCardCharacteristicsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const CharacterCardCharacteristics = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  gap: 4px;

  i {
    font-size: 20px;
  }
`;

interface CharacteristicsProps {
  color: string;
}

export const CharacterCardColor = styled.div<CharacteristicsProps>`
  background-color: ${({ color }) => color};
  border-radius: 10px;
  height: 20px;
  width: 20px;
`;

export const CharacterCardGenderText = styled.span`
  max-width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
