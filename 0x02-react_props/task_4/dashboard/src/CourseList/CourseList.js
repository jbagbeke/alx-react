import { Component } from "react";
import CourseListRow from "./CourseListRow.js";
import './CourseList.css';


export default class CourseList extends Component {
    render() {
        return (
            <table id="CourseList">
                <thead>
                    <CourseListRow textFirstCell="Available courses" isHeader={true} />
                    <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
                </thead>

                <tbody>
                    <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
                    <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
                    <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} />
                </tbody>
            </table>
        )
    }
}

