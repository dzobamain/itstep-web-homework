import React, { Component } from "react";
import { useParams } from "react-router-dom";

class FamousPainting extends Component {
  render() {
    const id = this.props.id || "sample-painting";
    return (
      <div>
        <h2>Famous Painting</h2>
        <p>Painting ID: {id}</p>
        <img src="/placeholder.jpg" alt="Sample Painting" width="400" />
      </div>
    );
  }
}

function withParams(Component) {
  return (props) => {
    const params = useParams();
    return <Component {...props} id={params.id} />;
  };
}

export default withParams(FamousPainting);
