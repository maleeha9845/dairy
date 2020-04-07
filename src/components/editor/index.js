import React from 'react';
import ReactDOM from 'react-dom';
import  {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import './editor.css';
import ExpandedEditor from '../epandedEditor/index.js';
import ShortEditor from '../shortEditor/index.js';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand : 'false',
      content : this.props.content,
    };
    this.expandBtn = this.expandBtn.bind(this);
    this.shortBtn = this.shortBtn.bind(this);
  }
    expandBtn(){
      this.setState({
        expand:"true",
      })
    }

    shortBtn(){
      this.setState({
        expand:"false",
      })
    }

   render() {
     const key= this.props.activeSidelist;
     const content = this.props.content;

     if (this.state.expand === 'false'){
       return (
          <div class ='tool-div'>
            <ShortEditor content = {content}/>
            <button class= 'expand-btn' onClick= {()=>this.expandBtn()}>^</button>
          </div>
        );
      }
       else{
         return (
           <div class ='tool-div'>
            <ExpandedEditor content = {content}/>
            <button class= 'expand-btn'  onClick= {()=>this.shortBtn()}>^</button>
          </div>
        );
      }
    }
  }

const mapStateToProps = (state, props) => {
    return {
      read: state.read,
      list : state.list
    }
  }

export default withRouter(connect(mapStateToProps)(MyEditor));
