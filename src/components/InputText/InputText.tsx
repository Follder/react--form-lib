import { RequiredOption } from "../../types/types";

type Props = {
  placeholder: string | undefined,
  customClassname: string,
  requiredOption: RequiredOption,
  required: boolean,
  isDisabled: boolean,
  nativeInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputText: React.FC<Props> = ({
  nativeInputProps = {},
  placeholder,
  customClassname,
  required,
  isDisabled,
}) => {

  return (
    <input
      type={nativeInputProps.type}
      name={nativeInputProps.name}
      placeholder={placeholder}
      id="id"
      className={customClassname}
      required={required}
      disabled={isDisabled}
    />
  )
};

export default InputText;
