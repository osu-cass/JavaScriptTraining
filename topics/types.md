# Variables and Types

### Variables

Any type of value can be stored in any variable.

```javascript
var input = document.getElementById('my-input');
input = ['my string', "my other string"];
input = 0.66322;    // not type checked at all, ever
console.log(typeof input); // "number"
```

`typeof` is safe to call on anything, including undefined names or vars.

### Primitives

```javascript
var a = true;  // Booleans are true or false
var b = 3.14;  // Numbers are 64-bit floating point (IEEE 754)
var c = 'hi';  // Strings are array-like lists of strings
'h'[0] === 'h' // true, beware infinite recursion
```

### `NaN` keyword
Some mathematical operations will return the special number `NaN`. All comparisons with `NaN` are false because it is the impossible value, so use the global function `isNaN()` to test instead of equality.

```javascript
var d = 1/0;
isNaN(d); // true
```

### `null` and `undefined` keywords
Unlike `NaN` which is evaluated at a hardware level because it's part of the floating point specification, `null` and `undefined` are references that you may more freely use in your code.

```javascript
var e;    // e === undefined
e = null; // e === null
```

<hr>

## Objects

Everything else is an object, a very generic dictionary of string keys and any values.

```JavaScript
var obj = {}; // new Object()
obj.one = 1;
obj['two'] = 2;
console.log(obj); // { "one": 1, "two": 2 }
```

### Arrays
Arrays can be easily created with literals like `[1, 2, 3]`. They are dynamically sized, so you can add to or remove elements from them as much as you want after creating them. Arrays can contain mixed types so `[true, 0, "thing"]` is valid.

### Functions
Functions in JavaScript behave very similiar to other C-like languages.

```javascript
// A function statement.
function doNothing () {}
```

Everything in JavaScript is an object or primitive type. Even `Array` basically is an extension of `Object`. Even `Function` is a kind of `Object`. This means all functions are values.

```javascript
// A variable being set to a function expression.
var doNothing = function () {};
```

Also keep in mind function arguments can be omitted, but they will always be applied in order. It is not smart enough to know what values are meant to pair with which parameters. If you see vendor libraries "fix" method calls with missing parameters, that is not JavaScript but a developer helping you out.

```javascript
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
