import  {connect} from 'react-redux';
import React, { Component } from 'react';
import InfoBtn from '../../components/infoBtn/index.js';
import infoApiRequest from '../../actions/info.js';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";


class SendInfo extends Component {
  constructor(props) {
    super(props);

    this.btnfunc = this.btnfunc.bind(this);
   }

   btnfunc(path , key){
     path.push(key) ;
   }
   componentWillMount(){
     this.props.infoApiRequest();

   }

   render() {
      return (
        <div>
        {this.props.info && this.props.info.list ? this.props.info.list.map((list)=>{
          console.log(list);
          return (
              <InfoBtn onClick= {() => this.btnfunc(this.props.history,"/info/"+list )} lable = {list}/>
            )
          }
        ) :'try again'
        }
        </div>

    );
   }
 }

const mapDispathToProps = dispatch => ({
      infoApiRequest: (params) => {dispatch(infoApiRequest(params))},
  });

    const mapStateToProps = (state, props) => {
      return {
        info: state.info,
      }
    };

export default withRouter(connect(mapStateToProps ,mapDispathToProps)(SendInfo));
