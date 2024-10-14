import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


export default class CourseListRow extends Component {
    render() {
        const { isHeader, textFirstCell, textSecondCell } = this.props;

        const content = () => {
            if (isHeader) {
                if (!textSecondCell)
                    return <th className={css(styles.header)} colSpan={2}>{textFirstCell}</th>
                return (
                    <>
                        <th className={css(styles.header)} >{textFirstCell}</th>
                        <th className={css(styles.header)} >{textSecondCell}</th>
                    </>
                )
            }

            return (
                <>
                    <td className={css(styles.default)} >{textFirstCell}</td>
                    <td className={css(styles.default)} >{textSecondCell}</td>
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

const styles = StyleSheet.create({
    default: {
        backgroundColor: '#f5f5f5ab'
    },
    header: {
        backgroundColor: '#deb5b545'
    }
})
