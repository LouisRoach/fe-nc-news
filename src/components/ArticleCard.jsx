import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArticleCard() {
  const { id } = useParams(); 
  const [article, setArticle] = useState(null);

  useEffect(() => {
   
    fetch(`https://louis-api.onrender.com/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data.article));
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Body: {article.body}</p>
     
    </div>
  );
}

export default ArticleCard