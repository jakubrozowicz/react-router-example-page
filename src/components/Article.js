import React from "react";
import "../styles/Article.css";

const Article = ({ title, author, content }) => {
  return (
    <article>
      <h3>{title}</h3>
      <span>{author}</span>
      <p>{content}</p>
    </article>
  );
};

export default Article;
