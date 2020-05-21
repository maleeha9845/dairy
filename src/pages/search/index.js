import  {connect} from 'react-redux';
import React, { Component } from 'react';
import SearchBar from '../../components/searchBar/index.js';
import List from '../../components/entrylist/index.js';
import InputField from '../../components/inputfields/index.js';
import './search.css';
import SubmitBtn from '../../components/submitBtn/index.js';
import MyEditor from '../../components/editor/index.js';
import SideBarBtn from '../../components/sideBarBtn/index.js';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
       readJournal:'true',
       emptyEditor :'false',
       readJournal:'true',
       unedit: 'false',
        content: this.props.side &&
                        this.props.side.data &&
                        this.props.side.data['journal']?
                        this.props.side.data['journal']['tittle'] :
                        this.props.side.data['journal']['tittle'] ,
       search:'',
       ListItems : [{
        id : 1,
        name: this.props.side &&
                        this.props.side.data &&
                        this.props.side.data['journal']?
                        this.props.side.data['journal']['tittle'] :
                        this.props.side.data['journal']['tittle'] ,
      },
        {id : 2,
        name: this.props.side &&
                        this.props.side.data &&
                        this.props.side.data['journal']?
                        this.props.side.data['journal']['tittle2'] :
                        this.props.side.data['journal']['tittle2'] ,

      },
        {id : 3,
        name: this.props.list &&
                       this.props.list.data &&
                       this.props.list.data['holidays']?
                       this.props.list.data['holidays']['child3'] :
                       this.props.list.data['holidays']['child3'] ,
        },
        {
          id : 4,
          name: this.props.list &&
                         this.props.list.data &&
                         this.props.list.data['events']?
                         this.props.list.data['events']['child1'] :
                         this.props.list.data['events']['child1'] ,
        },
        {id : 5,
          name: this.props.list &&
                         this.props.list.data &&
                         this.props.list.data['events']?
                         this.props.list.data['events']['child2'] :
                         this.props.list.data['events']['child3'] ,
        },
        {id : 6,
          name: this.props.list &&
                         this.props.list.data &&
                         this.props.list.data['events']?
                         this.props.list.data['events']['child3'] :
                         this.props.list.data['events']['child3'] ,},
        {
           id : 1,
           name: this.props.side &&
                 this.props.side.data &&
                this.props.side.data['journal']?
                this.props.side.data['journal']['tittle'] :
                this.props.side.data['journal']['tittle'] ,
                         },
        {id : 2,
         name: this.props.side &&
               this.props.side.data &&
               this.props.side.data['journal']?
               this.props.side.data['journal']['tittle2'] :
               this.props.side.data['journal']['tittle2'] ,
             },
           ],
      send : 'false',
    }
    this.handleChange = this.handleChange.bind(this);
    this.data=this.data.bind(this);
 	  this.viewBtn = this.viewBtn.bind(this);
    this.editBtn = this.editBtn.bind(this);
  }
  //entry list btn function...
  data(num ,data){
  this.setState({
      unedit:'true',
      content: data,
      readJournal:'true',
     })
   }
// to read selected entry
  viewBtn(){
    this.setState({
      readJournal:'true',
    })
  }
// to edit selected entry..
  editBtn(){
    this.setState({
      readJournal:'false',
    })
  }
// search input field handler function.
  handleChange(e) {
    this.setState({
      search : e.target.value,
    })
  }

  render() {
    // .filter  - to filter items .
    // . indexOf - list Item letter index .
    // . toLowerCase - to remove the restriction of upercase and lower case
  const filteredList = this.state.ListItems.filter(
    (ListItem)=>{
      return ListItem.name.toLowerCase().indexOf(
        this.state.search.toLowerCase())!== -1;
        }
      )
  return (
        <div class = 'search'>
            <div class = 'search-container'>
              <InputField handleChange={this.handleChange}
                  value = {this.state.search}
                  lable = 'Search'/>
              <div class = 'search-scroll-bar'>
                   {filteredList.map((listItem)=>{
                     return(
                      <div>
                       <SideBarBtn lable='Add an entry '
                        onClick = {()=> this.data(listItem.id ,listItem.name)}
                        lable = {listItem.name}
                        active = '1'
                       />
                     </div>
                    )
                   }
                  )
                }
           </div>
         </div>
         <div class = 'search-editor'>
         <MyEditor
           editorList ='false'
           editorNav = 'true'
           content = {this.state.content}
           emptyEditor ='false'
           readJournal = {this.state.readJournal}
           readBtn={this.readBtn}
           edit={this.editBtn}
           unedit = {this.state.unedit}
         />
         </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
return {
  list: state.list,
  side : state.side,
  }
 }

export default connect(mapStateToProps )(Search);
