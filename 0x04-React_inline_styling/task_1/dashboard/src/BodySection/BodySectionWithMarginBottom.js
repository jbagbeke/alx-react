import { Component } from 'react';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';


export default class BodySectionWithMarginBottom extends Component {
    render() {
        const { children, ...otherProps } = this.props;
        return <>
            <div className={css(BodySectionStyles.body)}>
                <BodySection {...otherProps} />
                {children}
            </div>
        </>
    }
}


const BodySectionStyles = StyleSheet.create({
    body: {
        marginBottom: '40px'
    }
})

