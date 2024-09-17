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
        const expected = 'someClass man Lol';
        expect(classNames('someClass', { man: true, fuck: undefined }, ['Lol'])).toBe(expected);
    });
    test('with additional classes', () => {
        const expected = 'someClass man fuck Lol leave';
        expect(classNames('someClass', { man: true, fuck: true }, ['Lol', 'leave'])).toBe(expected);
    });
});
