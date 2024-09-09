import { useState } from "react";
import Input from "../input/InputGroup";
import "./App.scss";
import { LabelPosition } from "../../types/types";
import { Size } from "../../types/types";
import { LeftIcon } from "../../types/types";
import { RightIcon } from "../../types/types";

function App() {
  const [theme, setTheme] = useState("light");
  const [labelPosition, setLabelPosition] = useState<LabelPosition>("top");
  const [size, setSize] = useState<Size>("md");
  const [isQuiet, setIsQuiet] = useState(false);
  const [required, setRequired] = useState(false);
  const [requiredText, setRequiredText] = useState("");
  const [info, setInfo] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [helperText, setHelperText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [leftIcon, setLeftIcon] = useState<LeftIcon>(null);
  const [rightIcon, setRightIcon] = useState<RightIcon>(null);
  const [isCmndIcon, setIsCmndIcon] = useState(true);
  const [placeholder, setPlaceholder] = useState("");
  const [label, setLabel] = useState("Email");

  const toggleBtn = (
    setFunc: (value: (prev: string) => string) => void,
    arg1: string,
    arg2: string
  ) => {
    setFunc((prev) => (prev === arg1 ? arg2 : arg1));
  };

  const toggleBooleanBtn = (
    setFunc: (value: (prev: boolean) => boolean) => void,
    arg1: boolean,
    arg2: boolean
  ) => {
    setFunc((prev) => (prev === arg1 ? arg2 : arg1));
  };

  return (
    <div className="page" data-theme={theme}>
      <header className="container">
        <div className="settings">
          <h1>Playground</h1>
          <div className="settings__theme">
            <button
              onClick={() => toggleBtn(setTheme, "light", "dark")}
              className={theme === "dark" ? "active" : ""}
            >
              Switch to {theme === "light" ? "Dark" : "Light"} Theme
            </button>
          </div>
          <div className="settings__label">
            Choose label position:
            <div className="settings__label-radio">
              <label
                htmlFor="top"
                className={labelPosition === "top" ? "active" : ""}
              >
                Top
              </label>
              <input
                type="radio"
                id="top"
                value="top"
                checked={labelPosition === "top"}
                onChange={(e) =>
                  setLabelPosition(e.target.value as LabelPosition)
                }
              />
            </div>
            <div className="settings__label-radio">
              <label
                htmlFor="side"
                className={labelPosition === "side" ? "active" : ""}
              >
                Side
              </label>
              <input
                type="radio"
                id="side"
                value="side"
                checked={labelPosition === "side"}
                onChange={(e) =>
                  setLabelPosition(e.target.value as LabelPosition)
                }
              />
            </div>
          </div>
          <div className="settings__size">
            <label htmlFor="size-select">Choose your size:</label>
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
            <button
              onClick={() => toggleBooleanBtn(setIsQuiet, true, false)}
              className={isQuiet === true ? "active" : ""}
            >
              {isQuiet === true ? "With" : "Without"} border
            </button>
          </div>
          <div className="settings__required">
            <button
              onClick={() => toggleBooleanBtn(setRequired, true, false)}
              className={required === true ? "active" : ""}
            >
              Required {required === true ? "False" : "True"}
            </button>
          </div>
          <div className="settings__required">
            <label>
              RequiredText:
              <input
                type="text"
                value={requiredText}
                onChange={(e) => setRequiredText(e.target.value)}
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
              Add info icon with your message:
              <input
                type="text"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              />
            </label>
          </div>
          <div className="settings__helper">
            <label>
              Your helper message:
              <input
                type="text"
                value={helperText}
                onChange={(e) => setHelperText(e.target.value)}
              />
            </label>
          </div>
          <div className="settings__valid">
            <button
              onClick={() => toggleBooleanBtn(setIsValid, true, false)}
              className={isValid === false ? "active" : ""}
            >
              Error state {isValid === false ? "Off" : "On"}
            </button>
          </div>
          <div className="settings__error">
            <label>
              Your error message:
              <input
                type="text"
                value={errorText}
                onChange={(e) => setErrorText(e.target.value)}
              />
            </label>
          </div>
          <div className="settings__disabled">
            <button
              onClick={() => toggleBooleanBtn(setIsDisabled, true, false)}
              className={isDisabled === true ? "active" : ""}
            >
              Disabled {isDisabled === true ? "False" : "True"}
            </button>
          </div>
          {labelPosition === "top" && (
            <>
              <div className="settings__left">
                <label htmlFor="left-select">Choose left icon:</label>
                <select
                  id="left-select"
                  value={leftIcon || ""}
                  onChange={(e) => {
                    const newValue =
                      e.target.value === ""
                        ? null
                        : (e.target.value as LeftIcon);
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
                  value={rightIcon || ""}
                  onChange={(e) => {
                    const newValue =
                      e.target.value === ""
                        ? null
                        : (e.target.value as RightIcon);
                    setRightIcon(newValue);
                  }}
                >
                  <option value="">Without icon</option>
                  <option value="help">Help</option>
                </select>
              </div>
              <div className="settings__cmnd">
                <button
                  onClick={() => toggleBooleanBtn(setIsCmndIcon, true, false)}
                  className={isCmndIcon === false ? "active" : ""}
                >
                  {isCmndIcon === false ? "With" : "Without"} cmnd icon
                </button>
              </div>
            </>
          )}

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

          <div className="settings__placeholder">
            <label>
              Your label:
              <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="page__wrapper">
          <Input
            labelPosition={labelPosition}
            size={size}
            isQuiet={isQuiet}
            required={required}
            requiredText={requiredText}
            info={info}
            isValid={isValid}
            helperText={helperText}
            errorText={errorText}
            isDisabled={isDisabled}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            isCmndIcon={isCmndIcon}
            label={label}
            placeholder={placeholder}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
