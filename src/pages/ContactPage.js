import React, { Component } from "react";
import "../styles/ContactPage.css";

class ContactPage extends Component {
  state = {
    name: "",
    email: "",
    question: "",
  };

  handleQuestionChange = (e) => {
    this.setState({
      question: e.target.value,
    });
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleMailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      question: "",
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Skontaktuj się z nami</h3>
          <label htmlFor="name">Imię: </label>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <br />
          <label htmlFor="email">E-mail: </label>
          <input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleMailChange}
          />
          <textarea
            value={this.state.question}
            onChange={this.handleQuestionChange}
            placeholder="Zadaj pytanie..."
          ></textarea>
          <button>Wyślij</button>
        </form>
      </div>
    );
  }
}

export default ContactPage;
