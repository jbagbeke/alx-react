import image from '../favicon.jpg';
import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


export default class Header extends Component {
    render() {
        return (
            <div className={css(HeaderStyles.AppHeader)}>
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

