import * as uiActions from './uiActionTypes.js';
import { bindActionCreators } from 'redux'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import fetch from 'node-fetch'


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

const loginSuccess = () => {
    return {
        type: uiActions.LOGIN_SUCCESS
    }
}

const loginFailure = () => {
    return {
        type: uiActions.LOGIN_FAILURE
    }
}

const loginRequest = async (email, password) => {
    await fetch('http://localhost:3000/alx-react/0x01-react_intro/task_4/dashboard/dist/login-success.json', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
    })
    .then((success) => {
        if (!success.ok) {
            loginFailureDispatch()
            return
        }
        console.log(success)
        loginDispatch(email, password)
        loginSuccessDispatch()
        return success.json()
    })
}


const loginDispatch = (dispatch) => bindActionCreators(login, dispatch)
const logoutDispatch = (dispatch) => bindActionCreators(logout, dispatch)
const displayNotificationDrawerDispatch = (dispatch) => bindActionCreators(displayNotificationDrawer, dispatch)
const hideNotificationDrawerDispatch = (dispatch) => bindActionCreators(hideNotificationDrawer, dispatch)
const loginSuccessDispatch = (dispatch) => bindActionCreators(loginSuccess, dispatch)
const loginFailureDispatch = (dispatch) => bindActionCreators(loginFailure, dispatch)



export {
    login,
    logout,
    loginSuccess,
    loginFailure,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginDispatch,
    logoutDispatch,
    displayNotificationDrawerDispatch,
    hideNotificationDrawerDispatch,
    loginFailureDispatch,
    loginSuccessDispatch
}



// loginRequest('jba@gmail.com', 'JBA-HAHAHA')
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, '../../dist/login-success.json');
// const response = await fetch(filePath);


fetch('http://localhost:3000/login-success.json')
.then(v => {
    console.log(v)
    v.json()
});





