import React, { PropsWithChildren } from "react";
import { ErrorCatcherState } from "../model/error-catcher";

class ErrorCatcher extends React.Component<
  PropsWithChildren,
  ErrorCatcherState
> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(): void {
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
