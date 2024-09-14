import * as cls from './ThemeSwitcher.module.scss'
import {classNames} from "shared/lib/ClassNames/classNames";
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkPicture from 'shared/assets/icons/theme-dark.svg';
import LightPicture from 'shared/assets/icons/theme-light.svg';
import {AppButton, ThemeAppButton} from "shared/ui/AppButton/AppButton";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {toggleTheme, theme} = useTheme();
    return (
        <AppButton theme={ThemeAppButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])}
                   onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightPicture/> : <DarkPicture/>}
        </AppButton>
    );
};