import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route ,browserHistory } from "react-router-dom";

import './App.css';
import MyEditor from './components/editor/index.js';
import EditorData from './pages/editordata.js';
import SendInfo from './pages/sendInfo/index.js';
import Info from './pages/info/index.js';
import SelectDate from './pages/selectDate/index.js';
import Dashboard from './pages/dashboard/index.js';


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
          <Route path="/editor" component={MyEditor}/>
          <Route path="/mydata/:date"  component={EditorData}/>
          <Route path="/send" component={SendInfo}/>
          <Route path="/info/:key"  component={Info}/>
          <Route path="/select"  component={SelectDate}/>
        </switch>
     </Router>
      </div>
    );
  }
}

export default App;
