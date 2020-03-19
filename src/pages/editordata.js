import  {connect} from 'react-redux';
import React, { Component } from 'react';
import { EditorState, convertFromHTML,convertToHTML,convertToRaw ,convertFromRaw,ContentState,stateFromMarkdown} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';



class EditorData extends Component {
  constructor(props) {
    super(props);

    let editorState;

    if (props.content) {
      const blocksFromHTML = convertFromHTML(props.content);
      const contentState = ContentState.createFromBlockArray(blocksFromHTML);
      editorState = EditorState.createWithContent(contentState);
    }
    else {
      editorState = EditorState.createEmpty();
    }

    this.state = { editorState };
  }

  onEditorStateChange =
    (editorState) => this.setState({
      editorState
    });

  render() {
    return (
      <Editor
        defaultEditorState={ this.state.editorState }
        onEditorStateChange={this.onEditorStateChange}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    content: state.read.data,
  }
}

export default connect(mapStateToProps)(EditorData);
