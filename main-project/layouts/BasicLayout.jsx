import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { StorageService } from '../services/Storage.service';

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ...rest } = this.props;
    const isLogin = !!StorageService.getToken();
    return isLogin ? <Route {...rest} /> : <Redirect to='/login' />;
  }
}

export default BasicLayout;
// const mapStateToProps = () => ();
// export default connect()(BasicLayout);
