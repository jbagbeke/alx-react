import * as notificationActions from './notificationActionTypes';
import { bindActionCreators } from 'redux'


const markAsRead = (index) => {
    return {
        type: notificationActions.MARK_AS_READ,
        index
    }
}

const setNotificationFilter = (filter) => {
    return {
        type: notificationActions.SET_TYPE_FILTER,
        filter
    }
}

const markAsReadDispatch = (dispatch) => bindActionCreators(markAsRead, dispatch)
const setNotificationFilterDispatch = (dispatch) => bindActionCreators(setNotificationFilter, dispatch)


export { markAsRead,
    setNotificationFilter,
    markAsReadDispatch,
    setNotificationFilterDispatch
}
