import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import WithLogging from './WithLogging';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite'; 


describe('HOC Components Tests', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
      
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    
    test('Console.log called when component mounts/unmounts', () => {
        jest.spyOn(global.console, 'log');
        const testComponent = () => <div>Test Component</div>;
        const Wrapped = WithLogging(testComponent);
        
        const { unmount } = render(<Wrapped />)
        expect(console.log).toHaveBeenCalledWith(expect.stringMatching(/^Component/));
        unmount()
        expect(console.log).toHaveBeenCalledWith(expect.stringMatching(/^Component/));
        console.log.mockRestore()
    })

    test('Mount/unmount of Login component logged to console', () => {
        jest.spyOn(global.console, 'log');
        const WrappedLogin = WithLogging(Login);
        const { unmount } = render(<WrappedLogin />)
        expect(console.log).toHaveBeenCalledWith('Component Login is mounted')
        unmount()
        expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount')
        console.log.mockRestore()
    })
})

