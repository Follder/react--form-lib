import { useState } from "react";
import Input from "../input/Input";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="page" data-theme={theme}>
      <header className="container">
        <button onClick={toggleTheme} className="toggleButton">
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
        <div className="page__wrapper">
          <Input />
        </div>
      </header>
    </div>
  );
}

export default App;
