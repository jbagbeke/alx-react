import * as uiActions from './uiActionTypes';

export const login = (email, password) => {
    return {
        type: uiActions.LOGIN,
        user: { email, password }
    }
}

export const logout = () => {
    return {
        type: uiActions.LOGOUT
    }
}

export const displayNotificationDrawer = () => {
    return {
        type: uiActions.DISPLAY_NOTIFICATION_DRAWER
    }
}

export const hideNotificationDrawer = () => {
    return {
        type: uiActions.HIDE_NOTIFICATION_DRAWER
    }
}



