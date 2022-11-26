import styled from 'styled-components';

interface InputContainerProps {
  focused: number;
}
export const InputContainer = styled.div<InputContainerProps>`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  padding: 0;
  border-radius: 8px;
  align-items: center;
  border: 1px solid
    ${({ theme, focused }) =>
      focused ? theme.colors.button.main : theme.colors.border};

  i {
    margin: 0 auto;
  }
`;

export const InputStyled = styled.input`
  background-color: rgba(0, 0, 0, 0.8);
  border: 0;
  font: 400 14px 'Poppins', sans-serif;
  height: 40px;
  width: 100%;

  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;
