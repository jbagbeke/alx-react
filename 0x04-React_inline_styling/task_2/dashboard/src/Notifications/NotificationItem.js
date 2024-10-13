import { PureComponent } from "react";
import PropType from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


export default class NotificationItem extends PureComponent {
    render() {
        const props = this.props;
        return (
        <li
            data-notification-type={props.type || null}
            dangerouslySetInnerHTML={props.html ? props.html : undefined}
            onClick={() => props.markAsRead()}
            className={props.type === 'urgent' ? css(styles.urgent): css(styles.default)}
        >
            {!props.html && props.value ? props.value : null}
        </li>
        )
    }
}

NotificationItem.propTypes = {
    html: PropType.shape({
        __html: PropType.string
    }),
    type: PropType.string,
    value: PropType.string,
    markAsRead: PropType.func
}

NotificationItem.defaultProps = {
    type: 'default',
    markAsRead: () => {}
}

const styles = StyleSheet.create({
    default: {
        backgroundColor: 'blue'
    },
    urgent: {
        backgroundColor: 'red'
    }
})
