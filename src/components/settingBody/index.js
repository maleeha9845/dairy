import React , { Component } from 'react';
import './settingBody.css';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";
import  {connect} from 'react-redux';
import profile from "../images/profile.png";
import {FiEdit} from 'react-icons/fi';
import InputField from '../inputfields/index.js';
import RadioBtn from '../radioBtn/index.js';
import editInfoRequest from '../../actions/editInfo.js';

class SettingBody extends Component {
  constructor(props) {
     super(props)
     this.state = {
         userName: '',
         email: '',
         password: ''
       }
  this.logout=this.logout.bind(this);
  this.handleChange =this.handleChange.bind(this);
     }

   logout(path){
     path.push('/home');
   }

   handleChange(e){
     this.setState({
       [e.target.name]: e.target.value
     });
  }

 componentDidUpdate(){
    const data = {userName : this.state.userName,
                  email : this.state.email,
                   password:this.state.password,
                };
  this.props.editInfoRequest(data);

  }


  render(){
    console.log(this.state.email);
  return (
    <div class='setting-body-container'>
        <div class = 'profile-div'>
          <img src={profile} alt="profile" class='profile-pic'/>
          <p class = 'setting-text'>Profile Picture</p>
          <button class='set-icon-btn'>
          <FiEdit size= {15} color= '#4ebdf8' className = 'setting-body-icon'/>
          </button>
          </div>
          <div class='setting-input-div'>
            <InputField lable = 'User Name'
            handleChange = {this.handleChange}
            name = 'userName'
            placeholder = 'user name'
            />
            <InputField lable = 'Email'
            handleChange = {this.handleChange}
            name = 'email'
            placeholder = 'maleehabaw@gamil.com '
            />
            <InputField lable = 'Password'
            placeholder = '*********'
            handleChange ={this.handleChange}
            name = 'password'

          />
          </div>
          <div class = 'setting-list'>
          <RadioBtn text = ' Autoplay Videos' />
          <RadioBtn text = ' Auto-mention Date and Time' />
          <RadioBtn text = ' Auto-mention Location' />
          </div>
          <div class = 'logOut-div'>
          <button class = 'logout-btn' onClick = {()=>this.logout(this.props.history)}><p class = 'logout-text' >Log out</p></button>
          </div>
      </div>
    );

  }
}

const mapDispathToProps = dispatch => ({
      editInfoRequest: (params) => {dispatch(editInfoRequest(params))},
    }
	);

export default withRouter(connect(null ,mapDispathToProps)(SettingBody));
