import * as uiActions from './uiActionTypes';
import { bindActionCreators } from 'redux'

const login = (email, password) => {
    return {
        type: uiActions.LOGIN,
        user: { email, password }
    }
}

const logout = () => {
    return {
        type: uiActions.LOGOUT
    }
}

const displayNotificationDrawer = () => {
    return {
        type: uiActions.DISPLAY_NOTIFICATION_DRAWER
    }
}

const hideNotificationDrawer = () => {
    return {
        type: uiActions.HIDE_NOTIFICATION_DRAWER
    }
}

const loginDispatch = (dispatch) => bindActionCreators(login, dispatch)
const logoutDispatch = (dispatch) => bindActionCreators(logout, dispatch)
const displayNotificationDrawerDispatch = (dispatch) => bindActionCreators(displayNotificationDrawer, dispatch)
const hideNotificationDrawerDispatch = (dispatch) => bindActionCreators(hideNotificationDrawer, dispatch)


export {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginDispatch,
    logoutDispatch,
    displayNotificationDrawerDispatch,
    hideNotificationDrawerDispatch
}

