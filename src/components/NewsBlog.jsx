// NewsBlog.js
import React from 'react';
import './NewsBlog.scss';
import reader from '../assets/doc reading.jpeg'

const articles = [
  {
    date: '26 Dec, 2020',
    title: 'Lorem ipsum dolor sit amet',
    author: 'Rasalina De',
    comments: 24,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: [reader],
  },
  {
    date: '26 Dec, 2020',
    title: 'Consectetur adipiscing elit',
    author: 'Rasalina De',
    comments: 24,
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: [reader],
  },
  {
    date: '26 Dec, 2020',
    title: 'Sed do eiusmod tempor',
    author: 'Rasalina De',
    comments: 24,
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: [reader],
  },
];

const NewsBlog = () => {
  return (
    <div className="news-blog-section">
      <h2 className="section-title">Recent News & Blog</h2>
      <div className="news-blog-cards">
        {articles.map((article, index) => (
          <div className="news-blog-card" key={index}>
            <img
              src={article.image}
              alt={article.title}
              className="news-blog-image"
            />
            <div className="news-blog-info">
              <span className="news-blog-date">{article.date}</span>
              <h3 className="news-blog-title">{article.title}</h3>
              <div className="news-blog-meta">
                <span className="news-blog-author">{article.author}</span>
                <span className="news-blog-comments">{article.comments} Comments</span>
              </div>
              <p className="news-blog-description">{article.description}</p>
              <a href="#" className="news-blog-read-more">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBlog;