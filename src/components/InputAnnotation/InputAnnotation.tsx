import { RequiredOption } from "../../types/types";

type Props = {
  isValid: boolean;
  requiredOption: RequiredOption;
  errorText: string | null;
};

const InputAnnotation: React.FC<Props> = ({
  isValid,
  requiredOption,
  errorText,
}) => (
  <div className="form-element__helper-text">
    {isValid ? requiredOption.helperText : errorText}
  </div>
);

export default InputAnnotation;
