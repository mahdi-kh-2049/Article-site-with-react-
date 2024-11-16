import React from 'react'
import styled from "./input.module.css"
export default function Input(props) {
  return (
    <div className={styled.inputWrapper}>
      <label>{props.label}</label>
      <input
        name={props.name}
        onChange={props.handleChangeArticle}
        type={props.type}
      />
    </div>
  );
}
