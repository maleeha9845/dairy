import React, { Component } from 'react';
import './settings.css';
import SideBar from '../sideBar/index.js';
import NavBar from '../navBar/index.js';

class SettingPage extends Component {
	constructor(props) {
	 super(props)
	 this.state = {
	 component: 'false',
	 }
   this.AppearSideBar= this.AppearSideBar.bind(this);
	 this.DisappearSideBar= this.DisappearSideBar.bind(this);
 }

 AppearSideBar(){
   this.setState({
     component:'true',
   })
 }
 DisappearSideBar(){
	 this.setState({
     component:'false',
   })
 }

render(){
     if (this.state.component === 'false') {
      return <NavBar AppearSideBar = {this.AppearSideBar}/>;
    } return <SideBar DisappearSideBar={this.DisappearSideBar}/>;
  }
}

export default SettingPage;
