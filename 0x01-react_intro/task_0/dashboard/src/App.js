import './App.css';
import React, { Component } from 'react';
import image from './favicon.jpg';


export default class App extends Component {
  render() {

    return (
      <div className='App-container'>
        <div className="App-header">
          <img src={image} alt="Holberton Logo" />
          <h1>School Dashboard</h1>
        </div>

        <div className="App-body">
          <p>Login to access the full dashboard</p>
        </div>

        <div className="App-footer">
          <p>Copyright 2020 - holberton School</p>
        </div>
      </div>

    )
  }
}
