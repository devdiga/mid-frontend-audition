import styled from 'styled-components';

export const NotFoundContainer = styled.main`
  color: #ddd;
  background-image: url('/img/404.jpg');
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding: 32px;
  gap: 16px;

  h1 {
    font-size: 80px;
    text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
      -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  }
  p {
    font-size: 24px;
    color: black;
    font-weight: 700;
    text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
      -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  }

  button {
    max-width: 200px;
  }
`;
