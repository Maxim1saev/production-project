import  {Suspense} from "react"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import './styles/index.scss'
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { classNames } from "shared/lib/classNames"
import { useTheme } from "./providers/ThemeProvider"



export const App = ()=>{

   const {theme,toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>Главная</Link>
            <Link to='/about'>about</Link>

            <button onClick={toggleTheme}>Theme</button>

            <Suspense fallback="Loding...">
                <Routes>
                    <Route path="/" element={<AboutPage/>} />
                    <Route path="/about" element={<MainPage/>} />
                </Routes>
            </Suspense>
        </div>
    )
}