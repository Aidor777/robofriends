import React from "react";

class ErrorCatcher extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <h1>Oooops. This is not good</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorCatcher;
