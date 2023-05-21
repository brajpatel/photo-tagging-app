import Timer from "./Timer";

function GameEnd(props) {
    const { time } = props;

    return (
        <div className="overlay">
            <div className="game-message game-end">
                <div>
                    <p>Great work Buh, you found all the characters!</p>
                    <Timer time={time}/>
                    <button type="button" onClick={() => window.location.reload()}>Play Again</button>
                </div>
                <div className="fastest-times">
                    <p>Fastest Times:</p>
                    <ol>
                        <li>top</li>
                        <li>5</li>
                        <li>times</li>
                        <li>go</li>
                        <li>here</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default GameEnd;