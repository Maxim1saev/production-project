import { type FC } from 'react';
import { Link as RouterLink, type LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Link.module.scss';

export enum ELinkViews {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ILinkProp extends LinkProps {
  className?: string
  view?: ELinkViews
}

export const Link: FC<ILinkProp> = ({
  className,
  children,
  to,
  view = ELinkViews.PRIMARY,
  ...otherProps
}) => (
  <RouterLink
    className={classNames(cls.root, {}, [className, cls[view]])}
    to={to}
    {...otherProps}
  >
    {children}
  </RouterLink>
);
