import React from "react";
import "../styles/LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <h3>Zaloguj się</h3>
      <div className="login">
        <label htmlFor="login">
          Podaj login: <input type="text" id="login" />
        </label>
        <label htmlFor="password">
          Podaj hasło: <input type="password" id="password" />
        </label>
        <button>Zaloguj się</button>
      </div>
    </>
  );
};

export default LoginPage;
