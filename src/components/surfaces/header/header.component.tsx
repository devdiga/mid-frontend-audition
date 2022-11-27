import Image from 'next/image';
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from 'react-dark-mode-toggle';

import { LanguageSelector } from 'components/interactions/language-selector/language-selector.component';
import { Nav } from 'components/surfaces/nav/nav.component';
import StarWars from '@images/star-wars.svg';

import {
  HeaderContainer,
  HeaderContent,
  HeaderButtonsContainer
} from './header.styles';

export const Header = () => {
  const darkmode = useDarkMode(true);

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Image src={StarWars} alt="Star Wars" width={100} height={80} />
          <HeaderButtonsContainer>
            <DarkModeToggle
              onChange={darkmode.toggle}
              checked={darkmode.value}
              size={50}
            />
            <LanguageSelector />
          </HeaderButtonsContainer>
        </HeaderContent>
      </HeaderContainer>
      <Nav />
    </>
  );
};
