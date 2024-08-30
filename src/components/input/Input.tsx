import React, { useState } from "react";
import InfoIcon from "../icons/Info/Info";
import "./input.scss";

type LabelPosition = "top" | "side";
type Size = "xs" | "md" | "lg" | "xl";
type Required = string | "required" | "*";
type Info = string | null;
type LeftIcon = "user" | "search" | "password" | "email" | null;
type RightIcon = "help" | null;

type Props = {
  labelPosition?: LabelPosition;
  value?: string;
  size?: Size;
  isQuiet?: boolean;
  required?: Required;
  info?: Info;
  isValid?: boolean;
  helperText?: string | null;
  errorText?: string | null;
  isDisabled?: boolean;
  leftIcon?: LeftIcon;
  rightIcon?: RightIcon;
  isCmndIcon?: boolean;
};

const Input: React.FC<Props> = ({
  labelPosition = "top",
  value = "fdfs",
  size = "xl",
  isQuiet = false,
  required = "4534",
  info = "This is a tooltip",
  isValid = false,
  helperText = "This is a hint text to help user111.",
  errorText = "Wrong value",
  isDisabled = false,
  leftIcon = "search",
  rightIcon = "help",
  isCmndIcon = true,
}) => {
  const [query, setQuery] = useState(value);

  const getRequiredOption = () => {
    switch (required) {
      case "required":
        return {
          labelText: "(required)",
          helperText: "This field is required",
          required: true,
        };
      case "*":
        return {
          labelText: "*",
          helperText: "This field is required",
          required: true,
        };
      case "":
        return {
          labelText: "",
          helperText: "",
          required: false,
        };
      default:
        return {
          labelText: `(${required})`,
          helperText: helperText,
          required: false,
        };
    }
  };

  const requiredOption = getRequiredOption();

  const generateClassname = (
    propps: string | boolean | null,
    value: string | boolean,
    className: string,
    secondClassName: string | null = null
  ) => {
    return propps === value ? className : secondClassName;
  };

  const position = generateClassname(
    labelPosition,
    "top",
    "form-element_top",
    "form-element_side"
  );
  const require = generateClassname(required, "*", "form-element_attention");
  const helperTextAttention = generateClassname(
    required,
    "required",
    "form-element_attentionText"
  );
  const quiet = generateClassname(isQuiet, true, "form-element_quiet");
  const error = generateClassname(isValid, false, "form-element_error");
  const searchIcon = generateClassname(
    leftIcon,
    "search",
    "form-element_icon-left form-element_icon-left-search"
  );
  const helpIcon = generateClassname(
    rightIcon,
    "help",
    "form-element_icon-right"
  );
  const cmndIcon = generateClassname(
    isCmndIcon,
    true,
    "form-element_icon-cmnd"
  );

  const getSizeClassname = () => `form-element_${size}`;
  const sizeClassname = getSizeClassname();

  const infoIcon = () =>
    info && (
      <span className="form-element__label-icon">
        {info && <span className="form-element__label-info">{info}</span>}
        <InfoIcon />
      </span>
    );

  return (
    <div
      className={`form-element ${position} ${require} ${quiet} ${helperTextAttention} ${sizeClassname} ${error} ${searchIcon} ${helpIcon}`}
    >
      <div className="form-element__wrapper">
        <label htmlFor="email" className="form-element__label">
          Email
          {infoIcon()}
          {required && (
            <span className="form-element__required">
              {requiredOption.labelText}
            </span>
          )}
        </label>
        <div className={`${cmndIcon}`}>
          <input
            type="text"
            className={`form-element__input`}
            placeholder="Input..."
            id="email"
            value={query}
            required={requiredOption?.required}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isDisabled}
          />
        </div>
      </div>
      <div className="form-element__helper-text">
        {isValid ? requiredOption.helperText : errorText}
      </div>
    </div>
  );
};

export default Input;
