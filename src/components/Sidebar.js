import React from "react";
import Timer from "./Timer";

function Sidebar(props) {
    const { charData } = props;

    return (
        <div className="sidebar">
            <div>
                <Timer/>
                <div className="character-list-container">
                    <h2>Characters to find:</h2>
                    <ul className="character-list">
                        {charData.map((char) => {
                            return (
                                <li key={char.id}>
                                    <p>{char.name}<i class="fa-solid fa-image"></i></p>
                                    <img src={char.image}  alt={char.name}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <a className="link" href="https://github.com/brajpatel" target="_blank">Create by Brajesh<i class="fa-brands fa-github"></i></a>
        </div>
    )
}

export default Sidebar;