import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route ,browserHistory } from "react-router-dom";

import './App.css';
import MyEditor from './components/editor/index.js';
import SendInfo from './pages/sendInfo/index.js';
import SelectDate from './pages/selectDate/index.js';
import Dashboard from './pages/dashboard/index.js';
import HomePage from './pages/homePage/index.js';
import Login from './pages/login/index.js';
import ForgotPassword from './pages/forgot/index.js';
import popUpInput from './components/popupInputField/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
   }

  render() {
    return (
      <div class = 'app'>
      <Router>
      <switch>
        <Route path="/dash" component={Dashboard}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/editor" component={MyEditor}/>
        <Route path="/send" component={SendInfo}/>
        <Route path="/select"  component={SelectDate}/>
        <Route path="/forgot"  component={ForgotPassword}/>
        <Route path="/pop"  component={popUpInput}/>
     </switch>
     </Router>
      </div>
    );
  }
}

export default App;
