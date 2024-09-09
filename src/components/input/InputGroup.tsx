import React from "react";
import "./InputGroup.scss";
import { LabelPosition } from "../../types/types";
import { Size } from "../../types/types";
import { Required } from "../../types/types";
import { LeftIcon } from "../../types/types";
import { RightIcon } from "../../types/types";
import { generateClassname } from "../../utils/generateClassname";
import { getClassnameRow } from "../../utils/getClassnameRow";
import InputLabel from "../InputLabel/InputLabel";
import InputAnnotation from "../InputAnnotation/InputAnnotation";
import InputText from "../InputText/InputText";
import { getRequiredOption } from "../../utils/getRequiredOption";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  labelPosition?: LabelPosition;
  value?: string;
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

const InputGroup: React.FC<Props> = ({
  labelPosition = "top",
  value = "",
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
  const getSizeClassname = () => `form-element_${size}`;
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
    generateClassname(required, true, "form-element_attention")
  );
  formElementClassnames.push(
    generateClassname(required, true, "form-element_attentionText")
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
            nativeInputProps={nativeInputProps}
            placeholder={placeholder}
            isDisabled={isDisabled}
            required={required}
            requiredOption={requiredOption}
            value={value}
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
