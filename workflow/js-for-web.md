# JS for Web
If you think that JavaScript is only for websites, it will be helpful going forward to forget that idea altogether.

You can use JavaScript to program robots, write web servers, create video games, and write native desktop and mobile apps. You can even convert C-based native code into WebAssembly and run it in a browser.

If you look across different programming languages, module delivery systems and build tools appeared everywhere very quickly, and JavaScript's recent improvements are huge examples about how developers everywhere have been learning how to better organize code and get it to where it will run.

With this idea in mind, there are many improvements to how JS is written for websites that should be known, especially to developers who are familiar with the 2005-2012 era JavaScript, or maybe even earlier (I hope not).

You'll want to be familiar with HTML and how web browsers work. You can use the [html5-boilerplate](https://github.com/h5bp/html5-boilerplate) to see a relatively complete example for modern page design.

## [The &lt;script&gt; Tag](http://javascript.crockford.com/script.html)
This HTML tag is the way to run JavaScript on a web page, either inline or with another file.

```markup
<script>console.log('hello world')</script>
<script src="index.js" defer></script>
```

## [Document](https://devdocs.io/dom/document)
The global variable `document` is how JavaScript manipulates the contents of a web page.

```js
const messageElement = document.getElementById('message')
messageElement.innerText = 'Hello world, from JS!'
```

## Global Scope
All of the scripts loaded by a web page share the same root scope.

```js
// one.js
const ONE = 1
```

```js
// two.js
// ONE is defined when this file executes
const TWO = 2
```

```markup
<!-- index.html -->
<script src="one.js"></script>
<script src="two.js"></script>
<script> body.innerText = ONE + TWO </script>
```

> When using global variables to communicate between source files like this, it is commonly referred to as **namespaces**.

Namespaces and global variables can overlap, causing difficult to diagnose error that are even more difficult to fix.

Modules and bundling both help organize files together, and lead to clean, maintainable code.
