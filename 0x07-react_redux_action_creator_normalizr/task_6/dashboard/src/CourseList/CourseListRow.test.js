import CourseListRow from './CourseListRow.js';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite'; 


describe('CourseList Tests', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
      
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    test('Renders with 2 colSpan when isHeader is true', () => {
        const { getByRole } = render(<table>
            <thead>
            <CourseListRow isHeader={true} textFirstCell="JBA"/>
            </thead>
            </table>);
        expect(getByRole('columnheader')).toHaveAttribute('colSpan', '2');
    });

    test('Renders with 2 colSpan when isHeader is false', () => {
        const { container } = render(<table>
            <tbody>
            <CourseListRow isHeader={false} textFirstCell="JBA" textSecondCell="JBAJBA" />
            </tbody>
            </table>);
        const tableD = container.querySelectorAll('tr td')
        expect(tableD.length).toEqual(2);
    });

})

