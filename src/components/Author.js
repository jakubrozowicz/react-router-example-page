import React from "react";

const Author = (props) => {
  return (
    <article className="author">
      <p>Identyfikator autora: {props.id}</p>
    </article>
  );
};

export default Author;
