import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import CourseList from "./CourseList.js";


describe('Course List Tests', () => {
    test('Renders without crash', () => {
        render(<CourseList />)
        expect(true).toBe(true);
    })

    test('Renders with five rows', () => {
        const { getAllByRole } = render(<CourseList />)
        const rows = getAllByRole('row')
        expect(rows.length).toEqual(5);
    })
})


