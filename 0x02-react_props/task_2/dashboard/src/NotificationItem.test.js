import { render, screen } from '@testing-library/react';
import Notify from './Notifications.js';
import '@testing-library/jest-dom';


describe('Notifications component testing', () => {
    test('Renders without crashes', () => {
        render(<Notify />);
        expect(true).toBe(true);
    });

    test('UL list present in render', () => {
        const { getByText } = render(<Notify type="default" value="testByJBA" />);
        const ulElement = getByText(/testByJBA/i);
        expect(ulElement).toBeInTheDocument();
    });

    test('UL list present in render', () => {
        const { getByText } = render(<Notify type="default" html="<u>testJBA</u>" />);
        const htmlElement = getByText(/test/i);

        expect(htmlElement).toBeInTheDocument();
    });
});