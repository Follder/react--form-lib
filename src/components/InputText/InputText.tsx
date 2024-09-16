import { RequiredOption } from "../../types/types";

type Props = {
  placeholder: string | undefined,
  customClassname: string,
  requiredOption: RequiredOption,
  required: boolean,
  isDisabled: boolean,
}

const InputText: React.FC<Props> = ({
  placeholder,
  customClassname,
  required,
  isDisabled,
}) => {

  return (
    <input
      placeholder={placeholder}
      id="id"
      className={customClassname}
      required={required}
      disabled={isDisabled}
    />
  )
};

export default InputText;
