import  {connect} from 'react-redux';
import React, { Component } from 'react';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import './forgot.css';
import InputFieldHome from '../../components/inputFieldsEmail/index.js';
import SubmitBtn from '../../components/submitBtn/index.js';
import forgotApiRequest from '../../actions/forgot.js';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      }

      this.handleChange =this.handleChange.bind(this);
      this.submit =this.submit.bind(this);

  }
  handleChange(e ){
    this.setState({
      [e.target.name]: e.target.value ,
    });
  }

  submit(path){
    path.push('/dash');
    const data = {
                  email : this.state.email,
                 };
    this.props.forgotApiRequest(data);
    }

  render() {
    return (

      <div class = 'forgot-container'>
         <p class = 'forgot-header'>Did you forgot your password ?</p>
         <p class = 'forgot-text'> Submit your  valid email address !</p>
         <div class = 'forgot-input'>
            <InputFieldHome icon = 'email' handleChange ={this.handleChange} name ='email'/>
          </div>
          <SubmitBtn lable = 'submit' myButton= {()=>this.submit(this.props.history)}/>
      </div>
    );
  }
 }

const mapDispathToProps = dispatch => ({
      forgotApiRequest: (params) => {dispatch(forgotApiRequest(params))},
     }
	);

export default withRouter(connect(null ,mapDispathToProps)(ForgotPassword));
