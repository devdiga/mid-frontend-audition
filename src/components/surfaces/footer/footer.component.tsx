import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import {
  FooterContainer,
  FooterContent,
  SocialContainer
} from './footer.styles';

export const Footer = () => {
  const { t } = useTranslation('footer');
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <p style={{ textAlign: 'center' }}>{t('follow')}</p>
          <SocialContainer>
            <Link href="https://www.linkedin.com/in/willianrsilva/">
              <i className="fa fa-linkedin-square fa-3x" />
            </Link>
            <Link href="https://github.com/Willian-Rodrigues">
              <i className="fa fa-github fa-3x" />
            </Link>
            <Link href="https://willianrodrigues.tk">
              <i className="fa fa-globe fa-3x" />
            </Link>
          </SocialContainer>
        </div>
        <p>
          {t('developer')}
          <a
            href="https://willianrodrigues.tk/"
            target="_blank"
            rel="noreferrer"
          >
            <strong> Will</strong>
          </a>
        </p>
        <a href="https://swapi.dev/" rel="noreferrer" target="_blank">
          {t('data')}
        </a>
      </FooterContent>
    </FooterContainer>
  );
};
