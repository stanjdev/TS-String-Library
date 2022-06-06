# TS-JS String Manipulation Library

![npm](https://img.shields.io/npm/v/string-lib-1)
![npm bundle size](https://img.shields.io/bundlephobia/min/string-lib-1)

A simple JavaScript library to manipulate strings.

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/v8/commands/npm) to install.

```bash
npm i string-lib-1
```

[Link to npm library](https://www.npmjs.com/package/string-lib-1)

## Usage

```ts
const stringLib = require("string-lib-1");

stringLib.capitalize('hello world');
// returns "Hello world"

stringLib.allCaps('foo bar');
// returns "FOO BAR"

stringLib.capitalizeWords('hello world');
// returns "Hello World"

stringLib.removeExtraSpaces("   Hello    world!  buttons  ");
// returns "hello world! buttons"

stringLib.kebobCase("   Hello    world!  buttons  ");
// returns "hello-world-buttons"

stringLib.snakeCase("   Hello    world!  buttons  ");
// returns "hello_world_buttons"

stringLib.camelCase("   Hello    world!  buttons  ");
// returns "helloWorldButtons"

stringLib.shift("Hello world!");
// returns "ello world!H"

stringLib.makeHashTag("Amazing bongo drums for sale", 3);
// returns an array of the n longest words of a given string, with a hashtag '#' prepended to them
// returns ['#amazing', '#bongo', '#drums']

stringLib.isEmpty(`   `);
// returns true
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Testing

To run tests:

```bash
npm test
```

To check code test coverage:

```bash
npx jest --coverage
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
