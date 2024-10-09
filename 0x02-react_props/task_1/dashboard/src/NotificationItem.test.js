import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem.js';
import '@testing-library/jest-dom';


describe('Notifications component testing', () => {
    test('Renders without crashes', () => {
        render(<NotificationItem />);
        expect(true).toBe(true);
    });

    // test('UL list present in render', () => {
    //     const { getByText } = render(<NotificationItem type="default" value="testByJBA" />);
    //     const ulElement = getByText("testByJBA");
    //     expect(ulElement).toBeInTheDocument();
    // });

    // test('UL list present in render', () => {
    //     const { getByText } = render(<NotificationItem type="default" html={{ __html: '<u>testJBA</u>' }}/>);
    //     const htmlElement = getByText(/test/i);

    //     expect(htmlElement).toBeInTheDocument();
    // });
});