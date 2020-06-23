import  {connect} from 'react-redux';
import React, { Component } from 'react';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import './home.css';
import InputFieldHome from '../../components/inputFieldsEmail/index.js';
import SubmitBtn from '../../components/submitBtn/index.js';
import registerRequest from '../../actions/register.js';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userName: '',
        email: '' ,
        password: '',
      }
      this.signup =this.signup.bind(this);
      this.signIn =this.signIn.bind(this);
      this.handleChange =this.handleChange.bind(this);
  }

  handleChange(e ){
    this.setState({
      [e.target.name]: e.target.value ,
    });
  }

  signup(path){
    const data = {name : this.state.userName,
                  email : this.state.email,
                  password : this.state.password,
                };
    if(this.state.userName.length > 0 &&
       this.state.email.length > 0 &&
       this.state.password.length > 0 ){
          this.props.registerRequest(data);
        }
        else{
          alert('inavlid data');
        }
        if(this.props.register.data &&
           (this.props.register.data.error !== '' &&
           this.props.register.data.email !== '' &&
           this.props.register.data.password !== '')
         ){
         //this.props.history.push("/dash");
        }
      }

  signIn(path){
      path.push('/login');
    }
  componentDidUpdate(){
        if(this.props.register.data &&
          this.props.register.data.name !== '' &&
          this.props.register.data.email !== '' &&
          this.props.register.data.password !== ''
        ){
            //this.props.history.push("/dash");
          }
        }
  render() {
    return (
      <div class = 'home-container'>
       <div class = 'logo-div'>

         <p>Journal</p>
      
        </div>
        <div class = 'form-div'>
          <p class = 'home-header'> Sign up </p>
          <div>
           <InputFieldHome
           icon = 'name'
           handleChange ={this.handleChange}
           name = 'userName'
           placeholder = 'user name'
           />
           <InputFieldHome
           icon = 'email'
           handleChange ={this.handleChange}
           name ='email'
           placeholder = 'email address '
           />
           <InputFieldHome
           icon= 'password'
           handleChange ={this.handleChange}
           name = 'password'
           placeholder = ' password '
           />
           {
            this.props.register.error &&
            this.props.register.error.response &&
            this.props.register.error.response.data ?
            <p class = 'error-text'>{this.props.register.error.response.data}</p> :null
            }
            <SubmitBtn
             lable = 'sign up'
             myButton= {()=>this.signup(this.props.history)}
             />
         </div>
          <div class = 'form-footer'>
           <button  class = 'sign-in' onClick={()=>this.signIn(this.props.history)} >Sign in </button>
           <p>if you already have an account </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
      registerRequest: (params) => {dispatch(registerRequest(params))},
    }
	);
const mapStateToProps = (state, props) => {
     return {
          register : state.register,
        }
      };

export default withRouter(connect(mapStateToProps ,mapDispathToProps)(HomePage));
