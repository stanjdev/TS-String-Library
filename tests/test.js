/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const stringLib = require("../src/index.js");

test('Capitalize capitalizes the first letter of a word', () => {
  expect(stringLib.capitalize('hello world')).toBe('Hello world');
  expect(stringLib.capitalize('Hello')).toBe('Hello');
  expect(stringLib.capitalize('WORLD')).toBe('WORLD');
});

test('Capitalize returns empty string if string is empty', () => {
  expect(stringLib.capitalize('')).toBe('');
});

test('allCaps capitalizes every letter of a string', () => {
  expect(stringLib.allCaps('hello world')).toBe('HELLO WORLD');
  expect(stringLib.allCaps('WORLD')).toBe('WORLD');
});

test('allCaps capitalizes every letter of a string with punctuation marks', () => {
  expect(stringLib.allCaps('What!')).toBe('WHAT!');
});

test('allCaps returns empty string if string is empty', () => {
  expect(stringLib.allCaps('')).toBe('');
});

test('capitalizeWords capitalizes every word of a string', () => {
  expect(stringLib.capitalizeWords('hello')).toBe('Hello');
  expect(stringLib.capitalizeWords('hello world')).toBe('Hello World');
});

test('capitalizeWords returns empty string if string is empty', () => {
  expect(stringLib.capitalizeWords('')).toBe('');
});

test('capitalizeWords works with a string that is already all capitalized', () => {
  expect(stringLib.capitalizeWords('HELLO WORLD!')).toBe('HELLO WORLD!');
});

test('removeExtraSpaces removes any extra spaces in a string', () => {
  expect(stringLib.removeExtraSpaces('      Hello    world!!!    ')).toBe('Hello world!!!');
});

test('kebobCase removes extra spaces and concatenates words with a hyphen \'-\' ', () => {
  expect(stringLib.kebobCase('   Hello    world!  buttons  ')).toBe('hello-world-buttons');
});

test('snakeCase removes extra spaces and concatenates words with a hyphen \'-\' ', () => {
  expect(stringLib.snakeCase('   Hello    world!  buttons  ')).toBe('hello_world_buttons');
});

test('camelCase removes extra spaces and concatenates words with a hyphen \'-\' ', () => {
  expect(stringLib.camelCase('   Hello    world!  buttons  ')).toBe('helloWorldButtons');
});

test('shift takes a number of letters at the start of a string and shifts them to the end', () => {
  expect(stringLib.shift('Hello world!')).toBe('ello world!H');
  expect(stringLib.shift('Hello world!', 3)).toBe('lo world!Hel');
});

test('makeHashTag returns an array of the 3 longest words of a given string, with a \'#\' prepended to them', () => {
  expect(stringLib.makeHashTag("Amazing bongo drums for sale")).toEqual(['#amazing', '#bongo', '#drums']);
});

test('isEmpty returns a boolean of whether an inputted string is empty or not', () => {
  expect(stringLib.isEmpty(`   `)).toBe(true);
});

