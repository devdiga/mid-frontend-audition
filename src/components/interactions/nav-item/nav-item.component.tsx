import Image, { StaticImageData } from 'next/image';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

import { NavItemContainer } from './nav-item.styles';

interface NavItemProps {
  icon: StaticImageData;
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
  const { route } = useRouter();
  const { t } = useTranslation();
  return (
    <NavItemContainer
      href={href}
      first={first ? 1 : 0}
      selected={route === href ? 1 : 0}
    >
      <Image src={icon} alt={t(`nav.${title}`) as string} />
      <p>{t(`nav.${title}`)}</p>
    </NavItemContainer>
  );
};
