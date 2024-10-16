import { screen, render } from "@testing-library/react";
import Header from './Header.js';
import '@testing-library/jest-dom';
import { StyleSheetTestUtils } from 'aphrodite'; 

describe('Header Component Tests', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
      
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    
    test('Renders without crashing', () => {
        render(<Header />);
        expect(true).toBe(true);
    });

    test('Renders with img and h1 tags', () => {
        const { getByRole } = render(<Header />);
        const h1Element = getByRole('heading', { level: 1 });
        const imgElement = getByRole('img');
        expect(h1Element).toBeInTheDocument();
        expect(imgElement).toBeInTheDocument();
    });
});