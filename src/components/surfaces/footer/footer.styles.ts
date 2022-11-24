import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.navBar};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[6]};
  max-width: 600px;
  margin: auto;
  padding: ${({ theme }) => theme.space[6]};
  background-image: url('/img/darth-vader.svg');
  background-repeat: no-repeat;
  background-size: 360px;
  background-position: center;
  opacity: 0.75;

  * {
    color: #ddd;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};
`;
