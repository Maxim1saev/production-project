import { type FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface ILoaderProp {
  className?: string
}

export const Loader: FC<ILoaderProp> = ({ className }) => (
  <div className={classNames(cls['lds-ring'], {}, [className])}>
    <div/>
    <div/>
    <div/>
    <div/>
  </div>
);
