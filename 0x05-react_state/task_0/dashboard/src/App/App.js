import { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.js';
import  Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notify from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import BodySection from '../BodySection/BodySection.js';
import WithLogging from '../HOC/WithLogging.js';
import { StyleSheet, css } from 'aphrodite';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: this.props.displayDrawer
    }
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this)
    this.handleHideDrawer = this.handleHideDrawer.bind(this)
  }

  handleDisplayDrawer() {
    this.setState({displayDrawer: true})
  }
  
  handleHideDrawer() {
    this.setState({displayDrawer: false})
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
    const LoginWrap = WithLogging(Login)
    const CourseListWrap = WithLogging(CourseList)
  
    const screenToDisplay = () => {
      if (this.props.isLoggedIn)
        return (
          <BodySectionWithMarginBottom title="Course list">
            <CourseListWrap listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        )
      return (
        <BodySectionWithMarginBottom title="Log in to continue">
          <LoginWrap />
        </BodySectionWithMarginBottom>
      )
    }

    const listNotifications = [
      {id: 1, type: 'default', value: 'List Notifications display 1'},
      {id: 2, type: 'default', html: {__html: "JBA list notifications display"}},
      {id: 3, type: 'default', value: 'List Notifications display 2'}
  ]

    return (
      <>
        <Notify displayDrawer={this.state.displayDrawer}
        handleDisplayDrawer={this.handleDisplayDrawer}
        handleHideDrawer={this.handleHideDrawer}
        listNotifications={listNotifications} />
        <div className={css(styles.body)}>
          <Header />
          {screenToDisplay()}
          <BodySection title="News from the School">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, labore.</p>
          </BodySection>
          <Footer className={css(styles.appfooter)} />
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
  logOut: () => {},
  displayDrawer: false
}


const styles = StyleSheet.create({
  body: {
    backgroundColor: 'lightgreen'
  },
  appfooter: {
		borderTop: '4px solid red',
		fontSize: '1.4rem',
		padding: '0.5em',
		textAlign: 'center',
		fontStyle: 'italic',
	},
  
})