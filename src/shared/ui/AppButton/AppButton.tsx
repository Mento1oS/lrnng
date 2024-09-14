import * as cls from './AppButton.module.scss'
import {classNames} from "shared/lib/ClassNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeAppButton {
    CLEAR = 'clear'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeAppButton;
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const {className, children, theme, ...otherProps} = props;
    return (
        <button {...otherProps} className={classNames(cls.AppButton, {}, [className, cls[theme]])}>
            {children}
        </button>
    );
};