import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Artist Name</h1>
        <p>Select a section:</p>
        <div>
          <div><Link to="/bio">Biography</Link></div>
          <div><Link to="/painting/sample-painting">Famous Painting</Link></div>
          <div><Link to="/gallery">Gallery</Link></div>
        </div>
      </div>
    );
  }
}
