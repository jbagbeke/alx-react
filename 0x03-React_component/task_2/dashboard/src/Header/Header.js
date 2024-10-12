import image from '../favicon.jpg';
import './Header.css';
import { Component } from 'react';


export default class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <img src={image} alt="Holberton Logo" />
                <h1>School Dashboard</h1>
            </div>
        )
    }
}