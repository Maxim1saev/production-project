import React, { type ReactNode, type ErrorInfo, Suspense } from 'react';
import { ErrorMessage } from 'widgets/ErrorMessage';

interface IErrorBoundaryProps {
  children: ReactNode

}

interface IErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor (props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError () {
    return { hasError: true };
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render () {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Suspense fallback=''>
          <ErrorMessage />
        </Suspense>
      );
    }

    return this.props.children;
  }
}
