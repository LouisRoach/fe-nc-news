import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Comments({ articleId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://louis-api.onrender.com/api/articles/${articleId}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data.comments));
  }, [articleId]);

  return (
    <div>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>Author: {comment.author} </p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <p>Created at: {comment.created_at}</p></li>


        ))}
      </ul>
    </div>
  );
}




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
      <p>Created At: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
      <img src={article.article_img_url}/>
      <Comments articleId={id} />


     
    </div>
  );
}

export default ArticleCard