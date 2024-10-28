import image from '../favicon.jpg';
import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext.js';


export default class Header extends Component {
    static contextType = AppContext

    constructor(props) {
        super(props)
        this.logoutSection = this.logoutSection.bind(this)
    }

    logoutSection() {
        const [{ isLoggedIn, email }, { logOut }] = [this.context.user, this.context];
        return isLoggedIn && <div id="logoutSection">Welcome {email} <a href='#' onClick={logOut}>(logout)</a></div>
    }

    render() {
        return (
            <div className={css(HeaderStyles.AppHeader)}>
                { this.logoutSection() }
                <img src={image} alt="Holberton Logo" className={css(HeaderStyles.AppHeaderImg)} />
                <h1 className={css(HeaderStyles.AppHeaderH1)}>School Dashboard</h1>
            </div>
        )
    }
}

const HeaderStyles = StyleSheet.create({
    AppHeader: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '4px solid crimson',
        paddingBottom: '1rem'
      },
    AppHeaderImg: {
        width: '20%',
        height: '20%'
    },
    AppHeaderH1: {
        marginLeft: '1rem',
        color: 'crimson'
      }
});

