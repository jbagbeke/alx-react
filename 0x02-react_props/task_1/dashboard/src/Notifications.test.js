import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem.js';
import '@testing-library/jest-dom';


describe('Notifications component testing', () => {
    test('Renders without crashes', () => {
        render(<NotificationItem />);
        expect(true).toBe(true);
    });

    test('UL list present in render', () => {
        const { getByRole } = render(<NotificationItem />);
        const ulElement = getByRole('list');
        expect(ulElement).toBeInTheDocument();
    });

    test('UL list present in render', () => {
        const { getByRole } = render(<NotificationItem />);
        
        const ulElement = getByRole('list');
        expect(ulElement.children.length).toBe(1);
    });

    test('Displays correct notification text', () => {
        const { getByText } = render(<NotificationItem value="Here is the list of notifications" />);
        expect(getByText('Here is the list of notifications')).toBeInTheDocument();
    });

    test('First notification renders right html', () => {
        const { getByText } = render(<NotificationItem html="Notifications" />);
        expect(getByText('Notifications')).toBeInTheDocument();
    });
});
