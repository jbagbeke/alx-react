import { getFullYear, getFooterCopy, getLatestNotification } from "./utils.js";
import { StyleSheetTestUtils } from 'aphrodite'; 


describe('Utils Functions', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
      
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    
    test('GetFullYear Check', () => {
        expect(getFullYear()).toEqual(2024)
    });

    test('GetFooterCopy Check for Falsy', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    test('GetFooterCopy Check for Truthy', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('GetLatestNotification Check', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
    });
})

