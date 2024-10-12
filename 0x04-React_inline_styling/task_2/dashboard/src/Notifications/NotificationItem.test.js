import { render, screen, fireEvent } from '@testing-library/react';
import Notify from './Notifications.js';
import NotificationItem from './NotificationItem.js';
import '@testing-library/jest-dom';


describe('Notifications component testing', () => {
    test('Renders without crashes', () => {
        render(<Notify />);
        expect(true).toBe(true);
    });

    test('UL list present in render', () => {
        const { getByText } = render(<Notify displayDrawer={true} listNotifications={[{id: 1, type: "default", value: "testByJBA"}]} />);
        const ulElement = getByText(/testByJBA/i);
        expect(ulElement).toBeInTheDocument();
    });
    
    test('Dangerouse HTML set in render', () => {
        const { getByText } = render(<Notify displayDrawer={true} listNotifications={[{id: 1, type: "default", html: {__html: "<u>testJBA</u>"}}]} />);
        const htmlElement = getByText(/testJBA/i);
        expect(htmlElement).toBeInTheDocument();
    });
    
    test('markAsRead function tests', () => {
        const funcMock = jest.fn(() => 'Notification 20 has been marked as read');
        jest.spyOn({ funcMock }, 'funcMock');
        const { getByText } = render(<NotificationItem displayDrawer={true} markAsRead={funcMock} type="default" value="testByJBAMock" />);
        fireEvent.click(getByText('testByJBAMock'));
        expect(funcMock).toHaveBeenCalled();
        funcMock.mockRestore();
    })
});

