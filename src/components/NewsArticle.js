import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news__title"> <a href={data.url}  target="_blank"> {data.title} </a></h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__source">  <a href={data.url}  target="_blank"> {data.source.name}  </a></span>
      
    </div>
    
  );
}

export default NewsArticle;
