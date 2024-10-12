import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


export default class Login extends Component {
    render() {
        return (
            <div className={css(LoginStyles.AppBody)}>
                <p>Login to access the full dashboard</p>
                <label htmlFor="email" className={css(LoginStyles.AppBodyLabel)}>Email</label>
                <input type="email" name='email' id='email'/>
                <label htmlFor="password" className={css(LoginStyles.AppBodyLabel)}>Password</label>
                <input type="password" name='password' id='password'/>
                <button className={css(LoginStyles.AppBodyButton)}>Ok</button>
            </div>
        )
    }
}


const LoginStyles = StyleSheet.create({
    AppBody: {
        border: '2px solid black',
        maxWidth: '50%',
        display: 'flex',
        flexDirection: 'column',
        margin: '2rem auto'
    },
    AppBodyLabel: {
        margin:'1rem 0 0.5rem 0'
    },
    AppBodyButton: {
        margin: '1rem auto 0 auto',
        width: '50%'
    }
})
