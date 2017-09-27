# Don't Check Yourself

> > “Whilst not conclusive, the lack of evidence in the charts that more advanced type languages are going to save us from writing bugs is very disturbing.” 
> >
> > Daniel Lebrero, “The Broken Promise of Static Typing”
>
> [Eric Elliott, "The Shocking Secret About Static Types"](https://medium.com/javascript-scene/the-shocking-secret-about-static-types-514d39bf30a3) in Jun 2016

In the absence of compile-time safety, if may be tempting to start error checking your own code.

```js
function sumAll (list) {
  if (list instanceof Array) {
    let sum = 0
    for (let i = 0; i < list.length; i++) {
      if (typeof list[i] !== 'number') {
        throw Error('list contained non-number') // throws
      } else {
        sum += list[i]
      }
    }
    return sum
  } else {
    throw Error('list must be array')
  }
}

try {
  console.log(sumAll([1, 2, '3', 4]))
} catch (err) {
  throw err
}
```

Unless you have specific requirements for this kind of error checking, id est you are writing API code someone else will use, it is probably a waste of time and effort. If you are very familiar with c-like languages, the try-catch is obviously silly, but the type checking in the function should be viewed with a similar scrutiny. If you or your shop owns the code, or even if the code is being used internally/privately in a library, a developer should simply test against the requirements and fix problems as they occur. This kind of runtime error checking on average leads to meaningless exceptions, does not help with debugging, makes code more difficult to read, and adds file size bloat.

Because the author of this snippet owns the function and *all* of its uses, they have essentially written a type checking system that will fail at runtime for a mistake that they wrote statically. The author should seriously consider rewriting the snippet as follows.

```js
function sumAll (list) {
	return list.reduce((sum, value) => sum + value, 0)
}

console.log(sumAll([1, 2, '3', 4])) // '334'
```

And now the developer's test will fall because `'334'` does not equal `10`. But how does a developer figure out what went wrong? They don't throw wasteful errors and they don't insert a million alert/console.log statements either.

The **Right Way ™** to debug this is with a debugger and breakpoints. All browsers have this built in, and you can even wire up Chrome's debugger to Node.js code.

> Take the time to set up a development environment--it pays off in the end.
