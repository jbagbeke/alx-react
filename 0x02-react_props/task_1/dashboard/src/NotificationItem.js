import { Component } from "react";

export default class NotificationItem extends Component {
    render(props) {
        return (
        <li
        data-notification-type={ props.type ? props.type : null}
        dangerouslySetInnerHTML={ props.html ? {__html: props.html} : undefined}
        >{ props.value ? props.valwue : null}
        </li>
        )
    }
}
