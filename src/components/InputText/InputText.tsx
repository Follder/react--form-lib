import { useState } from "react";
import { RequiredOption } from "../../types/types";

type Props = {
  placeholder: string | undefined,
  customClassname: string,
  requiredOption: RequiredOption,
  required: boolean,
  isDisabled: boolean,
  value: string,
  nativeInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputText: React.FC<Props> = ({
  nativeInputProps = {},
  placeholder,
  customClassname,
  required,
  isDisabled,
  value,
}) => {
  const [query, setQuery] = useState(value);

  return (
    <input
      type={nativeInputProps.type}
      name={nativeInputProps.name}
      placeholder={placeholder}
      id="id"
      className={customClassname}
      value={query}
      required={required}
      onChange={(e) => setQuery(e.target.value)}
      disabled={isDisabled}
    />
  )
};

export default InputText;
