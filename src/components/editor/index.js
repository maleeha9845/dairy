import React from 'react';
import ReactDOM from 'react-dom';
import  {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {MdArrowDropDownCircle} from 'react-icons/md';
import {IoMdArrowDropupCircle} from 'react-icons/io';
import './editor.css';
import { Editor } from 'react-draft-wysiwyg';
import ExpandedEditor from '../epandedEditor/index.js';
import ShortEditor from '../shortEditor/index.js';
import { EditorState,
         draftToHtml,
         createEditorStateWithText,
         CompositeDecorator,
         convertFromHTML,
         convertToHTML,
         convertToRaw ,
         createFromBlockArray,
         convertFromRaw,
         ContentState,
         getDefaultKeyBinding,} from 'draft-js';
 import readApiRequest from '../../actions/read.js';


class MyEditor extends React.Component {
  constructor(props) {
    super(props);

const editorStateWithContent = EditorState.createWithContent(
       ContentState.createFromBlockArray(
        convertFromHTML(props.content)
      )
    );
    this.state = {
      expand : 'false',
      content : props.content,
      editorStateWithContent,
      editorstateEmpty : EditorState.createEmpty(),
      emptyEditor: this.props.emptyEditor,
 };

    this.expandBtn = this.expandBtn.bind(this);
    this.shortBtn = this.shortBtn.bind(this);
    this.saveEditedContent = this.saveEditedContent.bind(this);
    this.saveContent = this.saveContent.bind(this);


  }

  onEditorStateChangeWithContent: Function = (editorStateWithContent) => {
    this.setState({
      editorStateWithContent,

   });
  };

  onEditorStateChange: Function = (editorstateEmpty ) => {
    this.setState({
      editorstateEmpty,
   });
  };


  static getDerivedStateFromProps(props, state) {
    if (props.content !== state.content ) {
      return {
        content: props.content,
        editorStateWithContent:EditorState.createWithContent(
          ContentState.createFromBlockArray(
           convertFromHTML(props.content)
         )
       )
     };
    }else{
      if(props.emptyEditor !== state.emptyEditor){
        return{
          emptyEditor:props.emptyEditor,
          editorstateEmpty : props.emptyEditor === 'true' ? EditorState.createEmpty() : null
        }
      }else{
      return null;
    }
  }
 }
  expandBtn(){
      this.setState({
        expand:"true",
      })
    }

  shortBtn(){
      this.setState({
        expand:"false",
      })
    }

saveEditedContent(){
  const convertedData = convertToRaw(this.state.editorStateWithContent.getCurrentContent());
        const data = convertedData.blocks[0].text;
        this.props.readApiRequest(data);
        console.log(data);
}
saveContent(){
  const convertedData = convertToRaw(this.state.editorstateEmpty.getCurrentContent());
        const data = convertedData.blocks[0].text;
        this.props.readApiRequest(data);
        console.log(data);
        this.props.save();
}
   render() {
//  short editor with content.......
     if (this.state.expand === 'false' && this.props.readJournal === 'false' ){

       return (

         <div  class ={ this.props.editorList === 'false' && this.props.editorNav === ''? 'editor-side' :
         (this.props.editorSide === 'false' && this.props.editorNav === '' ? 'editor-list':
         (this.props.editorNav === 'true'?  'editor-nav':'editor' ))}>
          <div class ='tool-div'>
          <div class='editor-short' >
          <Editor
           onEditorStateChange= {this.onEditorStateChangeWithContent}
           toolbarClassName="tool-bar"
           editorClassName = 'editor-bar'
          editorState={this.state.editorStateWithContent}
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
            <button class= 'expand-btn' onClick= {()=>this.expandBtn()}><MdArrowDropDownCircle size = {25} className= 'icon-drop' /></button>
          </div>
          <div class = 'editor-footer'>
            <p class = 'list'>Holiday</p>
            <p class = 'date'> 04/11/1995  3:30pm </p>
             <p class= 'location'>0065 street . huryy layout</p>
            <button
            onClick = {this.props.viewBtn}
            class ={ this.props.editorList === 'false' && this.props.editorNav === ''? 'side-save-btn' :
                     (this.props.editorSide === 'false' && this.props.editorNav === '' ? 'list-save-btn':
                     (this.props.editorNav === 'true'?  'nav-save-btn':
                     'save-btn'))}
                     > view
             </button>
             <button
             onClick = {this.saveEditedContent}
             class ={ this.props.editorList === 'false' && this.props.editorNav === ''? 'side-save-btn' :
                      (this.props.editorSide === 'false' && this.props.editorNav === '' ? 'list-save-btn':
                      (this.props.editorNav === 'true'?  'nav-save-btn':
                      'save-btn'))}>Save
            </button>
         </div>
         </div>
        );
      }
// expanded editor with content.....
       else {
         if (this.state.expand === 'true' && this.props.readJournal === 'false'){
         return (
           <div  class ={ this.props.editorList === 'false' && this.props.editorNav === ''? 'editor-side' :
           (this.props.editorSide === 'false' && this.props.editorNav === '' ? 'editor-list':
           (this.props.editorNav === 'true'?  'editor-nav':'editor' ))}>
            <div class ='tool-div'>
             <ExpandedEditor emptyEditor= {this.state.emptyEditor} onEditorStateChange = {this.onEditorStateChangeWithContent} editorState={this.state.editorStateWithContent}
             />
            <button class= { this.props.editorList === 'false' ? 'expand-side-btn-ex' :(this.props.editorSide === 'false' ? 'expand-list-btn-ex':'expand-btn-ex')} onClick= {()=>this.shortBtn()}><IoMdArrowDropupCircle size = {25} className= 'icon-drop' /></button>
            </div>
            <div class = 'editor-footer'>
              <p class = 'list'>Holiday</p>
              <p class = 'date'> 04/11/1995  3:30pm </p>
               <p class= 'location'>0065 street . huryy layout</p>
               <button
                  onClick = {this.props.viewBtn}
                  class ={ this.props.editorList === 'false' && this.props.editorNav === ''? 'side-save-btn' :
                  (this.props.editorSide === 'false' && this.props.editorNav === '' ? 'list-save-btn':
                  (this.props.editorNav === 'true'?  'nav-save-btn':
                  'save-btn'))}>View
                </button>
              <button
                onClick = {this.saveEditedContent}
                class ={ this.props.editorList === 'false' ? 'side-save-btn' :
                (this.props.editorSide === 'false' ?
                'list-save-btn':'save-btn')}>Save
              </button>

           </div>
           </div>
          );
        }
//short empty editor....
        if (this.state.expand === 'false'  && this.props.emptyEditor === 'true'){

          return (

            <div  class ={ this.props.editorList === 'false' && this.props.editorNav === ''? 'editor-side' :
            (this.props.editorSide === 'false' && this.props.editorNav === '' ? 'editor-list':
            (this.props.editorNav === 'true'?  'editor-nav':'editor' ))}>
             <div class ='tool-div'>
             <div class='editor-short' >
             <Editor
              onEditorStateChange= {this.onEditorStateChange}
              toolbarClassName="tool-bar"
               editorClassName = 'editor-bar'
             editorState={this.state.editorstateEmpty}
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
               <button class= 'expand-btn' onClick= {()=>this.expandBtn()}><MdArrowDropDownCircle size = {25} className= 'icon-drop' /></button>
             </div>
             <div class = 'editor-footer'>
               <p class = 'list'>Holiday</p>
               <p class = 'date'> 04/11/1995  3:30pm </p>
                <p class= 'location'>0065 street . huryy layout</p>

                <button
                onClick = {this.saveContent}
                class ={ this.props.editorList === 'false' && this.props.editorNav === ''? 'side-save-btn' :
                         (this.props.editorSide === 'false' && this.props.editorNav === '' ? 'list-save-btn':
                         (this.props.editorNav === 'true'?  'nav-save-btn':
                         'save-btn'))}>Save
               </button>
            </div>
            </div>
           );
         }
// expanded empty editor......
          else {
            if (this.state.expand === 'true'  && this.props.emptyEditor === 'true'){
            return (
              <div  class ={ this.props.editorList === 'false' && this.props.editorNav === ''? 'editor-side' :
              (this.props.editorSide === 'false' && this.props.editorNav === '' ? 'editor-list':
              (this.props.editorNav === 'true'?  'editor-nav':'editor' ))}>
               <div class ='tool-div'>
               <ExpandedEditor emptyEditor= {this.state.emptyEditor} onEditorStateChange = {this.onEditorStateChange} editorState={this.state.editorstateEmpty}
               />

               <button class= { this.props.editorList === 'false' ? 'expand-side-btn-ex' :(this.props.editorSide === 'false' ? 'expand-list-btn-ex':'expand-btn-ex')} onClick= {()=>this.shortBtn()}><IoMdArrowDropupCircle size = {25} className= 'icon-drop' /></button>
               </div>
               <div class = 'editor-footer'>
                 <p class = 'list'>Holiday</p>
                 <p class = 'date'> 04/11/1995  3:30pm </p>
                  <p class= 'location'>0065 street . huryy layout</p>

                 <button
                   onClick = {this.saveContent}
                   class ={ this.props.editorList === 'false' ? 'side-save-btn' :
                   (this.props.editorSide === 'false' ?
                   'list-save-btn':'save-btn')}>Save
                 </button>

              </div>
              </div>
             );
           }
// read saved  journal....
       else{
        if(this.props.readJournal === 'true'  && this.props.emptyEditor === 'false'){
        return(
          <div  class ={ this.props.editorList === 'false' && this.props.editorNav === ''? 'editor-side' :
          (this.props.editorSide === 'false' && this.props.editorNav === '' ? 'editor-list':
          (this.props.editorNav === 'true'?  'editor-nav':'editor' ))}>


            <p class = 'read'> {this.state.content}</p>
            <div class = 'editor-footer'>
              <p class = 'list'>Holiday</p>
              <p class = 'date'> 04/11/1995  3:30pm </p>
               <p class= 'location'>0065 street . huryy layout</p>
               <button
                  onClick = {this.props.edit}
                  class ={ this.props.editorList === 'false' && this.props.editorNav === ''? 'side-save-btn' :
                  (this.props.editorSide === 'false' && this.props.editorNav === '' ? 'list-save-btn':
                  (this.props.editorNav === 'true'?  'nav-save-btn':
                  'save-btn'))}>Edit
                </button>


           </div>
          </div>
        );
      }
// end.....
    else{
   return null;
   }
}
    }
  }}
}

const mapDispathToProps = dispatch => ({
    readApiRequest: (params) => {dispatch(readApiRequest(params))},
  });



const mapStateToProps = (state, props) => {
    return {
      read: state.read,
      list : state.list
    }
  }

export default withRouter(connect(mapStateToProps ,mapDispathToProps)(MyEditor));
