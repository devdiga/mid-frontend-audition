import { useState } from 'react';
import { useRouter } from 'next/router';

import {
  LanguageIcon,
  LanguageSelectorList,
  LanguageSelectorSelect,
  LanguageContainer
} from './language-selector.styles';

const languages: {
  [x: string]: { code: string; name: string; position: number };
} = {
  en: { code: 'en', name: 'English', position: -40 },
  pt: { code: 'pt', name: 'Português', position: 0 }
};

export const LanguageSelector = () => {
  const [openedSelector, setOpenedSelector] = useState(false);
  const router = useRouter();
  const { locale } = router;

  const handleSelectLanguage = (value: string) => {
    router.push(router.pathname, router.asPath, {
      locale: value
    });
    setOpenedSelector(false);
  };

  return (
    <LanguageContainer>
      <LanguageSelectorSelect onClick={() => setOpenedSelector(prev => !prev)}>
        <LanguageIcon
          src="/img/languages.png"
          alt="Language Selected"
          position={locale ? languages[locale]?.position : -40}
        />
        {locale ? locale.toUpperCase() : 'EN'}
        {openedSelector ? (
          <i className="fa fa-angle-up" />
        ) : (
          <i className="fa fa-angle-down" />
        )}
      </LanguageSelectorSelect>
      {openedSelector && (
        <LanguageSelectorList>
          {Object.values(languages).map(language => (
            <li key={language.code}>
              <button onClick={() => handleSelectLanguage(language.code)}>
                <LanguageIcon
                  src="/img/languages.png"
                  alt="Language Selected"
                  position={language.position}
                />
                {language.name}
              </button>
            </li>
          ))}
        </LanguageSelectorList>
      )}
    </LanguageContainer>
  );
};
