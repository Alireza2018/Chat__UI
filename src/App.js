import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
//Import app views
import Messenger from './views/Messenger'

import "./modern-normalize.css";
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path='/messenger' component={Messenger}/>
      <Route exact path='/' render={ () => <Redirect to='/messenger' />}/>
    </Router>
  );
}

export default App;
