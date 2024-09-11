import React, {Suspense} from "react";
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/ClassNames/classNames";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


const App = () => {
    const {toggleTheme, theme} = useTheme()
    return <div className={classNames('app', {}, [theme])}>
        <div>
            <button onClick={toggleTheme}>Switch theme</button>
        </div>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
            </Routes>
        </Suspense>
    </div>
}

export default App;