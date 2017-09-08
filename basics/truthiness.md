### Truthiness

In JavaScript, all values can be treated as Boolean. Which values are treated as true or false is called their "truthiness".

```js
var something = {};
if (something) {
  console.log('something is truthy');
}

// You can also use the NOT operator to get falsyness
!null // true
!'a'  // false
```

First, understand which values are falsy.

```js
Boolean(false)     	// yep
Boolean(0)					// zero
Boolean(-0)					// really
Boolean('')					// the empty string
Boolean(null)				// null
Boolean(undefined)	// undefined variables
Boolean(NaN)				// always false
```

Anything that is not falsy is truthy.

```js
Boolean(true)	// yep
Boolean(-4)		// non-zero numbers
Boolean(' ')	// non-empty strings
Boolean({})		// any object, array, function, etc.
Boolean([])		// even if the object/array is empty
```

A developer can easily test the existence of text input or option values on an object.

```js
if (formField.value) {
  console.log('value is probably a string with at least one character');
}
```
