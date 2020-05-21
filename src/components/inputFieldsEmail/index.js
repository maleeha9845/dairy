import  {connect} from 'react-redux';
import React, { Component } from 'react';
import { GoMail} from 'react-icons/go';
import { FaRegUserCircle} from 'react-icons/fa';
import { MdLockOutline} from 'react-icons/md';

import './input.css';

class InputFieldHome extends Component {
  constructor(props) {
     super(props)
     this.state = {

       active: 'false',
     }
     this.onFocus= this.onFocus.bind(this);
     this.onBlur= this.onBlur.bind(this);
   }
   onFocus(){
     this.setState({
       active: 'true',
     })
   }

   onBlur(){
     this.setState({
       active :'false',
     })
   }

   render() {
     return (
       <div class = {this.state.active === 'true' ? 'active-input-div ' :'input-div'}>
       {this.props.icon === 'email'?
       <GoMail size = {20} className = {this.state.active === 'true' ? 'active-input-icon ' :'input-icon'} />:
       (this.props.icon === 'name'?
        <FaRegUserCircle size = {20} className = {this.state.active === 'true' ? 'active-input-icon ' :'input-icon'}/>:
        (this.props.icon=== 'password'?
        <MdLockOutline size = {20} className = {this.state.active === 'true' ? 'active-input-icon ' :'input-icon'}/>:
        "")
       )}
       <input  class = 'in' type="text"
        onChange= {this.props.handleChange}
        placeholder = {this.props.placeholder}
        class = 'email-input'
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        name = {this.props.name}/>
        </div>
    );
  }
}

export default InputFieldHome;
