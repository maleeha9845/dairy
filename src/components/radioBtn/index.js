import React , { Component } from 'react';
import './radio.css';

import {IoIosRadioButtonOn } from 'react-icons/io';
class RadioBtn extends Component {
  constructor(props) {
     super(props)
     this.state={
       active: 'false',
     }
     this.data= this.data.bind(this);
   }

   data(){
     if(this.state.active === 'false'){
       this.setState({
         active:'true',})
       }else{
         this.setState({
           active:'false',
         })
       }
     }

  render(){
    return (
      <div class='radio-container'>
      <p class = 'radio-text'>{this.props.text}</p>
      <button class= {this.state.active=== 'true'  ?'radio-btn-on' : 'radio-btn-off'} onClick={()=>this.data()}>
      <IoIosRadioButtonOn size = {17} color = 'white' className =' radio-icon'/></button>
      </div>
    );
  }
}

export default RadioBtn;
