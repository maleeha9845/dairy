import React , { Component } from 'react';
import './inputField.css';


class InputField extends Component {
  constructor(props) {
     super(props)
     this.state = {
       value : '',
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

   render(){
     return (
       <div class='input-container'>
       <p class = {this.state.active === 'true' ? 'lable-onselect':'lable' }>{this.props.lable}</p>
       <input
       class ='input-field'
       type="text"
       name = {this.props.name}
       placeholder = {this.props.placeholder}
       onChange= {this.props.handleChange}
       onFocus={this.onFocus}
       onBlur={this.onBlur}
       />
      </div>
    );
  }
}

export default InputField;
