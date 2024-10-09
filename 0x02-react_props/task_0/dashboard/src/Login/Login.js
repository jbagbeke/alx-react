import { Component } from 'react';


export default class Login extends Component {
    render() {
        return (
            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email'/>
                <label htmlFor="Password">Password</label>
                <input type="password" name='password' id='password'/>
                <button>Ok</button>
            </div>
        )
    }
}