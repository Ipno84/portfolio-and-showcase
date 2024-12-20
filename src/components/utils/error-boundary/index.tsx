import React from "react";
import type { ErrorInfo } from "react";

import type { ErrorBoundaryProps, ErrorBoundaryState } from "./typings";

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error, errorInfo });
    console.error("ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) return null;

    return this.props.children;
  }
}

export default ErrorBoundary;
