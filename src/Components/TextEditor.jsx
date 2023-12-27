import React, { useEffect, useState } from "react";
import {
  Editor,
  EditorState,
  ContentState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";
import Header from "./Header";
const TextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    const savedContent = localStorage.getItem("editorContent");
    return savedContent
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent)))
      : EditorState.createEmpty();
  });
  useEffect(() => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    localStorage.setItem("editorContent", JSON.stringify(rawContent));
  }, [editorState]);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const resetHandler = (e) => {
    e.preventDefault();
    setEditorState(EditorState.createEmpty());
  };

  return (
    <>
      <Header submitHandler={submitHandler} resetHandler={resetHandler} />
      <div className="editorContainer h-[60vh] w-[80vw] m-auto border-2 border-cyan-500  p-2">
        <Editor
          placeholder="type text here..."
          onChange={setEditorState}
          editorState={editorState}
        />
      </div>
    </>
  );
};

export default TextEditor;
