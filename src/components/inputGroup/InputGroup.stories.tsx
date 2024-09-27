import { Meta, StoryFn } from "@storybook/react";
import InputGroup, { InputGroupProps } from "./InputGroup";
import "../../index.scss";
import "../../theme/storybookColors.scss";

export default {
  title: "Input",
  component: InputGroup,
} as Meta<InputGroupProps>;

const Template: StoryFn<InputGroupProps> = (args: InputGroupProps) => (
  <InputGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  labelPosition: "top",
  size: "md",
  isQuiet: false,
  required: true,
  requiredText: "fdf",
  info: "This is a tooltip",
  isValid: true,
  helperText: "This is a hint text to help user.",
  errorText: "Wrong value",
  isDisabled: false,
  leftIcon: "search",
  rightIcon: "help",
  isCmndIcon: true,
  placeholder: "Inp...",
  label: "Label",
  customClassname: "",
};
