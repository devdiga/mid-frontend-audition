import { useTranslation } from 'react-i18next';

export const useDateFormat = () => {
  const { t } = useTranslation();

  const formatter = new Intl.DateTimeFormat(t('locale') as string, {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  });

  const format = (value: string): string => {
    if (!value) {
      return '';
    }

    return formatter.format(new Date(value));
  };

  return {
    format
  };
};
