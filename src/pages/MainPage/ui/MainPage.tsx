import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { deflate } from 'zlib';
import classes from './styles.module.scss';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('main page')}</h1>;
    </>
  );
};

export default MainPage;
