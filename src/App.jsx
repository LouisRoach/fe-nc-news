import { useState, useEffect } from 'react'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import axios from "axios"
import './App.css'
import { Routes, Route } from 'react-router-dom';


function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://louis-api.onrender.com/api/articles')
      .then(res => res.json())
      .then(data => setArticles(data.articles));
  }, []);
  return <div className='App'>
<Header />

<Routes>
        <Route exact path="/" element={<ArticleList />} />
        <Route path="/articles/:id" element={<ArticleCard />} />
      </Routes>

  </div>
 
}

export default App
