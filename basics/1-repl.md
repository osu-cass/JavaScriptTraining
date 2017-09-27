# Running JavaScript

## Browser Console
The fastest way to try JavaScript is with a REPL like Node.js or a browser console. Open any page in your preferred web browser, then hit F12. Click on the Console tab and click on the prompt (marked by a blue > character). You can type JavaScript code in this field, and when you hit enter, it will be evaluated. Try typing some basic expressions.

```js
> 2 + 2 // type this in...
// 4 the console will spit this back out

true || false;
// true

2 + 2 == 4
// true

console.log('hello world');
// hello world
// undefined
```

> The semicolon statement terminator is optional in most all places in JS.

## Node.js
Alternatively, you can write a *.js* file and execute it if you have Node.js installed.

```js
// example.js
console.log('hello world')
```

```shell
$ node example.js
```

## Online
Alternatively, these services let you build virtual webpages to show off code or test something small.

- [JSFiddle](https://jsfiddle.net/)
- [repl.it](https://repl.it)
- [JS Bin](https://jsbin.com/)

## Silliness
Destroy All Software famously made fun of JavaScript in a talk.

```js
[] + [] // ''
{} + [] // 0
[] + {} // '[object Object]'
```

The strangeness continues with examples like `>=`.

```js
0 > null  // false
0 == null // false
0 >= null // true
```

When in doubt, you can always find official specification of abstract behaviors. For abstract behaviors, look at the ECMA spec.

- `==` http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.4
- `>=` http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3

Understanding how the language is interpreted is a **vital** part of avoiding frustrations.
