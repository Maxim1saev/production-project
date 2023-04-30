import React, {Suspense, useContext, useState} from "react"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import { Counter } from "./components/Counter"
import './styles/index.scss'
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy"
import { MainPageLwazy } from "./pages/MainPage/MainPage.lazy"
import { Theme, ThemeContext } from "./theme/ThemeContext"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames"



export const App = ()=>{

   const {theme,toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>Главная</Link>
            <Link to='/about'>about</Link>

            <button onClick={toggleTheme}>Theme</button>

            <Suspense fallback="Loding...">
                <Routes>
                    <Route path="/" element={<AboutPageLazy/>} />
                    <Route path="/about" element={<MainPageLwazy/>} />
                </Routes>
            </Suspense>
        </div>
    )
}