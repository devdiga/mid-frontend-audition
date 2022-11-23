import { NavContent } from './nav.styles';
import { NavItem } from 'components/data-display/nav-item/nav-item.component';

export const Nav = () => {
  return (
    <NavContent>
      <NavItem icon={'fa-user'} title={'Usuário'} href={'/'} first />
      <NavItem icon={'fa-user'} title={'Usuário'} href={'/'} />
      <NavItem icon={'fa-user'} title={'Usuário'} href={'/'} />
    </NavContent>
  );
};
