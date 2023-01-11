import React, { useState, useEffect } from "react";

export const Articles = () => {
  const [articles, setArticles] = useState(window && window.preloaded);
  console.log(window);
  console.log(window.preloaded);
  useEffect(() => {
    if (window && !window.preloaded) {
      (async () => {
        const response = await fetch("/api/articles");
        let resJson = await response.json();
        let data = resJson.data;

        console.log("no preloaded articles");

        setArticles(data.articles);
      })();
    }
  }, []);
  const articleList = articles.map((article, i) => {
    return (
      <div key={i}>
        {article.title} by {article.author}
      </div>
    );
  });
  return <h1>{articles && articleList}</h1>;
};
