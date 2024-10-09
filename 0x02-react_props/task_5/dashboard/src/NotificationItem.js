import { Component } from "react";
import PropType from 'prop-types';


export default class NotificationItem extends Component {
    render() {
        const props = this.props;
        return (
        <li
            data-notification-type={props.type || null}
            dangerouslySetInnerHTML={props.html ? props.html : undefined}
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
    value: PropType.string
}

NotificationItem.defaultProps = {
    type: 'default'
}