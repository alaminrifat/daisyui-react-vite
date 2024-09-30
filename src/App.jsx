import "./App.css";
import Aboutme from "./components/Aboutme";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Services from "./components/Services";
import MyProjects from "./components/MyProjects";

function App() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    };
    return (
        <div
            className={`min-h-screen  ${
                theme === "dark"
                    ? "bg-white text-black"
                    : "bg-gray-900 text-white"
            }`}
        >
            <div className="flex flex-col container mx-auto">
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <Home theme={theme} />
                <Aboutme theme={theme} />
                <Services theme={theme} />
                <MyProjects theme={theme} />
            </div>
        </div>
    );
}

export default App;
