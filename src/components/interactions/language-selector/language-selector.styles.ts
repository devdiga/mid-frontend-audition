import styled from 'styled-components';

export const LanguageContainer = styled.div`
  position: relative;
`;

export const LanguageSelectorSelect = styled.button`
  width: 80px;
  border: 1px solid;
  padding: ${({ theme }) => theme.space[1]};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[1]};
  border-radius: ${({ theme }) => theme.space[1]};
  color: ${({ theme }) => theme.colors.text.secondary};

  i {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

interface LanguageIconProps {
  position: number;
}

export const LanguageIcon = styled.img<LanguageIconProps>`
  height: 20px;
  width: 20px;
  object-fit: cover;
  object-position: ${({ position }) => position}px 0px;
`;

export const LanguageSelectorList = styled.ul`
  position: absolute;
  z-index: 10;
  top: 40px;
  left: 0px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  display: inline-block;
  border: 1px solid;
  border-radius: ${({ theme }) => theme.space[1]};
  margin-top: ${({ theme }) => theme.space[1]};

  li {
    padding: ${({ theme }) => theme.space[1]};
    display: flex;

    &:not(:last-child) {
      border-bottom: 1px solid;
    }

    button {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.space[1]};
      background-color: transparent;
      border: 0;
    }
  }
`;
