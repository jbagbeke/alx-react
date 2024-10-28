import '@testing-library/jest-dom'
import '@testing-library/react'
import { login, logout, hideNotificationDrawer, displayNotificationDrawer} from './uiActionCreators'


describe('Testing the UI action creators', () => {
    test('Select login action properly created', () => {
        expect(login('jba@gmail.com', 'JBA')).toEqual({ type: 'LOGIN', user: { email: 'jba@gmail.com', password: 'JBA'} })
    })

    test('logout action properly created', () => {
        expect(logout()).toEqual({ type: 'LOGOUT' })
    })

    test('display drawer action properly created', () => {
        expect(displayNotificationDrawer()).toEqual({ type: 'DISPLAY_NOTIFICATION_DRAWER' })
    })

    test('hide drawer action properly created', () => {
        expect(hideNotificationDrawer()).toEqual({ type: 'HIDE_NOTIFICATION_DRAWER' })
    })
})