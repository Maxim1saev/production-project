import { createContext } from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface IThemContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}


export const ThemeContext = createContext<IThemContextProps>({})

export const LOCALE_STORAGE_THEME_KEY = 'theme'