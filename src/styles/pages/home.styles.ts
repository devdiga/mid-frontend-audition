import styled from 'styled-components';

export const HomeContainer = styled.main`
  position: relative;
  height: 400px;

  button {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 200px;
  }
`;

interface AnimationStart {
  play: number;
}

export const HomeLogo = styled.section<AnimationStart>`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${({ play }) => (play ? 'logo 13s ease-out 2s' : 'unset')};

  opacity: ${({ play }) => (play ? 0 : 1)};

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

export const HomeContent = styled.section<AnimationStart>`
  transform: perspective(300px) translateX(-50%) rotateX(25deg);
  transform-origin: 0% 100%;
  text-align: justify;
  position: absolute;
  font-weight: bold;
  overflow: hidden;
  font-size: 48px;
  height: 1000px;
  width: 800px;
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
    animation: ${({ play }) => (play ? 'scroll 70s linear 11s' : 'unset')};
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
