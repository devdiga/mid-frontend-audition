import styled from 'styled-components';

export const CharacterCardContainer = styled.div`
  min-width: 212px;
  height: 274px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.main};

  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

export const CharacterCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;

  span {
    font-size: 16px;
  }
`;

export const CharacterCardGroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 8px;
`;

export const CharacterCardHeightGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

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
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
