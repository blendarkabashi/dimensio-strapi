import { Component } from 'react';
import { withRouter } from 'next/router';

function withAuth(WrappedComponent) {
  class AuthenticatedComponent extends Component {
    componentDidMount() {
      const token = localStorage.getItem('jwt');
      if (!token) {
        this.props.router.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return withRouter(AuthenticatedComponent);
}

export default withAuth;
