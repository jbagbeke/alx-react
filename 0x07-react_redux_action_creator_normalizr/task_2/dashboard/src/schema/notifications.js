import { normalize, schema } from 'normalizr';
import notificationData from '../../../../notifications.json' with { type: 'json' };


const user = new schema.Entity('users')
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' })
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
})

export const normalizedNotifications = [normalize(notificationData, [notification])]

export function getAllNotificationsByUser(userId) {
    const notificationArray = []
    for (const [not, val] of Object.entries(normalizedNotifications[0].entities.notifications)) {
        if (val.author === userId)
            notificationArray.push(normalizedNotifications[0].entities.messages[val.context])
    }
    return notificationArray    
}

// console.log(getAllNotificationsByUser('5debd764a7c57c7839d722e9'))
// console.log(normalizedNotifications[0].entities.messages['efb6c485-00f7-4fdf-97cc-5e12d14d6c41'])
