# TS String Library

![npm](https://img.shields.io/npm/v/string-lib-1)
![npm bundle size](https://img.shields.io/bundlephobia/min/string-lib-1)

[Link to npm library](https://www.npmjs.com/package/string-lib-1)

## Example Usage

```ts
capitalize('hello world');
-> "Hello world"

allCaps('foo bar');
 -> "FOO BAR"

capitalizeWords('hello world');
-> "Hello World"

removeExtraSpaces("   Hello    world!  buttons  ");
-> "hello world! buttons"

kebobCase("   Hello    world!  buttons  ");
-> "hello-world-buttons"

snakeCase("   Hello    world!  buttons  ");
-> "hello_world_buttons"

camelCase("   Hello    world!  buttons  ");
-> "helloWorldButtons"

shift("Hello world!");
-> "ello world!H"

makeHashTag("Amazing bongo drums for sale");
-> ['#amazing', '#bongo', '#drums']

isEmpty(`   `);
-> true
```
