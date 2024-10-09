import { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.js';
import  Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notify from '../Notifications.js';
import CourseList from '../CourseList/CourseList.js';
import './App.css';



export default class App extends Component {
  render() {
    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 1, name: 'Webpack', credit: 20},
      {id: 1, name: 'React', credit: 40}
    ]
    const { isLoggedIn } = this.props;
    const screenToDisplay = () => {
      if (isLoggedIn)
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
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}
