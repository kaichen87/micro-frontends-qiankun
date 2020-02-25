import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import System1Page from './pages/system1';
import System2Page from './pages/system2';

function App() {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/system' : '/'}>
      <div className="App">
          <Route path="/" exact component={System1Page}></Route>
          <Route path="/system1" component={System1Page}></Route>
          <Route path="/system2" component={System2Page}></Route>
      </div>
    </Router>
  );
}

export default App;
