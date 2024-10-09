import { render } from '@testing-library/react';
import Notify from './Notifications.js';
import '@testing-library/jest-dom';


describe('Notifications component testing', () => {
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
        const { queryAllByText } = render(<Notify value="Here is the list of notifications" displayDrawer={true} />);
        expect(queryAllByText(/Here is the list of notifications/i).length).toBeGreaterThan(1);
    });

    test('First notification renders right html', () => {
        const { queryAllByText } = render(<Notify displayDrawer={true} html={{ __html: "Notifications" }} />);
        expect(queryAllByText(/Notifications/i).length).toBeGreaterThan(1);
    });

    test('Menu Item displayed when displayDrawer is false', () => {
        const { queryByText } = render(<Notify displayDrawer={false}/>);
        expect(queryByText(/Your notifications/i)).toBeInTheDocument()
    })

    test('Menu Item displayed when displayDrawer is true', () => {
        const { queryByText } = render(<Notify displayDrawer={true}/>);
        expect(queryByText(/Your notifications/i)).toBeInTheDocument()
    })
    
    test('Notification displayed when displayDrawer is true', () => {
        const { queryByText } = render(<Notify displayDrawer={true} />)
        expect(queryByText(/Here is the list of notifications/i)).toBeInTheDocument()
    })

    test('Notification not displayed when displayDrawer is false', () => {
        const { queryByText } = render(<Notify displayDrawer={false} />)
        expect(queryByText(/Here is the list of notifications/i)).not.toBeInTheDocument()
    })
});
