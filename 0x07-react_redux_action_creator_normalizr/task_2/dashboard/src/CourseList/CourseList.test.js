import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import CourseList from "./CourseList.js";
import { StyleSheetTestUtils } from 'aphrodite'; 


describe('Course List Tests', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
      
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    test('Renders without crash', () => {
        render(<CourseList />)
        expect(true).toBe(true);
    })

    test('Renders with five rows', () => {
        const courses = [
            {id: 1, name: 'Math', credit: 59},
            {id: 2, name: 'English', credit: 40},
            {id: 3, name: 'Science', credit: 80}
        ]
        const { getAllByRole } = render(<CourseList listCourses={courses} />)
        const rows = getAllByRole('row')
        expect(rows.length).toEqual(5);
    })

    test('Renders correctly with empty listCourses', () => {
        const { queryByText } = render(<CourseList />)
        expect(queryByText(/No course available yet/i)).toBeInTheDocument();
    })

    test('Renders correctly with listCourses === []', () => {
        const { queryByText } = render(<CourseList listCourses={[]}/>)
        expect(queryByText(/No course available yet/i)).toBeInTheDocument();
    })

    test('Renders correctly when given listCourses array', () => {
        const courses = [
            {id: 1, name: 'Math', credit: 59},
            {id: 2, name: 'English', credit: 40},
            {id: 3, name: 'Science', credit: 80}
        ]
        const { queryByText } = render(<CourseList listCourses={courses} />)
        expect(queryByText(/Math/i)).toBeInTheDocument();
        expect(queryByText(/English/i)).toBeInTheDocument();
        expect(queryByText(/Science/i)).toBeInTheDocument();
    });
})


