import { useContext } from "react"
import { LOCALE_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

type TUseTheme = ()=> {
    theme: Theme 
    toggleTheme: ()=> void
} 

export const useTheme: TUseTheme = ()=>{


    const {setTheme, theme} = useContext(ThemeContext)

    const toggleTheme = ()=>{
        
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

        setTheme(newTheme)

        localStorage.setItem( LOCALE_STORAGE_THEME_KEY, newTheme)
    
    }


    return {theme, toggleTheme}


}