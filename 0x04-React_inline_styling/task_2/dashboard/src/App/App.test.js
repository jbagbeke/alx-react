import { render, fireEvent } from "@testing-library/react";
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

    test('CourseList not displayed', () => {
        const { queryByRole } = render(<App />)
        expect(queryByRole('table')).not.toBeInTheDocument()
    })
    
})


describe('When isLoggedIn is True', () => {
    beforeAll (() => {
        window.alert = jest.fn();
    })

    afterAll(() => {
        window.alert.mockRestore();
    })

    test('Login not displayed', () => {
        const { queryByText } = render(<App isLoggedIn={true} />)
        expect(queryByText(/Login to access the full dashboard/i)).not.toBeInTheDocument()
    })

    test('Component List rendered', () => {
        const { getByRole } = render(<App isLoggedIn={true} oney />)
        expect(getByRole('table')).toBeInTheDocument()
    })

    test('registered key presses', () => {
        const { container } = render(<App isLoggedIn={true} />)
        fireEvent.keyDown(container, {key: 'H', ctrlKey: true});
        expect(window.alert).toHaveBeenCalledWith('Logging you out');
    })
})

