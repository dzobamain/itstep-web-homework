import React, { Component } from "react";

export default class PersonalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Name",
      phone: "Text",
      email: "Email",
      city: "City",
      initial: {}
    };
  }

  componentDidMount() {
    this.setState({ initial: { ...this.state } });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  reset = () => {
    this.setState(this.state.initial);
  };

  render() {
    return (
      <div>
        <h2>Personal Page</h2>
        <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" /> <br />
        <input name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="Text" /> <br />
        <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" /> <br />
        <input name="city" value={this.state.city} onChange={this.handleChange} placeholder="City" /> <br />
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
