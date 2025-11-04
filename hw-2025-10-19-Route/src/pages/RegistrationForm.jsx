import React, { Component } from "react";

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nick: "Nickname",
      email: "Email",
      gender: "",
      age: "Age",
      errors: {}
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    const errors = {};
    if (!this.state.nick) errors.nick = "Enter nickname";
    if (!/\S+@\S+\.\S+/.test(this.state.email)) errors.email = "Invalid email";
    if (!this.state.gender) errors.gender = "Select gender";
    if (this.state.age < 18) errors.age = "Minimum 18";
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      alert("Registration successful!");
    }
  };

  render() {
    const { nick, email, gender, age, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Registration</h2>
        <input name="nick" placeholder="Nickname" value={nick} onChange={this.handleChange} />
        <div>{errors.nick}</div>

        <input name="email" placeholder="Email" value={email} onChange={this.handleChange} />
        <div>{errors.email}</div>

        <select name="gender" value={gender} onChange={this.handleChange}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div>{errors.gender}</div>

        <input name="age" type="number" placeholder="Age" value={age} onChange={this.handleChange} />
        <div>{errors.age}</div>

        <button type="submit">Register</button>
      </form>
    );
  }
}
