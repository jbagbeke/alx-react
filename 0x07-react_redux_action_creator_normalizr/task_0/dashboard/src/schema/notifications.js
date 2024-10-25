import React from 'react';
import notificationData from '../../../../notifications.json' with { type: 'json' };

export default function getAllNotificationsByUser(userId) {
    return notificationData.filter(nfn => nfn.author.id === userId).map(nfn => nfn.context)
}



