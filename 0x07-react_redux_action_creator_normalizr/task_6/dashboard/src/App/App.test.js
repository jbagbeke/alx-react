import { render, fireEvent } from "@testing-library/react";
import App from './App';
import Notify from "../Notifications/Notifications";
import '@testing-library/jest-dom';
import { StyleSheetTestUtils } from 'aphrodite';


/* eslint testing-library/no-container: 0 */
/* eslint testing-library/no-node-access: 0 */


describe('App component tests', () => {
    beforeEach(() => {
      StyleSheetTestUtils.suppressStyleInjection();
      window.alert = jest.fn();
    });

    afterEach(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
      window.alert.mockRestore();
    });

    test('Renders without crash', () => {
        render(<App />);
        expect(true).toBe(true);
    });

    test('CourseList not displayed', () => {
        const { queryByRole } = render(<App />)
        expect(queryByRole('table')).not.toBeInTheDocument()
    })

    test('Login not displayed', () => {
        const { queryByText } = render(<App />)
        expect(queryByText(/Login to access the full dashboard/i)).toBeInTheDocument()
    })

    test('registered key presses', () => {
        const { container } = render(<App />)
        fireEvent.keyDown(container, {key: 'H', ctrlKey: true});
        expect(window.alert).toHaveBeenCalledWith('Logging you out');
    });

    test('Default value of displayDrawer is false', () => {
        const { queryByText } = render(<App />);
        expect(queryByText(/Here is the list of notifications/i)).not.toBeInTheDocument()
    });

    test('Default value of displayDrawer is true', () => {
        const { queryByText } = render(<App displayDrawer={true}/>);
        expect(queryByText(/Here is the list of notifications/i)).toBeInTheDocument()
    });
    
    test('Notification marked as read', () => {
        const { queryByText } = render(<App displayDrawer={true}/>);
        const notElement = queryByText(/List Notifications display 1/i)
        expect(notElement).toBeInTheDocument()
        fireEvent.click(notElement)
        expect(notElement).not.toBeInTheDocument()
    });
})

