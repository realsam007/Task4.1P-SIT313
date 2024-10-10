import React from 'react';
import { Card } from 'semantic-ui-react';
import './App.css'; // Import the CSS file

const FeaturedArticles = () => {
  const articles = [
    { title: "How to Learn React", description: "A comprehensive guide to learning React.", image: "https://picsum.photos/200/300?random=1" },
    { title: "Understanding JavaScript Closures", description: "Learn how closures work in JavaScript.", image: "https://picsum.photos/200/301?random=2" },
    { title: "CSS Flexbox Guide", description: "Master flexbox layout with this tutorial.", image: "https://picsum.photos/200/302?random=3" },
  ];

  return (
    <div>
      <h2>Featured Articles</h2>
      <div className="card-container">
        {articles.map((article, index) => (
          <div className="card" key={index}>
            <img src={article.image} alt={article.title} />
            <div className="card-content">
              <div className="card-header">{article.title}</div>
              <div className="card-description">{article.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
