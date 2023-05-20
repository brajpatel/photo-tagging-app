import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import gameImage from "../assets/game-image.png";
import GameStart from "./GameStart";

function Game(props) {
    const { setTimerActive, setTimerPaused, charData } = props;

    const [showGameStart, setShowGameStart] = useState(true);
    const [charsLeft, setCharsLeft] = useState(charData);
    const [anchorEl, setAnchorEl] = useState(null);
    const [clicked, setClicked] = useState(null);

    const startGame = (playerName) => {
        setShowGameStart(false);
        setTimerActive(true);
        setTimerPaused(false);
    }

    const openMenu = (e) => {
        const selectedArea = document.createElement('div');
        selectedArea.setAttribute('id', 'selection-div');
        selectedArea.classList.add('selected-area');
        selectedArea.style.left = e.pageX - 50 + 'px';
        selectedArea.style.top = e.pageY - 50 + 'px';

        document.body.appendChild(selectedArea);
        setAnchorEl(selectedArea);

        if(e.target.id) setClicked(e.target.id);
    }

    const closeMenu = (charId) => {
        if(charId === clicked) {
            const charFound = document.querySelector(`.${charId}`);
            charFound.classList.add('char-found');
            
            const updatedCharsLeft = charsLeft.filter((char) => char.id !== charId);
            setCharsLeft(updatedCharsLeft);
        }

        const selectedArea = document.getElementById('selection-div');
        selectedArea.parentNode.removeChild(selectedArea);
        setAnchorEl(null);
    }

    return (
        <div className="image-container">
            {showGameStart ? <GameStart startGame={startGame}/> : null}
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
            <Menu
                id="chars-left-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeMenu}
                anchorOrigin={{
                    horizontal: "right",
                    vertical: "center"
                }}
                transformOrigin={{
                    horizontal: "left",
                    vertical: "center"
                }}
                keepMounted
            >
                {charsLeft.map((char) => {
                    return (
                        <MenuItem key={char.id} data-id={char.id} onClick={() => closeMenu(char.id)}>
                            {char.name}
                        </MenuItem>
                    )
                })}
            </Menu>
        </div>
    )
}

export default Game;