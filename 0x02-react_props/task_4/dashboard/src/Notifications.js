import React, { Component } from "react";
import './Notifications.css';
// import { getLatestNotification } from "./utils";
import NotificationItem from "./NotificationItem.js";
import PropType from 'prop-types';

export default class Notify extends Component {
    render() {
        const props = this.props;
        const displayNotifications = () => {
            if (props.displayDrawer) {
                return (
                <div className="Notifications">
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
                        html={ props.html } />
                    </ul>
                </div>)
            }
            return <></>
        }

        return <>
            <div className="menuItem">Your notifications</div>
            {displayNotifications()}
        </>
        }
}

Notify.propTypes = {
    displayDrawer: PropType.bool
}

Notify.defaultProps = {
    displayDrawer: false
}
