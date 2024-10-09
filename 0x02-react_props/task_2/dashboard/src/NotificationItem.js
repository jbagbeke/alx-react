import { Component } from "react";

export default class NotificationItem extends Component {
    render() {
        const props = this.props;
        return (
        <li
        data-notification-type={ props.type ? props.type : null}
        dangerouslySetInnerHTML={ props.html ? {__html: props.html} : undefined}
        >{ props.value ? props.value : null}
        </li>
        )
    }
}
