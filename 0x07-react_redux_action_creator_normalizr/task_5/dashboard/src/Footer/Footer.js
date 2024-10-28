import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils.js';
import React, { useContext } from 'react';
import { AppContext } from '../App/AppContext.js';


export default function Footer () {
    const copyMessage = getFooterCopy(window.location.pathname === '/');
    const { user } = useContext(AppContext)

    return (
        <div className="App-footer">
            { user.isLoggedIn && <p><a href="#">Contact us</a></p> }
            <p>Copyright - {getFullYear()} {copyMessage}</p>
        </div>
    )
}