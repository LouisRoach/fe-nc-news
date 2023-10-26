import { useState, useEffect } from 'react'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import axios from "axios"
import './App.css'
import { Routes, Route, Router } from 'react-router-dom';
import ArticleCard from './components/ArticleCard'
import { Link } from 'react-router-dom';
import TopicList from './components/TopicList'



function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://louis-api.onrender.com/api/articles')
      .then(res => res.json())
      .then(data => setArticles(data.articles));
  }, []);
  return <div className='App'>
<Header />
<nav>
        <ul>
         
          <li><Link to='/topics'>Topics</Link></li>
          
          
        </ul>
      </nav>

<Routes>
        <Route exact path="/" element={<ArticleList />} />
        <Route path="/articles/:id" element={<ArticleCard />} />
        <Route path="/topics" element={<TopicList />} />

      </Routes>

  </div>
 
}

export default App
