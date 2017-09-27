# JavaScript Speedtraining

- Read every snippet.
- If you cannot predict what a code snippet will do, read the document linked in the heading.
- If you are familiar with the concept being demonstrated, move on to the next snippet.

JavaScript is the [most popular programming language](https://stackoverflow.com/insights/survey/2017/#technology) in the world. The language has some unusual design choices and pitfalls, many of which owe to the fact that it was [originally designed in 10 days by one person](https://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript) and used by a [very young, naïve Internet](https://upload.wikimedia.org/wikipedia/commons/6/69/Netscape_Navigator_2_Screenshot.png). It will be a lot easier to understand JavaScript if you have basic familiarity with C-like programming languages, id est C++, C#, or Java.

**This training is purposefully dense.** JS is a quirky language, and it is better to take the time to learn. JavaScript gets **seriously** easier to write and debug in modern versions. I cannot overstate how much better the language has gotten in the last five years.

Free free to look information up on [DevDocs](https://devdocs.io/javascript/) and [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).

## Basics

### 1 [REPL](basics/1-repl.md)
```js
console.log(`hello world`);
```

### 2 [Variables](basics/2-variables.md)
```js
a = 'a'
const b = 'b'
let c = 'c'
var a // just don't
```

### 3 [Types](basics/3-types.md)
```js
typeof true
typeof 3.14
typeof `wake me up`
typeof [] // less obvious
```

### 4 [Functions](basics/4-functions.md)
```js
function doNothing1() {}
const doNothing2 = function () {}
const doNothing3 = () => {}
```

### 5 [Truthiness](basics/5-truthiness.md)
```js
const dev = {name: 'alex'}
if (dev) `has non-zero value`
const text = dev.name ? `has name` : `missing name`
```

### 6 [Boolean Operators](basics/6-boolean-operators.md)
```js
const dev = {name: 'alex'}
const name = dev && dev.name // null safety
const text = name || 'unnamed dev' // null coalescing
```

### 7 [Strict vs. Loose Comparison](basics/7-comparison.md)
```js
0 === `0`
0 == `0` // just don't
```

### 8 [Template Strings](basics/8-template-strings.md)
```js
const dev = {name: 'alex'}
const text = `they are named ${dev.name}`
```

### 9 [Promises](basics/9-promises.md)
```js
Promise.resolve(`hey`)
.then(msg => console.log(msg))
.catch(err => console.error(err))
```

## Best Practices

- [Write functional code](goodness/functional-code.md)
- [Use arrow functions](goodness/arrow-functions.md)
- [Write what you mean](goodness/meaningful-code.md)
- [Don't type-check yourself](goodness/dont-type-check-yourself.md)
- [Use tools to check types](goodness/linters-transpilers.md)

## Time Machine
If you need to work with old JS.

- [Strict Mode](oldies/strict-mode.md)
- [Function Scope](oldies/scope.md)
- [`this` Problems](oldies/this.md)

---
https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript
