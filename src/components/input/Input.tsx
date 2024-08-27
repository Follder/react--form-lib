import React from "react";
import "./input.scss";

type LabelPosition = "top" | "side";
type Size = "xs" | "md" | "lg" | "xl";

type Props = {
  labelPosition?: LabelPosition;
  value?: string;
  size?: Size;
};

const Input: React.FC<Props> = ({
  labelPosition = "side",
  value = "",
  size = "xs",
  // quiet,
  // isRequired,
  // typeRequired,
  // labelInfo,
  // idDisabled,
}) => {
  const formLabelPosition =
    labelPosition === "top"
      ? "form-element__wrapper_label-top"
      : "form-element__wrapper_label-side";

  const sizeInput = () => {
    switch (size) {
      case 'xs':
        return {
          '--input-padding-block': '2px',
          '--input-padding-left': '12px',
          '--input-padding-right': '12px',
          '--input-line-height': '20px',
          '--input-font-size': '12px',
        }
      case 'md':
        return {
          '--input-padding-block': '8px',
          '--input-padding-left': '12px',
          '--input-padding-right': '12px',
          '--input-line-height': '20px',
          '--input-font-size': '12px',
        }
      case 'lg':
        return {
          '--input-padding-block': '8px',
          '--input-padding-left': '16px',
          '--input-padding-right': '16px',
          '--input-line-height': '24px',
          '--input-font-size': '14px',
        }
      case 'xl':
        return {
          '--input-padding-block': '12px',
          '--input-padding-left': '16px',
          '--input-padding-right': '16px',
          '--input-line-height': '24px',
          '--input-font-size': '14px',
        }
    }
  }

  const applySizeVariables = () => {
    const variables = sizeInput();
    for (const [key, value] of Object.entries(variables)) {
      document.documentElement.style.setProperty(key, value);
    }
  };

  React.useEffect(() => {
    applySizeVariables();
  }, [size]);
  console.log(formLabelPosition);

  return (
    <div style={{ "--input-padding-block": "0px" } as React.CSSProperties} className="form-element">
      <div className={`form-element__wrapper ${formLabelPosition}`}>
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
