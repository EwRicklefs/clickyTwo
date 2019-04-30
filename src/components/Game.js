import React from "react";

function Jumbotron({ images }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 50, textAlign: "center" }}
      className="jumbotron"
    >
      { images }
    </div> 
  );
}

export default Jumbotron;