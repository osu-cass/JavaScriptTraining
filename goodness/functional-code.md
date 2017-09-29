# Functional Code
Strive to write functions that accept an initial state, and return a new state.

https://hackernoon.com/a-quick-introduction-to-functional-javascript-7e6fe520e7fa

This leads to more easily tested, readable, and terse code.

```js
var practice, benefit, reason = 'code must be sequential';
function explain () {
  console.log(practice + ' is ' + benefit + ' because ' + reason);
}
practice = 'functional programming';
explain(benefit = 'good');
```

The better snippet.

```js
const practice = 'functional programming'
const benefit = 'good'
const reason = 'code must be sequential'
const explain = (p, b, r) => console.log(`${p} is ${b} because ${r}`)
explain(practice, benefit, reason)
```

## Classes
> Just because it is familiar does not mean it is better.

```js
class Foo {
  constructor () {
    this.val = 0
  }
  inc () {
    this.val++
  }
  dec () {
    this.val--
  }
}

const f = new Foo()
f.val
f.inc()
f.val
```

Classes tend to cause anti-patterns in JS, though.

- The aforementioned `this` problem especially shows itself in classes.
- JS is loosely typed and lends to functional code, not object-oriented.
- Most all frameworks for JS save state and you don't need to.
- The performance benefit isn't worth the technical debt and bloat.
- Most of the time, the dev user of your class will not get IntelliSense.
- Tend to lead to articles titled "How to Use Classes and Sleep at Night"
- The creator of JS says you shouldn't use them.

It is often better to simply have functions that accept all of the state they need as parameters. This will also make unit testing easier and better compartmentalize the codebase.

```js
const inc = val => val + 1
const dec = val => val - 1

const initVal = 0;
const nextVal = inc(initVal);
const lastVal = dec(nextVal);
```
