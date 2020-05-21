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

if (this.state.appearSideBar === 'true '){
 const parent = this.props.one;
 return (
	<div class = 'container'>
	 <NavBar
			journal={()=>this.navBtnFunc('journal') }
			settings = {()=>this.navBtnFunc('settings')}
			selectedMe = {this.state.activeSideBar}
		/>
		<SideBar
			activeSideBar={this.state.activeSideBar}
			holiday={()=>this.sideBtnFunc('holidays' ,'1') }
			events = {()=>this.sideBtnFunc('events','2')}
			daily={()=>this.sideBtnFunc('daily','3') }
			travel = {()=>this.sideBtnFunc('travel','4')}
			recipies={()=>this.sideBtnFunc('recipies','5') }
			close= {()=>this.closeBtnSide()}
			active = {this.state.selectSideBtn}
		/>
		<ListBar
			activeSideBar={this.state.activeSideBar}
			activeSidelist={this.state.activeSidelist}
			child1 = {()=>this.data('1')}
			child2 = {()=>this.data('2')}
			child3 = {()=>this.data('3')}
			active = {this.state.selectListBtn}
			closeList= {()=>this.closeBtnList()}
			/>
			<MyEditor
			 activeSidelist={this.state.activeSidelist}
			 content = {this.state.child}
			 />
	</div>
 );
}else

	 if (this.state.appearsideBar === 'true' && this.state.appearListBar === 'false'){
	 return(
		 <div class = 'container'>
			<NavBar
				journal={()=>this.navBtnFunc('journal') }
				settings = {()=>this.navBtnFunc('settings')}
			/>
			<SideBar
				activeSideBar={this.state.activeSideBar}
				holiday={()=>this.sideBtnFunc('holidays' ,'1') }
				events = {()=>this.sideBtnFunc('events','2')}
				daily={()=>this.sideBtnFunc('daily','3') }
				travel = {()=>this.sideBtnFunc('travel','4')}
				recipies={()=>this.sideBtnFunc('recipies','5') }
				close= {()=>this.closeBtn()}
				active = {this.state.selectSideBtn}
			/>
			<MyEditor
			 activeSidelist={this.state.activeSidelist}
			 content = {this.state.child}
			 />
			 </div>
	);
}else{
	return(
		<div class = 'container'>
		 <NavBar
			 journal={()=>this.navBtnFunc('journal') }
			 settings = {()=>this.navBtnFunc('settings')}
		 />
		 </div>
	)
}
// 2 } removed
