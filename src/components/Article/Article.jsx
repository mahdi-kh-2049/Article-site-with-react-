import React from 'react'
import styled from "./article.module.css"
import article from "./../../assets/images/a.jpg"
export default function Article(props) {
  return (
    <div className={styled.articleWrapper}>
      <img src={props.article.imageUrl} />
      <h3>{props.article.title}</h3>
      <p>خواندن {props.article.readingTime} دقیقه ای</p>
    </div>
  );
}
