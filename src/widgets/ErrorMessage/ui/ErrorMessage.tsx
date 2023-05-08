import { type FC } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ErrorMessage.module.scss';
import { Button } from 'shared/ui/Button/Button';

interface IErrorMessageProp {
  className?: string
}

export const ErrorMessage: FC<IErrorMessageProp> = ({
  className
}) => {
  const { t } = useTranslation();

  const handleReload = () => {
    location.reload();
  };

  return (

    <div
      className={classNames(cls.root, {}, [className])}
    >
      <p> {t('error message')}</p>

      <Button onClick={handleReload}> {t('reload page')}</Button>
    </div>
  );
};
