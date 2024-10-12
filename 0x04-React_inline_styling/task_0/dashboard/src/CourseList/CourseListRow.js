import { Component } from 'react';
import PropTypes from 'prop-types';


export default class CourseListRow extends Component {
    render() {
        const { isHeader, textFirstCell, textSecondCell } = this.props;

        const content = () => {

            if (isHeader) {
                const headerStyle = {
                    backgroundColor: '#deb5b545'
                }

                if (!textSecondCell)
                    return <th style={headerStyle} colSpan={2}>{textFirstCell}</th>
                return (
                    <>
                        <th style={headerStyle} >{textFirstCell}</th>
                        <th style={headerStyle} >{textSecondCell}</th>
                    </>
                )
            }

            const rowStyle = {
                backgroundColor: '#f5f5f5ab',
            }
            return (
                <>
                    <td style={rowStyle}>{textFirstCell}</td>
                    <td style={rowStyle}>{textSecondCell}</td>
                </>
            )
        }
    
        return <tr>{content()}</tr>
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

CourseListRow.defaultProps = {
    textSecondCell: null
}
