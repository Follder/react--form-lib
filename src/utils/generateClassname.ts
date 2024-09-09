export const generateClassname = (
  propps: string | boolean | null,
  value: string | boolean,
  className: string,
  secondClassName: string | null = null
) => {
  return propps === value ? className : secondClassName;
};