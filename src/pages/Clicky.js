import React from "react";
import {GameInfo, GameImages } from "../components/GameInfo";
//import Game from "../components/Game";

const urls = [
    "/assets/bp.png",
    "/assets/bw.png",
    "/assets/cap.png",
    "/assets/go1.png",
    "/assets/go2.png",
    "/assets/hu.png",
    "/assets/im.png",
    "/assets/sm.png",
    "/assets/th.png"
  ];

class Clicky extends React.Component {
    
  state = {
    mixedUp: urls
  };

  render() {
    return (
      <div id="wrapper">
        <div>
          <h1>This is a header</h1>
        </div>
        <GameInfo>
          {this.state.mixedUp.map(function(img, x) {
              return <GameImages
                image={img}
                key={x}
              />
          })}
        </GameInfo>
      </div>
    );
  }
}

export default Clicky;
