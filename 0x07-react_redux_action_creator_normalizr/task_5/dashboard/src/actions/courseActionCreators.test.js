import '@testing-library/jest-dom'
import '@testing-library/react'
import { selectCourse, unSelectCourse } from './courseActionCreators.js'


describe('Testing the action creators', () => {
    test('Select Course action properly created', () => {
        expect(selectCourse(1)).toEqual({ type: 'SELECT_COURSE', index: 1 })
    })

    test('unSelect Course action properly created', () => {
        expect(unSelectCourse(1)).toEqual({ type: 'UNSELECT_COURSE', index: 1 })
    })
})

