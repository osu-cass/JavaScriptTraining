# Modern JavaScript
JavaScript gets **seriously** easier to write and debug in modern versions (2015-ish).

```JavaScript
(() => {
  let nothing
  const idea = 'good'
  console.log(nothing) // undefined
})()

console.log(typeof nothing) // undefined
console.log(typeof idea)    // undefined
```

## `const` and `let`
If your JavaScript environment supports the `const` or `let` keywords (modern browsers, Node.js, TypeScript), you should use them. `const` makes it so a variable can only be assigned to once, at the time it is declared. `let` allows you to assign to the variable later, but it uses "block scoping" instead of "function scoping", which is a good thing.

Also, using `const` tends you towards functional code which is easier to follow and debug. Here is a dramatic example of what I am getting at.

```JavaScript
var practice, benefit, reason = 'code must be sequential';
function explain () {
  console.log(practice + ' is ' + benefit + ' because ' + reason);
}
practice = 'functional programming';
explain(benefit = 'good');
```

```JavaScript
const explain = (p, b, r) => console.log(`${p} is ${b} because ${r}`)
const practice = 'functional programming'
const benefit = 'good'
const reason = 'code must be sequential'
explain(practice, benefit, reason)
```

## Arrow Functions
If your environment supports it (modern browsers, Node.js, TypeScript), `() => {}` is an alternative syntax to `function () {}` which helps in two main ways. Firstly, it's shorter and supports lamda-style return values. The parameter parentheses are also optional for single argument arrow functions. Secondly, it is bound, which is a trick to explain. Basically, it can fix your `this` woes.

```JavaScript
const filterFn = d => d < 3
```

But what does binding do?

```JavaScript
const obj = {
  limit: 3,
  printFiltered () {
    const list = [1, 2, 3]
    const filtered = list.filter(d => d < this.limit)
    console.log(filtered)
  }
}
obj.printFiltered()
```

This ES6 example can be rewritten in as ES5-compliant code.

```JavaScript
var obj = {
  limit: 3,
  printFiltered: function () {
    const list = [1, 2, 3];
    const filtered = list.filter((function (d) {
      return d < this.limit;
    }).bind(this));
    console.log(filtered);
  }
};
obj.printFiltered();
```
