import styled from 'styled-components';

export const PresentationContainer = styled.main`
  position: relative;
  height: 450px;
  width: 100%;

  * {
    max-width: 100%;
  }
`;

interface AnimationStart {
  play: number;
}
export const PresentationLogo = styled.section<AnimationStart>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${({ play }) => (play ? 'logo 13s ease-out 2s' : 'unset')};

  opacity: 0;

  svg {
    width: 100%;
  }

  @keyframes logo {
    0% {
      width: 80%;
      opacity: 1;
    }
    50% {
      opacity: 1;
      width: 50%;
    }
    100% {
      opacity: 0;
      width: 10%;
    }
  }
`;

export const PresentationContent = styled.section<AnimationStart>`
  transform: perspective(300px) translateX(-50%) rotateX(25deg);
  transform-origin: 0% 100%;
  text-align: justify;
  position: absolute;
  font-weight: bold;
  overflow: hidden;
  font-size: 48px;
  height: 1000px;
  width: 1000px;
  bottom: 0;
  left: 50%;

  p,
  h2 {
    color: #ffff82;
  }
  h2 {
    white-space: nowrap;
    text-align: center;
  }

  p:not(:last-child) {
    margin-bottom: 24px;
  }

  &:after {
    position: absolute;
    content: ' ';
    bottom: 60%;
    left: 0;
    right: 0;
    top: 0;
  }

  div {
    position: absolute;
    top: 100%;
    animation: ${({ play }) => (play ? 'scroll 100s linear 11s' : 'unset')};
  }

  @keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -200%;
    }
  }
`;

export const PresentationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1155px) {
    display: none;
  }

  button {
    max-width: 200px;
  }
`;
