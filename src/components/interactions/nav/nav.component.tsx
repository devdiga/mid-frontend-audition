import { NavContent, NavContainer } from './nav.styles';
import { NavItem } from 'components/data-display/nav-item/nav-item.component';

import Chewbacca from '@images/chewbacca.svg';
import Spacecraft from '@images/spacecraft.png';
import R2D2 from '@images/r2-d2.svg';
import Lightsaber from '@images/lightsaber.png';

const routes = [
  {
    title: 'home',
    href: '/',
    icon: Lightsaber
  },
  {
    title: 'films',
    href: '/films',
    icon: Spacecraft
  },
  {
    title: 'people',
    href: '/people',
    icon: Chewbacca
  },
  {
    title: 'dashboard',
    href: '/dashboard',
    icon: R2D2
  }
];
export const Nav = () => {
  return (
    <NavContainer>
      <NavContent>
        {routes.map((route, index) => (
          <NavItem
            key={route.href}
            icon={route.icon}
            title={route.title}
            href={route.href}
            first={index === 0}
          />
        ))}
      </NavContent>
    </NavContainer>
  );
};
