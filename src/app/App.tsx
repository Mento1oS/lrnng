import React from "react";
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/ClassNames/classNames";
import {AppRouter} from "app/providers/router";


const App = () => {
    const {toggleTheme, theme} = useTheme()
    return <div className={classNames('app', {}, [theme])}>
        <div>
            <button onClick={toggleTheme}>Switch theme</button>
        </div>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <AppRouter/>
    </div>
}

export default App;