import { Component } from 'react';
import PropTypes from 'prop-types';


export default class CourseListRow extends Component {
    render() {
        const { isHeader, textFirstCell, textSecondCell } = this.props;

        const content = () => {
            if (isHeader) {
                if (!textSecondCell)
                    return <th colSpan={2}>{textFirstCell}</th>
                return (
                    <>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                )
            }
            return (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            )
        }
    
        return <tr>{content()}</tr>
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string
}

CourseListRow.defaultProps = {
    textSecondCell: null
}
