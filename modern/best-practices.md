# Best Practices
Take these with a grain of salt: I haven't been in the business very long.

---
## Write What You Mean
JavaScript is an extremely flexible language, and often there are countless ways to do a particular thing.

You should strive to write code that is indicative of your intentions (read "semantic code"). Here is an example of unclear code.

```js
function doWork (options) {
  if (typeof options === 'object' && typeof options.title !== 'undefined') {
    console.log(`title is ${options.title}`)
  }
}
```

Function arguments are variable declarations: you do not need the safety of `typeof` to test for its existence. Also, all values in JavaScript except `null` and `undefined` are safe to access properties on. The author of this code likely was expecting a non-empty string at `options.title` object, so a shorter, more meaningful snippet might be:

```js
function doWork (options) {
  if (options && options.title) {
    console.log(`title is ${options.title}`)
  }
}
```

---
## Don't Check Yourself
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

---
## Check Yourself Here, Not There

If you find that your JavaScript codebase has grown too large to know what heck is going on, the need for compile-time safety is also probably large. There are development tools to help here.

### TypeScript
[TypeScript](https://www.typescriptlang.org/) is an extension of the ECMAScript spec that adds Microsoft's type checking and IntelliSense (autocomplete while coding). A developer writes `.ts` files that get compiled one for one with `.js` files, and they can even specify which version of ECMAScript the compiled files should work in for Internet Explorer support. There is great support for TypeScript for the most recent versions of [Visual Studio CE or Enterprise](https://www.typescriptlang.org/#download-links), the [Visual Studio Code](https://code.visualstudio.com/) text editor, or even an [Atom](https://atom.io/) package.

*TypeScript does not combine files into a single file (bundling), and dealing with all of the type definitions for the libraries a developer might use can be tricky/outright not exist.*

See also the CASS SDG tutorials on Advanced JS and TypeScript+React.

```TypeScript
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
```

### Flow
[Flow](https://flow.org/) is a static type checker for JavaScript that uses a syntax that is relatively non-invasive (and somewhat similar to TypeScript).

*Flow will require a build process/bundler to be added to your project, which is bulk above and beyond the ease of use that vanilla JS has.*

```js
// @flow
function square(n: number): number {
  return n * n;
}
```

### Elm
[Elm](http://elm-lang.org/) is a completely separate language that boasts zero runtime exceptions and competitive web interface performance. It uses type inference to detect problems before they occur and also compiles into JavaScript that can be used like normal.

*Elm is for web app development exclusively, and the language is so different from JavaScript that it gave me culture shock.*

```Elm
import Html exposing (text)

main =
  text "Hello, World!"
```

### ESLint
[ESLint](http://eslint.org/) is a linter (instead of a transpiler for a different language). Linters are tools that check your code for syntax errors, variable name typos, naming conventions, deprecated language features, etc. ESLint can be used easily from [within Atom](https://atom.io/packages/linter-eslint) and other text editors, or from the command line. See the [*.eslintrc*](../.eslintrc) file in this repository for a recommended configuration that uses Standard styling (it will involve installing [npm](https://www.npmjs.com/) packages in your project).

*ESLint does not check types, function signatures, or even whether or not properties exist on objects, but it is a great first resort for happier JavaScript development.*
