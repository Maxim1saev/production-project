import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ELinkViews, Link } from 'shared/ui/Link/Link';
import cls from './Navbar.module.scss';

interface INavbarProp {
  className?: string
}

export const Navbar: FC<INavbarProp> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Link view={ELinkViews.SECONDARY} to="/">
          Главная
        </Link>
        <Link view={ELinkViews.SECONDARY} to="/about">
          about
        </Link>
      </div>
    </div>
  );
};
