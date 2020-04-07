import  {connect} from 'react-redux';
import React, { Component } from 'react';
import InfoBtn from '../../components/infoBtn/index.js';
import { EditorState, convertFromHTML,convertToHTML,convertToRaw ,convertFromRaw,ContentState,stateFromMarkdown} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

class Info extends Component {
  constructor(props) {
    super(props);
}
   render() {
     const key = this.props.match.params.key;
     const name = this.props.info && this.props.info.details ?this.props.info.details[key]['name'] : 'no name';
     const age = this.props.info && this.props.info.details ?this.props.info.details[key]['age'] : 'no age';
     console.log(key);
      return (
        <div>
           <p>Name : {name}</p>
           <p>Age : {age}</p>
      </div>
      );
    }
  }
 const mapStateToProps = (state, props) => {
   return {
     info: state.info,

   }
 }

 export default connect(mapStateToProps)(Info);
