# Arrow Functions
If your environment supports it (modern browsers, Node.js, TypeScript), `() => {}` is an alternative syntax to `function () {}` which helps in two main ways. Firstly, it's shorter and supports lamda-style return values. The parameter parentheses are also optional for single argument arrow functions. Secondly, it is bound, but binding is a trick to explain. Basically, it will fix your `this` woes.

```js
const filterSmall = d => d < 3
```

But what does binding do? Here is some old JS.

```js
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

This ES5-compliant code can be rewritten for ES6.

```js
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
