import './App.css';
import Header from './Header/Header.js';
import  Login from './Login/Login.js';
import Footer from './Footer/Footer.js';
import Notify from './Notifications.js';
import { Fragment } from 'react';



export default function App() {
  return (
    <Fragment>
      <Notify />
      <div className='App'>
        <Header />
        <Login />
        <Footer />
      </div>
    </Fragment>

  )
}
