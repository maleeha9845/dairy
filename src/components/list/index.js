import React , { Component } from 'react';
import  {connect} from 'react-redux';

import './list.css';
import ListBtn from '../listBtn/index.js';
import SideBarBtn from '../sideBarBtn/index.js';

class ListBar extends Component {
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
   if(this.props.activeSideBar === 'journal'){
   const key=this.props.activeSidelist;

   const parent = this.props.list &&
                  this.props.list.details &&
                  this.props.list.details[key]?
                  this.props.list.details[key]['parent'] :
                  this.props.list.details['1']['parent'] ;

   const child1 = this.props.list &&
                   this.props.list.details &&
                   this.props.list.details[key]?
                   this.props.list.details[key]['child1'] :
                   this.props.list.details['1']['child1'] ;

    const child2 = this.props.list &&
                   this.props.list.details &&
                   this.props.list.details[key]?
                   this.props.list.details[key]['child2'] :
                   this.props.list.details['1']['child2'] ;

    const child3 = this.props.list &&
                   this.props.list.details &&
                   this.props.list.details[key]?
                   this.props.list.details[key]['child3'] :
                   this.props.list.details['1']['child3'] ;
  return (
    <div class= 'list-container' >
     <div class = 'block1'>
     
       <SideBarBtn lable = {parent} active = '2' parent='parent'/>

       <ListBtn lable={child1}
         onClick = {this.props.onClick}
         index = '2'
         active = {this.state.active}
         date = '04/11/1995'
         time = '3:30pm'
         place = 'mysore'
       />

       <ListBtn lable={child2}
         onClick = { () => this.SelectedMe("3")}
         index= '3'
         active = {this.state.active}
         date = '04/11/1995'
         time = '3:30pm'
         place = 'mysore'
       />

       <ListBtn lable={child3}
         onClick = { () => this.SelectedMe("4")}
         active = {this.state.active}
         date = '04/11/1995'
         time = '3:30pm'
         place = 'mysore'
       />
    </div>

     <div class='add-entry'>
      <SideBarBtn lable ='add section  +' active = '2' parent='parent'/>
     </div>

   </div>
  );

  } else {
    return(
      <div class= 'list-container' >
      </div>
    );
   }
  }
}

const mapStateToProps = (state, props) => {
return {
  list: state.list,
  }
 }

export default connect(mapStateToProps)(ListBar);
