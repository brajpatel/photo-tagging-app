import Timer from "./Time";

function Sidebar(props) {
    const { time, charData } = props;

    return (
        <div className="sidebar">
            <div>
                <Timer time={time}/>
                <div className="character-list-container">
                    <h2>Characters to find:</h2>
                    <ul className="character-list">
                        {charData.map((char) => {
                            return (
                                <li key={char.id} className={char.id}>
                                    <p>{char.name}<i className="fa-solid fa-image"></i></p>
                                    <img src={char.image}  alt={char.name}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <a className="link" href="https://github.com/brajpatel" target="_blank">Create by Brajesh<i className="fa-brands fa-github"></i></a>
        </div>
    )
}

export default Sidebar;