import { render } from '@testing-library/react';
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
        expect(ulElement.children.length).toBe(1);
    });

    test('Displays correct notification text', () => {
        const { getAllByText } = render(<Notify value="Here is the list of notifications" />);
        expect(getAllByText('Here is the list of notifications').length).toBeGreaterThan(1);
    });

    test('First notification renders right html', () => {
        const { getByText } = render(<Notify html="Notifications" />);
        expect(getByText('Notifications')).toBeInTheDocument();
    });
});
