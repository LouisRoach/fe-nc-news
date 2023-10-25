import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleList from "./ArticleList";

function TopicList() {
  const [topics, setTopics] = useState(null);

  useEffect(() => {
    fetch('https://louis-api.onrender.com/api/topics')
      .then((res) => res.json())
      .then((data) => setTopics(data.topics));
  }, []);

  if (!topics) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {topics.map((topic) => (
        <div key={topic.slug}>
          <Link to={`/articles?topic=${topic.slug}`}>
            <h2>{topic.slug}</h2>
          </Link>
          <p>{topic.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TopicList