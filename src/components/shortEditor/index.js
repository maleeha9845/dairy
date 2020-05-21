import React from 'react';
import ReactDOM from 'react-dom';
import  {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Editor} from 'react-draft-wysiwyg';
import { EditorState, draftToHtml,createEditorStateWithText,CompositeDecorator,convertFromHTML,convertToHTML,convertToRaw ,createFromBlockArray,convertFromRaw, ContentState, getDefaultKeyBinding,} from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './short.css';
import SideBarBtn from '../sideBarBtn/index.js';
import readApiRequest from '../../actions/read.js';

class ShortEditor extends React.Component {
      constructor(props) {
        super(props);
        const editorState = this.props.emptyEditor === 'false' ? EditorState.createWithContent(
          ContentState.createFromBlockArray(
           convertFromHTML(this.props.content)
         )
       ) : EditorState.createEmpty();

         this.state = {
          editorState,
        };
        this.uploadImageCallBack = this.uploadImageCallBack.bind(this);
    }

  onEditorStateChange: Function = (editorState ) => {
    this.setState({
      editorState,
   });
  };

  componentWillReceiveProps(){
    this.setState({
       editorState: EditorState.createWithContent(
       ContentState.createFromBlockArray(
        convertFromHTML(this.props.content)))
       })
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

    // componentWillUnmount(){
    //     if (this.props.save === 'true'){
    //       const convertedData = convertToRaw(this.state.editorState.getCurrentContent());
    //       const data = convertedData.blocks[0].text;
    //       this.props.readApiRequest(data);
    //       console.log(data);
    //     }else{
    //       return null ;
    //     }
    //    }

   render() {
     return(
       <div class='editor-short' >
       <Editor
        onEditorStateChange= {this.onEditorStateChange}
        toolbarClassName="tool-bar"
        editorState={this.state.editorState}
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
