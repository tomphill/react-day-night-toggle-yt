import React from "react";
import "./App.css";
import Toggle from "./Toggle";

function App() {
    const [toggled, setToggled] = React.useState(false);
    const handleClick = () => {
        setToggled((s) => !s);
    };

    return (
        <div className="App">
            <Toggle toggled={toggled} onClick={handleClick} />
        </div>
    );
}

export default App;
