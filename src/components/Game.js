import React, { Component } from "react";

class Game extends Component {
    
  renderImage(imageUrl) {
    return (
        <img src={imageUrl} alt="nice try" />
    );
  }
  render() {
    return (
      <div
        style={{
          height: 300,
          clear: "both",
          paddingTop: 50,
          textAlign: "center"
        }}
        className="jumbotron"
      >
       

      </div>
    );
  }
}

export default Game;
