import LinkBase from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

interface LinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
}

export const Link: React.FC<LinkProps> = ({ href, ...rest }) => {
  return (
    <LinkBase href={href} passHref>
      <a {...rest} />
    </LinkBase>
  );
};
