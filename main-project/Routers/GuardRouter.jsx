import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { StorageService } from '../services/Storage.service';

class GuardRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ...rest } = this.props;
    const isLogin = !!StorageService.getToken();
    return isLogin ? <Route {...rest} render={props => <Component {...props} />} /> : <Redirect to="/login" />;
  }
}

export default withRouter(GuardRouter);
