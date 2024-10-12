import { Component } from 'react';


const WithLogging = (WrappedComponent) => {
    class LoggingHOC extends Component {
        componentDidMount() {
            console.log(`Component ${WrappedComponent.name} is mounted`)
        }

        componentWillUnmount() {
            console.log(`Component ${WrappedComponent.name} is going to unmount`)
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }

    LoggingHOC.displayName = `WithLogging(${WrappedComponent.name})`
    return LoggingHOC
}


export default WithLogging;