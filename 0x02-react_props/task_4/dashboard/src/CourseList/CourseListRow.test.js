import CourseListRow from './CourseListRow.js';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';


describe('CourseList Tests', () => {
    test('Renders with 2 colSpan when isHeader is true', () => {
        const { getByRole } = render(<CourseListRow isHeader={true} textFirstCell="JBA"/>);
        expect(getByRole('columnheader')).toHaveAttribute('colSpan', '2');
    });

    test('Renders with 2 colSpan when isHeader is false', () => {
        const { container } = render(<CourseListRow isHeader={false} textFirstCell="JBA" textSecondCell="JBAJBA" />)
        const tableD = container.querySelectorAll('tr td')
        expect(tableD.length).toEqual(2);
    });

})

