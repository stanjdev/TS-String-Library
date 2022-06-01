const capitalize = (str: string): string => {
  if (str === "") return str;
  return str[0].toUpperCase() + str.slice(1);
};

const allCaps = (str: string): string => {
  return str.toUpperCase();
};

const capitalizeWords = (str: string): string => {
  return str.split(" ").map((word: string) => capitalize(word)).join(" ");
};

const removeExtraSpaces = (str: string): string => {
  return str.split(" ").filter((word: string) => word.trim()).join(" ");
};

const kebobCase = (str: string): string => {
  return removeExtraSpaces(str.toLowerCase().replace(/\W/gi, " ")).replace(/\s/gi, "-");
};

const snakeCase = (str: string): string => {
  return removeExtraSpaces(str.toLowerCase().replace(/\W/gi, " ")).replace(/\s/gi, "_");
};

const camelCase = (str: string): string => {
  const wordArr: string[] = str.split(" ").filter((word: string) => word.trim());
  return wordArr[0].toLowerCase() + capitalizeWords(wordArr.splice(1).join(" ")).replace(/\W\s/gi, "");
};

const shift = (str: string, shiftBy = 1): string => {
  return str.slice(shiftBy) + str.slice(0, shiftBy);
};

const makeHashTag = (str: string): string[] => {
  return removeExtraSpaces(str).split(" ").sort((a: string, b: string) => b.length - a.length).slice(0, 3).map((word: string) => "#" + word.toLowerCase());
};

const isEmpty = (str: string): boolean => {
  return str.trim().length === 0;
};

module.exports = {
  capitalize,
  allCaps,
  capitalizeWords,
  removeExtraSpaces,
  kebobCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty,
};
