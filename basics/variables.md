# Variables

Any type of value can be stored in any variable.

```js
let input = document.getElementById('my-input');
input = ['my string', "my other string"];
input = 0.66322;    // not type checked at all, ever
console.log(typeof input); // "number"
```

## `const`

Prefer `const`. It has block scoping and encourages functional code.

## `let`

Use `let` instead of `var`. It has block scoping and works like expected.

## `var`

Try not use `var`. It has function scoping and tends to crawl out of its hole.
