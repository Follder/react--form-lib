import React from "react";
import "./InputGroup.scss";
import { LabelPosition } from "../../types/types";
import { Size } from "../../types/types";
import { Required } from "../../types/types";
import { LeftIcon } from "../../types/types";
import { RightIcon } from "../../types/types";
import InputLabel from "../InputLabel/InputLabel";
import InputAnnotation from "../InputAnnotation/InputAnnotation";
import InputText from "../InputText/InputText";
import { getRequiredOption } from "../../utils/getRequiredOption";
import { getFormElementClassNames } from "../../utils/getFormElementClassNames";

export interface InputGroupProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  labelPosition?: LabelPosition;
  size?: Size;
  isQuiet?: boolean;
  required?: boolean;
  requiredText?: Required;
  info?: string | null;
  isValid?: boolean;
  helperText?: string | null;
  errorText?: string | null;
  isDisabled?: boolean;
  leftIcon?: LeftIcon;
  rightIcon?: RightIcon;
  isCmndIcon?: boolean;
  placeholder?: string | undefined;
  label?: string;
  customClassname?: string;
};

const InputGroup: React.FC<InputGroupProps> = ({
  labelPosition = "top",
  size = "md",
  isQuiet = false,
  required = true,
  requiredText = 'fdf',
  info = "This is a tooltip",
  isValid = true,
  helperText = "This is a hint text to help user.",
  errorText = "Wrong value",
  isDisabled = false,
  leftIcon = "search",
  rightIcon = "help",
  isCmndIcon = true,
  placeholder = "Inp...",
  label = "Label",
  customClassname = "",
  ...nativeInputProps
}) => {
  const requiredOption = getRequiredOption(required, requiredText, helperText);

  const { formElement, inputElement } = getFormElementClassNames({
    labelPosition,
    required,
    isQuiet,
    isValid,
    leftIcon,
    rightIcon,
    isCmndIcon,
    isDisabled,
    size
  })

  return (
    <div className={formElement}>
      <div className="form-element__wrapper">
        <InputLabel
          label={label}
          requiredOption={requiredOption}
          info={info}
        />
        <div className={inputElement}>
          <InputText
            {...nativeInputProps}
            placeholder={placeholder}
            isDisabled={isDisabled}
            required={required}
            requiredOption={requiredOption}
            customClassname={customClassname}
          />
        </div>
      </div>
      <InputAnnotation
        isValid={isValid}
        requiredOption={requiredOption}
        errorText={errorText}
      />
    </div>
  );
};

export default InputGroup;