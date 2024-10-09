import { render, screen } from "@testing-library/react";
import App from './App';
import '@testing-library/jest-dom';


/* eslint testing-library/no-container: 0 */
/* eslint testing-library/no-node-access: 0 */


describe('App component tests', () => {
    test('Renders without crash', () => {
        render(<App />);
        expect(true).toBe(true);
    });

    test('Renders with a div.App-header', () => {
        const { container } = render(<App />);
        const divElement = container.querySelector('.App-header');
        expect(divElement).toBeInTheDocument();
    });

    test('Renders with a div.App-body', () => {
        const { container } = render(<App />);
        const divElement = container.querySelector('.App-body');
        expect(divElement).toBeInTheDocument();
    });

    test('Renders with a div.App-footer', () => {
        const { container } = render(<App />);
        const divElement = container.querySelector('.App-footer');
        expect(divElement).toBeInTheDocument();
    });

})

