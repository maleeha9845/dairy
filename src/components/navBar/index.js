import React , { Component } from 'react';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";
import  {connect} from 'react-redux';
import {GiBookmarklet} from 'react-icons/gi';
import {GoSearch} from 'react-icons/go';
import {FiSettings} from 'react-icons/fi';
import './navBar.css';
import NavBtn from '../navBtn/index.js';

class NavBar extends Component {
  constructor(props) {
     super(props)
     this.state={}
    }

   render() {
     return (
       <div class = 'nav-bar-container' >

             <button class = "nav-btn" onClick= {this.props.journal}>
             <GiBookmarklet size={25}
                className={this.props.selectedMe === 'journal'? 'icon-selected' : 'icon'}/>
             </button>

             <button onClick= {this.props.search} class = "nav-btn">
             <GoSearch size={25}
                className={this.props.selectedMe === 'search'? 'icon-selected' : 'icon'}/>
             </button>

             <button onClick= {this.props.settings} class = "nav-btn">
             <FiSettings size={25}
                className={this.props.selectedMe === 'settings'? 'icon-selected' : 'icon'}/>
             </button>
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
