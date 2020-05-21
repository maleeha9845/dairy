import React , { Component } from 'react';
import  {connect} from 'react-redux';
import './settingSide.css';

class SettingSideBar extends Component {
  constructor(props) {
     super(props)
     this.state={
       active: '1',
      }
      this.settingBtn= this.settingBtn.bind(this);
    }
// for changing class on select of the side bar buttons.
    settingBtn(mynum){
      this.setState({
        active:mynum,
      })
    }

 render() {
   return(
     <div class = 'setting-side-bar-container'>
     <div>
     <p class = 'setting-parent'> Settings</p>
     <button
     class= {this.state.active === '1'? 'selected-setting-btn' : 'setting-side-btn'}
     onClick = {()=>this.settingBtn('1')}>
     Account</button>
     <button
     class= {this.state.active === '3'? 'selected-setting-btn' : 'setting-side-btn'}
     onClick = {()=>this.settingBtn('3')}>preference</button>
     </div>
     <div class = 'setting-footer-div'>
     <p class = 'upgarte'>Upgrate to PRO </p>
     <p class = 'setting-text-footer'>experience journaling at its best !</p>
     <button class = 'upgrade-btn'> upgrade </button>
     </div>
     </div>
  );
 }
}

export default SettingSideBar;
