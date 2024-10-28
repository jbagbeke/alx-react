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
import { user, AppContext } from './AppContext.js';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: this.props.displayDrawer,
      user,
      logOut: this.logOut,
      listNotifications: [
        {id: 1, type: 'default', value: 'List Notifications display 1'},
        {id: 2, type: 'urgent', html: {__html: "JBA list notifications display"}},
        {id: 3, type: 'default', value: 'List Notifications display 2'}
      ]
    }
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this)
    this.handleHideDrawer = this.handleHideDrawer.bind(this)
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this)
  }

  markNotificationAsRead(id) {
    const { listNotifications } = this.state;
    this.setState(() => ({ listNotifications: listNotifications.filter(item => item.id !== id)}))
  }

  logIn(email, password) {
    this.setState({ user: {
      email,
      password,
      isLoggedIn: true
    }})
  }

  logOut() {
    this.setState({ user })
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
    const LoginWrap = WithLogging(Login)
    const CourseListWrap = WithLogging(CourseList)
  
    const screenToDisplay = () => {
      if (this.state.user.isLoggedIn)
        return (
          <BodySectionWithMarginBottom title="Course list">
            <CourseListWrap listCourses={this.state.listNotifications} />
          </BodySectionWithMarginBottom>
        )
      return (
        <BodySectionWithMarginBottom title="Log in to continue">
          <LoginWrap logIn={this.logIn} />
        </BodySectionWithMarginBottom>
      )
    }

    const { user } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <Notify displayDrawer={this.state.displayDrawer}
        handleDisplayDrawer={this.handleDisplayDrawer}
        handleHideDrawer={this.handleHideDrawer}
        listNotifications={this.state.listNotifications}
        markNotificationAsRead={this.markNotificationAsRead} />
        <div className={css(styles.body)}>
          <Header />
          {screenToDisplay()}
          <BodySection title="News from the School">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, labore.</p>
          </BodySection>
          <Footer className={css(styles.appfooter)} />
        </div>
      </AppContext.Provider>
    )
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
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