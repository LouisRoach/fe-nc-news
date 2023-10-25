import { useEffect, useState } from "react";
import axios from "axios"
import { Link, useParams } from 'react-router-dom';


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
              <Link to={`/articles/${article.article_id}`}>
                 <h2>{article.title}</h2>

              </Link>

                
          <p>Author: {article.author}</p>
          <p>Topic: {article.topic}</p>
          <p>Created At: {article.created_at}</p>
          <p>Votes: {article.votes}</p>
          <img src={article.article_img_url}/>

          

          
         
               
            </div>
          ))}
        </div>
      )

   

  
   
}

export default ArticleList