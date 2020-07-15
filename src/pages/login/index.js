import  {connect} from 'react-redux';
import React, { Component } from 'react';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import './login.css';
import InputFieldHome from '../../components/inputFieldsEmail/index.js';
import SubmitBtn from '../../components/submitBtn/index.js';
import loginRequest from '../../actions/login.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '' ,
      password: '',
      }
      this.handleChange =this.handleChange.bind(this);
      this.login =this.login.bind(this);
      this.forgotBtn =this.forgotBtn.bind(this);
      this.createAccount =this.createAccount.bind(this);
    }
  handleChange(e ){
    this.setState({
      [e.target.name]: e.target.value ,
    });
  }

  login(){

    const data = {
                  email : this.state.email,
                  password : this.state.password,
                  };
                  this.props.loginRequest(data);
                }

  createAccount(path){
        path.push('/home');
      }

  forgotBtn(path){
        path.push('/forgot')
      }

componentDidUpdate(){
  if(this.props.login.data && this.props.login.data.token ){
    this.props.history.push("/dash");

  }
}


  render() {
    return (
      <div class = 'login-container'>
       <div class = 'login-logo-div'>
         <p>Journal</p>
        </div>
        <div class = 'login-form-div'>
          <p class = 'login-header'> Log in </p>
          <div class = 'login-text-div'>
          <p class = 'login-text'>please log in below, or</p>
          <button class = 'sign-in' onClick= {()=>this.createAccount(this.props.history)} >create an account</button>
          </div>
          <div>
           <InputFieldHome icon = 'email' handleChange ={this.handleChange} name ='email' placeholder = 'email'/>
           <InputFieldHome icon = 'password'  handleChange ={this.handleChange} name = 'password' placeholder ='password'/>
           {
             this.props.login.error ?
              <p class ='error-text'>{this.props.login.error}</p> : null
           }
           <SubmitBtn lable = 'Log in' myButton= {()=>this.login()}/>
          </div>
          <div class = 'login-form-footer'>
           <button  class = 'Forgot-password' onClick = {()=>this.forgotBtn()}>Forgot password? </button>
          </div>
        </div>
      </div>

    );
  }
}

const mapDispathToProps = dispatch => ({
      loginRequest: (params) => {dispatch(loginRequest(params))},
    }
	);
  const mapStateToProps = (state, props) => {
        return {
          login : state.login,
        }
      };

export default withRouter(connect(mapStateToProps ,mapDispathToProps)(Login));
