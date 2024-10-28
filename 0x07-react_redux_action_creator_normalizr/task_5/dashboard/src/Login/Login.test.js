import Login from './Login.js';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import { StyleSheetTestUtils } from 'aphrodite'; 


describe('Login Tests', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
      
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    
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

    test('Submit button disabled when both fields are empty', () => {
        const { container } = render(<Login />)
        const submitButton = container.querySelector('input[type="submit"]')
        expect(submitButton).toBeDisabled();
    });

    test('Submit button enabled when both fields are not empty', () => {
        const { container } = render(<Login />)
        const emailButton = container.querySelector('input[type="email"]')
        const passwordButton = container.querySelector('input[type="password"]')
        const submitButton = container.querySelector('input[type="submit"]')
        userEvent.type(emailButton, 'JBA')
        userEvent.type(passwordButton, 'JBA PASSWORD')
        
        expect(submitButton).toBeEnabled();
    });
});

