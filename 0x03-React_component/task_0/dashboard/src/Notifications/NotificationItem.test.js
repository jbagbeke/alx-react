import { render, screen } from '@testing-library/react';
import Notify from './Notifications.js';
import '@testing-library/jest-dom';


describe('Notifications component testing', () => {
    test('Renders without crashes', () => {
        render(<Notify />);
        expect(true).toBe(true);
    });

    test('UL list present in render', () => {
        const { getByText } = render(<Notify displayDrawer={true} listNotifications={[{type: "default", value: "testByJBA"}]} />);
        const ulElement = getByText(/testByJBA/i);
        expect(ulElement).toBeInTheDocument();
    });

    test('Dangerouse HTML set in render', () => {
        const { getByText } = render(<Notify displayDrawer={true} listNotifications={[{type: "default", html: {__html: "<u>testJBA</u>"}}]} />);
        const htmlElement = getByText(/testJBA/i);

        expect(htmlElement).toBeInTheDocument();
    });
});