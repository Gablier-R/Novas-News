import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import Footer from "./Footer";
import NewsArticle from "./NewsArticle";



function News(props) {
  const { data } = useContext(NewsContext);

  return (
    <div>
      <h1 className="head__text"> Novas  News </h1>
      
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Carregando..."}
        
        
      </div>

      <Footer/>

    </div>
  );
}

export default News;
