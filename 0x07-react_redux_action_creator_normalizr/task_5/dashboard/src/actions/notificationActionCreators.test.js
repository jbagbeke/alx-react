import '@testing-library/jest-dom'
import '@testing-library/react'
import { maskAsRead, setNotificationFilter } from './notificationActionCreators'
import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes'


describe('Testing the Notification Filter action creators', () => {
    test('Mark as read action correctly created', () => {
        expect(maskAsRead(1)).toEqual({
            type: MARK_AS_READ,
            index: 1
          })
    })

    test('Set Notification filter action properly created', () => {
        expect(setNotificationFilter(NotificationTypeFilters[0])).toEqual({
            type: SET_TYPE_FILTER,
            filter: "DEFAULT"
          })
    })
})