import React from 'react';

export const user = {
    email: '',
    password: '',
    isLoggedIn: false
}

const logOut = () => {
    console.log('I am a logout function')
}

export const AppContext = React.createContext({ user, logOut});

