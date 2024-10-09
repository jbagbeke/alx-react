import React from "react";
import './Notifications.css';
import { getLatestNotification } from "./utils";
import NotificationItem from "./NotificationItem";

export default function Notify() {
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
            <NotificationItem type="1" value="New course available" />
            <NotificationItem type="1" value="New resume available" />
            <NotificationItem type="1" html={getLatestNotification()} />
        </ul>
    </div>
}
