import React from "react";
import gameImage from "../assets/game-image.png";

function Game() {
    return (
        <div className="image-container">
            <img className="game-image" src={gameImage} alt="game-image"/>
        </div>
    )
}

export default Game;