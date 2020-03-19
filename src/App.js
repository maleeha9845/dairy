import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import MyEditor from './components/editor.js';
import EditorData from './pages/editordata.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
   }

  render() {
    return (
      <div>
      <Router>
    <switch>
      <Route path="/editor" component={MyEditor}/>
      <Route path="/mydata"  component={EditorData}/>
    </switch>
  </Router>
      </div>
    );
  }
}

export default App;
