import { screen, render } from "@testing-library/react";
import Header from './Header.js';
import '@testing-library/jest-dom';

describe('Header Component Tests', () => {
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