import React from "react";
import './Notifications.css';
// import { getLatestNotification } from "./utils";
import NotificationItem from "./NotificationItem.js";

export default function Notify(props) {
    return <div className="Notifications">
        <p>Here is the list of notifications</p>
        <button
        aria-label="Close"
        onClick={() => console.log('button has been clicked!')}
        style={{
            position: 'relative',
            width: 'fit-content',
            bottom: '1em',
            left: '95%',
        }}>&times;</button>
        <ul>
            < NotificationItem
            type={props.type ? props.type : "default" }
            value={props.value ? props.value : "New resume notifcation - Complete by EOD"}
            html={props.html} />
        </ul>
    </div>
}
