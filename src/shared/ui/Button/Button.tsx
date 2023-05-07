import { type ButtonHTMLAttributes, type FC } from 'react';

import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';

export enum EButtonViews {
  CLEAR = 'clear',
}

interface IButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  view?: EButtonViews
}

export const Button: FC<IButtonProp> = ({
  className,
  children,
  view = EButtonViews.CLEAR,
  ...otherProps
}) => (
  <button
    className={classNames(cls.root, {}, [className, cls[view]])}
    {...otherProps}
  >
    {children}
  </button>
);
