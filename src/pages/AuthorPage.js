import React from "react";
import { Link, useParams } from "react-router-dom";
import Author from "../components/Author";

const AuthorPage = (props) => {
  const { id } = useParams();

  console.log(props);

  return (
    <>
      <h3>O autorze</h3>
      <Author id={id} />
      <Link to="/authors">Powrót do listy autorów</Link>
    </>
  );
};

export default AuthorPage;
