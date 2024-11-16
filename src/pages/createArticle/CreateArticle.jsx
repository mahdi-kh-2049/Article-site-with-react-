import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "./createArticle.module.css";
import Input from "../../components/input/Input";
import TextArea from "../../components/textarea/TextArea";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
export default function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    readingTime: "",
    athor: "",
    message: "",
    imageURL: "",
  });
  const handleChangeArticle = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleChangeArticleMessage = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      message: e.target.value,
    }))
  };
    const handleCreatNewArticle = () => {
      axios.post("http://localhost:8000/articles", {
        id: 9,
        imageUrl: article.imageURL,
        title: article.title,
        readingTime: article.readingTime,
        data: article.date,
        athor: article.athor,
        content: article.message,
      });
    };
  ;
  return (
    <>
      <Navbar />
      <div className={styled.createArticlePage}>
        <div className="container">
          <h1>ساخت مقاله</h1>

          <Input
            label="عنوان"
            name="title"
            handleChange={handleChangeArticle}
            type="text"
          />
          <Input
            label="تاریخ"
            name="date"
            handleChange={handleChangeArticle}
            type="text"
          />
          <Input
            label="نویسنده"
            name="athor"
            handleChange={handleChangeArticle}
            type="text"
          />
          <Input
            label="مدت زمان خواندن"
            name="readingTime"
            handleChange={handleChangeArticle}
            type="text"
          />
          <Input
            label="آدرس عکس"
            name="imageURL"
            handleChange={handleChangeArticle}
            type="text"
          />
          <TextArea label="متن" handleChange={handleChangeArticleMessage} />
          <div className={styled.buttonWarpper}>
            <button onClick={handleCreatNewArticle}>ساخت مقاله</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
