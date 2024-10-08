import React, { Component } from "react";
import './Notifications.css';
import NotificationItem from "./NotificationItem.js";
import PropType from 'prop-types';
import NotificationItemShape from "./Notifications/NotificationItemShape.js";

export default class Notify extends Component {
    render() {
        const { listNotifications, displayDrawer } = this.props;

        const notificationLists = () => {
            if (!listNotifications || listNotifications.length === 0)
                return  < NotificationItem
                        type="default"
                        value="No new notification for now"
                        />
            return listNotifications.map((element) => {
                return < NotificationItem
                    key={element.id}
                    type={element.type}
                    value={element.value}
                    html={element.html}
                />
            })
        }

        const displayNotifications = () => {
            if (displayDrawer) {
                return (
                <div className="Notifications">
                    { (listNotifications && listNotifications.length) && <p>Here is the list of notifications</p> }
                    <button
                    aria-label="Close"
                    onClick={() => console.log('button has been clicked!')}
                    style={{
                        position: 'relative',
                        width: 'fit-content',
                        bottom: '1em',
                        left: '95%',
                    }}>&times;</button>
                    <ul>{notificationLists()}</ul>
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
    displayDrawer: PropType.bool,
    listNotifications: PropType.arrayOf(PropType.shape(NotificationItemShape))
}

Notify.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}
