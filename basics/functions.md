# Functions

Functions in JavaScript behave very similar to other C-like languages.

```js
// A named function statement
function doNothing1 () {}
```

Everything in JavaScript is an object or primitive type. Even `Array` basically is an extension of `Object`. Even `Function` is a kind of `Object`. This means all functions are values.

```js
// An implicitly-named function
const doNothing2 = function () {}
// An implicitly-named arrow function
const doNothing3 = () => {}
```

Also keep in mind function arguments can be omitted, but they will always be applied in order. It is not smart enough to know what values are meant to pair with which parameters. If you see vendor libraries "fix" method calls with missing parameters, that is not JavaScript but a developer helping you out.

```js
function list3Things (a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

list3Things('a', 'b', 'c');
// a
// b
// c

list3Things('a', 'c');
// a
// c
// undefined
```
