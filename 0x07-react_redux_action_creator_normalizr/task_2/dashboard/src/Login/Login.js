import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import propTypes from 'prop-types';
import { AppContext } from '../App/AppContext';


export default class Login extends Component {
    static contextType = AppContext

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            email: '',
            password: '',
            enableSubmit: false
        }
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.fieldsNotEmpty = this.fieldsNotEmpty.bind(this)

    }

    handleLoginSubmit(event) {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.logIn(email, password)
    }
    
    fieldsNotEmpty() {
        const { email, password } = this.state;
        this.setState({ enableSubmit: email.trim() !== '' && password.trim() !== ''})
    }

    handleChangeEmail(event) {
        event.preventDefault()
        this.setState({ email: event.target.value}, this.fieldsNotEmpty)
    }

    handleChangePassword(event) {
        event.preventDefault()
        this.setState({ password: event.target.value }, this.fieldsNotEmpty)
    }

    render() {
        return (
            <div className={css(styles.AppBody)}>
                <form action="">
                    <p>Login to access the full dashboard</p>
                    <label htmlFor="email" className={css(styles.AppBodyLabel)}>Email</label>
                    <input
                    className={css(styles.AppBodyInput)}
                    type="email"
                    name='email'
                    id='email'
                    onChange={this.handleChangeEmail}
                    value={this.state.email} />
                    <label htmlFor="password" className={css(styles.AppBodyLabel)}>Password</label>
                    <input
                    className={css(styles.AppBodyInput)}
                    type="password"
                    name='password'
                    id='password'
                    onChange={this.handleChangePassword}
                    value={this.state.password} />
                    <input 
                    className={css(styles.AppBodyButton)}
                    type='submit'
                    disabled={!this.state.enableSubmit}
                    onClick={this.handleLoginSubmit}
                    />
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    email: propTypes.string,
    password: propTypes.string,
    isLoggedIn: propTypes.bool,
    enableSubmit: propTypes.bool
}

Login.defaultTypes = {
    email: '',
    password: ''
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
