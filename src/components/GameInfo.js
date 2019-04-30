import React from "react";

export function GameInfo( {children} ) {
  return (
    <div className="gameBody">
      { children }
    </div>
  );
}

export function GameImages(image, key) {
  return (
    <img src={image.image} alt="nice try" id={key}/>
  )
}

export default GameInfo;
