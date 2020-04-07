import React , { Component } from 'react';
import './navBtn.css';

class NavBtn extends Component {
  constructor(props) {
     super(props)
     this.state={
      }
    }

    render() {
     return (
       <div>
        <button class = "nav-btn" onClick={this.props.onClick}>
          <p>{this.props.lable}</p>
        </button>
       </div>
     )
   }
 }

 export default NavBtn;
