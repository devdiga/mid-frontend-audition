import { NavItemContainer } from './nav-item.styles';

interface NavItemProps {
  icon: string;
  title: string;
  href: string;
  first?: boolean;
}
export const NavItem: React.FC<NavItemProps> = ({
  icon,
  title,
  href,
  first
}) => {
  return (
    <NavItemContainer href={href} first={first ? 1 : 0}>
      <i className={`fa ${icon}`} />
      <span>{title}</span>
    </NavItemContainer>
  );
};
