import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import GuardRouter from './Routers/GuardRouter';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <GuardRouter path="/main" exact component={MainPage} />
        <Redirect to="/main" />
      </Switch>
    </Router>
  );
}

export default App;
