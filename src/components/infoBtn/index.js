import  {connect} from 'react-redux';
import React, { Component } from 'react';


class InfoBtn extends Component {
  constructor(props) {
    super(props);
   }
   render() {
      return (
        <div>
        <button onClick = {this.props.onClick}>{this.props.lable}</button>
       </div>
    );
   }
 }

export default InfoBtn;
