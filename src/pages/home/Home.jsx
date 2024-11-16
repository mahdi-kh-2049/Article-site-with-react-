import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "./home.module.css";
import Article from "../../components/Article/Article";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";
export default function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoasing, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticles(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styled.homeWrapper}>
      <Navbar />
      <div className="container">
        <h2>مقالات جدید</h2>
        {isLoasing ? (
          <Loading />
        ) : (
          <div className={styled.articles}>
            {articles.map((article) => (
              <Link to={`/article/${article.id}`}>
                <Article key={article.id} article={article} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
