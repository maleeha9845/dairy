import React from 'react';
import ReactDOM from 'react-dom';
import  {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor} from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './expandEditor.css';
import SideBarBtn from '../sideBarBtn/index.js';
import readApiRequest from '../../actions/read.js';



class ExpandedEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
      uploadedImages:[],

    };
    this.uploadImageCallBack = this.uploadImageCallBack.bind(this);
    this.saveMe=this.saveMe.bind(this);
  }

  onEditorStateChange =
    (editorState) => this.setState({
      editorState
    });

  componentWillMount(){
      this.props.readApiRequest();
    }

  saveMe(){
      const convertedData = convertToRaw(this.state.editorState.getCurrentContent());
      const data = convertedData.blocks[0].text;
      this.props.readApiRequest(data);
    }

  uploadImageCallBack(file){
      let uploadedImages = this.state.uploadedImages;
      const imageObject = {
        file: file,
        localSrc: URL.createObjectURL(file)
      };
      uploadedImages.push(imageObject);
      this.setState({
        uploadedImages: uploadedImages
    })
     // We need to return a promise with the image src
      return new Promise(
        (resolve, reject) => {
          resolve({ data: { link: imageObject.localSrc}});
        }
      );
    }

   render() {

     return(
       <div  class='editor'>
        <div class = 'tool-div'>
        <Editor
            toolbarClassName="tool-bar"
            editorState={this.state.editorState}
            onEditorStateChange={this.onEditorStateChange}
            toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
            inline: { inDropdown: false , visible: true,
                      bold: { visible: true,  },
                      italic: { visible: true,  },
                      underline: { visible: true, },
                      strikeThrough: { visible: true,  },
                      monospace: { visible: true, }
                    },
            textAlign: { inDropdown: false },
            link: { inDropdown: false },
            image: { uploadCallback: this.uploadImageCallBack ,
            previewImage: true,},
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
           }
          }
        />
       </div>
       <div>
           <SideBarBtn lable ='save'  active = '2' parent='parent' onClick = {this.saveMe}/>
       </div>
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


export default withRouter(connect(mapStateToProps ,mapDispathToProps)(ExpandedEditor));
