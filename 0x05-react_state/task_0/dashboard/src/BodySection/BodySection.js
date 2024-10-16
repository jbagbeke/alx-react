import { Component } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


export default class BodySection extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <div className={css(styles.bodySection)}>
              <h2>{title}</h2>
              {children}
            </div>
        )
    }
}

BodySection.propTypes = {
    title: PropTypes.string
}

BodySection.defaultProps = {
    title: ""
}

const styles = StyleSheet.create({
    bodySection: {
        border: '3px solid yellow'
    }
})
