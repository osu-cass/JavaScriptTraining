# Write What You Mean
JavaScript is an extremely flexible language, and often there are countless ways to do a particular thing.

You should strive to write code that is indicative of your intentions (read "semantic code"). Here is an example of unclear code.

[Eric Elliott has an excellent write-up](https://medium.com/javascript-scene/elements-of-javascript-style-caa8821cb99f) on the topic of style, naming.

## `typeof` and truthiness

```js
function doWork (options) {
  if (typeof options === 'object' && typeof options.title !== 'undefined') {
    console.log(`title is ${options.title}`)
  }
}
```

Function arguments are variable declarations: you do not need the safety of `typeof` to test for its existence. Also, all values in JavaScript except `null` and `undefined` are safe to access properties on. In code with variables that might be null, a developer should prefer to test truthiness instead of type unless types need to be distinguished.

The author of this code likely was expecting a non-empty string at `options.title` object, so a shorter, more meaningful snippet might be:

```js
function doWork (options) {
  if (options && options.title) {
    console.log(`title is ${options.title}`)
  }
}
```
