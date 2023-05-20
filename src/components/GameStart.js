import { useState } from "react";

function GameStart(props) {
    const { startGame } = props;

    const [playerName, setPlayerName] = useState('');
    const [disabled, setDisabled] = useState(true);

    const handleName = (e) => {
        e.target.value === '' ? setDisabled(true) : setDisabled(false);

        setPlayerName(e.target.value);
    }

    return (
        <div className="overlay">
            <div className="game-message game-start">
                <h1>Where's Waldo?<i class="fa-solid fa-magnifying-glass"></i></h1>
                <p>Enter your name below and click play once you're ready.</p>
                <form onSubmit={() => startGame(playerName)}>
                    <input onInput={handleName} placeholder="Enter your name here" type="text" autoFocus/>
                    <button type="submit" disabled={disabled}>Play Game</button>
                </form>
            </div>
        </div>
    )
}

export default GameStart;