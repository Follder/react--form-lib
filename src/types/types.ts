export type LabelPosition = "top" | "side";
export type Size = "xs" | "md" | "lg" | "xl";
export type Required = string | "required" | "*";
export type LeftIcon = "user" | "search" | "password" | "email" | null;
export type RightIcon = "help" | null;
export type Type = "text" | "email" | "password" | "user";
export type RequiredOption = {
  labelText: string,
  helperText: string | null,
}