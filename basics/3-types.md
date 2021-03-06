# Types
JavaScript is loosely typed (a dynamic language) and has [seven data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

`typeof` is safe to call on anything, including undefined variables, but it [does not return the types you expect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).

### Boolean, Number, and String

```js
const a = true	// boolean values are true or false
const b = 3.14	// number values are 64-bit floating point (IEEE 754)
const c = 'hi'	// string values are array-like lists of strings
'h'[0] === 'h'	// beware infinite string recursion
```

### Special number `NaN`
Some mathematical operations will return the special number `NaN`. All comparisons with `NaN` are false because it is the impossible value, so use the global function `isNaN()` to test instead of equality.

```js
const d = 1/0;
isNaN(d); // true
```

### Keywords `null` and `undefined`
Unlike `NaN` which is evaluated at a hardware level because it's part of the floating point specification, `null` and `undefined` are references that you may more freely use in your code.

```js
let e;    // e === undefined
e = null; // e === null
```

### Objects

Everything else is an object, a very generic dictionary of string keys and any values.

```js
const obj = {}; // new Object()
obj.one = 1;
obj['two'] = 2;
console.log(obj); // { "one": 1, "two": 2 }
```

### Arrays
Arrays can be easily created with literals like `[1, 2, 3]`. They are dynamically sized, so you can add to or remove elements from them as much as you want after creating them. Arrays can contain mixed types so `[true, 0, 'thing']` is valid.
