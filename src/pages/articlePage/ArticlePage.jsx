import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styled from "./articlePage.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/loading/Loading";
export default function ArticlePage() {
  const [article, setArticle] = useState({});
  const params = useParams();
  const [isLoasing, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:8000/articles/${params.id}`).then((result) => {
        setArticle(result.data);
        setIsLoading(false);
      }).catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Navbar />

      <div className={styled.articleWrapper}>
        <div className="container">
          {isLoasing ? (
            <Loading />
          ) : (
            <div>
              <h1>{article.title}</h1>
              <div className={styled.articleInfo}>
                <span>تاریخ :{article.date}</span>
                <span>نویسنده :{article.athor}</span>
                <span>مدت زمان خواندن :{article.readingTime}</span>
              </div>
              <img src={article.imageUrl} />
              <p>{article.content}</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
