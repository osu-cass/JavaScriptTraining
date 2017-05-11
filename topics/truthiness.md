### Truthiness

In JavaScript, all values can be treated as Boolean. Which values are treated as true or false is called their "truthiness".

```JavaScript
var something = {};
if (something) {
  console.log('something is truthy');
}

// You can also use the NOT operator to get falseyness
!null // true
!'a'  // false
```

First, understand which values are falsey.

```JavaScript
var falsey = [
  false,     // yep
  0,         // zero
  '',        // empty strings
  null,      // null
  undefined  // undefined variables
];
```
Anything that is not falsey is truthy.

```JavaScript
var truthyExamples = [
  true,      // yep
  -4,        // non-zero numbers
  '   ',     // non-empty strings
  {},        // any object, array, function, etc.
  []         // even if the object/array is empty
];
```

You can conveniently test for an array's length this way though.

```JavaScript
if ([1, 2].length) {
  console.log('array contained items');
}
```

Or the existence of text input or option values on an object too.

```JavaScript
if (formField.value) {
  console.log('value is probably a string with at least one character');
}
```
