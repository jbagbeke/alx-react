import { screen, render } from "@testing-library/react";
import Footer from './Footer.js';
import '@testing-library/jest-dom';
import { StyleSheetTestUtils } from 'aphrodite'; 

describe('Footer component Tests', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
      
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    
    test('Renders without a crash', () => {
        render(<Footer />);
        expect(true).toBe(true);
    });

    test('Renders Copyright text', () => {
        const { getByText } = render(<Footer />);
        const cpyElement = getByText(/^Copyright/i);
        expect(cpyElement).toBeInTheDocument();
    });
})