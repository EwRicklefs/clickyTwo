import React from "react";
import GameInfo from "../components/GameInfo";
import Game from "../components/Game";

class Clicky extends React.Component {
  state = {};

  render() {
    return (
      <div id="wrapper">
        <div>
          <h1>This is a header</h1>
        </div>
        <GameInfo />
      </div>
    );
  }
}

export default Clicky;
