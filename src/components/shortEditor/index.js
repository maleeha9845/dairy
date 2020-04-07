import React from 'react';
import ReactDOM from 'react-dom';
import  {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Editor} from 'react-draft-wysiwyg';
import { EditorState, draftToHtml,createEditorStateWithText,CompositeDecorator,convertFromHTML,convertToHTML,convertToRaw ,createFromBlockArray,convertFromRaw,ContentState,getDefaultKeyBinding,} from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './short.css';
import SideBarBtn from '../sideBarBtn/index.js';
import readApiRequest from '../../actions/read.js';



class ShortEditor extends React.Component {

    constructor(props) {
      super(props);

      let editorState;
        const content = this.props.content;
      if (content) {
       console.log('1');
        const blocksFromHTML = convertFromHTML(content);
        const contentState = ContentState.createFromBlockArray(blocksFromHTML);
        editorState = EditorState.createWithContent(contentState);
      }
      else {
        editorState = EditorState.createEmpty();
      }

      this.state = {
        editorState,
        uploadedImages:[],
      };
      this.uploadImageCallBack = this.uploadImageCallBack.bind(this);
      this.saveMe=this.saveMe.bind(this);
    }

     onEditorStateChange =
      (editorState) => this.setState({
        editorState
      });

    
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

  componentDidMount(){
    console.log(this.props.content);

  }
   render() {

     return(
       <div class='editor' >


        <Editor
            toolbarClassName="demo-toolbar-custom"
           wrapperClassName="tool-bar"
           editorClassName="tool-bar"
           editorState={this.state.editorState}
           defaultEditorState={ this.state.editorState }
           onEditorStateChange={this.onEditorStateChange}

           toolbar={{
             options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'textAlign', 'colorPicker', 'emoji', 'image'],
             inline: { inDropdown: false , options:['bold' , 'italic' , 'underline']},
             blockType:{inDropdown:true},
             textAlign:{inDropdown:true},
             image: { uploadCallback: this.uploadImageCallBack ,previewImage: true,},
             inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
           }
             }
           />
        <div>
          <SideBarBtn lable ='save' active = '2' parent='parent' onClick = {this.saveMe}/>
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
      list : state.list,
    }
  }


export default withRouter(connect(mapStateToProps ,mapDispathToProps)(ShortEditor));
