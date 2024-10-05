import React from "react";
import './Notifications.css';
import { getLatestNotification } from "./utils";

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
            <li data-priority='1'>New course available</li>
            <li data-priority='2'>New resume available</li>
            <li dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
        </ul>

    </div>
}
