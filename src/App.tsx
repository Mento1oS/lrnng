import React, {Suspense} from "react";
import MyYetAnotherFirstComponent from "./components/MyYetAnotherFirstComponent";
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import MainPageAsync from "./pages/MainPage/MainPageAsync";
import AboutPageAsync from "./pages/AboutPage/AboutPageAsync";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/ClassNames/classNames";



const App = () => {
    const {toggleTheme, theme} = useTheme()
    return <div className={classNames('app', {}, [theme])}>
        <div>is it fucking consolas or what</div>
        consolas
        тёлка тёлка дай мне рэп, твою жопу крутит муз тв, вроде бы в твоей пизде, а вроде бы не снимал воообще
        <MyYetAnotherFirstComponent/>
        <div>
            <button onClick={toggleTheme}>Switch theme</button>
        </div>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/'} element={<MainPageAsync/>}/>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
            </Routes>
        </Suspense>
    </div>
}

export default App;