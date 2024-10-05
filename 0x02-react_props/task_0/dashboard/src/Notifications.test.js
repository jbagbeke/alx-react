import { render, screen } from '@testing-library/react';
import Notify from './Notifications.js';
import '@testing-library/jest-dom';


describe('Notifications component testing', () => {
    test('Renders without crashes', () => {
        render(<Notify />);
        expect(true).toBe(true);
    });

    test('UL list present in render', () => {
        const { getByRole } = render(<Notify />);
        const ulElement = getByRole('list');
        expect(ulElement).toBeInTheDocument();
    });

    test('UL list present in render', () => {
        const { getByRole } = render(<Notify />);
        const ulElement = getByRole('list');
        expect(ulElement.children.length).toBe(3);
    });
    
    test('Displays correct notification text', () => {
        const { getByText } = render(<Notify />);
        expect(getByText('Here is the list of notifications')).toBeInTheDocument();
    });
})