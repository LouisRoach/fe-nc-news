import { useEffect, useState } from "react";
import axios from "axios"

function ArticleList(){

    const [articles, setArticles] = useState([])

    useEffect(() =>{
        fetch('https://louis-api.onrender.com/api/articles')
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])

    return (
        <div>
          {articles.map(article => (
            <div key={article.article_id}>
                 <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.topic}</p>
               
            </div>
          ))}
        </div>
      )

   

  
   
}

export default ArticleList