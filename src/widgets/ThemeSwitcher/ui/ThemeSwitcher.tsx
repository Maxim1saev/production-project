import { type FC } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import cls from './ThemeSwitcher.module.scss';
import LightThemeIcons from 'shared/assets/icons/theme-light.svg';
import DarkThemeIcons from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/Button/Button';

interface IThemeSwitcherProp {
  className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProp> = ({
  children,
  className
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.root, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <LightThemeIcons /> : <DarkThemeIcons />}
      {children}
    </Button>
  );
};
