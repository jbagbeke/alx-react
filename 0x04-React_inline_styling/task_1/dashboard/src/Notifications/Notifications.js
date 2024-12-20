import React, { Component } from "react";
import NotificationItem from "./NotificationItem.js";
import PropType from 'prop-types';
import NotificationItemShape from "./NotificationItemShape.js";
import { StyleSheet, css } from 'aphrodite';


export default class Notify extends Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);

    }
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.listNotifications.length < nextProps.listNotifications.length)
            return true
        return false
    }

    render() {
        const { listNotifications, displayDrawer } = this.props;

        const notificationLists = () => {
            if (!listNotifications || listNotifications.length === 0)
                return  < NotificationItem
                        key={'0'}
                        type="default"
                        value="No new notification for now"
                        />
            return listNotifications.map((element) => {
                return < NotificationItem
                    key={element.id}
                    type={element.type}
                    value={element.value}
                    html={element.html}
                    markAsRead={this.markAsRead}
                />
            })
        }

        const displayNotifications = () => {
            if (displayDrawer) {
                return (
                <div className={css(NotificationStyles.Notifications)}>
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
                    <ul className={css(NotificationStyles.NotificationsLi, NotificationStyles.NotificationsLiPriority)}>{notificationLists()}</ul>
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
    listNotifications: PropType.arrayOf(NotificationItemShape)
}

Notify.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

const NotificationStyles = StyleSheet.create({
    Notifications: {
        border: '3px dotted crimson',
        padding: '5px',
        minHeight: 'fit-content',
        maxWidth: '90%',
        margin: '0.5rem auto 2rem auto'
    },
    NotificationsLi: {
        color: 'red'
    },
    NotificationsLiPriority: {
        '[data-priority="1"]': {
            color: 'blue'
        }
    }
})

