import './App.css';
import image from './favicon.jpg';
import { getFullYear, getFooterCopy } from './utils';


export default function App() {
  const copyMessage = getFooterCopy(window.location.pathname === '/')

  return (
    <div className='App-container'>
      <div className="App-header">
        <img src={image} alt="Holberton Logo" />
        <h1>School Dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' id='email'/>
        <label htmlFor="Password">Password</label>
        <input type="password" name='password' id='password'/>
        <button>Ok</button>
      </div>

      <div className="App-footer">
        <p>Copyright - {getFullYear()} {copyMessage}</p>
      </div>
    </div>

  )
}
