import { fireEvent, render } from "@testing-library/react";
import Header from './Header.js';
import '@testing-library/jest-dom';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from "../App/AppContext.js";

describe('Header Component Tests', () => {
    let contextValues;

    beforeEach(() => {
        contextValues = {
            user: {
                email: 'jba@gmail.com',
                password: 'knlsmglkrjdg',
                isLoggedIn: false
            },
            logOut: jest.fn()
        }
        StyleSheetTestUtils.suppressStyleInjection();
    });
      
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    
    test('Renders without crashing', () => {
        render(<AppContext.Provider value={contextValues}>
            <Header />
        </AppContext.Provider>
        );
        expect(true).toBe(true);
    });
    
    test('Renders with img and h1 tags', () => {
        const { getByRole } = render(<AppContext.Provider value={contextValues}>
            <Header />
        </AppContext.Provider>
        );
        const h1Element = getByRole('heading', { level: 1 });
        const imgElement = getByRole('img');
        expect(h1Element).toBeInTheDocument();
        expect(imgElement).toBeInTheDocument();
    });

    test('LogoutSection not rendered', () => {
        const { queryByText} = render(<AppContext.Provider value={contextValues}>
            <Header />
        </AppContext.Provider>
        );
        expect(queryByText(/Welcome/)).not.toBeInTheDocument();
    });

    test('LogoutSection is rendered', () => {
        const contextV = {
            user: {
                email: 'jba@gmail.com',
                password: 'knlsmglkrjdg',
                isLoggedIn: true
            },
            logOut: jest.fn()
        }
        const { queryByText} = render(<AppContext.Provider value={contextV}>
            <Header />
        </AppContext.Provider>
        );
        expect(queryByText(/Welcome jba@gmail.com/)).toBeInTheDocument();
    });
    
    test('LogoutSection is rendered and logOut works', () => {
        const testData = {
            user: {
                email: 'jba@gmail.com',
                password: 'knlsmglkrjdg',
                isLoggedIn: true
            },
            logOut: jest.fn()
        }
        const { getByRole } = render(<AppContext.Provider value={testData}>
            <Header />
        </AppContext.Provider>
        );

        const logOutLink = getByRole('link', { name: /\(logout\)/i });
        fireEvent.click(logOutLink)
        expect(testData.logOut).toHaveBeenCalledTimes(1);
    });
});