import React from "react";
import GameInfo from "../components/GameInfo";
import Game from "../components/Game";

class Clicky extends React.Component {
  state = {
      imageSrc: ["/assets/bp.png", "/assets/bw.png", "/assets/cap.png", "/assets/go1.png", "/assets/go2.png", "/assets/hu.png", "/assets/im.png", "/assets/sm.png", "/assets/th.png"]

  };

  render() {
    return (
      <div id="wrapper">
        <div>
          <h1>This is a header</h1>
        </div>
        <GameInfo />
        <Game>
            
        </Game>
      </div>
    );
  }
}

export default Clicky;
