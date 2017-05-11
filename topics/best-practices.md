# Best Practices
Take these with a grain of salt: I haven't been in the business very long.

<hr>
## Write What You Mean
JavaScript is an extremely flexible language, and often there are countless ways to do a particular thing.

You should strive to write code that is indicative of your intentions (aka. semantic code). Here is an example:

```JavaScript
function doWork (options) {
  if (typeof options === 'object' && typeof options.title !== 'undefined') {
    console.log(`title is ${options.title}`)
  }
}
```

Function arguments are variable declarations: you do not need the safety of `typeof` to test for its existence. Also, all values in JavaScript except `null` and `undefined` are safe to access properties on. The author of this code likely was expecting a non-empty string at `options.title` object, so a shorter, more meaningful snippet might be:

```JavaScript
function doWork (options) {
  if (options && options.title) {
    console.log(`title is ${options.title}`)
  }
}
```

<hr>
## Don't Check Yourself
In the absence of compile-time safety, if may be tempting to start error checking your own code.

```JavaScript
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

Unless you have specific requirements for this kind of error checking (ie. you are writing UI or API code someone else will use), it is probably a waste of time and effort. If you are very familiar with c-like languages, the try-catch is obviously silly, but the type checking in the function should be viewed with a similar scrutiny. If you or your shop owns the code, or even if the code is being used internally/privately in a library, a developer should simply test against the requirements and fix problems as they occur. This kind of runtime error checking on average leads to meaningless failures, does not help with debugging, makes code harder to read, and adds file size bloat.

Because the author of this snippet owns the function and all of its uses, they have essentially written a type checking system that will fail at runtime for a mistake they themself wrote statically. The author should seriously consider rewriting the snippet as:

```JavaScript
function sumAll (list) {
  let sum = 0
  for (let i = 0; i < list.length; i++) sum += list[i]
  return sum
}

console.log(sumAll([1, 2, 3, 4])) // they also fixed their mistake here
```

<hr>
## Check Yourself Here, Not There

If you find that your JavaScript codebase has grown too large to know what heck is going on, the need for compile-time safety is also probably large. There are development tools to help here.

### TypeScript
[TypeScript][ts] is an extension of the ECMAScript spec that adds Microsoft's type checking and IntelliSense (autocomplete while coding). A developer writes `.ts` files that get compiled one for one with `.js` files, and they can even specify which version of ECMAScript the compiled files should work in for Internet Explorer support. There is great support for TypeScript for the most recent versions of [Visual Studio CE or Enterprise][vs], the [Visual Studio Code][vsc] text editor, or even an [Atom][atom] package.

*TypeScript does not combine files into a single file (bundling), and dealing with the type definitions for all the libraries a developer might use can be tricky.*

See also our tutorials on TypeScript and TypeScript+React.

[ts]: https://www.typescriptlang.org/
[vsc]: https://code.visualstudio.com/
[vs]: https://www.typescriptlang.org/#download-links
[atom]: https://atom.io/

### Elm
[Elm][elm] is another language that boasts zero runtime exceptions and competitive web interface performance. It uses a type inference detect problems before they occur and also compiles into JavaScript that can be used like normal.

*Elm is exclusively for web app development, and the language is different enough than JavaScript to give me culture shock.*

[elm]: http://elm-lang.org/

### ESLint
[ESLint][eslint1] is a linter instead of a compiler for a different language. Linters are tools that check your code without altering it for like syntax erros, variable name typos, naming conventions, deprecated language features, etc. ESLint can be used easily from [within Atom][eslint2] and other text editors, or from the command line. See the [*.eslintrc*](../.eslintrc) file in this repository for a recommended configuration that uses Standard for default rules (it will involve installing [npm][eslint3] modules).

*ESLint does support checking types, function signatures, or even whether or not properties exist on objects, but it is a great first resort for happier JavaScript development.*

[eslint1]: http://eslint.org/
[eslint2]: https://atom.io/packages/linter-eslint
[eslint3]: https://www.npmjs.com/
