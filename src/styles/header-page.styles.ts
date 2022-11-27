import styled from 'styled-components';

export const HeaderPageContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: center;
  width: 100%;
  margin: 16px 0;

  @media (max-width: 1155px) {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
