import { useState } from "react";
import "../../styles/useForms.css"

function AppState() {
    console.log("render App");
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={`App ${darkMode && "dark-mode"}`}>
            <Description />
            <button
                onClick={() => {
                    setDarkMode(!darkMode);
                }}
            >
                toggle dark mode
            </button>
        </div>
    );
}
const Description = () => {
    console.log("render Description");
    return (
        <div className="pt-50px">
            <h1>The useState hook</h1>
            <h2>Click the button to toggle the state</h2>
        </div>
    );
};


export default AppState