import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes.js'
import { bindActionCreators } from 'redux'


const selectCourse = (index) => ({
    type: SELECT_COURSE,
    index: index
})

const unSelectCourse = (index) => ({
    type: UNSELECT_COURSE,
    index: index
})

const selectCourseDispatch = (dispatch) => bindActionCreators(selectCourse, dispatch)
const unSelectCourseDispatch = (dispatch) => bindActionCreators(unSelectCourse, dispatch)

export {
    selectCourse,
    unSelectCourse,
    selectCourseDispatch,
    unSelectCourseDispatch
}
