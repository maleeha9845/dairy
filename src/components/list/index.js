import React , { Component } from 'react';
import  {connect} from 'react-redux';

import './list.css';
import ListBtn from '../listBtn/index.js';
import SideBarBtn from '../sideBarBtn/index.js';
import Popup from '../popupInputField/index.js';
import addEntryRequest from '../../actions/addEntry.js';


class ListBar extends Component {
  constructor(props) {
     super(props)
     this.state={
       active: '1',
       showPopup: false ,
       addEntry:"",

      }
      this.SelectedMe= this.SelectedMe.bind(this);
      this.handleChange= this.handleChange.bind(this);
    }

// for changing class on select of the side bar buttons.
    SelectedMe(mynum,path){
      this.setState({
        active:mynum,
      })
    }

    togglePopup() {
     if (this.props.add === 'true'){
       this.setState({
            showPopup: !this.state.showPopup
       });
     }else {
       return null;
     }
     this.props.activeSave();
       }

       static getDerivedStateFromProps(props, state) {
         if (props.editor !== state.editor) {
           return {
             editor: props.editor,

           };
         }
         return null;
       }

       submit() {
         this.setState({
         showPopup: !this.state.showPopup
         });
         const data = this.state.addEntry;
         console.log(data);
         this.props.addEntryRequest(data);
         this.props.emptyEditor();
       }

        handleChange(e){
            const value = e.target.value;
            this.setState({
              addEntry : value,
             })
          }

  render() {

    const key=this.props.activeSidelist;

    const parent = this.props.list &&
                  this.props.list.data &&
                  this.props.list.data[key]?
                  this.props.list.data[key]['parent'] :
                  this.props.list.data['1']['parent'] ;

    const child1  = this.props.side &&
                   this.props.side.data &&
                   this.props.side.data['journal']?
                   this.props.side.data['journal']['tittle'] :
                   this.props.side.data['journal']['tittle'] ;


    const child2 = this.props.side &&
                    this.props.side.data &&
                    this.props.side.data['journal']?
                    this.props.side.data['journal']['tittle2'] :
                    this.props.side.data['journal']['tittle2'] ;

    const child3 = this.props.list &&
                   this.props.list.data &&
                   this.props.list.data[key]?
                   this.props.list.data[key]['child3'] :
                   this.props.list.data['1']['child3'] ;
  return (
    <div class= 'list-container' >
     <div class = 'block1'>
     <div class = 'header'>

      <button class = 'close' onClick = {this.props.close}>***</button>
      <p class = 'tittle'>Holiday</p>

     </div>
      <div class= 'list-body'>


       <ListBtn lable={child1}
         onClick = {this.props.child1}
         index = '1'
         location = '#0065 street . huryy layout'
         active = {this.props.active}
         date = '04/11/1995'
         time = '3:30pm'
         place = 'mysore'
       />

       <ListBtn lable={child2}
         onClick = {this.props.child2}
         index= '2'
         active = {this.props.active}
         date = '04/11/1995'
         location = '#86 street . bla layout'
         time = '3:30pm'
         place = 'mysore'
       />

       <ListBtn lable={child3}
         onClick = {this.props.child3}
         active = {this.props.active}
         index= '3'
         location = '#1165 street . holaaa layout'
         date = '04/11/1995'
         time = '3:30pm'
         place = 'mysore'
       />

       <ListBtn lable={child2}
         onClick = {this.props.child2}
         index= '2'
         active = {this.props.active}
         date = '04/11/1995'
         location = '#86 street . bla layout'
         time = '3:30pm'
         place = 'mysore'
       />

       <ListBtn lable={child3}
         onClick = {this.props.child3}
         active = {this.props.active}
         index= '3'
         location = '#1165 street . holaaa layout'
         date = '04/11/1995'
         time = '3:30pm'
         place = 'mysore'
       />

       <ListBtn lable={child2}
         onClick = {this.props.child2}
         index= '2'
         active = {this.props.active}
         date = '04/11/1995'
         location = '#86 street . bla layout'
         time = '3:30pm'
         place = 'mysore'
       />

       <ListBtn lable={child3}
         onClick = {this.props.child3}
         active = {this.props.active}
         index= '3'
         location = '#1165 street . holaaa layout'
         date = '04/11/1995'
         time = '3:30pm'
         place = 'mysore'
       />
       <ListBtn lable={child2}
         onClick = {this.props.child2}
         index= '2'
         active = {this.props.active}
         date = '04/11/1995'
         location = '#86 street . bla layout'
         time = '3:30pm'
         place = 'mysore'
       />

       <ListBtn lable={child3}
         onClick = {this.props.child3}
         active = {this.props.active}
         index= '3'
         location = '#1165 street . holaaa layout'
         date = '04/11/1995'
         time = '3:30pm'
         place = 'mysore'
       />
       </div>
    </div>

     <div class='add-entry'>
     <SideBarBtn lable='Add an entry '
     onClick = { this.togglePopup.bind(this)}
     active = {this.state.active}

     text ='add'
     count = '+'
     />
     </div>
     {this.state.showPopup ?
     <Popup
         lable = 'Entry Name'
          submit={this.submit.bind(this)}
          handleChange = {this.handleChange}

     />
     : null
     }
   </div>
  );


  }
}

const mapDispathToProps = dispatch => ({
      addEntryRequest: (params) => {dispatch(addEntryRequest(params))},
    }
	);

const mapStateToProps = (state, props) => {
  return {
    list: state.list,
    side : state.side,
  }
}

export default connect(mapStateToProps ,mapDispathToProps)(ListBar);
