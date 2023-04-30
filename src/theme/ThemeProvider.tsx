import { FC, useMemo, useState } from "react";
import { LOCALE_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";


const defaultTheme = localStorage.getItem(LOCALE_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvide: FC = ({children})=>{

 const [theme, setTheme] = useState<Theme>(defaultTheme)

    const value = useMemo(()=>({setTheme, theme}),[theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}