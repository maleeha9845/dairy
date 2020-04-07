import React , { Component } from 'react';
import './navBar.css';
import NavBtn from '../navBtn/index.js';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";
import  {connect} from 'react-redux';

class NavBar extends Component {
  constructor(props) {
     super(props)
     this.state={}
    }

   render() {
     return (
       <div class = 'nav-bar-container' >
             <NavBtn onClick= {this.props.journal} lable = '1' />
             <NavBtn onClick= {this.props.settings} lable = '2' />
             <NavBtn onClick= {this.props.search} lable = '3' />
        </div>

      );
    }
  }

 const mapStateToProps = (state, props) => {
     return {
             one: state.one,
           }
         };

 export default withRouter(connect(mapStateToProps)(NavBar));
