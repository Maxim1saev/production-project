import { type FC } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import cls from './LanguageSwitcher.module.scss';
import { Button } from 'shared/ui/Button/Button';

interface ILanguageSwitcherProp {
  className?: string
}

export const LanguageSwitcher: FC<ILanguageSwitcherProp> = ({
  children,
  className
}) => {
  const { t, i18n } = useTranslation();

  const toggleLang = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleLang}
    >
      {t('language')}
    </Button>
  );
};
