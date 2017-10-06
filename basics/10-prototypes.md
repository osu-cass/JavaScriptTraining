# Prototypal Inheritance

- [A Plain English Guide to JavaScript Prototypes](https://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/)
- [Classical Inheritance in JavaScript](http://javascript.crockford.com/inheritance.html)

All objects have prototypes, which describe where to look for properties.

```js
const dev = {type: 'dev'}
dev.type
```

This creates an object with a property called `type`. What if you want to make a lot of objects that all share the `type` property?

```js
const alex = {name: 'alex'}
alex.__proto__ = dev
alex.type
```

That `__proto__` property is only in new versions of JavaScript. The `class` keyword also makes declaring this kind of inheritance easy.

The older way is to use the Object global.

```js
const morgan = Object.create(dev, {name: 'morgan'})
morgan.type
```


## Constructor Functions

```js
function Foo() {}

const foo = new Foo()

foo instanceof Foo
```
