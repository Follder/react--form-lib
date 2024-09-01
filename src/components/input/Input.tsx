import React, { useState } from "react";
import InfoIcon from "../icons/Info/Info";
import "./input.scss";
import { LabelPosition } from "../../types/types";
import { Size } from "../../types/types";
import { Required } from "../../types/types";
import { Info } from "../../types/types";
import { LeftIcon } from "../../types/types";
import { RightIcon } from "../../types/types";
import { Type } from "../../types/types";

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
  type?: Type;
  name?: string;
  placeholder?: string | undefined;
  customClassname?: string;
};

const Input: React.FC<Props> = ({
  labelPosition = "top",
  value = "",
  size = "md",
  isQuiet = false,
  required = "fdf",
  info = "This is a tooltip",
  isValid = true,
  helperText = "This is a hint text to help user.",
  errorText = "Wrong value",
  isDisabled = false,
  leftIcon = "search",
  rightIcon = "help",
  isCmndIcon = true,
  type = "email",
  name = "",
  placeholder = "Inp...",
  customClassname = "",
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
          helperText: helperText,
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

  const getSizeClassname = () => `form-element_${size}`;

  const getClassnameRow = (
    initialClassname: string,
    addClassnames: (string | null)[]
  ): string => {
    const filteredClassnames = addClassnames.filter((name): name is string => name !== null);

    const classNames = filteredClassnames.reduce((acc, next) => {
      return acc + " " + next;
    }, initialClassname);

    return classNames;
  };

  const formElementClassnames = [];
  const inputElementClassnames = [];

  formElementClassnames.push(
    generateClassname(
      labelPosition,
      "top",
      "form-element_top",
      "form-element_side"
    )
  );
  formElementClassnames.push(
    generateClassname(required, "*", "form-element_attention")
  );
  formElementClassnames.push(
    generateClassname(required, "required", "form-element_attentionText")
  );
  formElementClassnames.push(
    generateClassname(isQuiet, true, "form-element_quiet")
  );
  formElementClassnames.push(
    generateClassname(isValid, false, "form-element_error")
  );
  formElementClassnames.push(
    generateClassname(
      leftIcon,
      "search",
      "form-element_icon-left form-element_icon-left-search"
    )
  );
  formElementClassnames.push(
    generateClassname(
      leftIcon,
      "user",
      "form-element_icon-left form-element_icon-left-user"
    )
  );
  formElementClassnames.push(
    generateClassname(
      leftIcon,
      "password",
      "form-element_icon-left form-element_icon-left-password"
    )
  );
  formElementClassnames.push(
    generateClassname(
      leftIcon,
      "email",
      "form-element_icon-left form-element_icon-left-mail"
    )
  );
  formElementClassnames.push(
    generateClassname(rightIcon, "help", "form-element_icon-right")
  );
  formElementClassnames.push(
    generateClassname(isCmndIcon, true, "form-element_icon-right-offset")
  );
  formElementClassnames.push(getSizeClassname());
  formElementClassnames.push(
    generateClassname(isDisabled, true, "form-element_disabled")
  );
  inputElementClassnames.push(
    generateClassname(isCmndIcon, true, "form-element_icon-cmnd")
  );

  const formElement = getClassnameRow("form-element", formElementClassnames);
  const inputElement = getClassnameRow(
    "form-element__input",
    inputElementClassnames
  );

  console.log(':', requiredOption.helperText);

  const infoIcon = () =>
    info && (
      <span className="form-element__label-icon">
        {info && <span className="form-element__label-info">{info}</span>}
        <InfoIcon />
      </span>
    );

  return (
    <div className={formElement}>
      <div className="form-element__wrapper">
        <label htmlFor="id" className="form-element__label">
          Label
          {infoIcon()}
          {required && (
            <span className="form-element__required">
              {requiredOption.labelText}
            </span>
          )}
        </label>
        <div className={inputElement}>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            id='id'
            className={customClassname}
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
