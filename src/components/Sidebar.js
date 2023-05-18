import React from "react";
import Timer from "./Timer";

function Sidebar() {
    return (
        <div className="sidebar">
            <div>
                <Timer/>
                <div className="character-list">
                    <h2>Characters to find:</h2>
                    <ul>

                    </ul>
                </div>
            </div>
            <a className="link" href="#" target="_blank">GITHUB</a>
        </div>
    )
}

export default Sidebar;