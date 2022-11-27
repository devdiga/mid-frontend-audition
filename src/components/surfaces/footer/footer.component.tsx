import React from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from 'components/interactions/link/link.component';

import {
  FooterContainer,
  FooterContent,
  SocialContainer
} from './footer.styles';

export const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <p>{t('footer.follow')}</p>
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
        <div>
          <p>
            {t('footer.developer')}
            <a
              href="https://willianrodrigues.tk/"
              target="_blank"
              rel="noreferrer"
            >
              <strong> Will</strong>
            </a>
          </p>
          <a href="https://swapi.dev/" rel="noreferrer" target="_blank">
            {t('footer.data')}
          </a>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};
