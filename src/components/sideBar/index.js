import React , { Component } from 'react';
import  {connect} from 'react-redux';
import FaPlus from 'react-icons/fa';
import './sideBar.css';
import SideBarBtn from '../sideBarBtn/index.js';
import Popup from '../popupInputField/index.js';
import addSectionRequest from '../../actions/addSection.js';

class SideBar extends Component {
  constructor(props) {
     super(props)
     this.state={
       active: '1',
       showPopup: false ,
       addSection: "",
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
      this.setState({
           showPopup: !this.state.showPopup
      });

       }

       submit() {
         this.setState({
         showPopup: !this.state.showPopup
         });
         const data = this.state.addSection;
         console.log(data);
         this.props.addSectionRequest(data);
          }

       handleChange(e){
          const value = e.target.value;
          this.setState({
            addSection : value,
          })
        }

 render() {
   const key=this.props.activeSideBar;


   const child1 = this.props.side &&
                   this.props.side.data &&
                   this.props.side.data['journal']?
                   this.props.side.data['journal']['child1'] :
                   this.props.side.data['journal']['child1'] ;

   const child2 = this.props.side &&
                   this.props.side.data &&
                   this.props.side.data[key]?
                   this.props.side.data[key]['child2'] :
                   this.props.side.data['1']['child2'] ;

   const child3 = this.props.side &&
                   this.props.side.data &&
                   this.props.side.data[key]?
                   this.props.side.data[key]['child3']:
                   this.props.side.data['1']['child3'];

   const child4 = this.props.side &&
                    this.props.side.data &&
                    this.props.side.data[key]?
                    this.props.side.data[key]['child4'] :
                    this.props.side.data['1']['child4'] ;

   const child5 = this.props.side &&
                  this.props.side.data &&
                  this.props.side.data[key]?
                  this.props.side.data[key]['child5']:
                  this.props.side.data['1']['child5'];
    const count = this.props.side &&
                   this.props.side.data &&
                   this.props.side.data[key]?
                   this.props.side.data[key]['count']:
                   this.props.side.data['1']['count'];

  return(
    <div class= 'side-bar-container' >
     <div class = 'block1'>

       <div class = 'disappear'>
        <button class = 'close' onClick = {this.props.close}>***</button>
        <p class = 'sid-bar-parent'>Journal</p>

      </div>
      <div class= 'list-body'>

      <SideBarBtn lable={child1}
       onClick = { this.props.holiday}
       active = {this.props.active}
       color = 'holiday'
       count = {count}
       index= '1'
       />

     <SideBarBtn lable={child2}
       onClick = { this.props.events}
       active = {this.props.active}
       color='events'
       count = '18'
       index='2'
     />

     <SideBarBtn lable={child3}
       onClick = {this.props.daily}
       active = {this.props.active}
       color = 'daily'
       count = '21'
       index='3'
     />

     <SideBarBtn lable={child4}
       onClick = { this.props.travel}
       active = {this.props.active}
       color = 'travel'
       count = '08'
       index='4'
     />
       <SideBarBtn lable={child5}
       onClick = { this.props.recipies}
       active = {this.props.active}
       color='recipies'
       count = '18'
       index='5'
       />
       </div>
    </div>
    <div class='add'>

       <SideBarBtn lable='Add a section '
       onClick = { this.togglePopup.bind(this)}
       active = {this.state.active}

       text ='add'
       count = '+'
       />
     </div>
     {this.state.showPopup ?
     <Popup
         lable = 'Section Name'
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
      addSectionRequest: (params) => {dispatch(addSectionRequest(params))},
    }
	);

const mapStateToProps = (state, props) => {
  return {
    side:state.side,
    }
  }

export default connect(mapStateToProps,mapDispathToProps)(SideBar);
