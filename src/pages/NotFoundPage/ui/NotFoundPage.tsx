import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.root, {}, [])}>
      {t('not found page')}
    </div>
  );
};
