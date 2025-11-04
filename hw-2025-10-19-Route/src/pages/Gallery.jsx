import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Gallery extends Component {
  render() {
    const paintings = ["Painting1", "Painting2", "Painting3"];
    return (
      <div>
        <h2>Gallery</h2>
        <div>
          {paintings.map((p) => (
            <div key={p}>
              <Link to={`/painting/${p}`}>{p}</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
