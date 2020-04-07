import React, { Component } from 'react';
import '../chat/multistreaming.css';
import {withRouter} from 'react-router-dom';

class MultistreamingPage extends Component {
	constructor(props) {
	 super(props)
	 this.state = {
	 value: ''
	 }
 }

   render(){
   return (
   <div class = 'mutistream-page-container'>
   <p>its multistreaming page</p>
   </div>
  );
 }
}

export default withRouter(MultistreamingPage);
