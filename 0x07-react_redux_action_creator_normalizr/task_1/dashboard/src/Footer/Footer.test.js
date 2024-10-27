import { screen, render } from "@testing-library/react";
import Footer from './Footer.js';
import '@testing-library/jest-dom';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from "../App/AppContext.js";

describe('Footer component Tests', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
      
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    
    test('Renders without a crash', () => {
        const contextValues = {
            user: {
                email: 'jba@gmail.com',
                password: 'knlsmglkrjdg',
                isLoggedIn: false
            },
            logOut: jest.fn()
        }
        render(<AppContext.Provider value={contextValues}>
            <Footer />
        </AppContext.Provider>
        );
        expect(true).toBe(true);
    });

    test('Renders Copyright text', () => {
        const contextValues = {
            user: {
                email: 'jba@gmail.com',
                password: 'knlsmglkrjdg',
                isLoggedIn: false
            },
            logOut: jest.fn()
        }
        const { getByText } = render(<AppContext.Provider value={contextValues}><Footer /></AppContext.Provider>);
        const cpyElement = getByText(/^Copyright/i);
        expect(cpyElement).toBeInTheDocument();
    });
    
    test('Renders Contact text when logged in', () => {
        const contextValues = {
            user: {
                email: 'jba@gmail.com',
                password: 'knlsmglkrjdg',
                isLoggedIn: true
            },
            logOut: jest.fn()
        }
        const { getByText } = render(<AppContext.Provider value={contextValues}>
            <Footer />
        </AppContext.Provider>
        );
        const cpyElement = getByText(/Contact us/i);
        expect(cpyElement).toBeInTheDocument();
    });

    test("Doesn't render Contact text when not logged in", () => {
        const contextValues = {
            user: {
                email: 'jba@gmail.com',
                password: 'knlsmglkrjdg',
                isLoggedIn: false
            },
            logOut: jest.fn()
        }
        const { queryByText } = render(<AppContext.Provider value={contextValues}>
            <Footer />
        </AppContext.Provider>
        );
        const cpyElement = queryByText(/Contact us/i);
        expect(cpyElement).not.toBeInTheDocument();
    });
})