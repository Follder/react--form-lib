export const getClassnameRow = (
  initialClassname: string,
  addClassnames: (string | null)[]
): string => {
  const filteredClassnames = addClassnames.filter((name): name is string => name !== null);

  const classNames = filteredClassnames.reduce((acc, next) => {
    return acc + " " + next;
  }, initialClassname);

  return classNames;
};