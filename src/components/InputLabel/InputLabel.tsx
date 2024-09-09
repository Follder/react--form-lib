import { ReactComponent as Icon } from "../../assets/icons/info.svg";
import { RequiredOption } from "../../types/types";

type Props = {
  label: string;
  requiredOption: RequiredOption;
  info: string | null;
};

interface IconProps {
  info?: string | null;
}

const InfoIcon: React.FC<IconProps> = ({ info }) => (
  <>
    {info && (
      <span className="form-element__label-icon">
        {info && <span className="form-element__label-info">{info}</span>}
        <Icon />
      </span>
    )}
  </>
);

const InputLabel: React.FC<Props> = ({
  label,
  requiredOption,
  info,
}) => (
  <label htmlFor="id" className="form-element__label">
    {label}
    <InfoIcon info={info} />
    <span className="form-element__required">{requiredOption.labelText}</span>
  </label>
);

export default InputLabel;
