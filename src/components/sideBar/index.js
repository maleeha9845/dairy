import React , { Component } from 'react';
import  {connect} from 'react-redux';

import './sideBar.css';
import SideBarBtn from '../sideBarBtn/index.js';



class SideBar extends Component {
  constructor(props) {
     super(props)
     this.state={
       active: '1',
      }
      this.SelectedMe= this.SelectedMe.bind(this);
    }
// for changing class on select of the side bar buttons.
    SelectedMe(mynum,path){
      this.setState({
        active:mynum,
      })
    }

 render() {
   const key=this.props.activeSideBar;

   const parent = this.props.side &&
                  this.props.side.details &&
                  this.props.side.details[key]?
                  this.props.side.details[key]['parent'] :
                  this.props.side.details['1']['parent'] ;

   const child1 = this.props.side &&
                   this.props.side.details &&
                   this.props.side.details[key]?
                   this.props.side.details[key]['child1'] :
                   this.props.side.details['1']['child1'] ;

   const child2 = this.props.side &&
                   this.props.side.details &&
                   this.props.side.details[key]?
                   this.props.side.details[key]['child2'] :
                   this.props.side.details['1']['child2'] ;

   const child3 = this.props.side &&
                   this.props.side.details &&
                   this.props.side.details[key]?
                   this.props.side.details[key]['child3']:
                   this.props.side.details['1']['child3'];

   const child4 = this.props.side &&
                    this.props.side.details &&
                    this.props.side.details[key]?
                    this.props.side.details[key]['child4'] :
                    this.props.side.details['1']['child4'] ;

   const child5 = this.props.side &&
                  this.props.side.details &&
                  this.props.side.details[key]?
                  this.props.side.details[key]['child5']:
                  this.props.side.details['1']['child5'];

  return(
    <div class= 'side-bar-container' >
     <div class = 'block1'>
       <div class = 'disappear'>

        <button class = 'close' onClick = {this.props.close}>***</button>
        <SideBarBtn lable={parent}
          parent = 'parent'
          onClick = { () => this.SelectedMe("2")}
          active = {this.state.active}
        />
      </div>

      <SideBarBtn lable={child1}
       onClick = { this.props.holiday}
       active = {this.state.active}
       color = 'holiday'
       count = '11'
     />

     <SideBarBtn lable={child2}
       onClick = { this.props.events}
       active = {this.state.active}
       color='events'
       count = '18'
     />

     <SideBarBtn lable={child3}
       onClick = {this.props.daily}
       active = {this.state.active}
       color = 'holiday'
       count = '21'
     />

     <SideBarBtn lable={child4}
       onClick = { this.props.travel}
       active = {this.state.active}
       color = 'travel'
       count = '08'
     />
       <SideBarBtn lable={child5}
       onClick = { this.props.recipies}
       active = {this.state.active}
       color='events'
       count = '18'
       />
    </div>
    <div class='add'>
       <SideBarBtn lable='add section   +'
       onClick = { () => this.SelectedMe("4")}
       active = {this.state.active}
       parent = 'parent'
       />
     </div>
 </div>
  );
 }
}
const mapStateToProps = (state, props) => {
  return {
    side: state.side,
    }
  }

export default connect(mapStateToProps)(SideBar);
