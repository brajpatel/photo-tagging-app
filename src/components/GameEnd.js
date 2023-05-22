import Time from "./Time";

function GameEnd(props) {
    const { playerName, time, fastestTimes } = props;

    return (
        <div className="overlay">
            <div className="game-message game-end">
                <div>
                    <p>Great work {playerName}, you found all the characters!</p>
                    <Time time={time}/>
                    <p>See if you managed to get your name on the leaderboard!</p>
                    <button type="button" onClick={() => window.location.reload()}>Play Again</button>
                </div>
                <div className="leaderboard">
                    <p>Leaderboard:</p>
                    <ol>
                        {fastestTimes.map((item) => {
                            return (
                                <li>
                                    <p>{item.name}</p>
                                    <p>{item.time}</p>    
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default GameEnd;