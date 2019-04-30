import React from "react";

function Jumbotron(props) {
  return (
    <div
      style={{ height: 120, clear: "both", textAlign: "center" }}
      className="jumbotron"
    >
      {/* {children} */}
      <h1>this is a body</h1>
    </div> 
  );
}

export default Jumbotron;
