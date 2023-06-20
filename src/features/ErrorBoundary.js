import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    // Standard initialization stuff
    super(props);
    this.state = {
      hasError: false
    }
  }

  // Lifecycle hook where a component threw an error and the 
  // parent tag catches it
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    // If error, return this filler text for user to see
    if (this.state.hasError) {
      return <h2>AN ERROR</h2>
    }
    // Else return the intended child content
    return this.props.children;
  }
}

export default ErrorBoundary;