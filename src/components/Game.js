import React from "react";
import gameImage from "../assets/game-image.png";

function Game() {

    const openMenu = (e) => {
        if(e.target.id) alert(e.target.id)
    }

    return (
        <div className="image-container">
            {/* SHOW GAME START */}
            {/* SHOW GAME END */}
            <img
            className="game-image"
            aria-controls="simple-menu"
            aria-haspopup="true"
            src={gameImage}
            alt="game-image"
            draggable="false"
            useMap="#game-map"
            onClick={openMenu}
            />
            <map name="game-map">
                <area
                    id="diane"
                    alt="Diane"
                    title="Diane"
                    coords="730,905,780,1035"
                    shape="rect"
                    onClick={openMenu}
                />
                <area
                    id="patrick"
                    alt="Patrick"
                    title="Patrick"
                    coords="615,855,640,890"
                    shape="rect"
                    onClick={openMenu}
                />
                <area
                    id="link"
                    alt="Link"
                    title="Link"
                    coords="205,1575,230,1610"
                    shape="rect"
                    onClick={openMenu}
                />
                <area
                    id="no-face"
                    alt="No Face"
                    title="No Face"
                    coords="895,720,920,740"
                    shape="rect"
                    onClick={openMenu}
                />
                <area
                    id="aang"
                    alt="Aang"
                    title="Aang"
                    coords="50,785,70,815"
                    shape="rect"
                    onClick={openMenu}
                />
            </map>
        </div>
    )
}

export default Game;