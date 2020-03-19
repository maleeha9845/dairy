import React from 'react';
import ReactDOM from 'react-dom';
import  {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor} from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import readApiRequest from '../actions/read.js';



class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text : ' ',
      editorState: EditorState.createEmpty(),
      uploadedImages:[],
    };
    this.uploadImageCallBack = this.uploadImageCallBack.bind(this);
    this.saveme=this.saveme.bind(this);
  }

  onEditorStateChange =
    (editorState) => this.setState({
      editorState
    });

  saveme = (e) => {
        const convertedData = convertToRaw(this.state.editorState.getCurrentContent());
        this.setState({
          text: convertedData
        });
        console.log(convertedData.blocks[0].text);
        this.props.readApiRequest(convertedData.blocks[0].text);
        this.props.history.push('/mydata');
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
      return (
          <div>
            <Editor
              editorState={this.state.editorState}
              onEditorStateChange={this.onEditorStateChange}
              toolbar={{
                tinline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                image: { uploadCallback: this.uploadImageCallBack ,
                previewImage: true,},
                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                  }
                }
              />
          <button onClick = {this.saveme}>save me </button>
      </div>
    );
  }
}
const mapDispathToProps = dispatch => ({
    readApiRequest: (params) => {dispatch(readApiRequest(params))},
  });

  // to access redux store
  const mapStateToProps = (state, props) => {
    return {
      read: state.read,
    }
  }


export default withRouter(connect(mapStateToProps ,mapDispathToProps)(MyEditor));
