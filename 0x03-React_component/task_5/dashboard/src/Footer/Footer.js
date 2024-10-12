import { Component } from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils.js';


export default class Footer extends Component {
    copyMessage = getFooterCopy(window.location.pathname === '/');

    render() {
        return (
            <div className="App-footer">
              <p>Copyright - {getFullYear()} {this.copyMessage}</p>
            </div>
        )
    }
}