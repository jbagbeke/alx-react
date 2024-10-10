import { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.js';
import  Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notify from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList.js';
import './App.css';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && (event.key === 'h' || event.key === 'H')) {
        event.preventDefault();
        alert('Logging you out');
        this.logOut();
      }
    })
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.logOut)
  }

  render() {
    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ]
    const screenToDisplay = () => {
      if (this.isLoggedIn)
        return <CourseList listCourses={listCourses}/>
      return <Login />
    }
    return (
      <>
        <Notify />
        <div className='App'>
          <Header />
          {screenToDisplay()}
          <Footer />
        </div>
      </>
  
    )
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}
