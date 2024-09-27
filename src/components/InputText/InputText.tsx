type Props = {
  customClassname: string,
  placeholder: string,
}

const InputText: React.FC<Props> = ({
  customClassname,
  ...nativeInputProps
}) => {

  return (
    <input
      id="id"
      className={customClassname}
      {...nativeInputProps}
    />
  )
};

export default InputText;
