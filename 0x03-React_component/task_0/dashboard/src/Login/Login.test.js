import Login from './Login.js';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Login Tests', () => {
    test('Renders without crashing', () => {
        render(<Login />);
        expect(true).toBe(true);
    });

    test('Renders with input and label tags', () => {
        const { getByLabelText, getByText } = render(<Login />);
        
        const emailInput = getByLabelText(/email/i)
        const emailElement = getByText(/email/i);
        
        const passInput = getByLabelText(/password/i)
        const passElement = getByText(/password/i);

        expect(emailInput).toBeInTheDocument();
        expect(emailElement).toBeInTheDocument();

        expect(passInput).toBeInTheDocument();
        expect(passElement).toBeInTheDocument();
    });
});

