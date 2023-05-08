import { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface ISidebarProp {
  className?: string
}

let a;

export const Sidebar: FC<ISidebarProp> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((prevValue) => !prevValue);
  };
  return (
    <div
      className={classNames(cls.root, { [cls.collapsed]: collapsed }, [
        className
      ])}
    >
      <button onClick={handleToggle}>Toggle</button>

      <div className={cls.switchers}>
        <LanguageSwitcher className={cls.lang} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
