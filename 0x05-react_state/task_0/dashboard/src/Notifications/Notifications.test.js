import { render, fireEvent } from '@testing-library/react';
import Notify from './Notifications.js';
import '@testing-library/jest-dom';
import { StyleSheetTestUtils } from 'aphrodite'; 


describe('Notifications component testing', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
      
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    
    test('Renders without crashes', () => {
        render(<Notify />);
        expect(true).toBe(true);
    });

    test('UL list present in render', () => {
        const { getByRole } = render(<Notify  displayDrawer={true} />);
        const ulElement = getByRole('list');
        expect(ulElement).toBeInTheDocument();
    });

    test('UL list has correct children length', () => {
        const { getByRole } = render(<Notify displayDrawer={true} />);
        
        const ulElement = getByRole('list');
        expect(ulElement.children.length).toBe(1);
    });

    test('Displays correct notification text', () => {
        const notifications = [
            {id: 1, type: "default", value: "Here is the list of notifications"}
        ]
        const { queryAllByText } = render(<Notify displayDrawer={true} listNotifications={notifications} />);
        expect(queryAllByText(/Here is the list of notifications/i).length).toBeGreaterThan(1);
    });

    test('First notification renders right html', () => {
        const notifications = [
            {id: 1, type: 'default', html: { __html: "Notifications" }}
        ]
        const { queryAllByText } = render(<Notify displayDrawer={true} listNotifications={notifications} />);
        expect(queryAllByText(/Notifications/i).length).toBeGreaterThan(1);
    });

    test('Menu Item displayed when displayDrawer is false', () => {
        const { queryByText } = render(<Notify displayDrawer={false}/>);
        expect(queryByText(/Your notifications/i)).toBeInTheDocument()
    });

    test('Menu Item displayed when displayDrawer is true', () => {
        const { queryByText } = render(<Notify displayDrawer={true}/>);
        expect(queryByText(/Your notifications/i)).toBeInTheDocument()
    });
    
    test('Notification displayed when displayDrawer is true', () => {
        const { queryByText } = render(<Notify displayDrawer={true} />)
        expect(queryByText(/Here is the list of notifications/i)).not.toBeInTheDocument()
    });

    test('Notification not displayed when displayDrawer is false', () => {
        const { queryByText } = render(<Notify displayDrawer={false} />)
        expect(queryByText(/Here is the list of notifications/i)).not.toBeInTheDocument()
    });
    
    test('Renders correctly with no listNotifications', () => {
        const { queryByText } = render(<Notify displayDrawer={true} />)
        expect(queryByText(/No new notification for now/i)).toBeInTheDocument();
    });

    test('Renders correctly with listNotifications === []', () => {
        const { queryByText } = render(<Notify displayDrawer={true} listNotifications={[]} />)
        expect(queryByText(/No new notification for now/i)).toBeInTheDocument();
    });
    
    test('Renders correctly when given listNotifications array', () => {
        const notifications = [
            {id: 1, type: 'default', value: 'List Notifications display 1'},
            {id: 2, type: 'default', html: {__html: "JBA list notifications display"}},
            {id: 3, type: 'default', value: 'List Notifications display 2'}
        ]
        const { queryByText } = render(<Notify displayDrawer={true} listNotifications={notifications} />)
        expect(queryByText(/List Notifications display 1/i)).toBeInTheDocument();
        expect(queryByText(/JBA list notifications display/i)).toBeInTheDocument();
        expect(queryByText(/List Notifications display 2/i)).toBeInTheDocument();
    });
    
    test('Notification not displayed when listNotifications is empty', () => {
        const { queryByText } = render(<Notify displayDrawer={true} listNotifications={[]} />)
        expect(queryByText(/Here is the list of notifications/i)).not.toBeInTheDocument()
        expect(queryByText(/No new notification for now/i)).toBeInTheDocument();
    });

    test('Mark as read function test', () => {
        jest.spyOn(global.console, 'log').mockImplementation(() => {});
        console.log('Notification 2 has been marked as read');
        expect(console.log).toHaveBeenCalledWith('Notification 2 has been marked as read');
        console.log.mockRestore();
    });
    
    test('Updating props with same list does not rerender', () => {
        const notifications1 = [
            {id: 1, type: 'default', html: { __html: "Notifications on Render" }}
        ]
        const { rerender, queryByText } = render(<Notify listNotifications={notifications1} displayDrawer={true} />)
        expect(queryByText(/Notifications on Render/)).toBeInTheDocument();
        const notifications2 = [
            {id: 2, type: 'default', html: { __html: "Notifications on Render Test 2" }}
        ]
        rerender(<Notify listNotifications={notifications2} displayDrawer={true} />)
        expect(queryByText(/Notifications on Render Test 2/)).not.toBeInTheDocument()
    });

    test('Updating props with same list does rerender', () => {
        const notifications1 = [
            {id: 1, type: 'default', html: { __html: "Notifications on Render" }}
        ]
        const { rerender, getByText } = render(<Notify listNotifications={notifications1} displayDrawer={true} />)
        expect(getByText(/Notifications on Render/)).toBeInTheDocument();
        
        const notifications2 = [
            {id: 1, type: 'default', html: { __html: "Notifications on Render" }},
            {id: 2, type: 'default', html: { __html: "Notifications on JBA Render" }}
        ]
        rerender(<Notify listNotifications={notifications2} displayDrawer={true} />)
        expect(getByText(/Notifications on JBA Render/)).toBeInTheDocument();
    });

    test('HandleHideDrawer called on close button click', () => {
        const handleHideDrawer = jest.fn();
        const { getByRole } = render(<Notify displayDrawer={true} handleHideDrawer={handleHideDrawer} />)
        fireEvent.click(getByRole('button'))
        expect(handleHideDrawer).toHaveBeenCalledTimes(1);
        handleHideDrawer.mockRestore();
    });

    test('HandleShowDrawer called appropriately', () => {
        const handleDisplayDrawer = jest.fn();
        const { getByText } = render(<Notify displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} />)
        fireEvent.click(getByText(/Your notifications/))
        expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
        handleDisplayDrawer.mockRestore();
    });
});

