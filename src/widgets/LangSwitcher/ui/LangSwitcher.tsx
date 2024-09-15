import { classNames } from 'shared/lib/ClassNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeAppButton } from 'shared/ui/AppButton/AppButton';
import * as cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };
    return (
        <AppButton
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeAppButton.CLEAR}
            onClick={toggle}
        >
            {t('Language')}
        </AppButton>
    );
};
