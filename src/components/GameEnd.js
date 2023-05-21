import Time from "./Time";

function GameEnd(props) {
    const { playerName, time } = props;

    return (
        <div className="overlay">
            <div className="game-message game-end">
                <div>
                    <p>Great work {playerName}, you found all the characters!</p>
                    <Time time={time}/>
                    <button type="button" onClick={() => window.location.reload()}>Play Again</button>
                </div>
                <div className="fastest-times">
                    <p>Fastest Times:</p>
                    <ol>
                        <li>Name - Top</li>
                        <li>Name - 5</li>
                        <li>Name - times</li>
                        <li>Name - go</li>
                        <li>Name - here</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default GameEnd;