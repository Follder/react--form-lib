import React from "react";
import "./input.scss";

type LabelPosition = "top" | "side";
type Size = "xs" | "md" | "lg" | "xl";
type Required = string | 'required' | 'asteriks';

type Props = {
  labelPosition?: LabelPosition;
  value?: string;
  size?: Size;
  border?: boolean;
  required?: Required;
};

const Input: React.FC<Props> = ({
  labelPosition = "top",
  value = "",
  size = "xs",
  border = true,
  required = '',
  // typeRequired,
  // labelInfo,
  // idDisabled,
}) => {
  const isInputRequired = () => {
    if (required === 'required') {
      return <span className=""></span>
    }
  }

  console.log(required);

  const formLabelPosition =
    labelPosition === "top"
      ? "form-element__wrapper_label-top"
      : "form-element__wrapper_label-side";

  const isInputBorder = border === true ? "form-element__wrapper_border" : null;

  const sizeVariables = () => {
    switch (size) {
      case "xs":
        return {
          "--input-padding-block": "2px",
          "--input-padding-left": "12px",
          "--input-padding-right": "12px",
          "--input-line-height": "20px",
          "--input-font-size": "12px",
        };
      case "md":
        return {
          "--input-padding-block": "8px",
          "--input-padding-left": "12px",
          "--input-padding-right": "12px",
          "--input-line-height": "20px",
          "--input-font-size": "12px",
        };
      case "lg":
        return {
          "--input-padding-block": "8px",
          "--input-padding-left": "16px",
          "--input-padding-right": "16px",
          "--input-line-height": "24px",
          "--input-font-size": "14px",
        };
      case "xl":
        return {
          "--input-padding-block": "12px",
          "--input-padding-left": "16px",
          "--input-padding-right": "16px",
          "--input-line-height": "24px",
          "--input-font-size": "14px",
        };
    }
  };

  const applySizeVariables = () => {
    const variables = sizeVariables();
    for (const [key, value] of Object.entries(variables)) {
      document.documentElement.style.setProperty(key, value);
    }
  };

  React.useEffect(() => {
    applySizeVariables();
  }, [size]);
  console.log(formLabelPosition);

  return (
    <div
      className="form-element"
    >
      <div className={`form-element__wrapper ${formLabelPosition} ${isInputBorder}`}>
        <label htmlFor="email" className="form-element__label">
          Email
        </label>
        <input
          type="text"
          className={`form-element__input`}
          placeholder="Input..."
          id="email"
          value={value}
        />
      </div>
      <div className="form-element__helper-text">
        This is a hint text to help user.
      </div>
    </div>
  );
};

export default Input;
