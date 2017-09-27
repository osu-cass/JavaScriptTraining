# Variables
Any type of value can be stored in any variable.

If your JavaScript environment supports the `const` or `let` keywords (modern browsers, Node.js, TypeScript), you should use them. `const` makes it so a variable can only be assigned once, at the time it is declared. `let` allows you to assign to the variable later, but it uses "block scoping" instead of "function scoping", which is a really good thing.

## `const`
Prefer `const`. It has block scoping and encourages functional code.

## `let`
Use `let` instead of `var`. It has block scoping and works like expected.

## `var`
It has function scoping and tends to crawl out of its hole.

## Example

```js
hoistedToTop = 'can you believe this works?'

let input = `something a user typed in`

input = 0.66322 // not type checked at all, ever

const hostname = `example.com`     // look ma,
const url = `https://${hostname}/` // functional code!

var hoistedToTop

input = null // best way to clear a variable, if needed
```
