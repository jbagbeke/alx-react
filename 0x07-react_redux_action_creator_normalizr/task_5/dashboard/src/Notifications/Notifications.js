import React, { PureComponent } from "react";
import NotificationItem from "./NotificationItem.js";
import PropType from 'prop-types';
import NotificationItemShape from "./NotificationItemShape.js";
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from "../App/AppContext.js";


export default class Notify extends PureComponent {
    static contextType = AppContext;

    // shouldComponentUpdate(nextProps, nextState) {
    //     const listNotLength = this.props.listNotifications.length < nextProps.listNotifications.length
    //     const drawer = nextProps.displayDrawer !== this.props.displayDrawer
    //     if (listNotLength || drawer)
    //         return true
    //     return false
    // }

    
    render() {
        const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props
        const notificationLists = () => {
            if (!listNotifications || listNotifications.length === 0)
                return  < NotificationItem
                        type="default"
                        value="No new notification for now"
                        />
                return listNotifications.map((element) => {
                console.log('JBA LOLLIPOP')
                console.log(element)
                return < NotificationItem
                    id={element.id}
                    type={element.type}
                    value={element.value}
                    html={element.html}
                    markAsRead={this.props.markNotificationAsRead}
                />
            })
        }


        const displayNotifications = () => {
            if (displayDrawer) {
                return (
                <div className={css(styles.Notifications)}>
                    { (listNotifications && listNotifications.length) && <p>Here is the list of notifications</p> }
                    <button
                    aria-label="Close"
                    onClick={handleHideDrawer}
                    style={{
                        position: 'relative',
                        width: 'fit-content',
                        bottom: '1em',
                        left: '95%',
                    }}>&times;</button>
                    <ul className={css(styles.NotificationsLi, styles.NotificationsLiPriority)}>{notificationLists()}</ul>
                </div>)
            }
            return <></>
        }

        console.log('Notifications about to be rendered')
        return <>
            <div className={css(styles.MenuItem)}
            onClick={handleDisplayDrawer}>Your notifications</div>
            {displayNotifications()}
        </>
        }
}

Notify.propTypes = {
    displayDrawer: PropType.bool,
    handleDisplayDrawer: PropType.func,
    handleHideDrawer: PropType.func,
    listNotifications: PropType.arrayOf(NotificationItemShape),
    markNotificationAsRead: PropType.func
}

Notify.defaultProps = {
    displayDrawer: false,
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    listNotifications: []
}

const styles = StyleSheet.create({
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
            color: 'green'
        }
    },
    MenuItem: {
        width: 'fit-content',
        '@media only screen and (max-width: 900px)': {
            margin: '0 0 0 70%'
        }
    }
})

