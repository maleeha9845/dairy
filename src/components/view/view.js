import  {connect} from 'react-redux';
import React, { Component } from 'react';

import './view.css';




class View extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const key=this.props.activeSidelist;
    const child1 = this.props.list &&
                   this.props.list.details &&
                   this.props.list.details[key]?
                   this.props.list.details[key]['child1'] :
                   this.props.list.details['1']['child1'] ;
     return(
       <div>
       
          <p>{child1}</p>
          <p>{this.props.content}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    list: state.list,
    content : state.read.data,
   }
  }

export default connect(mapStateToProps)(View);
