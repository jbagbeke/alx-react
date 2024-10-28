import * as notificationActions from './notificationActionTypes';


export const maskAsRead = (index) => {
    return {
        type: notificationActions.MARK_AS_READ,
        index
    }
}

export const setNotificationFilter = (filter) => {
    return {
        type: notificationActions.SET_TYPE_FILTER,
        filter
    }
}
