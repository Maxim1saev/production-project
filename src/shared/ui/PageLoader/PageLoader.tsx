import { type FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from '../Loader/Loader';

interface IPageLoaderProp {
  className?: string
}

export const PageLoader: FC<IPageLoaderProp> = ({
  className
}) => (
  <div
    className={classNames(cls.root, {}, [className])}
  >
    <Loader />
  </div>
);
