export const getRequiredOption = (
  required: boolean,
  requiredText: string,
  helperText: string | null
) => {
  if (required && requiredText === "required") {
    return {
      labelText: "(required)",
      helperText: "This field is required",
    };
  }

  if (required) {
    return {
      labelText: "*",
      helperText: "This field is required",
    };
  }

  if (!required && requiredText === "") {
    return {
      labelText: "",
      helperText: helperText,
    };
  }

  return {
    labelText: `(${requiredText})`,
    helperText: helperText,
  };
};
