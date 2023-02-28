import React from "react";
import { Link } from "react-router-dom";
import "../styles/AuthorListPage.css";

const authors = [
  {
    id: 1,
    name: "Jan",
    lastName: "Kowalski",
  },
  {
    id: 2,
    name: "Jan",
    lastName: "Nowak",
  },
  {
    id: 3,
    name: "Jan",
    lastName: "Wiśniewski",
  },
];

const AuthorListPage = () => {
  const authorsList = authors.map((author) => (
    <li key={author.id}>
      <Link to={`/author/${author.id}`}>
        {author.name} {author.lastName}
      </Link>
    </li>
  ));

  return (
    <div className="authors">
      <h3>Lista autorów</h3>
      <div>
        <ul>{authorsList}</ul>
      </div>
    </div>
  );
};

export default AuthorListPage;
