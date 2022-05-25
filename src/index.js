var capitalize = function (str) {
    return str[0].toUpperCase() + str.slice(1);
};
var allCaps = function (str) {
    return str.toUpperCase();
};
var capitalizeWords = function (str) {
    return str.split(" ").map(function (word) { return capitalize(word); }).join(" ");
};
var removeExtraSpaces = function (str) {
    return str.split(" ").filter(function (word) { return word.trim(); }).join(" ");
};
var kebobCase = function (str) {
    return removeExtraSpaces(str.toLowerCase().replace(/\W/gi, " ")).replace(/\s/gi, "-");
};
var snakeCase = function (str) {
    return removeExtraSpaces(str.toLowerCase().replace(/\W/gi, " ")).replace(/\s/gi, "_");
};
var camelCase = function (str) {
    var wordArr = str.split(" ").filter(function (word) { return word.trim(); });
    return wordArr[0].toLowerCase() + capitalizeWords(wordArr.splice(1).join(" ")).replace(/\W\s/gi, "");
};
var shift = function (str, shiftBy) {
    if (shiftBy === void 0) { shiftBy = 1; }
    return str.slice(shiftBy) + str.slice(0, shiftBy);
};
var makeHashTag = function (str) {
    return removeExtraSpaces(str).split(" ").sort(function (a, b) { return b.length - a.length; }).slice(0, 3).map(function (word) { return "#" + word.toLowerCase(); });
};
var isEmpty = function (str) {
    return str.trim().length === 0;
};
// console.log(capitalize('hello world'));
// console.log(allCaps('hello world'));
// console.log(capitalizeWords('hello world'))
// console.log(kebobCase("   Hello    world!  buttons  "));
// console.log(snakeCase("   Hello    world!  buttons  "));
// console.log(camelCase("   Hello    world!  buttons  "));
// console.log(shift("Hello world!"));
// console.log(makeHashTag("Amazing bongo drums for sale"));
// console.log(isEmpty(`   `));
module.exports = {
    capitalize: capitalize,
    allCaps: allCaps,
    capitalizeWords: capitalizeWords,
    removeExtraSpaces: removeExtraSpaces,
    kebobCase: kebobCase,
    snakeCase: snakeCase,
    camelCase: camelCase,
    shift: shift,
    makeHashTag: makeHashTag,
    isEmpty: isEmpty
};
