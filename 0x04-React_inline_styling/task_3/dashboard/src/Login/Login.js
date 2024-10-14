import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


export default class Login extends Component {
    render() {
        return (
            <div className={css(styles.AppBody)}>
                <p>Login to access the full dashboard</p>
                <label htmlFor="email" className={css(styles.AppBodyLabel)}>Email</label>
                <input className={css(styles.AppBodyInput)} type="email" name='email' id='email'/>
                <label htmlFor="password" className={css(styles.AppBodyLabel)}>Password</label>
                <input className={css(styles.AppBodyInput)} type="password" name='password' id='password'/>
                <button className={css(styles.AppBodyButton)}>Ok</button>
            </div>
        )
    }
}


const styles = StyleSheet.create({
    AppBody: {
        border: '2px solid black',
        maxWidth: '50%',
        margin: '2rem auto'
    },
    AppBodyLabel: {
        '@media only screen and (max-width: 900px)': {
            display: 'inline-block',
            width: 'fit-content',
            marginTop: '.4rem'
        }
    },
    AppBodyInput: {
        '@media only screen and (max-width: 900px)': {
            display: 'inline-block',
            width: '60%',
            margin: '0 0 0 0.2rem'
        }
    },
    AppBodyButton: {
        margin: '1rem auto 0 auto',
        width: '50%',
    }
})
