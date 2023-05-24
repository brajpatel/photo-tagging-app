import "./GameStart.css";
import { useState } from "react";

function GameStart(props) {
    const { startGame } = props;

    const [name, setName] = useState('');
    const [disabled, setDisabled] = useState(true);

    const handleName = (e) => {
        e.target.value === '' ? setDisabled(true) : setDisabled(false);

        setName(e.target.value);
    }

    return (
        <div className="overlay">
            <div className="game-message game-start">
                <h1>Where's... Waldo?<i className="fa-solid fa-magnifying-glass"></i></h1>
                <p>Please enter your name below. The timer will begin as soon as you click the start button</p>
                <p>You can put your cursor over the name of a character to see what they look like</p>
                <form onSubmit={() => startGame(name)}>
                    <input onInput={handleName} placeholder="Enter your name here" type="text" autoFocus/>
                    <button type="submit" disabled={disabled}>Start Game</button>
                </form>
            </div>
        </div>
    )
}

export default GameStart;