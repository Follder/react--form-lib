import { LabelPosition, LeftIcon, RightIcon, Size } from "../types/types";
import { generateClassname } from "./generateClassname";
import { getClassnameRow } from "./getClassnameRow";

type FormElementClassNamesParams = {
  labelPosition: LabelPosition;
  size: Size;
  isQuiet: boolean;
  required: boolean;
  isValid: boolean;
  leftIcon: LeftIcon;
  rightIcon: RightIcon;
  isCmndIcon: boolean;
  isDisabled: boolean;
}

export const getFormElementClassNames = ({
  labelPosition,
  required,
  isQuiet,
  isValid,
  leftIcon,
  rightIcon,
  isCmndIcon,
  isDisabled,
  size
}: FormElementClassNamesParams) => {
  const formElementClassnames = [];
  const inputElementClassnames = [];

  const getSizeClassname = () => `form-element_${size}`;

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

  return { formElement, inputElement };
}