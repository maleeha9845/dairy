import  {connect} from 'react-redux';
import React, { Component } from 'react';
import InfoBtn from '../../components/infoBtn/index.js';
import readApiRequest from '../../actions/read.js';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";


class SelectDate extends Component {
  constructor(props) {
    super(props);
    this.btnfunc = this.btnfunc.bind(this);
   }

   btnfunc(path , key){
     path.push(key) ;
   }
   componentWillMount(){
     this.props.readApiRequest();
   }

   render() {
      return (
        <div>
        {this.props.read && this.props.read.list ? this.props.read.list.map((list)=>{
          console.log(list);
          return (
              <InfoBtn onClick= {() => this.btnfunc(this.props.history,"/mydata/"+list )} lable = {list}/>
            )
          }
        ) :'try again'
        }
        </div>
      );
   }
 }

const mapDispathToProps = dispatch => ({
      readApiRequest: (params) => {dispatch(readApiRequest(params))},
  });

  const mapStateToProps = (state, props) => {
      return {
        read: state.read,
      }
    }
export default withRouter(connect(mapStateToProps ,mapDispathToProps)(SelectDate));
