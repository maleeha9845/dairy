import React, { Component } from 'react';
import './multistreaming.css';
import {withRouter} from 'react-router-dom';

class ChatPage extends Component {
	constructor(props) {
	 super(props)
	 this.state = {
	 value: ''
	 }
 }

   render(){
   return (
   <div class = 'mutistream-page-container'>
   <p>its Chat page</p>
   </div>
  );
 }
}

export default withRouter(ChatPage);
