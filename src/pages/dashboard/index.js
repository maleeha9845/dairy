import React, { Component } from 'react';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";
import  {connect} from 'react-redux';

import './dash.css';

import NavBar from '../../components/navBar/index.js';
import SideBar from '../../components/sideBar/index.js';
import ListBar from '../../components/list/index.js';
import MyEditor from '../../components/editor/index.js';
import sideBarRequest from '../../actions/side.js';
import listApiRequest from '../../actions/list.js';
import View from '../../components/view/view.js';

class Dashboard extends Component {
	constructor(props) {
	 super(props)
	 this.state = {
	   activeSideBar : 'journal',
		 activeSidelist : 'holidays',
		 appear : 'true',
		 unedit: 'false',
	  };
   this.navBtnFunc=this.navBtnFunc.bind(this);
	 this.listBtnFunc=this.listBtnFunc.bind(this);
	 this.data=this.data.bind(this);
  }

	navBtnFunc(active){
		this.setState({
			activeSideBar :active,
			appear : 'false',
			child : ''
    })
	}
		listBtnFunc(num){
	    this.setState({
		  activeSidelist : num,
	 })
	}

	  componentWillMount(){
		 this.props.sideBarRequest();
		 this.props.listApiRequest();
	  }

		closeBtn(){

			this.setState({
				appear :'true',
			})
		}

		data(){
			const key= this.state.activeSidelist;
      const child1 = this.props.list &&
                     this.props.list.details &&
                     this.props.list.details[key]?
                    this.props.list.details[key]['child1'] :
                    this.props.list.details['1']['child1'] ;
          const content = child1;
					console.log(child1);
			this.setState({
				unedit:'true',
				child: child1,

			})
		}


   render(){
		 if (this.state.appear === 'false'){
      const parent = this.props.one;
      return (
       <div class = 'container'>
		   	<NavBar
					 journal={()=>this.navBtnFunc('journal') }
					 settings = {()=>this.navBtnFunc('settings')}
         />
				 <SideBar
					 activeSideBar={this.state.activeSideBar}
					 holiday={()=>this.listBtnFunc('holidays') }
					 events = {()=>this.listBtnFunc('events')}
					 daily={()=>this.listBtnFunc('daily') }
					 travel = {()=>this.listBtnFunc('travel')}
					 recipies={()=>this.listBtnFunc('recipies') }
				   close= {()=>this.closeBtn()}
				 />
				 <ListBar
					 activeSideBar={this.state.activeSideBar}
					 activeSidelist={this.state.activeSidelist}
					 onClick = {()=>this.data()}
					 />
					 <MyEditor
						activeSidelist={this.state.activeSidelist}
						content = {this.state.child}
						/>
    </div>
    );
  }
	 else{
        if (this.state.unedit === 'true'){
				const parent = this.props.one;
				return(
          <div class = 'container'>
		 		   <NavBar
			 			 journal={()=>this.navBtnFunc('journal') }
			 			 settings = {()=>this.navBtnFunc('settings')}
         	 />

					</div>
			 );
	   }
		 else {
			 const parent = this.props.one;
       return(
        <div class = 'container'>
		  		 <NavBar
		  			 journal={()=>this.navBtnFunc('journal') }
		  			 settings = {()=>this.navBtnFunc('settings')}
					  />
        </div>
			 ) ;
		  }
		 }
    }
   }

const mapDispathToProps = dispatch => ({
    sideBarRequest: (params) => {dispatch(sideBarRequest(params))},
			listApiRequest: (params) => {dispatch(listApiRequest(params))},
    }
	);

const mapStateToProps = (state, props) => {
      return {
        one: state.one,
				list : state.list,
      }
    };

export default withRouter(connect(mapStateToProps ,mapDispathToProps)(Dashboard));
