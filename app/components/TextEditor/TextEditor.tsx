"use client"

import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

type TextEditorProps = {
  onEditorStateChange: (editorState: EditorState) => void;
}

const TextEditor = ({ onEditorStateChange }: TextEditorProps) => {

  const [body, setBody] = useState(EditorState.createEmpty())
  // console.log("Text editor bodyState:", body)

  const handleEditorStateChange  = (editorState: EditorState) => {
    setBody(editorState);
    onEditorStateChange(editorState);
  }


return (
  <>
    <Editor 
      editorState={body}
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
      onEditorStateChange={handleEditorStateChange}
    />
  </>
  )
}



export default TextEditor;



