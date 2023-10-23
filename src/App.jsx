import { useState, useEffect } from 'react'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import axios from "axios"
import './App.css'

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://louis-api.onrender.com/api/articles')
      .then(res => res.json())
      .then(data => setArticles(data.articles));
  }, []);
  return <div className='App'>
<Header />
<ArticleList articles={articles}/>


  </div>
 
}

export default App
