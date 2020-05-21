import React from 'react';
import './popup.css';
import InputField from '../inputfields/index.js';
import SubmitBtn from '../submitBtn/index.js';

class Popup extends React.Component {
  render() {
      return (
        <div class='popup'>
          <div class = 'new'>
              <div>
                  <InputField
                  placeholder = 'write  here'
                  lable = {this.props.lable}
                   handleChange = {this.props.handleChange}/>
              </div>
              <div class= 'pop-btn'>
              <SubmitBtn  lable= 'Add' myButton = {this.props.submit}/>
              <SubmitBtn  lable= 'cancel' myButton = {this.props.submit}/>
              </div>
          </div>
        </div>
      );
    }
  }

export default Popup;
