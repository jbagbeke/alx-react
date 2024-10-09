import { Component } from "react";
import CourseListRow from "./CourseListRow.js";
import CourseShape from "./CourseShape.js";
import PropTypes from 'prop-types';
import './CourseList.css';


export default class CourseList extends Component {
    render() {
        const { listCourses } = this.props;
        const courseLists = () => {
            if (!listCourses || listCourses.length === 0)
                return <CourseListRow textFirstCell="No course available yet" textSecondCell="" isHeader={false} />
            return listCourses.map((element) => {
                return <CourseListRow key={element.id} textFirstCell={element.name} textSecondCell={element.credit} isHeader={false} />
            })
        }

        return (
            <table id="CourseList">
                <thead>
                    <CourseListRow textFirstCell="Available courses" isHeader={true} />
                    <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
                </thead>

                <tbody>{courseLists()}</tbody>
            </table>
        )
    }
}


CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
}


// CourseList.defaultProps = {
//     listCourses: []
// }

