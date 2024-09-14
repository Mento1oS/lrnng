import React from "react";
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/ClassNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = () => {
    const {toggleTheme, theme} = useTheme()
    return <div className={classNames('app', {}, [theme])}>
        <Navbar/>
        <AppRouter/>
        <div>
            <button onClick={toggleTheme}>Switch theme</button>
        </div>
    </div>
}

export default App;