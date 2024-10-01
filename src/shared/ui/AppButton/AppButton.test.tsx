import { render, screen } from '@testing-library/react';
import { AppButton, ThemeAppButton } from './AppButton';

describe('AppButton', () => {
    test('render button', () => {
        render(<AppButton>Test</AppButton>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    // проблема тут в том, что импорты классов осуществляются тут через *, а identity-obj-proxy с ним работать не может
    test('render button with class', () => {
        render(<AppButton theme={ThemeAppButton.CLEAR}>Test</AppButton>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
