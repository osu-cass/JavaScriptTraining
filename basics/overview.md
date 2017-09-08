# Overview

## Introduction
JavaScript is the [most popular programming language][1] in the world. This is because it's the programming language available in the context of a webpage. Most kinds of dynamic behavior, like changing page content as the user navigates the page or interacts with page elements, is achieved through JavaScript.

The language has some unusual design choices and pitfalls, many of which owe to the fact that it was [originally designed in 10 days by one person][2]. The purpose of this training is to go over the basics of the language, try to program some basic dynamic behavior in a webpage, and to discuss the particular sorts of pitfalls you may encounter as a web application developer.

[1]: https://stackoverflow.com/insights/survey/2017/#technology
[2]: https://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript

## Getting started
The fastest way to get started with JavaScript is to open any page in Google Chrome or your preferred web browser, then hit F12. Click on the Console tab and click on the prompt (marked by a blue > character). You can type JavaScript code in this field, and when you hit enter it'll be evaluated. Try typing some basic expressions.

```js
2 + 2 // type this in...
// 4 the console will spit this back out

true || false
// true

2 + 2 == 4
// true
```

For things that are larger than just temporary experiments, you'll want to create a file with a `.js` extension and reference it using a `<script src="myfile.js"></script>` tag in the bottom of the `<body>` of your HTML document. You can also use the ScratchPad feature in Firefox, or services like [JSFiddle](https://jsfiddle.net/).

## Potential Problems
JavaScript's flexibility is both a boon and bane. Destroy All Software famously made fun of JavaScript in a talk.

```js
[] + [] // ''
{} + [] // 0
[] + {} // '[object Object]'
```

The strangeness continues with examples like `>=`.

```js
0 >= null // true
0 == null // false
0 > null // false
```

When in doubt, you can always find official specification of abstract behaviors. MDN (Mozilla Developer Network) is probably the best resource. For abstract behaviors, look at the ECMA spec.

- `==` http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.4
- `>=` http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3

Understanding how the language is interpreted is a **vital** part of avoiding frustrations.
