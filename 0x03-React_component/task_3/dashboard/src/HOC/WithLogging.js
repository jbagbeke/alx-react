import { Component } from 'react';


const WithLogging = (WrappedComponent) => {
    class LoggingHOC extends Component {
        componentDidMount() {
            console.log(`Component ${WrappedComponent.displayName} is mounted`)
        }

        componentWillUnmount() {
            console.log(`Component ${WrappedComponent.displayName} is going to unmount`)
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }

    LoggingHOC.displayName = `WithLogging(${WrappedComponent.displayName})`
    return LoggingHOC
}


export default WithLogging;