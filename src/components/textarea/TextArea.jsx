import React from 'react'
import styled from "./textarea.module.css"
export default function TextArea(props) {
  return (
    <div className={styled.textareaWrapper}>
      <label>{props.label}</label>
      <textarea onChange={props.handleChangeArticleMessage}></textarea>
    </div>
  );
}
