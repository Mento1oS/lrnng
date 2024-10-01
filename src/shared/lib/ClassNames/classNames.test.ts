import { ThemeAppButton } from 'shared/ui/AppButton/AppButton';
import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass Lol';
        expect(classNames('someClass', {}, ['Lol'])).toBe(expected);
    });
    test('with conditional classes', () => {
        const expected = 'someClass Lol man';
        expect(classNames('someClass', { man: true, fuck: undefined }, ['Lol']))
            .toBe(expected);
    });
    test('with additional classes', () => {
        const expected = 'someClass Lol leave man fuck';
        expect(classNames('someClass', { man: true, fuck: true }, ['Lol', 'leave']))
            .toBe(expected);
    });
    test('with additional classes', () => {
        const expected = 'someClass clear';
        const theme = ThemeAppButton.CLEAR;
        expect(classNames('someClass', { }, [theme]))
            .toBe(expected);
    });
});
