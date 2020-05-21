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
import Search from '../search/index.js';
import Setting from '../settings/index.js';
import registerRequest from '../../actions/register.js';

class Dashboard extends Component {
	constructor(props) {
    super(props)
		this.state = {
		 activePage: 'journal',
	   activeSideBar : 'journal',
		 activeSidelist : 'holidays',
		 unedit: 'false',
		 selectSideBtn: '1',
		 selectListBtn: '1',
		 appearListBar:'true',
		 appearEDitor : 'true',
		 appearSideBar : 'true',
		 search: 'false',
		 setting:'false',
		 readJournal:'true',
		 content:"",
		 emptyEditor :'false',
		 showPopup:'false',
		 add :'true',
		 save :'false',
	 };
   this.navBtnFunc=this.navBtnFunc.bind(this);
	 this.sideBtnFunc=this.sideBtnFunc.bind(this);
	 this.data=this.data.bind(this);
	 this.viewBtn = this.viewBtn.bind(this);
   this.editBtn = this.editBtn.bind(this);
   this.emptyEditor = this.emptyEditor.bind(this);
  }
//function for adding new entry.
	emptyEditor(){
		this.setState({
			emptyEditor:'true',
			add:'true'
		})
	}
//function of navbar btn . setting active page
	navBtnFunc(active){
		if (active === 'settings'){
		this.setState({
			setting: 'true',
			appearSideBar:'false',
	  	appearListBar:'false',
	  	appearEDitor:'false',
			activePage: active,
		})
   }else if(active === 'search'){
		this.setState({
			search : 'true',
			setting: 'false',
			appearSideBar:'false',
	  	appearListBar:'false',
	  	appearEDitor:'false',
			activePage: active
		})
	}
 else{
	 this.setState({
		 activeSideBar :'journal',
	  	appearSideBar:'true',
	  	appearListBar:'true',
	  	appearEDitor:'true',
			activePage: active

	 })
	}
 }

		sideBtnFunc(name , num){
	    this.setState({
		  activeSidelist : name,
			selectSideBtn : num,
			appearListBar:'true',
	 })
	}
// calling actions ...
  componentWillMount(){
    this.props.sideBarRequest();
		 this.props.listApiRequest();
		//  if(this.props.register.data &&
		// 		(this.props.register.data.name !== '' &&
		// 		this.props.register.data.email !== '' &&
		// 		this.props.register.data.password !== '')
		// 	){
		// 	this.props.history.push("/dash");
		// }else{
		// 	this.props.history.push('/home');
		// }
								  }
// setting last entry as default editor content...
	componentDidUpdate(){
		if(this.state.content === ''){
			const data = this.props.side &&
										 this.props.side.data &&
										 this.props.side.data['journal']?
										 this.props.side.data['journal']['editorData']:
										 'ok';
										 this.setState({
											 content :data,
										 })
									 }
								 }
// side bar closing function..
  closeBtn(){
    	this.setState({
				appearSideBar :'false',
			})
		}
// list bar closing function..
	closeBtnList(){
    	this.setState({
				appearListBar :'false',
			})
		}
//list bar btn function . for sending data.
		data(num ,data){
			this.setState({
				unedit:'true',
				content: data,
				selectListBtn:num,
				readJournal:'true',
				emptyEditor:'false',
				save:false,
			})
		 }
// editor view btn function... uneditable mode gets on!
	 viewBtn(){
		this.setState({
			 	readJournal:'true',
				add :'true',
			})
		}
// editor edit btn function... editable mode gets on!
	editBtn(){
		this.setState({
			readJournal:'false',
			add : 'false'
		})
	}

//save btn funtion .. for saving data of new entry.
	save(data){
   this.setState({
		unedit:'true',
		readJournal:'true',
		emptyEditor:'false',
		save:false,
	})
 }

//for activating add entry popup...
 activeSave(){
	this.setState({
		save:'false',
		add:'true',
	})
 }

   render(){
		 const data1 = this.props.side &&
                    this.props.side.data &&
                    this.props.side.data['journal']?
                    this.props.side.data['journal']['editorData']:
                    'ok';
		 const data2 = this.props.side &&
							     this.props.side.data &&
							     this.props.side.data['journal']?
							      this.props.side.data['journal']['editorData2']:
							      'ok';

		 console.log(this.state.child);
 // defalut open page . nav list side and edtior is open ....
		 if (this.state.appearSideBar === 'true' && this.state.appearListBar === 'true'){
      const parent = this.props.one;
      return (
       <div class = 'container'>
		   	<NavBar
					journal={()=>this.navBtnFunc('journal') }
					settings = {()=>this.navBtnFunc('settings')}
					search = {()=>this.navBtnFunc('search')}
					selectedMe = {this.state.activePage}
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
				 <ListBar
					 activeSideBar={this.state.activeSideBar}
					 activeSidelist={this.state.activeSidelist}
					 child1 = {()=>this.data('1' , data1)}
					 child2 = {()=>this.data('2', data2)}
					 child3 = {()=>this.data('3' , 'varna lake')}
					 active = {this.state.selectListBtn}
					 close= {()=>this.closeBtnList()}
					 emptyEditor = {this.emptyEditor}
					 add ={this.state.add}
					 activeSave={this.activeSave.bind(this)}
					 />
					 <MyEditor
          	content = {this.state.content}
						editorSide = {this.state.appearSideBar}
						 editorList= {this.state.appearListBar}
						 editorNav = ''
						 readJournal = {this.state.readJournal}
						 viewBtn={this.viewBtn}
						 edit={this.editBtn}
						emptyEditor={this.state.emptyEditor}
						save = {() => this.save() }
            saveData = {this.state.save}
						/>
        </div>
      );
     }
//when side bar is closed ....
	   else{
        if (this.state.appearSideBar === 'false' && this.state.appearListBar === 'true'){
				const parent = this.props.one;
				return(

          <div class = 'container'>
		 		   <NavBar
					 journal={()=>this.navBtnFunc('journal') }
					 settings = {()=>this.navBtnFunc('settings')}
					 search = {()=>this.navBtnFunc('search')}
					 selectedMe = {this.state.activePage}

         	 />
					 <ListBar
					 activeSideBar={this.state.activeSideBar}
					 activeSidelist={this.state.activeSidelist}
					 child1 = {()=>this.data('1' , data1)}
					 child2 = {()=>this.data('2', data2)}
					 child3 = {()=>this.data('3' , 'varna lake')}
					 active = {this.state.selectListBtn}
					 close= {()=>this.closeBtnList()}
					 emptyEditor = {this.emptyEditor}
					 add ={this.state.add}
					 activeSave={this.activeSave.bind(this)}
						/>
						 <MyEditor
						 content = {this.state.content}
						 editorSide = {this.state.appearSideBar}
						  editorList= {this.state.appearListBar}
						  editorNav = ''
						  readJournal = {this.state.readJournal}
						  viewBtn={this.viewBtn}
						  edit={this.editBtn}
						 emptyEditor={this.state.emptyEditor}
						 save = {() => this.save() }
						 saveData = {this.state.save}
							/>

					</div>
			 );
	   }
// when list bar is closed..
		 else{
	        if (this.state.appearSideBar === 'true' && this.state.appearListBar === 'false'){
					const parent = this.props.one;
					return(
	          <div class = 'container'>
			 		   <NavBar
						 journal={()=>this.navBtnFunc('journal') }
						 settings = {()=>this.navBtnFunc('settings')}
						 search = {()=>this.navBtnFunc('search')}
						 selectedMe = {this.state.activePage}
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
               content = {this.state.content}
							 editorSide = {this.state.appearSideBar}
								editorList= {this.state.appearListBar}
								editorNav = ''
								readJournal = {this.state.readJournal}
								viewBtn={this.viewBtn}
								edit={this.editBtn}
							 emptyEditor={this.state.emptyEditor}
							 save = {() => this.save() }
							 saveData = {this.state.save}
								/>
							</div>
				    );
		   }
// when both side and list is closed...
			 else{
		        if (this.state.appearEDitor === 'true' ){
						const parent = this.props.one;
						return(
		          <div class = 'container'>
				 		   <NavBar
							 journal={()=>this.navBtnFunc('journal') }
							 settings = {()=>this.navBtnFunc('settings')}
							 search = {()=>this.navBtnFunc('search')}
							 selectedMe = {this.state.activePage}
		         	 />
								 <MyEditor
                content = {this.state.content}
								editorSide = {this.state.appearSideBar}
								 editorList= {this.state.appearListBar}
								 editorNav = 'true'
								 readJournal = {this.state.readJournal}
								 viewBtn={this.viewBtn}
								 edit={this.editBtn}
								emptyEditor={this.state.emptyEditor}
								save = {() => this.save() }
								saveData = {this.state.save}
									/>

							</div>
					 );
			   }
// setting page.
				 else{
			        if (this.state.setting === 'true' ){
							const parent = this.props.one;
							return(
			          <div class = 'container'>
					 		   <NavBar
								 journal={()=>this.navBtnFunc('journal') }
								 settings = {()=>this.navBtnFunc('settings')}
								 search = {()=>this.navBtnFunc('search')}
								 selectedMe = {this.state.activePage}
			         	 />
									 <Setting/>
							</div>
						 );
				   }
// search page..
					 else{
				        if (this.state.search === 'true' ){
								const parent = this.props.one;
								return(
				          <div class = 'container'>
						 		   <NavBar
									 journal={()=>this.navBtnFunc('journal') }
									 settings = {()=>this.navBtnFunc('settings')}
									 search = {()=>this.navBtnFunc('search')}
									 selectedMe = {this.state.activePage}
				         	 />
										<Search
										 editorNav = 'true'
										 readJournal = {this.state.readJournal}
										 readBtn={this.readBtn}
										 readJournal = {this.state.readJournal}
										 emptyEditor={this.state.emptyEditor}
										 />

									</div>
							 );
					   }
		 else {

       return(
        <div class = 'container'>
		  		 <NavBar
		  			 journal={()=>this.navBtnFunc('journal') }
		  			 settings = {()=>this.navBtnFunc('setting')}
						 search = {()=>this.navBtnFunc('search')}
					  />
        </div>
			  ) ;
		   }
		  }
		 }
    }
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
        side: state.side,
				list : state.list,
				register : state.register,
			  }
      };

export default withRouter(connect(mapStateToProps ,mapDispathToProps)(Dashboard));
