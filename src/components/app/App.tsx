import { useState } from "react";
import Input from "../input/Input";
import "./App.scss";
import { LabelPosition } from "../../types/types";
import { Size } from "../../types/types";
import { Required } from "../../types/types";
import { Info } from "../../types/types";
import { LeftIcon } from "../../types/types";
import { RightIcon } from "../../types/types";
import { Type } from "../../types/types";

function App() {
  const [theme, setTheme] = useState("light");
  const [labelPosition, setLabelPosition] = useState<LabelPosition>("top");
  const [size, setSize] = useState<Size>("md");
  const [isQuiet, setIsQuiet] = useState(false);
  const [required, setRequired] = useState("");
  const [info, setInfo] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [helperText, setHelperText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [leftIcon, setLeftIcon] = useState<LeftIcon>(null);
  const [rightIcon, setRightIcon] = useState<RightIcon>(null);
  const [isCmndIcon, setIsCmndIcon] = useState(true);
  const [placeholder, setPlaceholder] = useState("");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="page" data-theme={theme}>
      <header className="container">
        <div className="settings">
          <div className="settings__label">
            <label>
              Top
              <input
                type="radio"
                value="top"
                checked={labelPosition === "top"}
                onChange={(e) =>
                  setLabelPosition(e.target.value as LabelPosition)
                }
              />
            </label>
            <label>
              Side
              <input
                type="radio"
                value="side"
                checked={labelPosition === "side"}
                onChange={(e) =>
                  setLabelPosition(e.target.value as LabelPosition)
                }
              />
            </label>
          </div>
          <div className="settings__size">
            <label htmlFor="size-select">Choose a size:</label>
            <select
              id="size-select"
              value={size}
              onChange={(e) => setSize(e.target.value as Size)}
            >
              <option value="xs">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
              <option value="xl">Extra large</option>
            </select>
          </div>
          <div className="settings__quiet">
            <label>
              Without border:
              <input
                type="checkbox"
                checked={isQuiet}
                onChange={(e) => setIsQuiet(e.target.checked)}
              />
            </label>
          </div>
          <div className="settings__required">
            <label>
              Required:
              <input
                type="text"
                value={required}
                onChange={(e) => setRequired(e.target.value)}
              />
            </label>
            <div>
              You can print <b>'required'</b> or <b>'*'</b> to make this field
              as <b>required</b>, or something else to meake this field{" "}
              <b>optional</b>
            </div>
          </div>
          <div className="settings__info">
            <label>
              Add info icon with your text:
              <input
                type="text"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              />
            </label>
          </div>
          <div className="settings__helper">
            <label>
              Your helper text:
              <input
                type="text"
                value={helperText}
                onChange={(e) => setHelperText(e.target.value)}
              />
            </label>
          </div>
          <div className="settings__valid">
            <label>
              Error state off:
              <input
                type="checkbox"
                checked={isValid}
                onChange={(e) => setIsValid(e.target.checked)}
              />
            </label>
          </div>
          <div className="settings__error">
            <label>
              Your error text:
              <input
                type="text"
                value={errorText}
                onChange={(e) => setErrorText(e.target.value)}
              />
            </label>
          </div>
          <div className="settings__disabled">
            <label>
              Your input disabled?
              <input
                type="checkbox"
                checked={isDisabled}
                onChange={(e) => setIsDisabled(e.target.checked)}
              />
            </label>
          </div>
          <div className="settings__left">
            <label htmlFor="left-select">Choose left icon:</label>
            <select
              id="left-select"
              value={leftIcon || ''}
              onChange={(e) => {
                const newValue = e.target.value === "" ? null : (e.target.value as LeftIcon);
                setLeftIcon(newValue);
              }}
            >
              <option value="">Without icon</option>
              <option value="user">User</option>
              <option value="search">Search</option>
              <option value="password">Password</option>
              <option value="email">Email</option>
            </select>
          </div>
          <div className="settings__right">
            <label htmlFor="right-select">Choose right icon:</label>
            <select
              id="right-select"
              value={rightIcon || ''}
              onChange={(e) => {
                const newValue = e.target.value === "" ? null : (e.target.value as RightIcon);
                setRightIcon(newValue);
              }}
            >
              <option value="">Without icon</option>
              <option value="help">Help</option>
            </select>
          </div>
          <div className="settings__cmnd">
            <label>
              Add cmnd icon:
              <input
                type="checkbox"
                checked={isCmndIcon}
                onChange={(e) => setIsCmndIcon(e.target.checked)}
              />
            </label>
          </div>
          <div className="settings__placeholder">
            <label>
              Your placeholder:
              <input
                type="text"
                value={placeholder}
                onChange={(e) => setPlaceholder(e.target.value)}
              />
            </label>
          </div>

        </div>
        <button onClick={toggleTheme} className="toggleButton">
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
        <div className="page__wrapper">
          <Input
            labelPosition={labelPosition}
            size={size}
            isQuiet={isQuiet}
            required={required}
            info={info}
            isValid={isValid}
            helperText={helperText}
            errorText={errorText}
            isDisabled={isDisabled}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            isCmndIcon={isCmndIcon}
            placeholder={placeholder}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
