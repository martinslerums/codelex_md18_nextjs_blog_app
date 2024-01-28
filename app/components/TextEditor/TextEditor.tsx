"use client"

import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { ContentState, EditorState, convertFromHTML } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styles from "./TextEditor.module.css"

type TextEditorProps = {
  onEditorStateChange: (editorState: EditorState) => void;
  initialBlogContent?: string
}

const TextEditor = ({ onEditorStateChange, initialBlogContent }: TextEditorProps) => {

  const [body, setBody] = useState(() => {

    if (initialBlogContent) {
      const { contentBlocks } = convertFromHTML(initialBlogContent);
      const contentState = ContentState.createFromBlockArray(contentBlocks)
      return EditorState.createWithContent(contentState)
    }

    return EditorState.createEmpty()
  })

  const handleEditorStateChange  = (editorState: EditorState) => {
    setBody(editorState);
    onEditorStateChange(editorState);
  }


return (
  <>
    <Editor 
      editorState={body}
      wrapperClassName={styles.wrapper}
      editorClassName={styles.editor}
      toolbarClassName={styles.toolbar}
      onEditorStateChange={handleEditorStateChange}
      toolbar={{options: ['inline', 'list', 'textAlign', 'history']}}
    />
  </>
  )
}



export default TextEditor;



